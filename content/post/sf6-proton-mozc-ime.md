---
title: "Street Fighter 6 (Proton) で日本語入力ができない問題は /etc/environment のIME環境変数で解決した"
date: 2026-08-06T20:30:00+09:00
lastmod: 2026-08-08T00:00:00+09:00
draft: false
description: "SF6のチャット欄でCtrl+Spaceが効かない問題を、Proton/WineのIME実装の制約だと結論づけたが、それは誤りだった。/etc/environment にIME環境変数を設定したところ直接入力が動作するようになった。当時の調査記録と、訂正までの経緯。"
categories: ["Linux", "トラブルシュート"]
tags: ["Arch Linux", "Proton", "Wine", "Steam", "Street Fighter 6", "fcitx5", "Mozc", "IME", "Waydroid"]
---

> **訂正 (2026-08-08)**
>
> この記事の当初の結論「ユーザー側の設定では解消できない」は **誤りでした**。
> `/etc/environment` にIME環境変数を設定することで、`Ctrl+Space` での直接入力が動作するようになりました。
> 結論だけ必要な方は [追記: 解決した](#追記-2026-08-08-解決した) へ。
>
> 以下の調査記録は、当時どう考えて誤った結論に至ったかの記録として、そのまま残します。

## 事象

Street Fighter 6のチャット欄で`Ctrl+Space`(fcitx5のトリガーキー)を押しても、日本語入力(Mozc)に
切り替わらない。ローマ字のまま反応しない。

| 項目 | 値 |
|---|---|
| OS | Arch Linux |
| WM | Sway (swayfx) |
| IME | fcitx5 + fcitx5-mozc |
| ゲーム | Street Fighter 6 (Steam, AppID 1364780) |
| Proton | Proton Experimental / GE-Proton11-3 |

## 当時の結論(誤り)

Proton公式ビルドは意図的にXIMを無効化しており、加えてWineの新しいIME実装がキー入力を
XIMサーバーまで橋渡ししていない。この二つが重なっているため、レジストリでXIMを
再有効化しても効果が出ない。Street Fighter 6固有の不具合ではなく、Wine/Proton全体に
共通する構造的な制約であり、ユーザー側の設定では解消できない。

**——これが誤りだった。** 実際には環境変数がゲームの起動経路まで届いていなかっただけの可能性が高い。
詳細は[末尾の追記](#追記-2026-08-08-解決した)を参照。

## 当時の根拠

以下は2026-08-06時点で実際に観測した内容。**観測自体は正しいが、そこから導いた結論が誤っていた。**

**Sway/fcitx5の設定は正常** — `Ctrl+Space`に該当する`bindsym`はなし、`GTK_IM_MODULE`/
`QT_IM_MODULE`/`XMODIFIERS`は`environment.d`で正しく設定済み、fcitx5のトリガーキーも
`Control+space`のままでXIMアドオンも無効化されていない。

> 後から振り返ると、**ここが見落としの核心だった。** 「`environment.d`で設定済み」であることは確認したが、
> *その変数がSteam経由で起動されるゲームプロセスまで届いているか* は確認していなかった。

**Protonは意図的にXIMを無効化している** — [Proton公式リポジトリのIssue](https://github.com/ValveSoftware/Proton/issues/3641)に記載がある。

> XIM is disabled for working around a X11 issue

古い`libX11`のクラッシュを避けるため、Valve配布の公式Protonはビルド時にXIMサポートを
無効化している。fcitx5はXIM経由でWineアプリと通信するため、この時点で経路が断たれる。

**レジストリでの再有効化は効果なし** — [別のIssue](https://github.com/ValveSoftware/Proton/issues/3528#issuecomment-589828273)にある回避策として、Wineのレジストリに次のキーを追加すればXIMを強制的に再有効化できるとされている。

```
[HKCU\Software\Wine\X11 Driver]
"UseXIM"="y"
```

```bash
WINEPREFIX="<compatdataのpfx>" \
"<Protonのパス>/files/bin/wine" reg add \
  "HKCU\Software\Wine\X11 Driver" /v UseXIM /t REG_SZ /d y /f
```

`reg query`・`user.reg`の両方で`UseXIM="y"`の書き込みは確認できるが、挙動は変わらない。

**WINEDEBUGのログがキー入力の経路を示している** — 同じprefixで`notepad.exe`を起動し、SF6固有の
問題かどうかを切り分けた。

```bash
WINEDEBUG=+xim,+ime,+imm wine notepad
```

notepadでも症状は同じで、SF6固有のバグではないと確認できる。ログでは`xic_create`は成功して
XICが生成されている(fcitx5との接続自体は確立している)。

```
03f8:trace:xim:xic_create xim 0x..., hwnd 0x300c6
03f8:trace:xim:xic_create created XIC 0x55555d42c140
```

ところが`Ctrl+Space`を押した瞬間のログに`xim`系の出力は現れず、`imm`系だけが動く。

```
03f8:trace:imm:ImeProcessKey himc 0x..., vkey 0x20
03f8:trace:imm:ime_driver_call processing vkey 0x20, scan 0x39 -> 0
```

戻り値`0`は「このキーはIMEで処理しなかった」という意味で、Wineの新しいIME処理ロジックが
キーを受け取った上で処理せずアプリへ素通りさせている。XIMサーバーへの接続は生きているのに、
キー入力そのものがそこまで届かない。レジストリでUseXIMを有効化しても効果がなかったのはこのためだ。

> **この検証には落とし穴があった。** `wine notepad.exe`は対話シェルから手動で起動しているため、
> シェルの環境変数(`~/.zshrc`等で設定されたIME関連変数)が乗った状態で動いている。
> 一方、実際のゲームはSteam経由で起動される。**テスト環境と本番環境が違っていた。**

**fcitx5-remoteでの強制トグルも反映されない** — `fcitx5-remote -t`でDBus経由でIME状態を
直接トグルしても、fcitx5自体の状態は変わるがWineアプリ側の入力コンテキストには反映されない。
XIMのキー処理を経由しない限り、外部からの強制トグルは意味を持たない。

**GE-Protonでも同一症状** — [GE-Proton](https://github.com/GloriousEggroll/proton-ge-custom)で
同じprefix・同じ手順を再検証しても結果は同じで、notepadで`Ctrl+Space`を押しても`xim`系ログは
沈黙したまま。公式・コミュニティ両ビルドで同一の症状が出るため、特定パッチの有無ではなく
Wine本体のIME実装が持つ構造的な制約と判断できる。

Windowsネイティブ環境なら翻訳レイヤーを挟まずWindows自体のIME基盤を直接使うため、
この問題自体が発生しないはずだ(筆者の環境では未検証、推測にとどまる)。

## 当時の回避策: クリップボード経由の貼り付け

> この節は当時の運用の記録。**現在は不要になった。**

Wineアプリ内での直接入力は諦め、クリップボード経由に切り替える。クリップボードの同期は
IME/XIMの仕組みから独立しているため、ここだけは問題なく動く。

1. 別のアプリでMozcを使って日本語を入力する
2. コピーする
3. Street Fighter 6のウィンドウに戻り、チャット欄で`Ctrl+V`

筆者はWaydroid上のPS AppとGboardをこの用途に使っている。Waydroid内で日本語を打ってコピーし、
ホスト側に`Ctrl+V`で貼り付ける経路はすでに動作を確認済み。ちなみにGboard内の言語切り替えは
`Ctrl+Space`ではなく`Shift+Space`だった。理由はまだわかっていない。

## 追記 (2026-08-08): 解決した

`/etc/environment` に以下を追記したところ、**`Ctrl+Space`での直接入力が動作するようになった。**

```
GTK_IM_MODULE=fcitx
QT_IM_MODULE=fcitx
XMODIFIERS=@im=fcitx
SDL_IM_MODULE=fcitx
```

もともとはSteam本体(ネイティブ版)で`Ctrl+Space`が効かない別件を調べていて見つけた設定だが、
適用後にSF6のカスタムルームチャットでも同時に直った。Waydroid+Gboardのクリップボード運用は
不要になった。

### なぜ直ったのか(仮説・未検証)

**ここから先は確認できていない推測である。** 直ったという事実は確かだが、その理由は検証していない。

`~/.config/environment.d/` と `~/.xprofile` には以前からIME関連の環境変数を設定していた。
それにもかかわらず直らなかったということは、**それらの経路ではSteamがゲームを起動する
プロセスまで変数が届いていなかった**可能性がある。

Steamはゲームを Steam Linux Runtime (pressure-vessel) のサンドボックス内で起動する。
これは対話シェルとも、通常のデスクトップセッションとも、環境変数の引き継ぎ方が異なる。

一方 `/etc/environment` はPAM経由で**ログイン時、Swayが起動するよりも前**に読み込まれる。
そのため、セッション内で起動される全プロセス — Sway、Steam本体、Steamがサンドボックス
越しに起動するWineプロセス — まで確実に伝わる。

これが正しければ、上で書いた「Wine実装自体の構造的な制約」という結論は誤りで、
実際には**環境変数がゲームの起動経路まで届いていなかっただけ**ということになる。
`wine notepad.exe`でXICの作成に成功していたのも、あれが対話シェルから起動されていて
シェル側の環境変数が乗っていたためだと考えると辻褄が合う。

ただし、環境変数を意図的に外して再現させるといった切り分けはしていない。**仮説にとどまる。**

### 教訓

同じ症状で調べている人向けに、この失敗から言えることを書いておく。

- **「設定ファイルに書いてある」と「そのプロセスに届いている」は別の話。** 環境変数の問題を疑うときは、
  設定ファイルを読むのではなく、実際に対象プロセスの環境を見る(`cat /proc/<pid>/environ | tr '\0' '\n'`)。
- **手動起動したテストアプリは、本番と同じ環境で動いていない可能性がある。** 特にSteam/Flatpak/Snapのような
  サンドボックスを挟む起動経路では、対話シェルからの手動テストは再現になっていないことがある。
- 上流のIssueに「既知の制約」と書いてあると、そこで思考が止まりやすい。**Issueの記述が自分の症状の
  原因である保証はない。**

## 調査の経緯

{{< SF6MozcInvestigation >}}
