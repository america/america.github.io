---
title: "pavucontrolが起動しない。追ったら、WirePlumberのLuaバグの奥にUSBの通信エラーがあった"
date: 2026-10-04T00:00:00+09:00
draft: false
description: "pavucontrol（PulseAudioの音量調整アプリ）が「pa_context_get_card_info_by_index() 失敗: Invalid argument」で起動しなくなった。journalctl→WirePlumberのソース（alsa.lua）→カーネルのUSBログ、と潜った記録。"
tags:
  - pipewire
  - usb
  - debugging
  - arch-linux
cover:
  image: "cover.png"
---

音量を調整しようとpavucontrolを開いたら、こう言われた。

```
pa_context_get_card_info_by_index() 失敗: Invalid argument
```

それだけ。開かない。

環境はArch Linux、sway、PipeWire 1.6.8、WirePlumber 0.5.16。よくある「PulseAudio互換レイヤーが機嫌を損ねた」系の話に見えたが、実際に追ってみたら、思ったより下の層まで潜る羽目になった。

---

## まず journalctl

`systemctl --user status pipewire pipewire-pulse wireplumber` でログを見ると、pipewireとwireplumberが3〜5秒おきに同じエラーを吐き続けていた。しかも調査してる最中もリアルタイムで進行中。

```
pipewire: spa.alsa: 'front:0': capture open failed: デバイスもしくはリソースがビジー状態です
pipewire: pw.node: (alsa_input.usb-Kingston_HyperX_Quadcast_4110-00.analog-stereo-94) suspended -> error (Start error: デバイスもしくはリソースがビジー状態です)
wireplumber: s-monitors: Failed to create ALSA node alsa_input.usb-Kingston_HyperX_Quadcast_4110-00.analog-stereo: Object activation aborted: PipeWire proxy destroyed
wireplumber: wplua: [string "alsa.lua"]:446: attempt to call a nil value (method 'store_managed_pending')
```

犯人らしきデバイス名が出ている。USBマイク（Kingston HyperX Quadcast）だ。

`fuser -v /dev/snd/*` で確認したが、掴んでいるのはwireplumber/pipewire自身だけ。Discordや他のアプリがマイクを横取りしているわけではなかった。PipeWireの中だけで完結して壊れている。

---

## エラーメッセージに「Lua」と書いてある

ログをよく見ると `wplua: [string "alsa.lua"]:446` とある。C言語のデーモンのはずなのに、なぜLuaのエラーが出てくるのか。

WirePlumber本体（デーモンのコア部分）はC（GLib/GObject）で書かれている。ただし、ALSA・Bluetooth・カメラなどのデバイスをどう扱うか、というポリシー寄りのロジックは `.lua` スクリプトとして外に出されている。`/usr/share/wireplumber/scripts/monitors/alsa.lua` が、まさにそれだ。

これは意図的な設計変更の結果。WirePlumberの前身にあたる `pipewire-media-session` は、この手のロジックも含めて全部Cで固定実装されていた。WirePlumberは、そこをLuaスクリプト化することで、**デーモン本体を再コンパイルせずに、デバイスの扱い方やポリシーをカスタマイズできる**ようにした。`parent:store_managed_pending()` のようなメソッドは、C側で実装された関数を、Luaから呼べるようにバインディングしたものだ。

つまり今回のバグは、WirePlumberの中の「Cで書かれた堅い部分」と「Luaで書かれた柔らかい部分」の境界で起きている。C側のオブジェクトの生死（プロキシが破棄されたかどうか）を、非同期コールバックの中のLuaコードが正しく把握できていなかった、という話になる。

---

## ソースを読む

`wplua: [string "alsa.lua"]:446` という行番号まで出ているので、実際のファイルを読みに行く。

```
/usr/share/wireplumber/scripts/monitors/alsa.lua
```

446行目はここだった。

```lua
-- create the node
local node = Node("adapter", properties)
parent:set_managed_pending(id)
node:activate(Features.ALL, function (n, err)
    if err then
      log:warning ("Failed to create ALSA node " ..
          tostring (properties["node.name"]) .. ": " .. tostring(err))
      parent:store_managed_pending(id, nil)   -- ← ここ
    else
      monitorNodeError (n)
      parent:store_managed_object(id, n)
    end
end)
```

`node:activate()` は非同期処理で、完了したときにコールバックが呼ばれる。今回のように内部のALSAデバイスが「ビジー」で失敗すると（`err`が立つ）、後片付けとして `parent:store_managed_pending(id, nil)` を呼ぶ設計になっている。

最初は「`parent`が非同期の途中で破棄されて、無効なオブジェクトになっているのでは」と当たりをつけた。だが、それだけでは説明がつかない部分があった。`Node`や`Device`のクラス定義自体がLua側に無く、全部C側のオブジェクトをバインディングしたものだ。「オブジェクトが破棄されてメソッドが消える」という挙動は、WirePlumberのLuaバインディングの作りからすると、ちょっと不自然に思えた。

気になったので、WirePlumberのGitリポジトリをクローンして、Lua↔Cの境界を直接見に行くことにした。

```bash
git clone --depth 1 --branch 0.5.16 \
  https://gitlab.freedesktop.org/pipewire/wireplumber.git
```

`parent`（`WpSpaDevice`のLuaラッパー）にどんなメソッドがバインドされているか、Cの登録テーブルを見る。

```c
// modules/module-lua-scripting/api/api.c
static const luaL_Reg spa_device_methods[] = {
  { "iterate_params", spa_device_iterate_params },
  { "set_param", spa_device_set_param },
  { "iterate_managed_objects", spa_device_iterate_managed_objects },
  { "get_managed_object", spa_device_get_managed_object },
  { "store_managed_object", spa_device_store_managed_object },
  { "set_managed_pending", spa_device_set_managed_pending },
  { NULL, NULL }
};
```

`store_managed_object` と `set_managed_pending` はある。**`store_managed_pending` という名前のメソッドは、どこにも登録されていない。**

念のため、リポジトリ全体の履歴を `git log --all -S "store_managed_pending" -- '*.c' '*.h'` で検索した。ヒットはゼロ。**このメソッドは、C側に一度も存在したことがない。**

つまり `parent:store_managed_pending(id, nil)` は、最初から存在しない名前を呼んでいる。オブジェクトが生きているか死んでいるかに関係なく、このコードパスを通れば必ず `nil` 呼び出しでクラッシュする。レースコンディションというより、ただのタイポに近い。

`git blame` で、この行がいつ入ったかを追った。

```
e923c93a Julian Bouzas 2026-08-25  alsa: Always activate all device and node features
```

commitメッセージ：

> alsa: Always activate all device and node features
>
> Also avoid using the param node properties when logging warning if device or node
> failed to activate, because the properties might be NULL if the node or device
> was destroyed before finishing activation.
>
> See #996

皮肉なことに、**このコミット自体が「デバイス/ノードが活性化完了前に破棄されるとNULL参照でクラッシュする」という、私が最初に疑った方向のバグを直すためのもの**だった（アップストリームのissue #996）。実際の差分がこれ。

```diff
   -- create the node
   local node = Node("adapter", properties)
   parent:set_managed_pending(id)
-  node:activate(Feature.Proxy.BOUND, function (n, err)
+  node:activate(Features.ALL, function (n, err)
       if err then
         log:warning ("Failed to create ALSA node " ..
-            n:get_property ("node.name") .. ": " .. tostring(err))
+            tostring (properties["node.name"]) .. ": " .. tostring(err))
+        parent:store_managed_pending(id, nil)
       else
         monitorNodeError (n)
         parent:store_managed_object(id, n)
       end
   end)
```

`n:get_property("node.name")` （`n`がNULLだと即クラッシュする）を `tostring(properties["node.name"])` に変えたのは正しい修正。だが、そのついでに追加された後片付け処理`parent:store_managed_pending(id, nil)`が、存在しないメソッド名になっている。本来は、同じファイルの他の場所（461行目、621行目、627行目）で実際に使われている `store_managed_object(id, nil)` を呼ぶべきところだったはずだ。C側の実装にも、そのものずばりのドキュメントコメントがある。

```c
/*
 * \param self the spa device
 * \param id the (device-internal) id of the object
 * \param object (transfer full) (nullable): the object to store or NULL to remove
 *   the managed object associated with \a id
 */
void
wp_spa_device_store_managed_object (WpSpaDevice * self, guint id,
    GObject * object)
```

`object`に`NULL`を渡せば、そのidに紐づく管理対象オブジェクトを削除する——まさに今回のエラーハンドリングがやりたかったことと一致する。1文字も違わない机上の正しい関数が、すぐ近くに用意されていた。

つまり今回のバグの正体は、**「デバイスが活性化完了前に壊れる」という本物のバグを直そうとした2026-08-25のコミットが、後片付けコードで `store_managed_object` と書くべきところを `store_managed_pending` と書き間違えた**、という話だった。Luaは動的型付けで、存在しないメソッドを呼んでもコンパイル時には何も言ってくれない。実際にエラー経路（USBデバイスのビジー状態）を通るまで、この1行は誰にも気づかれずに眠っていたことになる。

### もう直ってた

ここまで調べたら、GitLabにissueを立てる準備をするところだった。念のため、WirePlumberの最新の履歴を見てから、と思って `git log --all -S "store_managed_pending"` をもう一度、タグ指定なしで実行した。

```
f9891d25 alsa: Use store_managed_object() to remove pending Ids
e923c93a alsa: Always activate all device and node features
```

ヒットが2件に増えている。`f9891d25` のコミットメッセージ：

> alsa: Use store_managed_object() to remove pending Ids
>
> This fixes a typo as store_managed_pending() does not exist.
>
> See #999

一言一句、こちらが独立に辿り着いた結論と同じことが書いてある。**2026-09-01、バグを入れた本人(Julian Bouzas)が、自分で1週間後に直していた。** 参照issueはバグ混入時の#996とは別の#999——誰か他のユーザーが同じ症状を踏んで報告したのだろう。差分はこちら。

```diff
       if err then
         log:warning ("Failed to create ALSA node " ..
             tostring (properties["node.name"]) .. ": " .. tostring(err))
-        parent:store_managed_pending(id, nil)
+        parent:store_managed_object(id, nil)
       else
```

このコミットは `0.5.17` ・ `0.5.18` に含まれている。手元の環境は `0.5.16`。**つまりやるべきことは、GitLabにissueを立てることではなく、ただパッケージを更新することだった。**

ここまで4段階潜って、ソースをcloneしてgit blameで犯人のコミットまで特定して、満を持してissue報告の下書きを始めようとした矢先に、「もう直ってるよ」というオチがついた。悪い話ではない。直ってることを確認せずにissueを立てていたら、それこそ格好悪かった。

このLuaエラーが起きるたびに、そのカード（今回はUSBマイクのカード）のPipeWire内部状態が中途半端に壊れたまま残る。pavucontrolが全カードの情報を列挙しようとしたとき、この壊れたカードの問い合わせで `pa_context_get_card_info_by_index()` が `Invalid argument` を返して落ちる、という流れだと考えられる。

---

## でも、なぜ「ビジー」になるのか

ここまでで「WirePlumberのバグ」は特定できたが、それはあくまで結果だ。なぜそもそもALSAデバイスが繰り返しビジーになるのかが分かっていない。

カーネルログ（`journalctl -k`）を見て、話が変わった。

```
usb 3-1: new full-speed USB device number 23 using xhci_hcd
usb 3-1: Device not responding to setup address.
usb 3-1: Device not responding to setup address.
usb 3-1: device not accepting address 23, error -71
usb 3-1: WARN: invalid context state for evaluate context command.
usb 3-1: USB disconnect, device number 23
usb 3-1: new full-speed USB device number 24 using xhci_hcd
usb 3-1: device descriptor read/64, error -71
...
```

このサイクルが、USBマイクを挿しているポート（`usb 3-1`）で何度も繰り返されていた。`error -71` はLinuxカーネルでは `EPROTO`（プロトコルエラー）。USBデバイスが列挙（enumeration）の途中で応答しなくなり、ホスト側がデバイス番号を振り直して再試行しては、また失敗する。

つまり、**「WirePlumberがALSAデバイスを掴もうとして失敗する」のは結果であって、その手前でUSBデバイス自体がカーネルレベルで不安定になっていた**、というのが実態だった。

---

## ハブでも電源管理でもなかった

最初に疑ったのは、今日たまたま別件（キーボードの話）で原因になっていたUSBハブだった。`lsusb -t` で確認したが、このマイクは外部ハブを経由せず、ホストコントローラーのルートポートに直結されていた。別系統の話だ。

電源管理も見た。

```
/sys/bus/usb/devices/3-1/power/control → on（autosuspend無効）
/sys/bus/usb/devices/3-1/bMaxPower → 100mA
```

autosuspendは無効（常時on）、デバイス自体が申告している消費電力も100mAと低め。電力不足や省電力機能の暴走、という線は薄い。

---

## チップセットまで下りる

```
$ lspci -k
09:00.3 USB controller: AMD Matisse USB 3.0 Host Controller
```

AMD Matisse（Ryzen 3000番台世代）のUSB 3.0ホストコントローラー、ASRock製マザーボード。

同じ「device not accepting address, error -71」を検索すると、ASRock B550（同じくAMDチップセット）のマザーボードで、別のUSBデバイス（マウス）との組み合わせで報告されているフォーラムスレッドが見つかった。ただしそのスレッドでも決定的な原因・解決には至っておらず、最終的にはそのデバイスを返品していた。

AMD系チップセットのxHCIコントローラーと、特定のUSB周辺機器の組み合わせで、たまに起きる原因不明の相性問題——というのが、現時点で言える一番正直なところだ。

---

## まとめ

- アプリ層の症状（pavucontrolが起動しない）から、WirePlumberのソースコード（存在しないLuaメソッド呼び出し）、カーネルのUSBログ（`error -71`、デバイスの列挙失敗）まで、4段階くらい潜った。
- WirePlumberのバグは実在した。しかも原因はレースコンディションのような曖昧なものではなく、**2026-08-25のコミット(`e923c93a`)で、`store_managed_object`と書くべき箇所を`store_managed_pending`と書き間違えた、単純なタイポ**だった。Luaの動的型付けのせいで、エラー経路を実際に通るまで誰にも気づかれなかった。
- **このタイポは、2026-09-01のコミット(`f9891d25`)で、バグを入れた本人が自分で修正済み。** `0.5.17`・`0.5.18`に入っている。手元の`0.5.16`が、ちょうど直る1つ前のバージョンだった。
- 根本原因（なぜUSBが一時的に応答しなくなるのか）は、AMD MatisseのxHCIコントローラーとこのUSBマイクの相性問題の可能性が高いが、完全には特定できていない。ここはWirePlumberの更新では直らない。
- 今すぐの対処は2つ。WirePlumberを`0.5.17`以降に更新する（根本のLuaバグはこれで消える）。その上でUSBがまだ不安定なら `systemctl --user restart wireplumber` で都度しのぐ、USBマイクの抜き差し・別ポートへの差し替えも試す価値がある。

ソフトウェアのバグを追いかけていたら、最後はハードウェアの相性問題に行き着いた。よくある話だが、journalctlとソースコードとカーネルログを順番に読んでいくと、どこで何が起きているかは、ちゃんと言葉で説明できる形で残っている。
