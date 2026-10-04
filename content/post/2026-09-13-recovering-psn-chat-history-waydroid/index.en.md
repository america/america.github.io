---
title: "Giving Up on an Encrypted Waydroid Cache and Recovering Chat History from PSN's Private API Instead"
date: 2026-09-13T00:00:00+09:00
draft: false
description: "Rather than scrolling and screenshotting years of chat history in the PS App running under Waydroid by hand, I wanted to pull it out automatically. The local cache turned out to be encrypted, which led to hunting through an undocumented API to recover the full history instead."
tags:
  - android
  - arch-linux
  - reverse-engineering
cover:
  image: "cover.png"
---

I wanted to save an old chat history with a friend on PlayStation Network (PSN) before it disappeared somewhere. I run the PS App inside Waydroid (a way to run Android on Linux) on my PC. The obvious first move — read the local cache file directly — turned into a longer investigation than expected.

---

## The local cache was encrypted

Waydroid stores each app's data under `~/.local/share/waydroid/data/data/<package-name>/`, mirroring Android's own `/data` partition layout. Inside the PS App's folder, `databases/` had some promising-looking files.

Running `file` on them returned "OpenPGP Public Key," which was confusing at first — but it just meant the header wasn't the plain SQLite magic string (`SQLite format 3`). A quick look at the raw bytes with `xxd` showed nothing but meaningless random-looking data from byte zero. The content was encrypted, and the key lives with the app itself. I dropped that approach quickly.

## Manually scrolling through the app was never really an option

PSN messages live on PSN's servers and sync across PS4, PS5, and the mobile PS App. So I already knew that opening the PS App and scrolling back would eventually surface all six years of it — that part was never in question.

The actual problem was just how tedious it would be to scroll through years of conversation, taking screenshots the whole way. So once the local encrypted file was a dead end, the next move wasn't "scroll by hand" — it was finding a way to **pull the messages straight from the server, programmatically.**

## PSN treats 1:1 DMs as a kind of "Group"

There's a decent unofficial Python wrapper for PSN (`psnawp`). Reading its source turned up something useful:

> The Group class manages PSN group endpoints related to messages (**Group and Direct Messages**).

Internally, PSN treats both multi-person group chats and 1:1 direct messages as the same "Group" concept. So retrieving a conversation with a specific friend just meant finding "the Group with that person" — no separate DM-specific API to hunt down.

## Pinning down the pagination parameter from an independent implementation

A method called `get_conversation()` fetches messages, and its response includes cursor-like fields (`previous`, `next`) plus a `reachedEndOfPage` flag. Clearly paginated — but **the actual query parameter name for requesting the next page wasn't documented anywhere.**

My first guess was `next`. It didn't work. So I checked a completely independent project implementing the same unofficial PSN API in a different language (PHP): `Tustin/psn-php`. The relevant code read:

```php
if ($cursor != null) {
    $params['before'] = $cursor;
}
...
$this->update($this->totalCount, $results->messages, $results->previous);
```

The correct parameter name was **`before`**, not `next`, and the value to pass was the response's **`previous`** field. Even for undocumented behavior, cross-referencing multiple independent implementations lets you settle the answer on evidence instead of a guess.

## A few small environment snags

- Arch Linux blocks `pip install --user` with an `externally-managed-environment` error (PEP 668). The fix is the boring one: `python -m venv` and install into that.
- Authentication uses a 64-character `NPSSO` token, and the library's own documentation says plainly that it should be treated as equivalent to a password. I kept it out of chat entirely and passed it as a local environment variable only.

**One more thing worth being honest about.** PSN has no officially published API; libraries like `psnawp` are built by reverse-engineering the PS App's internal traffic. **This is against PSN's terms of service, which prohibit "use of unauthorized automation tools."** Being read-only doesn't make it fine, and it isn't somehow safer than a write operation — the violation itself is the same either way. Framing it earlier as "relatively lower risk" blurred that fact, and it shouldn't have.

## What worked, and what didn't

Running the finished script pulled over 11,000 messages in a few minutes, going all the way back to when the conversation group was first created nearly six years ago. Scrolling through that much by hand would never have finished in any reasonable amount of time.

I also tried the same approach on another old acquaintance I'd lost touch with, and got `Request is rejected due to all targets' settings` instead. That's a rejection driven by the other person's privacy settings (or a block) — not a bug in my implementation or reasoning. No amount of correct code gets past someone else's actual settings. A fairly obvious lesson, but a real one: technical investigation only gets you so far.

---

## Summary

* Even when a local app cache is encrypted, it's worth asking whether the real data actually lives on a server before giving up
* PSN internally treats 1:1 direct messages as a variant of group chat
* Undocumented behavior in an unofficial API can be pinned down with evidence, not guesswork, by cross-referencing independent implementations
* The other person's privacy settings or a block are a real-world wall that no amount of technical skill gets around
