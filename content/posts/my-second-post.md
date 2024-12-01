+++
date = '2024-11-26T00:56:08+09:00'
draft = false
title = 'BluetoothデバイスをWindowsとLinuxで切り替える際のトラブルと解決方法'
+++

## 問題の背景

Bluetoothヘッドホンを**Windows**で接続した後、**Linux（例: Arch Linux）**に切り替えると、ヘッドホンがうまく接続できないことがあります。この問題の原因は、**Bluetoothのペアリング情報がOSごとに管理され、競合が発生するため**です。

この記事では、トラブルの原因を解説し、具体的な解決策を2つ提案します。

---

## 問題の原因

1. **Bluetoothペアリング情報の競合**  
   Bluetoothヘッドホンは、ホストデバイス（PCやスマートフォン）との暗号化されたリンクキーを使用して認証を行います。
   - Windowsではリンクキーがレジストリに保存されます。
   - Linuxではリンクキーが`/var/lib/bluetooth/`ディレクトリに保存されます。

   OSごとに異なるリンクキーを使用するため、OSを切り替えると認証に失敗し、接続エラーが発生します。

2. **解決のための再ペアリング**  
   問題を解決するために、Linuxで`bluetoothctl`を使ってデバイスを`remove`し、再ペアリングする必要が出てきます。これにより、新しいリンクキーが生成され、再接続が可能になります。

---

## 解決方法

以下の2つの解決方法を提案します。

### 方法 1: Bluetooth設定を完全に個別管理する

WindowsとLinuxでペアリング情報が競合しないように、Bluetoothデバイスを個別に管理します。

#### 1.1 BluetoothアダプタのMACアドレスを変更する

Linux側でMACアドレスを変更し、ヘッドホンに異なるペアリング情報を記憶させることで、Windowsのペアリング情報との競合を回避します。

```bash
# Bluetoothアダプタを停止
sudo hciconfig hci0 down

# MACアドレスを変更
sudo btmgmt --index 0 public-addr XX:XX:XX:XX:XX:XX

# Bluetoothアダプタを再起動
sudo hciconfig hci0 up
```

- `XX:XX:XX:XX:XX:XX`には新しいMACアドレスを指定してください。
- その後、ヘッドホンを再ペアリングします。

#### 1.2 異なるBluetoothアダプタを使用する

WindowsとLinuxで異なるBluetoothアダプタ（例: USBドングル）を使用する方法も有効です。これにより、ヘッドホンは2つの異なるデバイスとして認識します。

---

### 方法 2: Bluetooth設定をOS間で同期する

Tailscaleのようなツールを使って、WindowsとLinuxでBluetooth設定を共有します。

#### 2.1 必要な設定ファイルの場所

- **Windows**:  
  Bluetoothリンクキーは以下のレジストリパスに保存されています。  
  `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\BTHPORT\Parameters\Keys`

- **Linux**:  
  Bluetoothリンクキーは以下に保存されています。  
  `/var/lib/bluetooth/[アダプタMAC]/[デバイスMAC]/info`

#### 2.2 Tailscaleを使った同期手順

1. **Tailscaleをインストールする**

   - **Arch Linux**:
     ```bash
     sudo pacman -S tailscale
     sudo tailscale up
     ```
   - **Windows**:
     [Tailscale公式サイト](https://tailscale.com/)からインストーラーをダウンロードしてインストールします。

2. **リンクキーをエクスポートする**

   - **Windows**:
     レジストリエディタでリンクキーをエクスポートします。
     1. `regedit`を開き、パスに移動します。
     2. 該当キーを右クリックして`エクスポート`を選択します。

   - **Linux**:
     `info`ファイルをコピーします。
     ```bash
     cp /var/lib/bluetooth/[アダプタMAC]/[デバイスMAC]/info ~/info_backup
     ```

3. **リンクキーをOS間で同期する**

   Tailscaleのファイル共有機能やSSHを利用して、WindowsとLinux間でファイルを送受信します。

4. **リンクキーを適用する**

   - Windows側ではレジストリにインポート。
   - Linux側では`info`ファイルを上書き保存。

5. **Bluetoothサービスを再起動する**

   ```bash
   sudo systemctl restart bluetooth
   ```

---

## スクリプトでの自動化（Linux向け）

リンクキーの同期をスクリプトで簡単に管理することもできます。

```bash
#!/bin/bash

# Tailscaleで同期されたリンクキーを適用する
SYNC_DIR=~/tailscale_bluetooth_sync
DEVICE_MAC="[デバイスMAC]"

# Bluetoothサービスを停止
sudo systemctl stop bluetooth

# 同期ディレクトリからリンクキーをコピー
sudo cp $SYNC_DIR/info /var/lib/bluetooth/[アダプタMAC]/$DEVICE_MAC/info

# Bluetoothサービスを再起動
sudo systemctl start bluetooth
```

---

## まとめ

- **簡単な方法**: 方法 1（Bluetooth設定の個別管理）は設定が少なく、簡単に実行できます。
- **応用的な方法**: 方法 2（OS間でBluetooth設定を同期する）はやや難しいですが、リンクキーを共有することで再ペアリングの手間を省けます。

日常的にOSを切り替える場合は、スクリプト化して作業を自動化するのがおすすめです。

---

この記事が役に立ったと思ったら、コメントで感想を教えてください！ 🙌

