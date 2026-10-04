---
title: "Why Japan's SES Multi-Tier Subcontracting 'Man-Month' Business Never Goes Away"
date: 2026-10-04T22:23:00+09:00
draft: false
description: "Drawing on a few years spent inside Japan's SES (System Engineering Service) multi-tier subcontracting structure, this piece breaks down why the man-month billing model persists, and why it won't end with the industry 'being reformed.'"
tags:
  - labor
  - ses
  - memoir
cover:
  image: "cover.png"
---

For a few years, I worked as a subcontracted engineer stationed at bank-affiliated system development sites in Japan, through a so-called SES (System Engineering Service) company. I honestly didn't know how many companies sat between me and the final client. Margins got skimmed at every tier, and by the time the work reached the floor, the original request had been diluted many times over. This piece isn't about any specific company or person — it's about the structure itself.

## What a "man-month" is

In Japan's IT industry, especially on the contracted-development side where system integrators (SIer) act as prime contractors, contracts and estimates are often built around a unit called a "man-month" (人月, *ninngetsu*). One man-month is "one engineer assigned for one month," and project scope gets expressed as a multiplication of headcount by duration — "10 man-months," "50 man-months."

Price isn't set by the value or difficulty of the output — it's set purely by **headcount times time**. Work a skilled engineer finishes alone and work three inexperienced people struggle through together can both bill as "3 man-months," for the same price.

## What it looks like from inside multi-tier subcontracting

The site I actually worked at was structured as: client bank → prime SIer → second-tier subcontractor → third-tier subcontractor (my employer). Margins were skimmed at every tier, so there was a substantial gap between what the client paid and what actually reached my paycheck.

On-site, which company you technically belonged to mattered less than whose authority you were actually working under. The person who functioned as my real supervisor on-site wasn't the client or the prime contractor — it was someone seconded from yet another subcontracting company. A chain of command that doesn't match the contractual relationships is technically a gray area under Japan's worker dispatch law, but it happens routinely on SES / quasi-delegation (準委任) sites.

I also saw, more than once, job listings that padded the advertised salary by folding in commuting allowance as if it were base pay — not an isolated trick.

Industry-side surveys put the typical margin SES companies take at around 35–40%, with roughly 60–65% of the billed rate actually reaching the engineer on-site ([source](https://levtech.jp/partner/guide/article/detail/32/)). So if the client is paying ¥800,000/month for a given engineer, something just over 60% of that is standard practice as what actually lands in that engineer's pocket. And that's just one layer of margin — add another subcontractor in between and it gets skimmed again.

## Putting numbers on the multi-tier structure

The gut feeling deserves to be checked against public data.

A 2022 survey by Japan's Fair Trade Commission (covering roughly 21,000 businesses with capital under ¥300 million — the largest such survey in 18 years) found that software subcontracting chains can become "fragmented and re-subcontracted repeatedly, forming extremely long and multi-layered supply chains," with **cases found of subcontracting as deep as six tiers**. Of the businesses surveyed, 40.4% identified as prime contractors, 38.2% as intermediate subcontractors, and 21.3% as final-tier subcontractors — meaning **roughly 60% had no direct contract with the end client at all** ([source](https://www.jftc.go.jp/houdou/pressrelease/2022/jun/220629_sw_03.pdf)).

The same survey put Japan's software industry market size at roughly ¥15.98 trillion as of 2020, with about 837,606 workers across 25,977 establishments — of which businesses with 4 or fewer employees made up about 40.3% of the total. The small subcontractor I worked for wasn't an outlier; it was the typical building block of this industry.

In fiscal year 2021, the information services industry recorded 686 enforcement actions for subcontracting-law violations — **the most of any industry sector**. The numbers back up what the structure itself implies: multi-tier subcontracting is fertile ground for the kind of abuse of superior bargaining position that Japan's Subcontract Act exists to catch.

## Why this structure doesn't go away

### Clients have no in-house capacity

Many large enterprises and government agencies in Japan don't have the internal capability to build or maintain their own systems. They lack both the ability to pin down requirements and the technical judgment to evaluate vendors, so they outsource the whole thing — ambiguous specs included — to a prime SIer, who then throws it further down the chain.

### Man-months are easy to get approved

A value-based contract — "we'll pay Y yen for a system that delivers X value" — is hard for a client organization to justify internally. A man-month breakdown — "X people × Y months × unit rate" — slots neatly into procurement paperwork and budget approval processes. Being easy to justify on paper matters more than whether it reflects technical quality.

### The contract form pushes risk onto the floor

A project that starts without fixed requirements is hard to take on under a fixed-deliverable contract, since that puts the burden of defining "done" on the vendor. So it usually starts as a quasi-delegation contract (準委任, essentially "we're lending you people"), and when the project catches fire, the people on the floor can say "I did what I was told," while most of the actual risk has already flowed down to them.

## Why this specific shape is a Japan thing

Multi-tier subcontracting exists elsewhere too, but Japan's distinctive feature is a stark imbalance: most IT talent sits on the vendor side, and almost none sits inside the client companies themselves.

According to the Information-technology Promotion Agency's (IPA) "IT Human Resources White Paper 2017," **72.3% of Japan's IT workforce is employed by IT-industry vendors**, with only 27.7% working in-house at non-IT companies. In the US, the ratio is nearly reversed: 65.4% of IT workers are employed in-house by user companies, with only 34.6% on the vendor side. Canada, the UK, Germany, and France all likewise have a majority of their IT workforce in-house — Japan's skew stands out even against that group ([source](https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/h30/html/nd114140.html)).

In other words, in the US, the companies that actually use a system are also, typically, the ones employing the engineers who build and run it. In Japan, the companies that use a system typically employ almost no engineers at all — an entirely separate industry exists whose job is to dispatch and station engineers at those companies. I think this is the soil multi-tier subcontracting actually grows out of.

## Not "being reformed" — people leaving first

I don't think this industry changes in one dramatic moment of reform. What's actually happening is quieter erosion.

Japan's Ministry of Economy, Trade and Industry (METI), in its 2018 "DX Report," warned that aging, overcomplicated legacy core systems were becoming a major obstacle to digital transformation, and estimated that if the problem went unaddressed, annual economic losses could reach as much as ¥12 trillion starting in 2025 ([source](https://www.hitachi-solutions-create.co.jp/column/core-system/2025-cliff.html)). This is the so-called "2025 cliff" (2025年の崖); the same report also projected a shortfall of up to 430,000 IT workers by 2025.

In-house development capability at client-side companies has been creeping up for years now. The engineers who are technically curious and capable tend to be the ones who leave multi-tier subcontracting sites for in-house roles at those client companies first. What's left behind has a lower average skill level, which in turn makes it harder to attract strong people — a self-reinforcing loop.

Interesting work and decent treatment concentrate at the client-side companies, while legacy maintenance and labor-shortage gap-filling stay with the SES layer. Since the demand itself never disappears, this layer survives for a long time as the industry's bottom tier. I don't think the structure gets "reformed" — I think the people who *can* leave simply leave first, one at a time, and only the contents quietly turn over.

## The one real variable: generative AI

If anything is likely to actually break this structure, I think it's generative AI. If per-person productivity genuinely rises, the man-month — a unit built entirely on headcount times time — may stop making sense as a pricing yardstick at all.

I'm not optimistic about the shape this takes, though. I think it's more likely to play out not as "the man-month model gets reconsidered," but as "the bottom-most layer of simple, repetitive subcontracted work becomes unnecessary and the industry simply shrinks."

## Sources

- [METI's 2018 "DX Report" and the "2025 Cliff" (overview, in Japanese) - Hitachi Solutions Create](https://www.hitachi-solutions-create.co.jp/column/core-system/2025-cliff.html)
- [Survey Report on Subcontracting Practices in the Software Industry (June 2022, in Japanese) - Japan Fair Trade Commission](https://www.jftc.go.jp/houdou/pressrelease/2022/jun/220629_sw_03.pdf)
- [White Paper on Information and Communications in Japan 2018, Japan–US ICT Workforce Comparison (in Japanese) - Ministry of Internal Affairs and Communications](https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/h30/html/nd114140.html)
- [SES rate benchmarks by skill/role (in Japanese) - Levtech](https://levtech.jp/partner/guide/article/detail/32/)
