---
title: "From Babysitting Claude to Trusting It — Verification Loops, Multi-Clauding, and Background Loops"
date: 2026-08-17T00:00:00+09:00
draft: false
description: "A summary of a Claude Code engineering team conference talk, covering three techniques — verification loops, multi-clauding, and background loops — for turning Claude from something you supervise into something you can trust with real work."
tags:
  - claude-code
  - ai-development
  - transcript
---

> **Source**
>
> - **Post**: [X (formerly Twitter)](https://x.com/iiiichigo_chan/status/2088973572744114251)
> - **Content**: A conference talk (in English) by the Claude Code engineering team, roughly 37 minutes long.
> - **Transcription**: Auto-generated with faster-whisper (small model, CPU, int8). This article is a summary written from that transcript, not a verbatim translation.

If you use Claude Code for a while, it's easy to end up in a routine where a human still has to watch everything Claude writes and correct it when it's wrong. This talk lays out three techniques, built on top of each other, for reducing that supervision: verification loops, multi-clauding, and background loops.

---

## Why Your Tooling Needs to Change

The speaker opens with a simple observation: most of the tooling developers rely on today — linters, IDEs, type checkers, even compilers — was built with humans in mind.

That tooling was designed to help human engineers (and human teams) move faster and more accurately. But now, a growing share of code isn't written by humans anymore — it's written by agents. Much of that human-oriented tooling still works well for agents, but humans also carry a lot of unstated assumptions about their toolchain, and those assumptions become blind spots for Claude. The talk keeps returning to one question: what does an agent need from your codebase that a human simply takes for granted?

---

## Verification Loops — Teaching Claude to Check Its Own Work

The speaker asks the audience to recall the last feature they built, and how they verified it. Most software work, he argues, breaks down into a familiar sequence: design and write code → build it and run compilers/type checkers → run it → check side effects (the UI in a browser, logs, database state) → run unit tests → deploy.

That same playbook, it turns out, can be taught to Claude. Given the right tools and instructions, Claude can write code, detect a failure, debug it, write more code, and keep looping until it reaches a working state. As an example, the speaker described a bug on his personal website where a sign-up button had stopped working: Claude opened a browser, clicked the button, confirmed nothing happened, read the logs to find the cause, fixed the code, and verified the fix — all on its own.

Four concrete pieces make up a verification loop:

* **Run the application** (e.g. start a dev server)
* **Actually use it** (drive a browser via a tool like Claude Code's Chrome extension)
* **Prove the fix worked** (compare before/after, e.g. with screenshots)
* **Remove blockers** (have credentials or seed data ready ahead of time so Claude isn't stuck)

---

## Packaging What Claude Learns as a Skill

Once you've built a verification loop, you can package it as a Skill file so it can be shared with teammates — and with your future self. What makes skills especially powerful is that they can be made self-improving: if a skill is instructed to update itself whenever Claude hits a blocker, it becomes a living, self-documenting resource that the whole team contributes to. The speaker noted that the Claude Code team runs its own verification this same way, with a single skill that keeps rewriting itself as new blockers are discovered.

In the live demo, the speaker used MonkeyType, an open-source typing-test app, as the example project. Claude started a dev server, used a browser-automation tool to check the UI, and wrote up the whole process as a skill file. He then asked Claude to add a new feature — a confetti animation on every typo — and verify it using the skill it had just created. Claude ran into lint errors along the way, fixed them itself, and kept looping until the feature worked.

---

## Multi-Clauding — Managing Several Sessions at Once

Once verification can be delegated, the next step is running more sessions in parallel. In the speaker's own experience, going beyond four or five simultaneous sessions starts to overwhelm his attention. Four tools were presented as ways to manage that:

* **The Claude Code desktop app**: a sidebar listing every session across every surface (local and cloud), with pinning, renaming, and color-coding.
* **Claude agents (for the terminal)**: a terminal-native equivalent of that same overview, replacing the old approach of manually juggling tmux panes and git worktrees. Sessions that need attention — waiting on a permission prompt, for example — automatically float to the top.
* **Claude Code on the web**: decouples your Claude Code sessions from your laptop entirely, so they keep running in the cloud even if your laptop is closed or dies.
* **Remote control**: described as the speaker's favorite feature — the ability to control any session, on any surface, from your phone, with notifications when Claude needs your input.

---

## Background Loops — `/loop` and Routines

The final theme goes a step further: removing the need to manually start a new session at all. Tasks like triaging PR reviews, resolving merge conflicts, updating docs, or keeping an eye on CI don't necessarily need a human present — they just need to run in a loop.

* **The `/loop` command**: runs a given prompt on a recurring interval — for example, "check my open PRs every 10 minutes" — waking the session up, running the prompt, and going back to sleep.
* **Routines**: configured from the web or desktop app, these launch a new Claude Code session on a time-based or event-based trigger, running in the same cloud containers as Claude Code on the web. The Claude Code team itself runs a routine that updates their docs every day, and another that reviews incoming issues and feedback and posts to Slack every six hours.

---

## Takeaways

* Developer tooling was built for humans, but with agents now writing much of the code, the assumptions humans take for granted need to be made explicit for Claude
* **Verification loops**: letting Claude run → check → fix in a loop makes its output more trustworthy, and what it learns can be packaged as a self-updating, reusable skill
* **Multi-clauding**: the desktop app, agents, Claude Code on the web, and remote control each address the real bottleneck of managing multiple sessions — your attention
* **Background loops**: `/loop` and routines remove even the step of manually starting a session
* Stacked together, these three techniques are meant to shift Claude from something you constantly supervise to something you can genuinely delegate to

This summarizes one speaker's and team's way of working — it isn't necessarily the right fit for every engineering team or workflow.
