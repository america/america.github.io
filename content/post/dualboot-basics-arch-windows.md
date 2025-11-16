---
title: "Arch Linux と Windows 11 を安全にデュアルブートするためのメモ"
date: 2025-11-16T19:10:00+09:00
draft: false
categories: ["Linux", "解説"]
tags: ["Arch Linux", "Windows 11", "systemd-boot", "UEFI", "デュアルブート"]
---

## このメモの目的

このメモは、ASRock 環境で実際にトラブルを踏んだ経験を元に、

- Arch Linux と Windows 11 を同じディスクでデュアルブートしたい
- systemd-boot を使いたい
- 変な EFI トラブルで何日も溶かしたくない

という人向けの「基礎まとめ」です。  
詳細なチュートリアルというより、**やってはいけないポイント** や **設計の考え方** を中心にしています。

## 前提環境

例として想定している環境はこんな感じです。

- マザーボード: ASRock A520M Pro4（UEFI）
- CPU: Ryzen 7 5700X
- GPU: Radeon RX 6600 XT
- メモリ: DDR4 32GB
- ストレージ: NVMe SSD 1 本
- OS: Windows 11 ＋ Arch Linux
- ブートローダー: systemd-boot
- パーティション形式: GPT
- ブート方式: UEFI（Legacy BIOS / CSM は使わない）

他のマザーボードでも基本の考え方は同じですが、UEFI のクセはメーカーごとに違うので、あくまで「考え方の参考」として読んでください。

## デュアルブート方式のパターン

ざっくり言うと、Windows + Arch のデュアルブートには、次のようなパターンがあります。

1. Windows の EFI System Partition（ESP）を Arch と共有する
2. 別の ESP を作り、Windows と Arch で分ける
3. 別ディスクに Arch を入れ、それぞれのディスクに ESP を持たせる

ここでは「1. ESP 共有」を前提にしつつ、**なぜ混乱しやすいのか** も含めて整理します。

### パターン1: ESP 共有（今回使っている方式）

- Windows インストーラが作った ESP（例: 100〜300MB の vfat）をそのまま利用
- Arch 側の `/boot` をその ESP にマウントして、systemd-boot をインストール

メリット：

- パーティションを増やさなくてよい
- ESP が 1 つなのでシンプル

デメリット：

- Windows の自動修復・アップデートが EFI ファイルを書き換えることがある
- Arch 側のファイルと混在し、構造がカオスになりやすい

### パターン2: ESP 分離

- Windows 用 ESP（既存）とは別に、Arch 用 ESP を新規に作成
- UEFI のブートエントリで、どちらの ESP から起動するか選択

メリット：

- 片方の EFI が壊れても、もう片方に影響しづらい
- Windows の自動修復の巻き添えを受けにくい

デメリット：

- UEFI のブートエントリ管理が少し面倒
- ディスク構成がわずかに複雑になる

### パターン3: 別ディスク運用

- 物理的にディスクを分けるパターン
- ここでは詳しくは触れませんが、一番安全ではある

## systemd-boot の基本イメージ

systemd-boot は、EFI System Partition（ESP）内に置かれるシンプルなブートローダーです。

{{< DualBootDiagram >}}

これにより、各OSのエントリを loader/entries/*.conf として管理できます。

- ESP に `EFI/systemd/systemd-bootx64.efi` をインストール
- 同じ ESP に `loader/` ディレクトリを作り、設定ファイルを置く
- `loader/entries/*.conf` に Arch や Windows のエントリを書く

### Arch のエントリ例

```ini
title   Arch Linux
linux   /vmlinuz-linux
initrd  /initramfs-linux.img
options root=/dev/nvme0n1pX rw
```

### Windows のエントリ例

```ini
title   Windows 11
efi     /EFI/Microsoft/Boot/bootmgfw.efi
```

Arch は `linux` / `initrd` でカーネルと initramfs を指定しますが、  
Windows は `efi` で Windows Boot Manager（bootmgfw.efi）にチェーンロードする形になります。

## ESP のマウントパターンと注意点

ESP を Arch からどう見せるかで、よくあるのが次のパターンです。

### パターンA: ESP を /boot に直接マウント

`/etc/fstab` 例：

```fstab
UUID=XXXX-YYYY  /boot  vfat  umask=0077  0  2
```

特徴：

- `/boot` には ESP の中身がそのまま見える
- カーネルや initramfs も ESP 直下に置かれる

メリット：

- systemd-boot との相性が良い
- 構成がシンプル

デメリット（今回ハマったポイント）：

- Windows と Arch が同じ ESP を共有するため、EFI 内が混在してカオス化しやすい
- 誤って不要ファイルを消すと、Windows が起動しなくなるリスク

### パターンB: ESP を /efi にマウントし、/boot は ext4 などにする

例：

- `/efi` → ESP（vfat）
- `/boot` → 通常の Linux パーティション（ext4 など）

この場合、systemd-boot を使うには少し工夫が必要なので、ここでは詳しくは触れません。  
「EFI は /efi、カーネルは /boot」という分離構成もある、というメモだけ。

## Windows と共存するときの注意点

ESP 共有で Windows と共存するときに、特に気をつけたいのは次のあたりです。

### 高速スタートアップをオフにする

Windows 側の「高速スタートアップ」が有効だと、シャットダウン時に完全には終了せず、  
デュアルブート環境で予期しない挙動をすることがあります。

- コントロールパネル → 電源オプション → 電源ボタンの動作を選択
- 「高速スタートアップを有効にする（推奨）」のチェックを外す

### 自動修復に入りすぎないようにする

起動失敗が続くと、Windows の自動修復が EFI 内のファイル（bootmgfw.efi など）を勝手に書き換えることがあります。  
これは、Arch 側から見ると「せっかく整理した EFI がまたぐちゃぐちゃに戻る」原因になります。

- 明らかにおかしくなったら、まず ESP の構造を確認する
- 自動修復に任せっきりにせず、一度落ち着いて原因を切り分ける

### UEFI 設定を極力 UEFI オンリーにする

- CSM（Legacy BIOS互換）はオフ
- Fast Boot はオフ
- Secure Boot は用途次第（Arch をそのまま入れるならオフが楽）

中途半端に Legacy と混在させると、トラブルシュートが一気に難しくなります。

## Arch インストール時のざっくりフロー（ESP 共有ケース）

細かいコマンドは Arch Wiki に譲って、流れだけ書くとこんな感じです。

1. 既存の Windows 11 が UEFI / GPT で入っていることを確認
2. Windows から空き領域を作る（ディスクの管理などで縮小）
3. Arch インストーラから起動
4. 既存の ESP（vfat）をマウント先 `/boot` に指定
5. Linux 用のルートパーティション（ext4）などを作成
6. Arch をインストール
7. `bootctl install` で systemd-boot を導入
8. `/boot/loader/entries/arch.conf` と `windows.conf` を作成

ここまでで、systemd-boot のメニューから Arch と Windows を選べるようになります。

## トラブルシュートの基本

実際にトラブルが起きたとき、最低限チェックしたいのはこのあたりです。

- ESP をマウントして EFI ディレクトリを覗く  
  - `tree -L 3 /mnt/EFI`
- `efibootmgr` でブートエントリを見る  
  - どのエントリがどのパスを指しているか
- `bootctl status` で systemd-boot の状態を確認
- Windows 側のイベントビューア（システムログ）

「何が壊れたか分からない」という状態が一番つらいので、  
どこからどこまでが Arch の責任範囲で、どこから先が Windows / UEFI の領域なのかを意識して見ると、少し気持ちが楽になります。

## まとめ

- Windows と Arch のデュアルブートは、**ESP 共有** か **ESP 分離** かを最初に決めると設計しやすい
- systemd-boot はシンプルで扱いやすいが、Windows の bootmgfw.efi との付き合い方に注意
- ESP を `/boot` に直接マウントする構成は分かりやすい一方で、EFI がカオスになりやすい
- Windows の高速スタートアップや自動修復は、ときどき EFI を壊す「お節介」をすることがある
- トラブルが起きたときは、EFI の構造と UEFI のブートエントリを一度落ち着いて眺める

別記事として、実際に ASRock 環境で遭遇した
「再起動だと Windows が起動しないのに、電源OFF→ONだと起動する」問題についても記録しています。
そちらは具体的な症状とログ中心、この記事はその前提となる考え方のメモ、という住み分けです。
