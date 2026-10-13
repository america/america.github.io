"""End-to-end checks for the browser-side PaperMod search feature."""

import json
import re
import shutil
import subprocess
from pathlib import Path
from urllib.parse import urlparse

import pytest


REPOSITORY = Path(__file__).resolve().parents[1]
POSTS = REPOSITORY / "content" / "post"


@pytest.fixture(scope="module")
def built_site(tmp_path_factory):
    """Build the site once, outside the repository, for all search checks."""
    destination = tmp_path_factory.mktemp("hugo-search-site")
    subprocess.run(
        ["hugo", "--destination", str(destination), "--quiet"],
        cwd=REPOSITORY,
        check=True,
        text=True,
        capture_output=True,
    )
    return destination


def _load_index(site, relative_path):
    return json.loads((site / relative_path).read_text(encoding="utf-8"))


def _unquote_yaml_scalar(value):
    """Return a one-line YAML scalar without its outer quotes (escapes resolved)."""
    value = value.strip()
    if len(value) >= 2 and value[0] == value[-1] == '"':
        return re.sub(r"\\(.)", r"\1", value[1:-1])
    if len(value) >= 2 and value[0] == value[-1] == "'":
        return value[1:-1].replace("''", "'")
    return value


def _build_list_is_never(metadata):
    """front matter の `build:` の直接の子の `list: never` だけを見る(入れ子の別キーは見ない)。"""
    lines = metadata.splitlines()
    for index, line in enumerate(lines):
        if not re.match(r"^build:\s*$", line):
            continue
        base_indent = None
        for child in lines[index + 1:]:
            if not child.strip():
                continue
            indent = len(child) - len(child.lstrip(" \t"))
            if indent == 0:
                break
            if base_indent is None:
                base_indent = indent
            if indent == base_indent and re.match(r"list:\s*never\s*$", child.strip(), re.IGNORECASE):
                return True
    return False


def _is_excluded(metadata):
    """True for posts that must not appear in the search index (design doc: 検索の対象外)."""
    flags = (
        r"^draft:\s*true\s*$",
        r"^searchHidden:\s*true\s*$",
    )
    if any(re.search(flag, metadata, re.MULTILINE | re.IGNORECASE) for flag in flags):
        return True
    return _build_list_is_never(metadata)


def _post_titles(pattern, excluded):
    titles = []
    for post in POSTS.glob(pattern):
        source = post.read_text(encoding="utf-8")
        front_matter = re.match(r"\A\s*---\s*\n(.*?)\n---\s*\n", source, re.DOTALL)
        assert front_matter, f"missing leading front matter in {post}"
        metadata = front_matter.group(1)
        if _is_excluded(metadata) != excluded:
            continue
        title = re.search(r"^title:\s*(.*?)\s*$", metadata, re.MULTILINE)
        assert title, f"missing title in {post}"
        titles.append(_unquote_yaml_scalar(title.group(1)))
    return titles


def _published_titles(pattern):
    return _post_titles(pattern, excluded=False)


def _excluded_titles(pattern):
    return _post_titles(pattern, excluded=True)


def test_search_pages_have_searchbox(built_site):
    for page in ("search/index.html", "en/search/index.html"):
        html = (built_site / page).read_text(encoding="utf-8")
        assert 'id="searchbox"' in html


def test_search_indexes_are_complete_and_exclude_search_page(built_site):
    required_keys = {"title", "content", "permalink", "summary"}
    for index_path in ("index.json", "en/index.json"):
        index = _load_index(built_site, index_path)
        assert isinstance(index, list)
        for entry in index:
            assert required_keys <= entry.keys()
            assert "/search/" not in entry["permalink"]


def test_published_post_titles_are_in_their_language_indexes(built_site):
    japanese_titles = {entry["title"] for entry in _load_index(built_site, "index.json")}
    english_titles = {entry["title"] for entry in _load_index(built_site, "en/index.json")}

    assert set(_published_titles("*/index.md")) <= japanese_titles
    assert set(_published_titles("*/index.en.md")) <= english_titles


def test_excluded_posts_are_not_in_the_indexes(built_site):
    japanese_titles = {entry["title"] for entry in _load_index(built_site, "index.json")}
    english_titles = {entry["title"] for entry in _load_index(built_site, "en/index.json")}

    assert not set(_excluded_titles("*/index.md")) & japanese_titles
    assert not set(_excluded_titles("*/index.en.md")) & english_titles


def test_search_page_script_carries_the_configured_fuse_options(built_site):
    html = (built_site / "search/index.html").read_text(encoding="utf-8")
    script = re.search(r'<script[^>]+src="(/assets/js/search\.[^"]+\.js)"', html)
    assert script, "search script is not loaded on the search page"
    source = (built_site / script.group(1).lstrip("/")).read_text(encoding="utf-8")

    # hugo.toml の [params.fuseOpts] の6項目が、ビルドされたスクリプトに入っている。
    # キーの引用符・true/!0 の表記の違い(esbuildの縮約)は許容する。
    def option(key, value):
        return re.search(r"[\"']?" + key + r"[\"']?\s*:\s*(?:" + value + r")(?![\w.])", source)

    assert option("ignorelocation", r"true|!0")
    assert option("iscasesensitive", r"false|!1")
    assert option("shouldsort", r"true|!0")
    assert option("minmatchcharlength", r"2")
    assert option("threshold", r"0?\.3")
    assert re.search(
        r"[\"']?keys[\"']?\s*:\s*\[\s*[\"']title[\"']\s*,\s*[\"']summary[\"']\s*,\s*[\"']content[\"']\s*\]",
        source,
    )


def test_sitemaps_exclude_search_pages(built_site):
    for sitemap in ("sitemap.xml", "ja/sitemap.xml", "en/sitemap.xml"):
        contents = (built_site / sitemap).read_text(encoding="utf-8")
        locations = re.findall(r"<loc>(.*?)</loc>", contents)
        assert not any("/search/" in location for location in locations)


def test_home_pages_link_to_their_search_pages(built_site):
    pages = {"index.html": "/search/", "en/index.html": "/en/search/"}
    for page, search_path in pages.items():
        html = (built_site / page).read_text(encoding="utf-8")
        anchors = re.findall(r'<a[^>]+href="([^"]+)"[^>]*>(.*?)</a>', html, re.DOTALL)
        labels = [
            re.sub(r"<[^>]+>", "", label).strip()
            for href, label in anchors
            if urlparse(href).path == search_path
        ]
        assert labels, f"{page}: no link to {search_path}"
        # メニューの表示名は、言語ごとの別名を持たず、英語版でも「検索」(設計書: 仕様3)
        assert "検索" in labels


def test_fuse_finds_a_late_japanese_content_match_near_the_top(built_site):
    node = shutil.which("node")
    if node is None:
        pytest.skip("node is not installed")

    index = _load_index(built_site, "index.json")
    target = next(
        (
            entry
            for entry in index
            if len(entry["content"]) >= 3000
            and re.search(r"[\u3040-\u30ff\u3400-\u9fff々〆ヶ]{4,}", entry["content"][2500:])
        ),
        None,
    )
    assert target is not None, "no sufficiently long Japanese article in index.json"
    match = re.search(r"[\u3040-\u30ff\u3400-\u9fff々〆ヶ]{4,}", target["content"][2500:])
    term = match.group(0)[:4]

    script = r'''
const fs = require("fs");
const [fusePath, indexPath, expectedPermalink, term] = process.argv.slice(1);
const source = fs.readFileSync(fusePath, "utf8");
const moduleForFuse = { exports: {} };
const Fuse = new Function("module", "exports", source + "; return module.exports || globalThis.Fuse;")(
  moduleForFuse, moduleForFuse.exports
);
const entries = JSON.parse(fs.readFileSync(indexPath, "utf8"));
const fuse = new Fuse(entries, {
  ignoreLocation: true,
  threshold: 0.3,
  minMatchCharLength: 2,
  isCaseSensitive: false,
  shouldSort: true,
  keys: ["title", "summary", "content"],
});
console.log(JSON.stringify(fuse.search(term, { limit: 5 }).map(result => result.item.permalink)));
'''
    completed = subprocess.run(
        [
            node,
            "-e",
            script,
            str(REPOSITORY / "themes" / "PaperMod" / "assets" / "js" / "fuse.basic.min.js"),
            str(built_site / "index.json"),
            target["permalink"],
            term,
        ],
        cwd=REPOSITORY,
        check=True,
        text=True,
        capture_output=True,
    )
    assert target["permalink"] in json.loads(completed.stdout)
