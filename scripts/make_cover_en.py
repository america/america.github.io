#!/usr/bin/env python3
"""Regenerate the English 1200x630 OGP covers for the selected post bundles.

Colours are deliberately sampled from each Japanese cover with ImageMagick so
the English image remains a close visual counterpart without reusing Japanese
text.  Rendering is entirely local: an HTML file is captured by Chromium.
"""

from __future__ import annotations

import html
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
POSTS = {
    "2026-08-09-swayfx-scratchpad-null-crash": "LINUX DEBUGGING",
    "2026-08-17-claude-code-verification-loops-multi-clauding": "CLAUDE CODE",
    "2026-08-17-why-kind-people-become-lonely": "PSYCHOLOGY",
    "2026-08-21-nogizaka-bushido-spirit-russo-japanese-war": "HISTORY",
    "2026-08-22-michael-jackson-true-strength": "PSYCHOLOGY",
    "2026-08-30-nvim-treesitter-master-to-main-migration-errors": "ARCH LINUX",
    "2026-09-07-fighting-games-monster-hunter-the-room": "GAMING",
    "2026-09-10-claude-fills-the-gaps": "CLAUDE CODE",
    "2026-09-10-termux-sshd-any-username": "LINUX",
    "2026-09-12-boris-cherny-opus-5-claude-code-unhobbling": "CLAUDE CODE",
    "2026-09-13-recovering-psn-chat-history-waydroid": "ANDROID",
    "2026-09-19-ai-existential-risk-ugaya": "AI",
    "2026-09-21-arcade-stick-mod-cost": "GAMING",
    "2026-09-21-diy-pc-build-cost": "PC BUILD",
    "sf6-proton-mozc-ime": "GAMING",
}
SAMPLE_POINTS = ((0, 0), (1199, 0), (0, 629), (1199, 629), (300, 150), (900, 180), (900, 460), (210, 500))
ERROR_SUFFIX = re.compile(r": attempt to call method 'range' \(a nil value\)$")


def command(name: str) -> str:
    path = shutil.which(name)
    if not path:
        raise RuntimeError(f"Required command not found: {name}")
    return path


def title_from(path: Path) -> str:
    match = re.search(r'^title:\s*["\'](.*?)["\']\s*$', path.read_text(encoding="utf-8"), re.MULTILINE)
    if not match:
        raise RuntimeError(f"No quoted frontmatter title: {path}")
    return ERROR_SUFFIX.sub("", match.group(1).replace('\\"', '"'))


def sampled_colours(path: Path) -> list[str]:
    convert = command("magick") if shutil.which("magick") else command("convert")
    points = "|".join(f"%[pixel:p{{{x},{y}}}]" for x, y in SAMPLE_POINTS)
    result = subprocess.run([convert, str(path), "-format", points, "info:"], check=True, text=True, capture_output=True)
    colours = re.findall(r"srgba?\((\d+),(\d+),(\d+)", result.stdout)
    if len(colours) != len(SAMPLE_POINTS):
        raise RuntimeError(f"Could not sample all colours from {path}: {result.stdout!r}")
    return [f"rgb({red}, {green}, {blue})" for red, green, blue in colours]


def font_size(title: str) -> int:
    if len(title) > 105:
        return 35
    if len(title) > 90:
        return 39
    if len(title) > 74:
        return 43
    return 50


def page(title: str, label: str, colours: list[str], index: int) -> str:
    # Rotating the sampled colours and blob positions keeps covers in the same
    # family while ensuring each article has a distinct composition.
    c = colours[index % len(colours):] + colours[:index % len(colours)]
    left = 67 + (index * 37) % 170
    top = 52 + (index * 29) % 95
    return f"""<!doctype html>
<html><head><meta charset=\"utf-8\"><style>
* {{ box-sizing: border-box; }}
html, body {{ margin: 0; width: 1200px; height: 630px; overflow: hidden; }}
body {{
  background: linear-gradient(135deg, {c[0]} 0%, {c[1]} 48%, {c[2]} 100%);
  color: #162235; font-family: \"Noto Serif\", \"Liberation Serif\", serif;
}}
.blob {{ position: absolute; border-radius: 50%; filter: blur(34px); opacity: .72; }}
.one {{ width: 440px; height: 440px; left: {left}px; top: -190px; background: {c[4]}; }}
.two {{ width: 390px; height: 390px; right: -70px; top: {top}px; background: {c[5]}; }}
.three {{ width: 460px; height: 330px; right: 120px; bottom: -205px; background: {c[6]}; }}
.four {{ width: 250px; height: 250px; left: -90px; bottom: -115px; background: {c[7]}; }}
.content {{ position: relative; width: 100%; height: 100%; padding: 72px 82px; }}
.label {{ color: color-mix(in srgb, #24364f 78%, {c[3]}); font-family: Arial, sans-serif; font-size: 16px; font-weight: 700; letter-spacing: .16em; }}
.title-wrap {{ position: absolute; left: 82px; top: 50%; width: 650px; transform: translateY(-42%); }}
h1 {{ margin: 0; font-size: {font_size(title)}px; line-height: 1.16; font-weight: 600; letter-spacing: -.026em; text-wrap: balance; }}
.site {{ position: absolute; right: 82px; bottom: 55px; color: rgba(76, 82, 94, .55); font-family: Arial, sans-serif; font-size: 15px; letter-spacing: .04em; }}
</style></head><body>
<div class=\"blob one\"></div><div class=\"blob two\"></div><div class=\"blob three\"></div><div class=\"blob four\"></div>
<main class=\"content\"><div class=\"label\">{html.escape(label)}</div><div class=\"title-wrap\"><h1>{html.escape(title)}</h1></div><div class=\"site\">america66.jp</div></main>
<script>
const t = document.querySelector('h1'), r = document.createRange(); r.selectNodeContents(t);
const lines = r.getClientRects().length;
document.documentElement.dataset.fit = String(t.scrollWidth <= t.clientWidth && t.getBoundingClientRect().left >= 0 && t.getBoundingClientRect().right <= 1200 && lines <= 3);
document.documentElement.dataset.lines = String(lines);
</script></body></html>"""


def render(html_path: Path, output: Path) -> tuple[bool, int]:
    chromium = command("chromium")
    profile = html_path.parent / "chromium-profile"
    base = [chromium, "--headless", "--disable-gpu", "--no-sandbox", "--hide-scrollbars", "--window-size=1200,630", "--virtual-time-budget=300", f"--user-data-dir={profile}"]
    uri = html_path.as_uri()
    status = subprocess.run([*base, "--dump-dom", uri], check=True, text=True, capture_output=True).stdout
    match = re.search(r'<html[^>]*data-fit="(true|false)"[^>]*data-lines="(\d+)"', status)
    if not match:
        raise RuntimeError(f"Could not read title-fit result for {html_path}")
    subprocess.run([*base, f"--screenshot={output}", uri], check=True, capture_output=True)
    return match.group(1) == "true", int(match.group(2))


def main() -> int:
    failures: list[str] = []
    with tempfile.TemporaryDirectory(prefix="america-cover-en-") as temporary:
        temp = Path(temporary)
        for index, (slug, label) in enumerate(POSTS.items()):
            bundle = ROOT / "content" / "post" / slug
            title = title_from(bundle / "index.en.md")
            colours = sampled_colours(bundle / "cover.png")
            html_path = temp / f"{slug}.html"
            output = bundle / "cover.en.png"
            html_path.write_text(page(title, label, colours, index), encoding="utf-8")
            fits, lines = render(html_path, output)
            dimensions = subprocess.run([command("identify"), "-format", "%wx%h", str(output)], check=True, text=True, capture_output=True).stdout
            if dimensions != "1200x630" or not fits:
                failures.append(f"{slug}: size={dimensions}, lines={lines}, title_fits={fits}")
            print(f"{slug}: {dimensions}; title lines={lines}; fits={fits}")
    if failures:
        print("Generation validation failed:\n" + "\n".join(failures), file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
