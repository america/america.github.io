---
title: "Street Fighter 6 (Proton) で日本語入力ができない問題は /etc/environment のIME環境変数で解決した"
date: 2026-08-06T20:30:00+09:00
lastmod: 2026-08-08T00:00:00+09:00
draft: false
description: "SF6のチャット欄でCtrl+Spaceが効かない問題を、Proton/WineのIME実装の制約だと結論づけたが、それは誤りだった。/etc/environment にIME環境変数を設定したところ直接入力が動作するようになった。当時の調査記録と、訂正までの経緯。"
categories: ["Linux", "トラブルシュート"]
tags: ["Arch Linux", "Proton", "Wine", "Steam", "Street Fighter 6", "fcitx5", "Mozc", "IME", "Waydroid"]
cover:
  image: "cover.png"
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

### なぜ直ったのか(ソースで確認した)

`~/.config/environment.d/` と `~/.xprofile` には以前からIME関連の環境変数を設定していた。
それでも直らず、`/etc/environment` に書いたら直った。この違いがどこから来るのか、
実際のソースコードを読んで確認した。

**`.xprofile`は、そもそもWaylandセッションでは一度も読まれない。** 筆者の環境は
SDDM(ディスプレイマネージャ) → Sway(Waylandコンポジタ)という構成。SDDMがWaylandセッションを
起動するスクリプト本体([`wayland-session`](https://github.com/sddm/sddm/blob/develop/data/scripts/wayland-session)、
公式ソースで中身を確認)はこうなっている。

```sh
case $SHELL in
  */bash|*/zsh)
    exec $SHELL --login -c 'exec "$@"' - $@
    ;;
  ...
```

bash/zshの場合、ログインシェルを`--login`モードで起動するだけで、`.xprofile`という
文字列はこのスクリプトのどこにも出てこない。`.xprofile`を読むのはX11向けの
[`Xsession`スクリプト](https://github.com/sddm/sddm/blob/develop/data/scripts/Xsession)の方で、
Wayland専用の`wayland-session`には最初から実装されていない。**環境変数が「届かなかった」
というより、`.xprofile`自体がそもそも実行されていなかった。**

**Steam Linux Runtime(pressure-vessel)は、環境変数を独自にフィルタしているわけではない。**
Steamが使ってるサンドボックス機構のソース([`steam-runtime-tools`](https://gitlab.steamos.cloud/steamrt/steam-runtime-tools)、
git cloneして確認)、`pressure-vessel/wrap-context.c`にこうある。

```c
self->original_environ = g_get_environ ();
```

`g_get_environ()`はGLibの関数で、**呼び出し元プロセス(つまりSteam自身)が、その時点で
実際に持っている環境変数をそのままコピーする。** サンドボックスが用意する環境は、
この`original_environ`を土台に組み立てられる(`pressure-vessel/wrap.c`の
`pv_bind_and_propagate_from_environ`など)。つまり仕組みとしては「Steamの環境に有れば、
サンドボックスにも伝わる」「Steamの環境に無ければ、サンドボックスにも無い」というだけで、
pressure-vessel側が能動的にIME変数を弾いているわけではなかった。

**`/etc/environment`は、この両方の問題を回避できる場所にある。** PAM(`pam_env`)が
ログインセッションを開く時点――SDDM経由でシェルが起動するよりも、Swayが立ち上がるよりも
前――に読み込まれる。Wayland/X11の違いにも、systemd --userのunit起動経路にも依存しない。
この結果、Sway → (Sway経由で起動する)Steam → Steamが`g_get_environ()`で捕まえる環境、
という鎖が最初から繋がっていて、確実にサンドボックス内まで届く。

`~/.config/environment.d/*.conf`については、`systemd --user`マネージャが起動時に読み込んで
**マネージャ自身が管理するunit用の環境**として保持する仕組みで、Swayがsystemd --userの
unitとして起動されていない(ログインシェルから直接`exec sway`するような構成の)場合、
Swayやその子プロセスへ自動的に伝播するとは限らない。この部分はユーザー環境の起動設定
(どうSwayを起動しているか)に依存するため、今回はそこまでは立ち入らない。

`wine notepad.exe`でXICの作成に成功していたのも、あれが対話シェル(すでに`/etc/environment`や
シェルの設定ファイルの変数が乗っている)から直接起動されていたためで、Steam経由の起動とは
環境が違っていた、というのも今回の調査で裏が取れた。

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
