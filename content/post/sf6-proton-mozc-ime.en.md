---
title: "Japanese Input Not Working in Street Fighter 6 (Proton) — Fixed by IME Variables in /etc/environment"
date: 2026-08-06T20:30:00+09:00
lastmod: 2026-08-08T00:00:00+09:00
draft: false
description: "I concluded that Ctrl+Space failing in SF6's chat box was a structural limitation of Wine/Proton's IME implementation. That conclusion was wrong. Setting IME environment variables in /etc/environment made direct input work. Here is the original investigation, and the correction."
categories: ["Linux", "トラブルシュート"]
tags: ["Arch Linux", "Proton", "Wine", "Steam", "Street Fighter 6", "fcitx5", "Mozc", "IME", "Waydroid"]
---

> **Correction (2026-08-08)**
>
> The original conclusion of this article — "this cannot be resolved through user configuration" — was **wrong**.
> Setting IME environment variables in `/etc/environment` made `Ctrl+Space` work for direct input.
> If you only want the fix, jump to [Update: Solved](#update-2026-08-08-solved).
>
> The investigation below is kept as-is, as a record of how I reasoned my way to the wrong conclusion.

## Symptom

Pressing `Ctrl+Space` (the fcitx5 trigger key) in Street Fighter 6's chat box does not switch to
Japanese input (Mozc). Text stays in romaji and nothing responds.

| Item | Value |
|---|---|
| OS | Arch Linux |
| WM | Sway (swayfx) |
| IME | fcitx5 + fcitx5-mozc |
| Game | Street Fighter 6 (Steam, AppID 1364780) |
| Proton | Proton Experimental / GE-Proton11-3 |

## The Original Conclusion (Wrong)

Official Proton builds deliberately disable XIM, and on top of that, Wine's newer IME
implementation does not bridge key input through to the XIM server. Because these two things
overlap, re-enabling XIM via the registry has no effect. This is not a Street Fighter 6 bug but a
structural limitation shared across Wine/Proton, and it cannot be resolved through user
configuration.

**— This was wrong.** In all likelihood, the environment variables simply were not reaching the
process the game was launched in. See [the update at the end](#update-2026-08-08-solved).

## The Original Evidence

Everything below was actually observed on 2026-08-06. **The observations are accurate; the
conclusion drawn from them was not.**

**Sway/fcitx5 configuration is fine** — there is no `bindsym` bound to `Ctrl+Space`,
`GTK_IM_MODULE` / `QT_IM_MODULE` / `XMODIFIERS` are correctly set via `environment.d`, the fcitx5
trigger key is still `Control+space`, and the XIM addon is not disabled.

> In hindsight, **this is exactly where the mistake was.** I confirmed the variables were *set in
> `environment.d`*, but never confirmed whether they *reached the game process launched through
> Steam*.

**Proton deliberately disables XIM** — documented in an [issue on the official Proton repository](https://github.com/ValveSoftware/Proton/issues/3641).

> XIM is disabled for working around a X11 issue

To avoid crashes in older `libX11`, Valve's official Proton builds compile without XIM support.
fcitx5 communicates with Wine applications over XIM, so the path is severed at that point.

**Re-enabling it via the registry has no effect** — [another issue](https://github.com/ValveSoftware/Proton/issues/3528#issuecomment-589828273)
suggests a workaround: adding the following key to the Wine registry to force XIM back on.

```
[HKCU\Software\Wine\X11 Driver]
"UseXIM"="y"
```

```bash
WINEPREFIX="<the pfx under compatdata>" \
"<path to Proton>/files/bin/wine" reg add \
  "HKCU\Software\Wine\X11 Driver" /v UseXIM /t REG_SZ /d y /f
```

Both `reg query` and `user.reg` confirm that `UseXIM="y"` was written, but the behavior does not
change.

**WINEDEBUG logs show where the key input goes** — I launched `notepad.exe` in the same prefix to
determine whether this was specific to SF6.

```bash
WINEDEBUG=+xim,+ime,+imm wine notepad
```

notepad shows the same symptom, confirming this is not an SF6-specific bug. In the logs,
`xic_create` succeeds and an XIC is created — the connection to fcitx5 itself is established.

```
03f8:trace:xim:xic_create xim 0x..., hwnd 0x300c6
03f8:trace:xim:xic_create created XIC 0x55555d42c140
```

Yet at the moment `Ctrl+Space` is pressed, no `xim` output appears in the log — only `imm`.

```
03f8:trace:imm:ImeProcessKey himc 0x..., vkey 0x20
03f8:trace:imm:ime_driver_call processing vkey 0x20, scan 0x39 -> 0
```

A return value of `0` means "this key was not handled by the IME": Wine's newer IME logic receives
the key and passes it straight through to the application without processing it. The connection to
the XIM server is alive, but the key input never reaches it. That is why enabling `UseXIM` in the
registry had no effect.

> **There was a trap in this verification.** `wine notepad.exe` was launched by hand from an
> interactive shell, so it ran with the shell's environment variables (including the IME-related
> ones set in `~/.zshrc`). The actual game, however, is launched through Steam.
> **The test environment and the real environment were different.**

**Forcing a toggle with fcitx5-remote is not reflected either** — toggling the IME state directly
over DBus with `fcitx5-remote -t` changes fcitx5's own state, but this is not reflected in the Wine
application's input context. Unless the key passes through XIM's handling, an external toggle is
meaningless.

**GE-Proton shows the same symptom** — repeating the same prefix and the same steps with
[GE-Proton](https://github.com/GloriousEggroll/proton-ge-custom) gives the same result: pressing
`Ctrl+Space` in notepad leaves the `xim` logs silent. Since both official and community builds show
identical behavior, this is not about the presence of a specific patch but a structural limitation
in Wine's IME implementation itself.

On native Windows this would not happen at all, since there is no translation layer and Windows'
own IME infrastructure is used directly (not verified in my environment; this is speculation).

## The Original Workaround: Paste via Clipboard

> This section records how I worked around it at the time. **It is no longer necessary.**

Give up on direct input inside Wine applications and switch to the clipboard. Clipboard
synchronization is independent of the IME/XIM machinery, so this part works without trouble.

1. Type Japanese with Mozc in a different application
2. Copy it
3. Return to the Street Fighter 6 window and press `Ctrl+V` in the chat box

I used the PS App and Gboard on Waydroid for this. Typing Japanese inside Waydroid, copying, and
pasting into the host with `Ctrl+V` was already confirmed to work. Incidentally, switching languages
inside Gboard is `Shift+Space`, not `Ctrl+Space`. I still do not know why.

## Update (2026-08-08): Solved

After adding the following to `/etc/environment`, **direct input with `Ctrl+Space` started
working.**

```
GTK_IM_MODULE=fcitx
QT_IM_MODULE=fcitx
XMODIFIERS=@im=fcitx
SDL_IM_MODULE=fcitx
```

I originally found this setting while investigating a separate issue — `Ctrl+Space` not working in
the native Steam client itself. After applying it, SF6's custom room chat started working at the
same time. The Waydroid + Gboard clipboard workaround is no longer needed.

### Why It Worked (Hypothesis, Unverified)

**Everything from here on is speculation I have not confirmed.** The fix itself is a fact; the
reason for it is not verified.

IME-related environment variables had already been set in `~/.config/environment.d/` and
`~/.xprofile` for a long time. The fact that this did not help suggests that **through those paths,
the variables were not reaching the process in which Steam launches the game.**

Steam launches games inside the Steam Linux Runtime (pressure-vessel) sandbox. How environment
variables are inherited there differs both from an interactive shell and from an ordinary desktop
session.

`/etc/environment`, on the other hand, is read via PAM **at login, before Sway even starts**. As a
result it reliably propagates to every process in the session — Sway, the Steam client, and the Wine
processes Steam launches through its sandbox.

If that is correct, then the conclusion written above — "a structural limitation in Wine's
implementation" — was wrong, and in reality **the environment variables simply were not reaching the
path the game was launched through.** It would also explain why `wine notepad.exe` succeeded in
creating an XIC: that instance was started from an interactive shell and carried the shell's
environment.

That said, I have not done the isolating test of deliberately removing the variables to reproduce
the failure. **This remains a hypothesis.**

### Takeaways

For anyone chasing the same symptom, here is what this failure is worth.

- **"It is written in the config file" and "it reached that process" are different claims.** When
  you suspect an environment variable problem, do not read the config file — inspect the target
  process's actual environment (`cat /proc/<pid>/environ | tr '\0' '\n'`).
- **A test application you launched by hand may not be running in the same environment as the real
  thing.** Especially with launch paths that go through a sandbox — Steam, Flatpak, Snap — manual
  testing from an interactive shell may not be a reproduction at all.
- When an upstream issue says "known limitation", it is easy to stop thinking there. **There is no
  guarantee that what the issue describes is the cause of your symptom.**

---

*The Japanese version of this article includes an interactive timeline of the investigation. It is
currently only available in Japanese.*
