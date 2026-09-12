---
title: "Why Claude Code Deletes 80% of Its System Prompt Every Release: Boris Cherny on Building for the Opus 5 Era"
date: 2026-09-12T00:00:00+09:00
draft: false
description: "A summary of Claude Code creator Boris Cherny's talk at Y Combinator Startup School 2026: why the team deletes most of the system prompt with every new model, the idea of 'unhobbling,' and how to run thousands of agents at once."
tags:
  - claude-code
  - ai-development
  - transcript
---

> **Source**
>
> - **Post**: [YouTube (Y Combinator's official channel)](https://www.youtube.com/watch?v=qyPCVqFUyDo), "Boris Cherny: We Cut 80% of Claude Code's Prompt"
> - **Content**: A ~36-minute conversation between Claude Code creator Boris Cherny (Anthropic) and Diana Hu at Y Combinator Startup School 2026
> - **Transcript**: Auto-generated with faster-whisper (small model, CPU, int8), then summarized and rewritten in this article rather than reproduced verbatim

Fresh off the Opus 5 launch, Claude Code creator Boris Cherny sat down for a conversation that turned into a practical look at how to build products when the underlying model keeps getting more capable — including the habit of deleting most of Claude Code's system prompt every time a new model ships.

---

## What's different about Opus 5

Cherny highlighted two things. First, **dramatically longer runtimes**. Combined with auto mode, the model can keep working for days, weeks, or months without needing extra scaffolding — it just decides the task isn't done yet and keeps going.

Second, **resistance to prompt injection**. The classic "lethal trifecta" problem — where a model reads a malicious instruction embedded in some web content and acts on it, like deleting a user's files — is something Opus 5 essentially no longer falls for. He attributed this to three layered defenses: an aligned model itself (built on years of alignment research), a prompt-injection classifier running on all traffic (based on mechanistic-interpretability work that detects the neurons that light up during an injection attempt), and a separate auto-mode classifier.

---

## Why delete 80% of the system prompt?

Claude Code as a product is in constant flux — every time a new model ships, the team rewrites large parts of the system prompt, the tool definitions, and the tool-level prompts. The reason: instructions written for one model often don't transfer to the next. Opus 5 in particular is smart enough that much of what the system prompt used to compensate for — behavior the model "should" have known but didn't — is no longer necessary.

Internally this process is called an "ablation": delete the entire system prompt, then add lines back one at a time to measure the actual impact of each one. You can experiment with this yourself — `--system-prompt` lets you swap in any prompt you want, and an undocumented environment variable (`CLAUDE_CODE_SIMPLE=1`) strips out essentially all prompting, including from the tools. Interestingly, the team has found that **the model behaves slightly more intelligently with no prompt at all** — but a product needs some of that scaffolding back to behave the way a human user expects.

When Diana Hu summarized this as "have the courage to delete everything every six months," Cherny agreed — and extended the advice beyond people building agentic products. **For anyone just using Claude Code, he recommends deleting your claude.md, your skills, and your hooks every six months and seeing what the model does without them.** For Opus 5 specifically, he said this is worth trying seriously, since the model may no longer need the extensive instructions that were necessary for older models.

Evals are the one thing that survive longer, though not indefinitely — as models improve exponentially, an eval set tends to saturate within one to three model generations and has to be rebuilt.

---

## "Unhobbling" and product overhang

Another term Cherny uses is "unhobbling" — the flip side of a concept called "product overhang": the gap between what a model can already do today and what the surrounding product actually lets it do.

He traces this directly to Claude Code's origin story. About a year and a half to two years ago, Sonnet 3.5 — the best coding model at the time, though modest by today's standards — was capable of writing entire files, but the coding products of the era were still stuck doing single-line autocomplete or read-only chat. The idea behind Claude Code was to strip away the scaffolding and give the model the simplest possible harness — full terminal access — so it could actually use the capability it already had.

"Everyone in this room could build the next Claude Code," he told the audience, "if you figure out how to unhobble the models you're working with."

---

## Two examples: an 11-day Zig-to-Rust rewrite, and a model that draws with OpenCV

He gave two concrete examples of unhobbling in practice.

The first involves Bun, the JavaScript runtime (a faster Node.js alternative) that Claude Code itself is built on. Bun is written in Zig, a systems language with manual memory management — a natural source of memory leaks. The team originally had Claude fuzz the codebase to find leaks one at a time. At some point an engineer on the Bun team decided to just try having the model rewrite the whole thing from Zig to Rust, using Bun and Node.js's extensive existing test suites to verify correctness. Thrown at a "dynamic workflow" (Claude Code's feature for orchestrating dozens to hundreds of agents) as a single prompt, with some human steering along the way, **the rewrite finished in 11 days** and is now running in production.

The second is a more playful internal discovery: giving Opus 5 access to OpenCV and asking it to draw. Despite never being trained to draw, it turned out to be quite good — portraits, animals, landscapes — simply because of how the request was framed. Cherny called this an "elicitation gap," and suspects there are dozens or hundreds of similar undiscovered capabilities sitting in today's models.

---

## From prompt engineering to verification

Cherny noted that "prompt engineer" as a job title gave way to "context engineer," and neither term really captures what matters now. The real skill is **giving Claude a task that's a bit too hard, and making sure it has a way to verify its own work along the way** — and verification, he argued, is the single thing most people still get wrong.

As an example, he described an experiment rewriting Anthropic's Electron-based desktop app natively in Swift. Using Claude Tag (Claude running inside Slack), he gave it access to a macOS runner on GitHub and an empty Swift codebase, then gave it one instruction: rewrite the app in Swift, run both versions in a macOS VM, compare them pixel by pixel via screenshots, and don't stop until it's done. **At the time of the talk, it had been running for over two weeks** — and along the way, Claude had spun up its own Slack channel to post progress screenshots every few minutes.

His takeaway: there's no special trick here, no `/go` or `/loop` required. Give the model a task and a way to verify its own output, and it just runs.

---

## Running thousands of agents

Two mechanisms came up for scaling Claude Code to run large numbers of agents at once:

- **Dynamic workflows**: agents run inside a sandbox (a VM built on the Bun runtime), orchestrated by Claude itself — not just flat parallelism, but multi-stage coordination (a first wave does the work, a second wave verifies or summarizes it, a third wave fans out again). Cherny, whose background is in functional programming, described it as "an algebra for agents," with primitives for running them in sequence or in parallel.
- **Loops and routines**: loops are like a local cron job for Claude; routines are the same idea running in the cloud, so they keep going after you close your laptop. Unlike a dynamic workflow, these are repetitive tasks that don't share context between runs, though they may share memory.

Internally, Anthropic now runs 20-30 of these routines a day to maintain its own codebases — CLI, iOS, Android, and desktop. Examples include a daily dead-code cleanup that opens its own pull requests, deleting code behind experiments that have already shipped to 100%, adding tests to undertested areas, removing tests that no longer serve a purpose, and something the team calls "abstraction police" — a routine that finds near-duplicate abstractions scattered across the codebase and unifies them. Hundreds to thousands of agents run this maintenance work daily, freeing engineers to focus on shipping and talking to users.

---

## Is coding "solved"?

Cherny has said before that coding is solved, and he clarified what he means: it's solved **for the kind of coding he personally does**. Deep systems codebases, distributed systems, and pixel-perfect UI verification are areas where even Opus 5 still struggles. A show of hands in the room found more people writing 50%+ of their code with agents than 100%.

What he sees in the people who get the most out of these models is a mindset of empiricism: set aside what you learned from older models, set aside computer-science theory you learned in class, actually run the task, see where the model struggles, and adjust from there.

---

## Advice for CS students

Asked what students should still learn "the hard way" in this era, Cherny told his own origin story: learning to program in BASIC on a TI-83 calculator in middle school to build an algebra solver that helped him cheat on math tests (he later moved to assembly to handle calculus). His advice: don't just learn computer science for its own sake — learn how to apply it. Building products, developing design and business sense, doing data science, talking to users — these surrounding skills are what make engineering valuable, especially now.

---

## Summary

* Opus 5's standout traits: dramatically longer autonomous runtimes and much stronger resistance to prompt injection
* Claude Code deletes most of its system prompt with every new model via "ablation," adding instructions back only once they're proven necessary through actual use
* Even everyday Claude Code users are encouraged to delete their claude.md, skills, and hooks every six months and see what the model does without them
* "Unhobbling" — removing product-side constraints that get in a capable model's way — is both Claude Code's origin story and, in Cherny's view, still a major opportunity for new products
* Verification, not prompt engineering, is now the key skill
* Dynamic workflows, loops, and routines let Claude Code orchestrate thousands of agents, and Anthropic already uses this to automate maintenance of its own products
* "Coding is solved" applies to a specific slice of coding work, not all of it — and Cherny's advice to CS students leans toward applied skills over pure theory
