---
title: "swayfxのscratchpadクラッシュを追う: git blameで見つけたupstreamとの噛み合わせ問題"
date: 2026-08-09T17:00:00+09:00
draft: true
categories: ["Linux", "トラブルシュート"]
tags: ["Arch Linux", "sway", "swayfx", "wlroots", "scenefx", "Wayland", "IPC", "git blame", "OSS"]
---

## 事象

普段使っているswayfx上で、scratchpadに入れたウィンドウを表示している状態からもう一度`scratchpad show`を叩くと、コンポジタごと丸ごと落ちる現象に遭遇した。SDDMのログイン画面まで戻される、なかなか派手なクラッシュ。

環境:

| 項目 | 値 |
| --- | --- |
| swayfx | 0.5.3-4(sway 1.11.0ベース、Arch Linuxパッケージ) |
| wlroots | 0.19.3 |
| GPU | AMD Radeon RX 6600 XT(amdgpu) |

bindsymはこう組んでいた:

```
bindsym $mod+minus scratchpad show, resize set width 90 ppt height 90 ppt, move position center
```

`scratchpad show`と同時に`resize`・`move`を連続実行する形。これを2回続けて押す(1回目で表示、2回目でフォーカスしたまま押してhideパスに入る)とクラッシュする。

## スタックトレースを取る

`coredumpctl` + `gdb`(デバッグシンボル入り)でコアダンプを解析した。

```
#0  root_scratchpad_hide (con=0x55f058a52400) at ../swayfx-0.5.3/sway/tree/root.c:257
257		set_container_transform(con->pending.workspace, con);
        seat = 0x55f0580db940
        focus = 0x55f058a41760
        ws = 0x0
```

`ws`(= `con->pending.workspace`)が`NULL`のまま`set_container_transform()`に渡され、内部で参照外しして落ちていた。該当箇所のコードはこうなっていた:

```c
void root_scratchpad_hide(struct sway_container *con) {
	struct sway_seat *seat = input_manager_current_seat();
	struct sway_node *focus = seat_get_focus_inactive(seat, &root->node);
	struct sway_workspace *ws = con->pending.workspace;

	if (con->pending.fullscreen_mode == FULLSCREEN_GLOBAL && !con->pending.workspace) {
		// If the container was made fullscreen global while in the scratchpad,
		// it should be shown until fullscreen has been disabled
		return;
	}
	...
	set_container_transform(con->pending.workspace, con);   // ガードなし
```

NULLチェックが「`FULLSCREEN_GLOBAL`のときだけ」に絞られていて、それ以外の理由で`pending.workspace`がNULLになるケースを素通りしてしまう。`set_container_transform()`はswayfx独自の追加関数(本家swayには存在しない)なので、一見swayfx側のバグに見えた。

[swayfx Issue #560](https://github.com/wlrfx/swayfx/issues/560)としてこの内容を報告した。

## 「upstreamにもあるの?」への一言

翌日、メンテナーから短い返信が来た。

> is this present in upstream? We don't touch the scratchpad code much if at all

「upstream(本家sway)にもあるバグか? scratchpadのコードはほとんど触ってないはず」という趣旨。素っ気ない一言だったが、これは実際に手を動かして確かめる価値がある問いだった。

## 調査の経緯

{{< SwayfxScratchpadInvestigation >}}

答えは「upstreamにも同じバグがあった。しかも本家側は既に直していて、swayfxはその修正をまだ取り込んでいなかっただけ」。メンテナーの「upstreamにあるか?」という勘所は当たっていたが、実際にそう答えられる根拠(git archaeology)までは、あの一言のやり取りだけでは示されていなかった。

## 実際に手を動かして検証する

推測だけで終わらせず、現在のmasterで本当に直っているかを実機で確認することにした。

### ビルド

```bash
git clone https://github.com/wlrfx/swayfx.git ~/src/swayfx
cd ~/src/swayfx
meson setup build --prefix=/tmp/swayfx-test -Dbuildtype=debug
```

依存関係で2つ詰まった。

1. `meson`/`ninja`が未インストール → `pacman -S meson ninja`
2. `scenefx-0.5`が必要だが、システムには`scenefx0.4`(0.4.1-2)しか入っていない → AURの`scenefx0.5`パッケージを導入。既存の`scenefx0.4`とはsoname(`libscenefx-0.4.so` / `libscenefx-0.5.so`)が別なので、`wlroots0.19`/`wlroots0.20`が共存しているのと同じ要領で問題なく共存できた。

ビルド後、`/tmp`はtmpfs(メモリ上のファイルシステム)なので再起動で消える点だけ注意しつつ、`/tmp/swayfx-test`にインストール。

### ネスト起動で検証環境を用意

本番のセッションを壊さずに試すため、今動いているswayfxセッションの中で、ビルドしたswayfxを**ネストしたWaylandクライアント**として起動する。

```bash
WLR_BACKENDS=wayland /tmp/swayfx-test/bin/sway -c ~/.config/sway/config
```

ここでいくつかハマった。

**フォーカスが外側に漏れる** — ネストウィンドウをクリックしても、キー入力(`$mod+Enter`など)が外側の本番セッションに拾われてしまい、weztermがネストの外に出てしまう。

**weztermの単一インスタンス仕様** — 実はこれはフォーカスの問題ではなく、weztermがデフォルトで単一のGUIプロセスを使い回す仕様が原因だった。`WAYLAND_DISPLAY`を変えて起動しても、既存のGUIインスタンスに新しいタブが追加されるだけ。`wezterm start --always-new-process`で独立したプロセスとして起動する必要があった。

**`enable_wayland = false`** — それでもネスト側に出てこない。原因はさらに別で、weztermの設定に`config.enable_wayland = false`(コメントは「XWaylandで動かす」とだけ、理由はgit logにも残っていなかった)という設定があり、weztermは常にXWayland経由で動く仕様になっていた。ネストsway側のXWaylandディスプレイ(`/tmp/.X11-unix/X2`)を`DISPLAY=:2`で明示的に指定して、ようやくネストの中にウィンドウが出た。

### キー操作をやめてIPCで直接叩く

ここまでの経緯でGUI経由のキー操作はフォーカスが不安定と分かっていたので、最終的には`swaymsg`でネストsway側のIPCソケットに直接コマンドを送ることにした。

```bash
export SWAYSOCK=/run/user/1000/sway-ipc.1000.<PID>.sock
swaymsg 'move scratchpad'
swaymsg 'scratchpad show, resize set width 90 ppt height 90 ppt, move position center'   # 1回目: 表示
swaymsg 'scratchpad show, resize set width 90 ppt height 90 ppt, move position center'   # 2回目: hideパス
```

2回目の実行後もプロセスは`state=S`(通常のスリープ)で生存、`coredumpctl`にも新規クラッシュなし。`get_tree`で見てもコンテナは`__i3_scratch`ワークスペースに正常に戻っていた。

**クラッシュしなかった。** masterでは修正済みであることを、実際に手を動かして確認できた。

## Issueへの報告とクローズ

調べた経緯(git archaeologyの結果)と、実機での検証結果をまとめてIssueにコメントした。

- upstreamにも同じ種類のバグが存在し、既に修正されていたこと(swaywm/sway#8909)
- swayfxはその修正を`#537`で取り込み済みで、現行masterでは再現しないこと
- 実際にmasterをビルドして再現手順を試し、クラッシュしないことを確認したこと

その上でIssueをクローズした。

## まとめ

- swayfx独自のバグに見えたクラッシュは、実はupstream sway由来のバグをフォークが引き継ぎ、upstream側の修正をまだ取り込めていなかっただけだった
- メンテナーの「upstreamにあるか?」という一言は勘所としては正しかったが、実際に裏を取るには git blame でコミット履歴を本家・フォーク両方に渡って追う必要があった
- 「直っているはず」で終わらせず、実際にmasterをビルドしてネスト起動 + IPC経由でクラッシュ手順を再現し、直っていることを手を動かして確認した
- 検証の過程で本題(scratchpadのバグ)とは無関係な小さなハマりどころ(依存パッケージのバージョン違い、ネストコンポジタのフォーカス、weztermの単一インスタンス仕様とXWayland固定設定)が積み重なった。デバッグ環境を作ること自体が、もう一段の調査になることがよくある
