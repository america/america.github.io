---
title: "Street Fighter 6 (Proton) で日本語入力ができない原因を追いつめた記録"
date: 2026-08-06T20:30:00+09:00
draft: false
categories: ["Linux", "トラブルシュート"]
tags: ["Arch Linux", "Proton", "Wine", "Steam", "Street Fighter 6", "fcitx5", "Mozc", "IME", "Waydroid"]
---

## 症状

夜、Street Fighter 6のカスタムルームに集まって喋りながら対戦する。チャット欄に一言送ろうとして
`Ctrl+Space`(fcitx5のトリガーキー)を叩いた。ローマ字のまま。もう一度。変わらない。三度目、
さすがに苛立って原因を追うことにした。

症状はシンプルだった。fcitx5のトリガーキーである`Ctrl+Space`を、Street Fighter 6のウィンドウの
中で押しても、日本語入力(Mozc)に切り替わらない。

### 環境

| 項目 | 値 |
|---|---|
| OS | Arch Linux |
| WM | Sway (swayfx) |
| IME | fcitx5 + fcitx5-mozc |
| ゲーム | Street Fighter 6 (Steam, AppID 1364780) |
| Proton | Proton Experimental → GE-Proton11-3 |

---

## Round 1: コンポジタは無罪

まず疑ったのは手元のWaylandコンポジタ、Sway。`Ctrl+Space`がSway側のグローバルショートカットに
奪われていて、アプリまで届いていないのでは、という線を洗った。

キーバインド一式を見たが、該当する`bindsym`は存在しなかった。`GTK_IM_MODULE`、
`QT_IM_MODULE`、`XMODIFIERS`といった入力メソッド関連の環境変数も、`environment.d`で正しく
設定されておりsystemdのユーザー環境にも反映済み。fcitx5側の設定を見ても、トリガーキーは
`Control+space`のまま、XIMアドオンも無効化されていない。

ここまでで「設定ミス」の線は消えた。舞台はProton側に移る。

## Round 2: Protonが意図的にXIMを無効化していた

検索の末たどり着いたのは、[Proton公式リポジトリのIssue](https://github.com/ValveSoftware/Proton/issues/3641)だった。曰く

> XIM is disabled for working around a X11 issue

古い`libX11`のクラッシュを避けるため、Valve配布の公式Protonはビルド時にXIMサポートを
意図的に無効化している。fcitx5はXIM経由でWineアプリと会話するので、そもそも土俵に上がる前に
閉め出されていたことになる。

[別のIssue](https://github.com/ValveSoftware/Proton/issues/3528#issuecomment-589828273)には
回避策も書かれていた。Wineのレジストリに以下のキーを追加すれば、XIMを強制的に再有効化できるという。

```
[HKCU\Software\Wine\X11 Driver]
"UseXIM"="y"
```

## Round 3: レジストリ書き換え、通ったはずだった

Street Fighter 6のWine prefixに対して、Proton付属のwineバイナリで直接このキーを書き込んだ。

```bash
WINEPREFIX="<compatdataのpfx>" \
"<Protonのパス>/files/bin/wine" reg add \
  "HKCU\Software\Wine\X11 Driver" /v UseXIM /t REG_SZ /d y /f
```

`reg query`で確認すると、確かに値は書き込まれている。`user.reg`を直接覗いても
`UseXIM="y"`がしっかり刻まれていた。設定は通った。あとはゲームを起動するだけ。

結果、**何も変わらなかった。**

## Round 4: 容疑者を丸裸にする

ここでSF6を疑うか、Wineそのものを疑うか、切り分けが必要になった。同じprefixの中で
`notepad.exe`を起動し、デバッグログを吐かせながら同じ操作を試す。

```bash
WINEDEBUG=+xim,+ime,+imm wine notepad
```

メモ帳でも、症状はまったく同じだった。Street Fighter 6固有の不具合ではない。

ログを追うと、奇妙な光景が見えてきた。

```
03f8:trace:xim:xic_create xim 0x..., hwnd 0x300c6
03f8:trace:xim:xic_create created XIC 0x55555d42c140
```

XIC、つまりX Input Contextはちゃんと作られている。fcitx5との接続自体は確立できている。
ところが、実際に`Ctrl`と`Space`を押した瞬間のログには、`xim`系のチャンネルの出力が
一切現れない。代わりに動いていたのは`imm`系のログだけだった。

```
03f8:trace:imm:ImeProcessKey himc 0x..., vkey 0x20
03f8:trace:imm:ime_driver_call processing vkey 0x20, scan 0x39 -> 0
```

戻り値の`0`は「このキーはIMEで処理しませんでした」という意味だ。Wine自身が実装した
新しいIME処理ロジックが、キーを一度受け取った上で「知らん」と判断し、そのままアプリに
素通りさせていた。XIMサーバーへの接続は生きているのに、キー入力そのものがそこに届いていない。

これでは、fcitx5側のトリガーキーをどう設定しようと、呼び出しようがない。

## Round 5: 外から無理やり殴ってみる

fcitx5には`fcitx5-remote`という外部コマンドがある。DBus経由でIMEの状態を強制的に
トグルできる代物だ。XIMのキー処理を経由しないなら、これで直接殴りつければワンチャンあるのでは、
と試してみた。

```bash
fcitx5-remote -t
```

状態は確かにトグルされた。だがWineアプリ側のテキスト合成には、何一つ反映されなかった。
fcitx5自身のグローバルな状態と、Wineアプリが持つ入力コンテキストへの反映は、
まったく別の話だったということだ。

## Round 6: 増援、GE-Proton

最後に疑ったのは、Valve公式ビルド固有の問題という可能性だった。コミュニティ版の
[GE-Proton](https://github.com/GloriousEggroll/proton-ge-custom)を導入し、まったく同じ
prefix、まったく同じ手順で再検証する。

結果は寸分違わず同じだった。notepadで`Ctrl+Space`を押しても、`xim`系のログは沈黙したまま。

公式ビルドとコミュニティビルド、双方で同一の症状が出たということは、これはパッチの
有無の問題ではない。現行のWine本体が持つ、IME実装そのものの構造的な限界だ。

## 結論: 引き分け

原因は完全に特定できた。だが、直せなかった。

Proton公式ビルドは意図的にXIMを無効化しているが、レジストリで再有効化しても、Wine新世代の
IME実装がキー入力をXIMサーバーまで橋渡ししていないため効果がない。これはStreet Fighter 6
固有のバグではなく、Wine/Proton全体に共通する構造的な制約だ。Windowsネイティブ環境であれば、
そもそも翻訳レイヤーを挟まずWindows自体のIME基盤を直接使うので、この問題自体が発生しない
はずだ(筆者の環境では未検証、推測にとどまる)。

## 実用上の回避策

Wineアプリ内での直接入力は諦めて、クリップボード経由の貼り付けに切り替える。クリップボードの
同期はIME/XIMの仕組みから独立しているため、ここだけは問題なく動く。

1. 別のアプリでMozcを使って日本語を入力する
2. コピーする
3. Street Fighter 6のウィンドウに戻り、チャット欄で `Ctrl+V`

筆者はスマートフォンを使いたくない主義なので、代わりにWaydroidの中で動かしているPS Appと
Gboardを使っている。Waydroid内で日本語を打ってコピーし、ホスト側に`Ctrl+V`で貼り付ける。
この経路はすでに動作を確認済みだ。ちなみにGboard内の言語切り替えは、`Ctrl+Space`ではなく
`Shift+Space`だった。理由はまだわかっていない。

## 戦績表

{{< SF6MozcInvestigation >}}

Wineアプリ内でのIME直接入力は、少なくとも現時点のWine本体の実装では機能しない。
今後のアップデートで直る可能性はあるが、今のところユーザー側の設定でどうにかできる
領域を超えている。原因を突き止めて、直せないと認めて、回避策で運用する。地味だが、
それが今回の結論だ。
