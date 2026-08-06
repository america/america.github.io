---
title: "Street Fighter 6 (Proton) で日本語入力ができない原因は Wine の IME 実装にあった"
date: 2026-08-06T20:30:00+09:00
draft: false
categories: ["Linux", "トラブルシュート"]
tags: ["Arch Linux", "Proton", "Wine", "Steam", "Street Fighter 6", "fcitx5", "Mozc", "IME", "Waydroid"]
---

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

## 原因

Proton公式ビルドは意図的にXIMを無効化しており、加えてWineの新しいIME実装がキー入力を
XIMサーバーまで橋渡ししていない。この二つが重なっているため、レジストリでXIMを
再有効化しても効果が出ない。Street Fighter 6固有の不具合ではなく、Wine/Proton全体に
共通する構造的な制約であり、ユーザー側の設定では解消できない。

## 根拠

**Sway/fcitx5の設定は正常** — `Ctrl+Space`に該当する`bindsym`はなし、`GTK_IM_MODULE`/
`QT_IM_MODULE`/`XMODIFIERS`は`environment.d`で正しく設定済み、fcitx5のトリガーキーも
`Control+space`のままでXIMアドオンも無効化されていない。

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

**fcitx5-remoteでの強制トグルも反映されない** — `fcitx5-remote -t`でDBus経由でIME状態を
直接トグルしても、fcitx5自体の状態は変わるがWineアプリ側の入力コンテキストには反映されない。
XIMのキー処理を経由しない限り、外部からの強制トグルは意味を持たない。

**GE-Protonでも同一症状** — [GE-Proton](https://github.com/GloriousEggroll/proton-ge-custom)で
同じprefix・同じ手順を再検証しても結果は同じで、notepadで`Ctrl+Space`を押しても`xim`系ログは
沈黙したまま。公式・コミュニティ両ビルドで同一の症状が出るため、特定パッチの有無ではなく
Wine本体のIME実装が持つ構造的な制約と判断できる。

Windowsネイティブ環境なら翻訳レイヤーを挟まずWindows自体のIME基盤を直接使うため、
この問題自体が発生しないはずだ(筆者の環境では未検証、推測にとどまる)。

## 回避策: クリップボード経由の貼り付け

Wineアプリ内での直接入力は諦め、クリップボード経由に切り替える。クリップボードの同期は
IME/XIMの仕組みから独立しているため、ここだけは問題なく動く。

1. 別のアプリでMozcを使って日本語を入力する
2. コピーする
3. Street Fighter 6のウィンドウに戻り、チャット欄で`Ctrl+V`

筆者はWaydroid上のPS AppとGboardをこの用途に使っている。Waydroid内で日本語を打ってコピーし、
ホスト側に`Ctrl+V`で貼り付ける経路はすでに動作を確認済み。ちなみにGboard内の言語切り替えは
`Ctrl+Space`ではなく`Shift+Space`だった。理由はまだわかっていない。

## 調査の経緯

{{< SF6MozcInvestigation >}}
