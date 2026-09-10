---
title: "Termux's sshd Logs You In as the Same User Whatever Name You Send — Reading the Patch"
date: 2026-09-10T14:00:00+09:00
draft: false
categories: ["Linux", "解説"]
tags: ["termux", "android", "openssh", "ssh", "arch-linux"]
description: "ssh banana@phone and ssh root@phone both log in as the same user. Not a config quirk — a patch in Termux's OpenSSH build. Reading the #ifdef __ANDROID__ in auth.c."
---

I added an entry to `~/.ssh/config` so I could `scp` images from my desktop to my
Pixel 6 (running Termux's sshd), and I put a `User` in it. Then I noticed: when the
other end is Termux, **`ssh banana@<phone>` and `ssh root@<phone>` both log in as the
same user.** The `User` line in `~/.ssh/config` does nothing. It's not a config
problem — it's how Termux's OpenSSH is built.

## First, the observation

```
$ ssh -p 8022 banana@100.65.202.69 'whoami'
u0_a440
$ ssh -p 8022 root@100.65.202.69 'whoami'
u0_a440
```

`banana` and `root` both connect, and both land as `u0_a440` (the Termux app's user).
The key is checked only against
`/data/data/com.termux/files/home/.ssh/authorized_keys`.

## How stock OpenSSH resolves the user

sshd resolves the incoming username into a `struct passwd`. The function that does
this is `getpwnamallow()` in `auth.c`. In stock OpenSSH:

```c
pw = getpwnam(user);
```

`user` is the name the client sent. It's looked up in `/etc/passwd` (in practice via
NSS, so LDAP / SSSD too).

- **No such name** → the auth flow still runs to the end, and always fails (so the
  server doesn't leak which usernames are valid, e.g. through timing).
- **Name exists** → checked against *that user's* `~/.ssh/authorized_keys`,
  `/etc/shadow`, PAM stack. A key for user A won't get you in as user B.
- On success, sshd `setuid`s to that uid / gid, its supplementary groups, `$HOME`,
  and login shell.
- `AllowUsers` / `DenyUsers` / `Match User` in `sshd_config` narrow it further.

So on a normal Linux box, `ssh alice@host` and `ssh bob@host` are **different
logins**, landing as different users with different access. The username matters
completely.

## The Termux patch

`packages/openssh/auth.c.patch` in `termux/termux-packages` spells it out:

```c
#ifdef __ANDROID__
	/* Effectively a single-user system, use current user no matter supplied user */
	pw = getpwuid(getuid());
#else
	pw = getpwnam(user);
#endif
```

On the Android build, instead of `getpwnam(user)` it calls **`getpwuid(getuid())`** —
"get the passwd entry of whatever uid sshd itself is running as" (the Termux app's
uid). The `user` string the client sent is discarded right there, at resolution. The
patch comment says it literally: *"use current user no matter supplied user"*.

{{< sshdiff >}}

## The patches that hold it up

That one line in `auth.c` isn't enough on its own. The same directory has patches
that route around Android's constraints.

**`sshd.c.patch`** — disables privilege separation wholesale:

```c
#ifndef __ANDROID__
	if ((getpwnam(SSH_PRIVSEP_USER)) == NULL && need_chroot) {
		fatal("Privilege separation user %s does not exist", ...);
	}
#endif
```

`setgroups(0, NULL)`, `setresgid(...)`, `chdir("/")` are wrapped in
`#ifndef __ANDROID__` the same way. Android has no privsep user (`sshd`), an app
can't `setuid` / `setgid`, and it can't `chdir("/")` out of its sandbox.

**`auth-passwd.c.patch`** — password auth goes through the `termux-auth` package:

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

The password is checked against the hash in `$PREFIX/etc/passwd` via `termux_auth()`.
There's a special case: when sshd is started as root (rooted device), only `root` is
allowed.

**`build.sh`** — the base is OpenSSH-portable **10.5p1**. The configure line carries
`--disable-utmp --disable-wtmp --disable-lastlog --disable-libutil
--disable-pututline …`, and `termux-auth` is a dependency. It's not a fork — it's
stock OpenSSH with build-time patches.

## Why it's like this

An Android app is one package = one UID. There's no `/etc/passwd` full of real login
users, and no `setuid`. You can't have a multi-user POSIX layer inside an app. So
collapsing it to "there is one user, always that one" is the straightforward move,
and the line that does it is `getpwuid(getuid())`.

## What this means in practice

- The `User` line in `~/.ssh/config` is **decorative when the other end is Termux**.
  You can drop it (ssh will then send your local username, which is also ignored).
- **When the other end is a normal Linux box (NAS, Raspberry Pi, VPS…), `User` is
  required.** Put the real account name on that machine. `alice@` and `bob@` are
  different.
- Trying to restrict access on the Termux side with `AllowUsers` won't work — the
  username isn't used for resolution. Whether a key is in `authorized_keys` is the
  only gate.

## Checking it yourself

```
# read the patch
curl -s https://raw.githubusercontent.com/termux/termux-packages/master/packages/openssh/auth.c.patch

# try a nonsense username
ssh -p 8022 nobody-such-user@<phone> 'id -un'
```
