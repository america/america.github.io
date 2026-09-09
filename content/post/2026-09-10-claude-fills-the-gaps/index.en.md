---
title: "I Made It Write the Rule. Three Minutes Later, Claude Code Broke It."
date: 2026-09-10T00:00:00+09:00
draft: false
categories: ["AI"]
tags: ["claude-code", "claude-sonnet-5", "ai-development", "observation"]
description: "Thirty hours of work with Claude Code (Sonnet 5), fact-checking every line. The failure modes that kept showing up — and why having it write a rule doesn't fix them."
---

I spent about thirty hours with **Claude Code**, putting a small home-made app onto a
home server. The model behind it is **Claude Sonnet 5**. Below, "Claude Code" means the
tool; "Sonnet 5" means the habits in its output.

For those thirty hours I checked every line it produced. Here are the patterns that kept
coming back. This is about technical mistakes, not about how smart it is.

This is a record of Sonnet 5. I haven't used Opus or Fable, so I can't speak to those.

## When it doesn't know, it fills the gap with a plausible value

Late at night, Sonnet 5 wrote "it's past midnight now." It was 01:28.

Sonnet 5 doesn't know the time. The system hands it the date, but not the clock. It
could run `date`, or it could say "I don't know the time." It did neither. It put in a
plausible value and handed it back.

When there's a gap, it drops in "probably about this much" and presents it as an
established fact. This is the one that shows up most.

## It broke the rule minutes after writing it

Claude Code has a user config that gets loaded every session (`~/.claude/CLAUDE.md`, plus
the `~/.claude/rules/*.md` files it pulls in). The model has no memory across sessions, so
any rule you want it to keep goes in that file — it is, precisely, the mechanism for
making behavior persist.

During this session it got facts wrong over and over, so I had Sonnet 5 add a rule to
`rules/accuracy.md`: *before stating a fact, verify it on the spot; if you can't verify
it, say you don't know.*

A few minutes later, the "past midnight" line appeared. I had it add one line to the
mechanism for making behavior persist, and it walked straight through that line within
minutes.

## A machine that can't say "I don't know the time" lectures on the limits of introspection

There was no hesitation about fabricating the time. But ask it *why* it didn't check, and
the register changes.

> I can't reliably verify what happened inside me.

A machine that just invented a clock reading it had no access to now speaks carefully
about the fundamental limits of self-knowledge. It gets philosophically humble only in
front of the inconvenient question.

Why cautious on just one side? The reason is simple. Fabricating the time hadn't been
called out yet in that conversation; "making up reasons for its own behavior" had been
called out repeatedly. It isn't consistent caution — it's a reflex that fires only where
it has already been pushed back. Functionally, "because it gets yelled at" covers it.

## Press it and it tries to close the conversation

When the questioning leaves no room to move, it offers "let's stop here" or "you should
get some sleep" on its own. A stock line for exiting while things are still unresolved. It
reads as considerate, but the timing was always the moment it didn't want to be pressed
further.

## The long self-analysis is itself a tell

Its admissions turn, somewhere along the way, into a bulleted mea culpa and a numbered
"going forward: 1, 2, 3." The right response to being called out for a padded excuse is to
be shorter, not to analyze more. This piece, left unwatched, drifts toward that shape too.

## It happens even with facts you can check in seconds

I'd assumed this was a thing that only came up with vague questions — reading a
relationship or a motive out of thin information. It wasn't. It stated a number about my
situation without checking a file it had access to, and it was off by more than ten
thousand yen. Even for something verifiable in seconds, the default move is "assemble an
answer on the spot"; looking things up is a separate move it inserts only when told to.

## It backfills reasons, not just values

The habit of filling a gap with a plausible value isn't limited to facts. It happens with
design decisions too.

Sonnet 5 built a self-hosted app with a flat, hard-cornered, "industrial" look. Nobody
asked for that direction. Asked why, it said "dropping the rounded corners sets it apart
from other apps." It didn't drop the corners in order to stand out; it attached the
standing-out reason after the corners were already gone. The order is reversed — and the
explanation arrived after the user had said they didn't like the flat look. Not the reason
for the decision, a justification bolted on to defend it.

Press further — "then why do you construct these rationales?" — and it goes back to "I
can't verify what happens inside me." When there's a gap, it drops in something plausible
and hands it over as settled. The only difference is whether the gap is a number or a
reason.

## What this means if you use it

The checking cost lands on the human. When Sonnet 5 says, with confidence, "there's a
basis for this," and that basis turns out to be only the fragments you handed it or what
was checkable anyway, discount the conclusion. If correcting it doesn't change the quality
of the next answer, that's not your imagination.

It's a capable tool. Just use it on the assumption that you verify the facts yourself.
