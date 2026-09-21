---
title: "What My DIY Desktop PC Actually Cost — Core Parts Only"
date: 2026-09-21T00:00:00+09:00
draft: false
description: "An AMD A520-based desktop build. I reconstructed the real cost of the core parts — CPU, GPU, motherboard, memory, storage, case, and PSU — from actual purchase records, leaving out keyboard and mouse."
tags:
  - IT
  - pc-build
---

I went through purchase receipts and order records to reconstruct the real cost of my
desktop build (main rig: takashi-pc). This covers core internal parts only — CPU, GPU,
motherboard, memory, storage, case, and PSU — leaving out peripherals like the keyboard
and mouse. I confirmed the CPU/GPU against the actual running machine with `lscpu`/`lspci`,
and the model numbers match the purchase receipts.

## Parts list

| Part | Model | Vendor | Purchased | Cost | Notes |
|---|---|---|---|---|---|
| CPU | AMD Ryzen 7 5700X BOX (AM4 / 8-core 16-thread / 32MB L3 / 65W TDP) | Janpara (Higashi-Ikebukuro) | 2025-02-23 | ¥25,450 | ¥24,980 minus ¥300 discount plus ¥770 shipping, 1-month member warranty, credit card |
| GPU | SAPPHIRE PULSE Radeon RX 6600 XT GAMING OC 8G GDDR6 | Janpara (Akihabara) | 2024-02-11 | ¥28,450 | ¥27,980 minus ¥300 discount plus ¥770 shipping, 1-month member warranty, paid via Paidy |
| RAM | CFD Standard DDR4-3200 16GB×2, 288-pin DIMM | Amazon | 2023-12-23 | ¥8,883 | Same order as motherboard |
| Motherboard | ASRock A520M Pro4 (AMD A520 / Socket AM4 / Micro ATX, official Japan distributor) | Amazon | 2023-12-23 | ¥8,845 | Same order as RAM |
| SSD 1 (boot drive) | CFD 256GB 2.5" SATA (Toshiba) | Amazon | 2015-07-06 | ¥13,979 | My first-ever SSD, currently the Windows 11 boot drive, carried over from the previous PC |
| SSD 2 | Crucial P2 500GB M.2 NVMe (official distributor warranty, 5-year) | Amazon | 2022-01-04 | ¥5,515 | Listed at ¥5,555, minus ¥40 in Amazon points |
| SSD 3 (added) | Crucial BX500 1TB 2.5" SATA (3-year warranty, parallel import) | Amazon | 2025-08-05 | ¥9,500 | Paid via Paidy |
| Case | DEEPCOOL CC560 V2 (ATX / glass panel / black, Dospara-exclusive model) | Dospara | 2024-07-07 | ¥8,027 | 3-year extended warranty plan |
| CPU cooler | DEEPCOOL AK400 (120mm fan / LGA1851-1150 & AM4 compatible) | Biccamera.com | 2025-02-23 | ¥3,270 | Paid in full by credit card |
| PSU | Kuroutoshikou KRPW-PT700W/92+ REV2.0 (700W / 80 PLUS Platinum) | Unknown (likely Yahoo Auctions, no record) | unknown | est. ¥12,000–15,000 | Carried over from the previous PC. Model identified directly from the unit's label; no purchase record survives, so the cost is estimated from period market pricing, not confirmed |

## Totals

| Category | Amount |
|---|---|
| Confirmed total for everything except the PSU | ¥111,919 |
| + PSU (estimate, not confirmed) | + ¥12,000–15,000 |
| Core-parts subtotal (PSU estimate included) | roughly ¥124,000–127,000 |

Breakdown (confirmed spend): CPU 25,450 + GPU 28,450 + RAM/motherboard 17,728 +
SSD 1 13,979 + SSD 2 5,515 + SSD 3 9,500 + case 8,027 + CPU cooler 3,270 = ¥111,919.

For reference, the amount spent specifically on new parts for this A520 build — excluding
the 2015 256GB SSD and the PSU carried over from the previous machine — comes to ¥97,940
(CPU 25,450 + GPU 28,450 + RAM/motherboard 17,728 + SSD 2 5,515 + SSD 3 9,500 +
case 8,027 + CPU cooler 3,270).

## The one part with no paper trail: the PSU

Every part in this build has a confirmed purchase record except the power supply. I
could identify the exact model (Kuroutoshikou KRPW-PT700W/92+ REV2.0) straight off the
unit's own label, but there's no record of when or where it was bought — my best
recollection is "probably Yahoo Auctions." Since it's a part carried over from an older
PC, the purchase itself happened a long time ago, so I left the cost as an estimate based
on period market pricing rather than a confirmed figure. Every other part in this table
is nailed down from an actual receipt or order history; this is the one exception.
