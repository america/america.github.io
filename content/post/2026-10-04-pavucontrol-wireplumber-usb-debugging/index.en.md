---
title: "pavucontrol wouldn't start. Chasing it led from a WirePlumber Lua bug down to a USB protocol error"
date: 2026-10-04T00:00:00+09:00
draft: true
description: "pavucontrol (PulseAudio's volume control app) refused to open, throwing 'pa_context_get_card_info_by_index() failed: Invalid argument'. A record of digging through journalctl, WirePlumber's source (alsa.lua), and down into the kernel's USB logs."
tags:
  - pipewire
  - usb
  - debugging
  - arch-linux
cover:
  image: "cover.png"
---

I tried to open pavucontrol to adjust the volume, and got this instead:

```
pa_context_get_card_info_by_index() failed: Invalid argument
```

That's it. It wouldn't open.

Environment: Arch Linux, sway, PipeWire 1.6.8, WirePlumber 0.5.16. It looked like the usual "the PulseAudio compatibility layer is in a mood" kind of problem. Once I actually started digging, it went deeper than expected.

---

## Start with journalctl

Checking the logs via `systemctl --user status pipewire pipewire-pulse wireplumber`, both pipewire and wireplumber were spewing the same error every 3-5 seconds — and it was happening live, while I was investigating.

```
pipewire: spa.alsa: 'front:0': capture open failed: Device or resource busy
pipewire: pw.node: (alsa_input.usb-Kingston_HyperX_Quadcast_4110-00.analog-stereo-94) suspended -> error (Start error: Device or resource busy)
wireplumber: s-monitors: Failed to create ALSA node alsa_input.usb-Kingston_HyperX_Quadcast_4110-00.analog-stereo: Object activation aborted: PipeWire proxy destroyed
wireplumber: wplua: [string "alsa.lua"]:446: attempt to call a nil value (method 'store_managed_pending')
```

A suspect device name shows up right there: a USB microphone, a Kingston HyperX Quadcast.

I checked `fuser -v /dev/snd/*` and the only processes holding the ALSA devices were wireplumber and pipewire themselves. No other app (Discord, etc.) was hogging the mic. This was self-contained breakage inside PipeWire.

---

## Wait, "Lua"?

Look closely at the log and you'll see `wplua: [string "alsa.lua"]:446`. This is supposed to be a C daemon. Why is a Lua error showing up?

WirePlumber's core (the daemon itself) is written in C, using GLib/GObject. But the policy-ish logic — how to handle ALSA, Bluetooth, camera devices and so on — is factored out into `.lua` scripts. `/usr/share/wireplumber/scripts/monitors/alsa.lua` is exactly that.

This is the result of a deliberate design change. WirePlumber's predecessor, `pipewire-media-session`, had this kind of logic hard-coded in C. WirePlumber moved it into Lua scripts specifically so that **device handling and policy could be customized without recompiling the daemon itself.** Methods like `parent:store_managed_pending()` are C-implemented functions exposed to Lua through WirePlumber's binding layer.

Which means this bug happens right at the seam between WirePlumber's "rigid C core" and its "flexible Lua layer." The Lua code running inside an async callback simply didn't have an accurate picture of whether the C-side object (the proxy) was still alive.

---

## Reading the source

The log even gives a line number: `wplua: [string "alsa.lua"]:446`. So I went and read the actual file.

```
/usr/share/wireplumber/scripts/monitors/alsa.lua
```

Line 446 was here:

```lua
-- create the node
local node = Node("adapter", properties)
parent:set_managed_pending(id)
node:activate(Features.ALL, function (n, err)
    if err then
      log:warning ("Failed to create ALSA node " ..
          tostring (properties["node.name"]) .. ": " .. tostring(err))
      parent:store_managed_pending(id, nil)   -- ← here
    else
      monitorNodeError (n)
      parent:store_managed_object(id, n)
    end
end)
```

`node:activate()` is asynchronous; the callback fires once the result comes back. When the underlying ALSA device fails to open ("busy", in this case — `err` is set), the cleanup path calls `parent:store_managed_pending(id, nil)`.

My first guess was that `parent` gets destroyed mid-flight and turns into a dead object. But that theory didn't fully add up. Neither `Node` nor `Device` are defined in Lua at all — they're thin wrappers around C-side objects. "The object gets destroyed and its methods disappear" felt like an odd way for WirePlumber's Lua bindings to actually behave.

So I cloned WirePlumber's own repository and went to look at the Lua↔C boundary directly.

```bash
git clone --depth 1 --branch 0.5.16 \
  https://gitlab.freedesktop.org/pipewire/wireplumber.git
```

Here's the C-side registration table for what methods `parent` (the Lua wrapper around `WpSpaDevice`) actually has:

```c
// modules/module-lua-scripting/api/api.c
static const luaL_Reg spa_device_methods[] = {
  { "iterate_params", spa_device_iterate_params },
  { "set_param", spa_device_set_param },
  { "iterate_managed_objects", spa_device_iterate_managed_objects },
  { "get_managed_object", spa_device_get_managed_object },
  { "store_managed_object", spa_device_store_managed_object },
  { "set_managed_pending", spa_device_set_managed_pending },
  { NULL, NULL }
};
```

`store_managed_object` and `set_managed_pending` are there. **A method named `store_managed_pending` is registered nowhere.**

Just to be sure, I searched the entire history of the repo: `git log --all -S "store_managed_pending" -- '*.c' '*.h'`. Zero hits. **This method has never existed on the C side, ever.**

Which means `parent:store_managed_pending(id, nil)` calls a name that never existed in the first place. It doesn't matter whether the object is alive or dead — any time this code path runs, it crashes on a nil call. This isn't really a race condition. It's closer to a plain typo.

`git blame` traced the line back to a single commit:

```
e923c93a Julian Bouzas 2026-08-25  alsa: Always activate all device and node features
```

The commit message:

> alsa: Always activate all device and node features
>
> Also avoid using the param node properties when logging warning if device or node
> failed to activate, because the properties might be NULL if the node or device
> was destroyed before finishing activation.
>
> See #996

The irony: **this commit exists specifically to fix the "device/node gets destroyed before activation finishes, causing a NULL-reference crash" bug** — the exact bug class I'd suspected at first (upstream issue #996). Here's the actual diff:

```diff
   -- create the node
   local node = Node("adapter", properties)
   parent:set_managed_pending(id)
-  node:activate(Feature.Proxy.BOUND, function (n, err)
+  node:activate(Features.ALL, function (n, err)
       if err then
         log:warning ("Failed to create ALSA node " ..
-            n:get_property ("node.name") .. ": " .. tostring(err))
+            tostring (properties["node.name"]) .. ": " .. tostring(err))
+        parent:store_managed_pending(id, nil)
       else
         monitorNodeError (n)
         parent:store_managed_object(id, n)
       end
   end)
```

Changing `n:get_property("node.name")` (which crashes outright if `n` is NULL) to `tostring(properties["node.name"])` is a correct fix. But the cleanup call added alongside it, `parent:store_managed_pending(id, nil)`, references a method name that doesn't exist. It should have called `store_managed_object(id, nil)` — the same function already used elsewhere in this exact file (lines 461, 621, 627). The C implementation even has a doc comment that spells out exactly this use case:

```c
/*
 * \param self the spa device
 * \param id the (device-internal) id of the object
 * \param object (transfer full) (nullable): the object to store or NULL to remove
 *   the managed object associated with \a id
 */
void
wp_spa_device_store_managed_object (WpSpaDevice * self, guint id,
    GObject * object)
```

Pass `NULL` for `object`, and it removes the managed object tied to that id — exactly what this error-handling code was trying to do. The textbook-correct function was sitting right there, a few lines away.

So the real story: **a 2026-08-25 commit that genuinely fixed a real bug (device destroyed before activation completes) introduced a typo in its own cleanup code — writing `store_managed_pending` where it meant `store_managed_object`.** Lua is dynamically typed, so calling a nonexistent method doesn't raise anything at "compile" time. This one line sat there unnoticed until an actual error path (a USB device going busy) finally exercised it.

### It had already been fixed

At this point I was ready to go file a GitLab issue. First, just to be safe, I re-ran `git log --all -S "store_managed_pending"` — this time without pinning to a tag, across the whole history.

```
f9891d25 alsa: Use store_managed_object() to remove pending Ids
e923c93a alsa: Always activate all device and node features
```

Two hits now, not one. Commit `f9891d25`'s message:

> alsa: Use store_managed_object() to remove pending Ids
>
> This fixes a typo as store_managed_pending() does not exist.
>
> See #999

Word for word, the exact conclusion I'd independently arrived at. **On 2026-09-01, the same person who introduced the bug (Julian Bouzas) fixed it himself, one week later.** The referenced issue, #999, is a different one from #996 (the one tied to the original commit) — presumably someone else hit the crash and reported it separately. Here's the diff:

```diff
       if err then
         log:warning ("Failed to create ALSA node " ..
             tostring (properties["node.name"]) .. ": " .. tostring(err))
-        parent:store_managed_pending(id, nil)
+        parent:store_managed_object(id, nil)
       else
```

This fix landed in `0.5.17` and `0.5.18`. What's installed here is `0.5.16`. **So the actual task here was never "file a GitLab issue." It was just "update the package."**

Four layers down, cloning the source, running `git blame` to pin the exact commit that introduced it — and right as I was about to start drafting an issue report, it turned out someone already beat me to it. Not a bad ending, honestly. Filing an issue without first checking whether it was already fixed would have been the actually embarrassing outcome.

Every time this Lua error fires, that card's (the USB mic's) internal PipeWire state is left half-broken. When pavucontrol tries to enumerate every card, the query against this broken card is what makes `pa_context_get_card_info_by_index()` return `Invalid argument` and crash.

---

## But why does it go "busy" in the first place?

At this point I'd identified "a WirePlumber bug" — but that's just the result. I still didn't know why the ALSA device kept going busy in the first place.

Then I looked at the kernel log (`journalctl -k`), and the story changed.

```
usb 3-1: new full-speed USB device number 23 using xhci_hcd
usb 3-1: Device not responding to setup address.
usb 3-1: Device not responding to setup address.
usb 3-1: device not accepting address 23, error -71
usb 3-1: WARN: invalid context state for evaluate context command.
usb 3-1: USB disconnect, device number 23
usb 3-1: new full-speed USB device number 24 using xhci_hcd
usb 3-1: device descriptor read/64, error -71
...
```

This cycle repeated itself over and over on the USB port the mic was plugged into (`usb 3-1`). `error -71` is `EPROTO` (protocol error) in the Linux kernel. The USB device stops responding partway through enumeration, the host assigns it a new device number and retries, and it fails again.

In other words: **"WirePlumber fails to grab the ALSA device" was downstream. The actual instability started at the kernel level, with the USB device itself.**

---

## Not a hub, not power management

My first suspicion was the USB hub — earlier the same day, a hub had been the culprit in a completely unrelated keyboard issue. But `lsusb -t` showed the mic plugged directly into the root port of the host controller, with no hub in between. A different code path entirely.

I checked power management too.

```
/sys/bus/usb/devices/3-1/power/control → on (autosuspend disabled)
/sys/bus/usb/devices/3-1/bMaxPower → 100mA
```

Autosuspend is disabled (always "on"), and the device itself reports a modest 100mA draw. Power starvation or runaway power-saving doesn't look like the explanation.

---

## Down to the chipset

```
$ lspci -k
09:00.3 USB controller: AMD Matisse USB 3.0 Host Controller
```

An AMD Matisse-generation (Ryzen 3000 series) USB 3.0 host controller, on an ASRock motherboard.

Searching for the same "device not accepting address, error -71" turned up a forum thread about an ASRock B550 board (also AMD) hitting the identical error with an entirely different USB device (a mouse). That thread never reached a definitive root cause either — the user eventually just returned the device.

The most honest answer right now: this looks like one of those occasional, not-fully-explained compatibility quirks between AMD-chipset xHCI controllers and specific USB peripherals.

---

## Summary

- Starting from an application-level symptom (pavucontrol won't launch), I went four layers down: WirePlumber's source code (a nonexistent Lua method call), and the kernel's USB log (`error -71`, failed enumeration).
- The WirePlumber bug was real, and it's not some fuzzy race condition — it's a **plain typo in commit `e923c93a` (2026-08-25): `store_managed_object` written as `store_managed_pending`.** Lua's dynamic typing meant nobody noticed until the error path actually ran.
- **The typo was already fixed by the same author in commit `f9891d25` (2026-09-01)**, shipped in `0.5.17` and `0.5.18`. The installed `0.5.16` was, as it happens, exactly one release behind the fix.
- The root cause (why the USB connection intermittently stops responding) is most likely a compatibility quirk between the AMD Matisse xHCI controller and this particular USB mic, but I couldn't pin it down completely. Updating WirePlumber won't fix that part.
- Two practical steps: update WirePlumber to `0.5.17` or later (which removes the Lua bug entirely), and if the USB layer is still flaky after that, fall back on `systemctl --user restart wireplumber` as needed, or try unplugging/replugging the mic or a different port.
- The root cause (why the USB connection intermittently stops responding) is most likely a compatibility quirk between the AMD Matisse xHCI controller and this particular USB mic, but I couldn't pin it down completely.
- As a workaround, `systemctl --user restart wireplumber` fixes it. If it recurs, unplugging/replugging the mic or trying a different port is worth testing.

I went in chasing a software bug and ended up at a hardware compatibility quirk. That's a common enough story — but reading through journalctl, the source code, and the kernel log in order meant every step of what actually happened could be put into words, not just guessed at.
