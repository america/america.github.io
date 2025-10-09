了解 👍
以下が、さっき説明した **Waydroid Binder/BinderFS 問題のまとめ記事**を
そのまま **Hugo用 Markdownファイル**として貼れる内容だ。
保存場所は：
`content/posts/arch-waydroid-binder.md`

---

```markdown
---
title: "Waydroidが起動しない原因とBinder/BinderFSの仕組み"
date: 2025-10-09T10:30:00+09:00
tags: ["Arch Linux", "Waydroid", "Kernel", "Binder", "BinderFS"]
categories: ["Linux"]
---

## 概要
Arch Linux で Waydroid を動かそうとした際、  
「`Can't open /dev/anbox-binder: No such device or address`」というエラーが発生した。  
原因は **カーネルが BinderFS を正しくマウントしていなかった**ことにあった。  
ここでは、Binder/BinderFS の役割と、実際に動作させるまでの手順をまとめる。

---

## 1. Binder と BinderFS の違い
Android のアプリ間通信（IPC）は **Binder ドライバ**で実現されている。  
Linux でこれを再現するためには、カーネルモジュールと特別な仮想ファイルシステムが必要になる。

| 名称 | 説明 |
|------|------|
| `/dev/binder` | Android のプロセス間通信 (IPC) のコアデバイス |
| `/dev/hwbinder` | ハードウェア抽象層 (HAL) 用 Binder |
| `/dev/vndbinder` | ベンダーサービス用 Binder |
| **BinderFS** | これらのデバイスノードを動的に管理するためのファイルシステム |

昔の環境では `/dev/binder` を直接作っていたが、  
最近の Waydroid や Mainline カーネルでは **BinderFS を使うのが標準**。

---

## 2. エラーの原因
Waydroid 起動時のログ：

```

[gbinder] ERROR: Can't open /dev/anbox-binder: No such device or address
[08:49:18] Failed to add presence handler: None

````

これは、`/dev/anbox-binder` が存在しても中身が無効、  
つまり **Binder デバイスがカーネル側で認識されていない**ことを意味する。

---

## 3. 実際の確認手順

### カーネルモジュール確認
```bash
uname -r
zgrep CONFIG_ANDROID /proc/config.gz | grep BINDER
````

出力例：

```
CONFIG_ANDROID_BINDER_IPC=y
CONFIG_ANDROID_BINDERFS=y
```

BinderFS 対応 (`CONFIG_ANDROID_BINDERFS=y`) があればOK。

### ファイルシステム確認

```bash
cat /proc/filesystems | grep binder
```

正常な場合：

```
nodev   binder
```

または `nodev   binderfs` と出る。

---

## 4. 動かすまでの流れ（成功例）

1. **Mainlineカーネルに切り替え**

   ```bash
   sudo bootctl set-default arch-linux.conf
   ```

   → 再起動

2. **BinderFSの確認**

   ```bash
   cat /proc/filesystems | grep binder
   ```

3. **Waydroidコンテナ起動**

   ```bash
   sudo systemctl start waydroid-container
   waydroid status
   ```

   出力例：

   ```
   Session:        RUNNING
   Container:      RUNNING
   Vendor type:    MAINLINE
   IP address:     192.168.240.112
   ```

4. **UI起動**

   ```bash
   WAYDROID_DISABLE_HWCOMPOSER=1 waydroid show-full-ui
   ```

---

## 5. initramfs とは？

`initramfs` は「初期RAMファイルシステム」。
カーネルがブート時に最初に展開する仮想ルートファイルシステムで、
ルートデバイスのマウントや暗号化ボリュームの解除など、
「カーネルだけではできない初期処理」を行うためのもの。

Gentoo のように静的に全部組み込むカーネルなら不要だが、
Arch ではモジュール分離しているため **initramfs が必須**。

---

## 6. 最後に

* Arch Linux の mainline カーネル（6.17系）では `binder` が統合済み。
  `binderfs` の行が出なくても問題なく動く。
* もし Waydroid が止まる場合は、**`/dev/binder` が正しいリンク先か**を再確認。
* `WAYDROID_DISABLE_HWCOMPOSER=1` を付けると GUI 表示が安定する。

---

## 参考リンク

* [Waydroid Documentation](https://docs.waydro.id/)
* [Linux Kernel: BinderFS](https://www.kernel.org/doc/html/latest/filesystems/binderfs.html)
* [Arch Wiki: Waydroid](https://wiki.archlinux.org/title/Waydroid)

```
