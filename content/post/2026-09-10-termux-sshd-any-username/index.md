---
title: "Termux の sshd はどんなユーザー名でも同じユーザーで入れる ── ソースで確かめる"
date: 2026-09-10T14:00:00+09:00
draft: false
categories: ["Linux", "解説"]
tags: ["termux", "android", "openssh", "ssh", "arch-linux"]
description: "ssh banana@phone でも root@phone でも同じユーザーでログインできる。設定の癖ではなく、Termux の OpenSSH ビルドに当たっているパッチのせい。auth.c の #ifdef __ANDROID__ を読む。"
---

母艦から Pixel 6（Termux の sshd）へ画像を `scp` するために `~/.ssh/config` に
エントリを足したとき、`User` を書いた。あとで気づいたが、相手が Termux だと
**`ssh banana@<phone>` でも `ssh root@<phone>` でも、同じユーザーでログインできる。**
`~/.ssh/config` の `User` 行は効いていない。設定の問題ではなく、Termux の OpenSSH
ビルドの話だった。

## まず観察

```
$ ssh -p 8022 banana@100.65.202.69 'whoami'
u0_a440
$ ssh -p 8022 root@100.65.202.69 'whoami'
u0_a440
```

`banana` も `root` も通って、着地するのは `u0_a440`（Termux アプリのユーザー）。
鍵は `/data/data/com.termux/files/home/.ssh/authorized_keys` だけを見ている。

## 通常の OpenSSH がユーザーをどう解決するか

sshd は、接続してきたユーザー名を `struct passwd` に解決する。これをやるのが
`auth.c` の `getpwnamallow()`。素の OpenSSH ではこう：

```c
pw = getpwnam(user);
```

`user` はクライアントが送ってきた名前。それを `/etc/passwd`（実際には NSS 経由で
LDAP / SSSD なども）で引く。

- **名前が存在しない** → 認証処理は形だけ最後まで走って、必ず失敗する（どの
  ユーザー名が有効かを応答時間などから漏らさないため）。
- **名前が存在する** → その人の `~/.ssh/authorized_keys`・`/etc/shadow`・PAM
  スタックで照合する。ユーザー A の鍵でユーザー B にはログインできない。
- 成功したら、その uid / gid・補助グループ・`$HOME`・ログインシェルに
  `setuid` してセッションが立つ。
- さらに `sshd_config` の `AllowUsers` / `DenyUsers` / `Match User` で絞れる。

つまり普通の Linux では、`ssh alice@host` と `ssh bob@host` は**別のログイン**で、
着地するユーザーも権限も別。ユーザー名は完全に意味を持つ。

## Termux のパッチ

`termux/termux-packages` の `packages/openssh/auth.c.patch` に、そのものが書いてある。

```c
#ifdef __ANDROID__
	/* Effectively a single-user system, use current user no matter supplied user */
	pw = getpwuid(getuid());
#else
	pw = getpwnam(user);
#endif
```

Android ビルドでは `getpwnam(user)` の代わりに **`getpwuid(getuid())`** を呼ぶ。
これは「**sshd 自身が動いている uid**（＝ Termux アプリの uid）の passwd を取る」
という意味。クライアントが送ってきた `user` という文字列は、解決の時点で
そのまま捨てられる。パッチのコメントが文字どおり *"use current user no matter
supplied user"* と言っている。

{{< sshdiff >}}

## それを支えるパッチ

`auth.c` の1行だけでは動かない。同じディレクトリに、Android の制約を回避する
パッチが並んでいる。

**`sshd.c.patch`** ── 権限分離まわりを丸ごと無効化：

```c
#ifndef __ANDROID__
	if ((getpwnam(SSH_PRIVSEP_USER)) == NULL && need_chroot) {
		fatal("Privilege separation user %s does not exist", ...);
	}
#endif
```

`setgroups(0, NULL)`・`setresgid(...)`・`chdir("/")` も同様に `#ifndef __ANDROID__`
で囲われている。Android には権限分離用のユーザー（`sshd`）がいないし、アプリは
`setuid` / `setgid` できないし、アプリの sandbox から `chdir("/")` で出られない。

**`auth-passwd.c.patch`** ── パスワード認証は `termux-auth` パッケージに回す：

```c
#elif defined(__TERMUX__)
int
sys_auth_passwd(struct ssh *ssh, const char *password)
{
	Authctxt *authctxt = ssh->authctxt;
	/* If sshd is starting as root, only allow root login */
	if (authctxt->pw->pw_uid == 0 && strcmp(authctxt->user, "root") != 0) {
		return 0;
	}
	return termux_auth(authctxt->user, password);
}
```

パスワードは `$PREFIX/etc/passwd` のハッシュと `termux_auth()` で照合する。
root で sshd を起動している（root 化端末）ときだけ、`root` 以外を弾く特例がある。

**`build.sh`** ── ベースは OpenSSH-portable **10.5p1**。configure に
`--disable-utmp --disable-wtmp --disable-lastlog --disable-libutil
--disable-pututline …` が並び、依存に `termux-auth` が入っている。フォークでは
なく、素の OpenSSH にビルド時パッチを当てたもの。

## なぜこうなっているか

Android のアプリは1個 ＝ UID 1個。ログイン用の実ユーザーが並ぶ `/etc/passwd` が
無く、`setuid` もできない。マルチユーザーの POSIX 層をアプリの中に持てない。
だから「ユーザーは1人、常にそれ」に倒すのが一番素直で、そのための1行が
`getpwuid(getuid())` だった。

## 実務的な結論

- `~/.ssh/config` の `User` 行は、**相手が Termux なら飾り**。省いてよい
  （省くと ssh はローカルのユーザー名を送るが、それも無視される）。
- **相手が普通の Linux（NAS・Raspberry Pi・VPS など）なら `User` は必須。**
  そのマシンの実アカウント名を書く。`alice@` と `bob@` は別物。
- Termux 側で「特定の人だけ入れたい」を `AllowUsers` でやろうとしても効かない
  （ユーザー名が解決に使われないので）。鍵を `authorized_keys` に入れるか
  入れないか、が唯一の入り口。

## 自分で確かめるには

```
# パッチを読む
curl -s https://raw.githubusercontent.com/termux/termux-packages/master/packages/openssh/auth.c.patch

# でたらめなユーザー名で試す
ssh -p 8022 nobody-such-user@<phone> 'id -un'
```
