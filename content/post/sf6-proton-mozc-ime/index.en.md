---
title: "Japanese Input Not Working in Street Fighter 6 (Proton) — Fixed by IME Variables in /etc/environment"
date: 2026-08-06T20:30:00+09:00
lastmod: 2026-08-08T00:00:00+09:00
draft: false
description: "I concluded that Ctrl+Space failing in SF6's chat box was a structural limitation of Wine/Proton's IME implementation. That conclusion was wrong. Setting IME environment variables in /etc/environment made direct input work. Here is the original investigation, and the correction."
categories: ["Linux", "トラブルシュート"]
tags: ["Arch Linux", "Proton", "Wine", "Steam", "Street Fighter 6", "fcitx5", "Mozc", "IME", "Waydroid"]
cover:
  image: "cover.png"
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

### Why It Worked (Confirmed From Source)

IME-related environment variables had already been set in `~/.config/environment.d/` and
`~/.xprofile` for a long time, and neither helped. `/etc/environment` did. To find out why, I went
and read the actual source code involved.

**`.xprofile` is never sourced at all under a Wayland session.** My setup is SDDM (display manager)
launching Sway (a Wayland compositor). SDDM's own
[`wayland-session`](https://github.com/sddm/sddm/blob/develop/data/scripts/wayland-session) script
(verified directly from the upstream source) looks like this:

```sh
case $SHELL in
  */bash|*/zsh)
    exec $SHELL --login -c 'exec "$@"' - $@
    ;;
  ...
```

For bash/zsh, it just execs the login shell in `--login` mode. The string `.xprofile` never appears
anywhere in this script. That file is only sourced by the X11-specific
[`Xsession`](https://github.com/sddm/sddm/blob/develop/data/scripts/Xsession) script — the
Wayland-specific `wayland-session` script never implements it. **It's not that the variable "didn't
reach" anything — `.xprofile` itself was simply never executed in the first place.**

**Steam Linux Runtime (pressure-vessel) doesn't filter environment variables on its own.** The source
for Steam's sandbox mechanism ([`steam-runtime-tools`](https://gitlab.steamos.cloud/steamrt/steam-runtime-tools),
cloned and read directly) has this in `pressure-vessel/wrap-context.c`:

```c
self->original_environ = g_get_environ ();
```

`g_get_environ()` is a GLib function that copies whatever environment the calling process — Steam
itself — actually has at that moment. The sandbox's environment is built on top of this
`original_environ` (see `pv_bind_and_propagate_from_environ` in `pressure-vessel/wrap.c`). In other
words: if it's in Steam's environment, it reaches the sandbox; if it isn't, it doesn't. Pressure-vessel
isn't actively stripping IME variables out.

**`/etc/environment` sits in a spot that sidesteps both problems.** PAM (`pam_env`) reads it when the
login session opens — before the shell SDDM launches, before Sway even starts. It doesn't depend on
Wayland vs. X11, or on systemd --user's unit-launch mechanics. That gives an unbroken chain: Sway →
Steam (launched from within the Sway session) → whatever `g_get_environ()` captures from Steam's own
environment — and the variable reliably survives all the way into the sandbox.

As for `~/.config/environment.d/*.conf`: that gets loaded by the `systemd --user` manager at startup
and kept as **environment for units the manager itself launches**. If Sway isn't started as a
systemd --user unit (e.g., it's exec'd directly from a login shell instead), there's no guarantee
that environment automatically propagates to Sway or its children. That depends on how Sway itself
gets launched, which is outside the scope of what I dug into here.

This also explains why `wine notepad.exe` succeeded in creating an XIC earlier: that process was
launched directly from an interactive shell, which already carried the relevant variables (from
`/etc/environment` and the shell's own startup files) — a different environment than what Steam's
launch path provided. That gap is now accounted for, not just conveniently explained away.

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
