#!/usr/bin/env python3
"""Make English covers for the four illustrated posts by editing the Japanese covers.

The Japanese cover.png has an illustration that is not worth redrawing, so the
Japanese text areas are painted over by interpolating the pixels just to the
left/right of each area (the backgrounds are smooth gradients), and the English
text is drawn on top (HTML rendered by headless Chromium on a transparent
background).  The output is <bundle>/cover.en.png (1200x630).

Texts are translations of the text on each Japanese cover, written for the
cover (not copied from the article title).
"""

from __future__ import annotations

import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
POST = ROOT / "content" / "post"

# Patches: (x, y, w, h) areas that hold Japanese text in the original 1200x630.
COVERS = {
    "2026-10-04-ses-tiered-subcontracting-man-month": {
        "patches": [(60, 195, 560, 250)],
        "html": """
<div style="position:absolute;left:72px;top:207px;font:700 14px/1 'Noto Sans';letter-spacing:.14em;color:#3f6d5c">SES / LABOR</div>
<div style="position:absolute;left:72px;top:248px;font:600 40px/1.3 'Noto Serif';color:#1f2a2a;letter-spacing:-.01em">Why the man-month business<br>never goes away</div>
<div style="position:absolute;left:72px;top:402px;font:400 16px/1 'Noto Sans';color:#6b7280">What I saw inside multi-tier subcontracting</div>
""",
    },
    "2026-10-04-pavucontrol-wireplumber-usb-debugging": {
        "patches": [(60, 140, 610, 160), (70, 522, 700, 30)],
        "html": """
<div style="position:absolute;left:66px;top:150px;font:600 44px/1.3 'Noto Serif';color:#3a2f2d;letter-spacing:-.01em">pavucontrol won't start.<br>Four layers down.</div>
<div style="position:absolute;left:84px;top:527px;font:400 13px/1 'Noto Sans Mono';white-space:nowrap"><span style="color:#8a9a90">$</span> <span style="color:#b04a3f">pa_context_get_card_info_by_index()</span> <span style="color:#7a7f87">failed: Invalid argument</span></div>
""",
    },
    "2026-10-03-nvidia-gpu-collateral-ai-bubble": {
        "patches": [(50, 160, 650, 195)],
        "html": """
<div style="position:absolute;left:66px;top:168px;font:700 40px/1.34 'Noto Sans';color:#222834">Fact-checking the claim that<br>Wall Street is <span style="color:#d63a6e">skeptical</span><br>of GPU-collateral financing</div>
""",
    },
    "2026-09-30-sudoers-nopasswd-ssh-forced-command-mystery": {
        "patches": [(60, 580, 880, 34)],
        "html": """
<div style="position:absolute;left:70px;top:588px;font:700 13px/1 'Noto Sans';color:#2c3340;white-space:nowrap">I narrowed down a sudoers NOPASSWD rule, and my PC shut down on its own twice <span style="font-weight:400">— GTFOBins / rrsync / OpenSSH source code</span></div>
""",
    },
}


IM = shutil.which("magick")  # ImageMagick 7。無ければ旧名のconvert/identifyを使う


def run(*args: str) -> None:
    if IM and args[0] in ("convert", "identify"):
        args = (IM, *args) if args[0] == "convert" else (IM, "identify", *args[1:])
    result = subprocess.run(args, capture_output=True, text=True)
    if result.returncode != 0:
        raise SystemExit(f"command failed: {' '.join(args)}\n{result.stderr}")


def inpaint(src: Path, dst: Path, patches: list[tuple[int, int, int, int]], tmp: Path) -> None:
    shutil.copy(src, dst)
    for i, (x, y, w, h) in enumerate(patches):
        left, right, fill = tmp / f"l{i}.png", tmp / f"r{i}.png", tmp / f"f{i}.png"
        run("convert", str(src), "-crop", f"1x{h}+{x - 3}+{y}", "+repage", str(left))
        run("convert", str(src), "-crop", f"1x{h}+{x + w + 3}+{y}", "+repage", str(right))
        run("convert", str(left), str(right), "+append", "-filter", "Triangle", "-resize", f"{w}x{h}!", str(fill))
        run("convert", str(dst), str(fill), "-geometry", f"+{x}+{y}", "-composite", str(dst))


def overlay(body: str, out: Path, tmp: Path) -> None:
    page = tmp / "overlay.html"
    page.write_text(
        "<!doctype html><meta charset=utf-8><style>html,body{margin:0;width:1200px;height:630px;"
        "background:transparent;overflow:hidden}</style>" + body,
        encoding="utf-8",
    )
    chromium = shutil.which("chromium")
    if not chromium:
        raise SystemExit("chromium not found")
    run(chromium, "--headless", "--disable-gpu", "--no-sandbox", "--hide-scrollbars",
        "--default-background-color=00000000", "--window-size=1200,630",
        f"--user-data-dir={tmp / 'profile'}", f"--screenshot={out}", page.as_uri())


def main() -> int:
    for slug, spec in COVERS.items():
        bundle = POST / slug
        with tempfile.TemporaryDirectory(prefix="cover-en-ill-") as t:
            tmp = Path(t)
            base = tmp / "base.png"
            src_size = subprocess.run(
                [IM, "identify", "-format", "%wx%h", str(bundle / "cover.png")] if IM
                else ["identify", "-format", "%wx%h", str(bundle / "cover.png")],
                check=True, text=True, capture_output=True,
            ).stdout
            if src_size != "1200x630":
                raise SystemExit(f"{slug}: cover.png is {src_size}, expected 1200x630")
            inpaint(bundle / "cover.png", base, spec["patches"], tmp)
            text = tmp / "text.png"
            overlay(spec["html"], text, tmp)
            out = bundle / "cover.en.png"
            run("convert", str(base), str(text), "-composite", str(out))
            size = subprocess.run(
                [IM, "identify", "-format", "%wx%h", str(out)] if IM else ["identify", "-format", "%wx%h", str(out)],
                check=True, text=True, capture_output=True,
            ).stdout
            print(f"{slug}: {size}")
            if size != "1200x630":
                return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
