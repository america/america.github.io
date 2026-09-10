---
title: "Chasing a swayfx scratchpad crash: a fork/upstream mismatch found with git blame"
date: 2026-08-09T17:00:00+09:00
draft: false
categories: ["Linux", "トラブルシュート"]
tags: ["Arch Linux", "sway", "swayfx", "wlroots", "scenefx", "Wayland", "IPC", "git blame", "OSS"]
description: "A scratchpad toggle segfaulted swayfx and dropped me to the login screen. It looked like a swayfx-only bug; git archaeology showed it was an upstream sway bug the fork had inherited and not yet re-synced the fix for."
---

## The symptom

On my everyday swayfx setup, bringing a scratchpad window up and then hitting
`scratchpad show` a second time (the toggle's "hide" path) crashed the whole
compositor. It threw me all the way back to the SDDM login screen — a loud
crash.

Environment:

| Item | Value |
| --- | --- |
| swayfx | 0.5.3-4 (based on sway 1.11.0, Arch Linux package) |
| wlroots | 0.19.3 |
| GPU | AMD Radeon RX 6600 XT (amdgpu) |

The bindsym was:

```
bindsym $mod+minus scratchpad show, resize set width 90 ppt height 90 ppt, move position center
```

`scratchpad show` chained with `resize` and `move` in one command. Press it
twice in a row (first press shows the window, second press is hit while it's
still focused, which takes the hide path) and it crashes.

## Getting a stack trace

I analysed the core dump with `coredumpctl` + `gdb` (debug symbols installed).

```
#0  root_scratchpad_hide (con=0x55f058a52400) at ../swayfx-0.5.3/sway/tree/root.c:257
257		set_container_transform(con->pending.workspace, con);
        seat = 0x55f0580db940
        focus = 0x55f058a41760
        ws = 0x0
```

`ws` (`con->pending.workspace`) was `NULL` when it reached
`set_container_transform()`, which dereferenced it and crashed. The code
looked like this:

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
	set_container_transform(con->pending.workspace, con);   // no guard
```

The `NULL` check was scoped to the `FULLSCREEN_GLOBAL` case only, so any
*other* reason `pending.workspace` is `NULL` falls straight through.
`set_container_transform()` is a swayfx-specific addition (it doesn't exist
in upstream sway), so at first glance this looked like a swayfx bug.

I filed it as [swayfx Issue #560](https://github.com/wlrfx/swayfx/issues/560).

## "Is this in upstream?"

The next day the maintainer replied, briefly:

> is this present in upstream? We don't touch the scratchpad code much if at all

A terse question, but a fair one — and worth actually checking by hand.

## Tracing it

*The Japanese version of this article includes an interactive step-by-step
diagram of the investigation. It is Japanese-only.*

The answer: "yes, upstream had the same bug — and upstream had already fixed
it; swayfx just hadn't merged that fix yet." The maintainer's instinct
("is it upstream?") was right, but backing that up meant walking the commit
history across both the fork and upstream with `git blame`.

## Verifying it on real hardware

Rather than stopping at a guess, I decided to confirm on an actual machine
that current `master` really is fixed.

### Build

```bash
git clone https://github.com/wlrfx/swayfx.git ~/src/swayfx
cd ~/src/swayfx
meson setup build --prefix=/tmp/swayfx-test -Dbuildtype=debug
```

Two dependency snags:

1. `meson`/`ninja` not installed → `pacman -S meson ninja`
2. `scenefx-0.5` required, but the system only had `scenefx0.4` (0.4.1-2)
   → installed the AUR `scenefx0.5` package. The sonames differ
   (`libscenefx-0.4.so` / `libscenefx-0.5.so`), so it coexists with
   `scenefx0.4` fine — same as `wlroots0.19` / `wlroots0.20` living side by
   side.

After building, installed to `/tmp/swayfx-test`, keeping in mind that
`/tmp` is tmpfs (in-memory) and gets wiped on reboot.

### A nested instance for testing

To avoid breaking the real session, I ran the freshly built swayfx as a
**nested Wayland client** inside the currently running swayfx session:

```bash
WLR_BACKENDS=wayland /tmp/swayfx-test/bin/sway -c ~/.config/sway/config
```

Several things got in the way here.

**Focus leaking to the outer session** — clicking the nested window didn't
capture keys; `$mod+Enter` and friends were picked up by the outer session,
so wezterm launched *outside* the nested compositor.

**wezterm's single-instance behaviour** — this turned out not to be a focus
problem at all: wezterm reuses a single GUI process by default. Launching it
with a different `WAYLAND_DISPLAY` just adds a tab to the existing GUI
instance. You need `wezterm start --always-new-process` to get an
independent process.

**`enable_wayland = false`** — still nothing showed up in the nested
compositor. The cause was different again: the wezterm config had
`config.enable_wayland = false` (comment said only "run under XWayland", no
reason in the git log), so wezterm always runs via XWayland. I had to point
it at the nested sway's XWayland display (`/tmp/.X11-unix/X2`) with
`DISPLAY=:2` explicitly before a window finally appeared inside the nest.

### Dropping key input, driving it over IPC

Given how flaky GUI key input through the nest was, I ended up sending
commands straight to the nested sway's IPC socket with `swaymsg`:

```bash
export SWAYSOCK=/run/user/1000/sway-ipc.1000.<PID>.sock
swaymsg 'move scratchpad'
swaymsg 'scratchpad show, resize set width 90 ppt height 90 ppt, move position center'   # 1st: show
swaymsg 'scratchpad show, resize set width 90 ppt height 90 ppt, move position center'   # 2nd: hide path
```

After the second call the process was still `state=S` (normal sleep), no new
crash in `coredumpctl`. `get_tree` showed the container back in the
`__i3_scratch` workspace, intact.

**No crash.** Confirmed by hand that `master` is fixed.

## Reporting back and closing

I commented on the issue with the git-archaeology results and the on-machine
verification:

- Upstream sway had the same class of bug and had already fixed it
  (swaywm/sway#8909, commit `ecfea6b8` — replaced the narrow condition with
  a general `if (!con->pending.workspace) return;`).
- swayfx merged that upstream fix as part of #537 (the wlroots-20 +
  scenefx-0.5 sync), so current `master` no longer reproduces it.
- I built `master` and ran the exact repro steps; it doesn't crash.

Then closed the issue.

## Takeaways

- A crash that looked swayfx-specific was actually an upstream sway bug the
  fork had inherited, with the upstream fix not yet merged.
- The maintainer's "is it upstream?" was the right instinct, but confirming
  it meant `git blame` across both the fork's and upstream's history.
- I didn't stop at "should be fixed" — I built `master`, ran it nested,
  drove the repro over IPC, and checked by hand that it doesn't crash.
- Along the way, a pile of small unrelated snags stacked up (dependency
  version mismatches, nested-compositor focus, wezterm's single-instance
  behaviour and its XWayland-only config). Building a debugging environment
  is often an investigation of its own.
