---
title: "ASRock環境のArch+Windowsデュアルブート問題の記録"
date: 2025-11-16T18:40:00+09:00
draft: false
categories: ["Linux", "トラブルシュート"]
jtags: ["Arch Linux", "Windows 11", "systemd-boot", "UEFI", "ASRock", "デュアルブート"]
---

---

# Arch Linux と Windows 11 デュアルブート問題
## ASRock 環境で「restart だと起動しないのに、shutdown だと起動する」謎バグの記録

---

## はじめに

Arch Linux と Windows 11 を同じマシンでデュアルブートしているときに、
「Arch から再起動すると Windows が起動しないのに、電源OFF→ONだと普通に起動する」
という不可解な現象に遭遇した。

環境：

- ASRock A520M Pro4
- Ryzen 7 5700X
- Radeon RX 6600 XT
- DDR4 32GB
- systemd-boot
- ESP を共有

この記事は、このときに見た現象と、EFI / systemd-boot / ASRock UEFI まわりを調べたメモをまとめたもの。

---

## トラブルの症状と再現性

### 症状

- Arch → 再起動 → systemd-boot で Windows を選択 → 自動修復、ロゴ停止、黒画面  
- Arch → シャットダウン → 電源ON → Windows → 正常起動

### 再現手順

1. Arch を起動
2. 再起動（reboot）
3. systemd-boot で Windows を選択
4. 起動失敗 or 自動修復に入る

逆に、

1. Arch をシャットダウン
2. 電源ON
3. Windows
4. 正常起動

### 発生頻度

- 高確率で発生
- 「Arch → 再起動 → Windows」のときだけ不安定

### Windows 側で見られたもの

- 自動修復
- ロゴ停止
- 黒画面

電源OFF→ONだと正常。

---

## システム構成と前提条件

### ハードウェア

- ASRock A520M Pro4
- Ryzen 7 5700X
- Radeon RX 6600 XT

### Windows 側

- UEFI / GPT
- Windows インストーラの ESP を使用

### Arch 側

- systemd-boot
- /boot に ESP をマウント
- kernel, initramfs, loader/entries/*.conf すべて ESP 内

### ESP の設定例

```fstab
UUID=XXXX-YYYY  /boot  vfat  umask=0077  0  2
```

ポイント：

- vfat
- /boot に直接マウント
- Arch と Windows が同じ ESP を共有するため混在しやすい

---

## 発見された異常（EFI/Microsoft 配下の二重構造）

ESP をマウントして EFI の中身を確認した。

```bash
sudo mount /dev/nvme0n1p1 /mnt
tree -L 3 /mnt/EFI
```

例：

```
EFI/
├─ Microsoft/
│  ├─ Boot/
│  │  ├─ bootmgfw.efi
│  │  └─ その他
│  └─ その他
└─ Boot/
   ├─ bootx64.efi
   └─ その他
```

分かったこと：

- bootmgfw.efi が複数
- 修復の残骸あり
- bootx64.efi も複数

「どの EFI が実際の入口なのか」が曖昧な状態。

### bootmgfw.efi の二重化

Windows は更新や修復で複数入口を作る：

- EFI/Microsoft/Boot/bootmgfw.efi
- EFI/Boot/bootx64.efi

systemd-boot がどちらを参照するかで挙動が変わった。

### rename による一時的改善

bootmgfw.efi を退避し、別の bootx64.efi を指定したら数日は安定した。

### Windows 自動修復による上書き

Windows は起動失敗が続くと自動で EFI を“修復” する。

- bootmgfw.efi
- BCD
- bootx64.efi

これにより手動整理した状態が巻き戻される。

---

## systemd-boot の設定

### windows.conf

```ini
title   Windows 11
efi     /EFI/Microsoft/Boot/bootmgfw.efi
```

別案：

```ini
title   Windows 11 alt
efi     /EFI/Boot/bootx64.efi
```

どちらも構文は正しいが、参照先の中身で挙動が変わる。

---

## ASRock 特有の挙動の可能性

### ブート順のクセ

- ブート順が勝手に変わる
- Windows Boot Manager が優先されやすい

### UEFI 設定の影響

- Fast Boot → OFF
- CSM → OFF（UEFIオンリー）
- Secure Boot → OFF

再起動とシャットダウンで初期化の深さが異なる可能性。

---

## 行った調査

- EFI 構造確認
- efibootmgr
- bootctl status
- Windows イベントビューア
- 再起動と電源ONの挙動比較

---

## 一時的に効果があった対策

- bootmgfw.efi の参照先変更
- Windows 高速スタートアップ無効化
- BIOS Fast Boot オフ
- Windows Boot Manager を一時的に優先にする

---

## 現時点での落としどころ

- EFI を整理し一本化
- Windows 自動修復が暴れにくい設定にする
- UEFI 設定は保守的に
- 再起動経由は不安定だが、電源OFF→ONなら安定起動するので実用上問題なし

---

## コマンドログ

```bash
sudo mount /dev/nvme0n1p1 /mnt
tree -L 3 /mnt/EFI
sudo efibootmgr
bootctl status
```

---

## まとめ

- Arch → 再起動 → Windows だけ起動失敗する
- EFI 内の bootmgfw.efi が複数存在したことが原因のひとつ
- Windows 自動修復が EFI を巻き戻す
- ASRock UEFI の癖も影響
- 完全特定は難しいが、実用レベルでは安定に落ち着い た
