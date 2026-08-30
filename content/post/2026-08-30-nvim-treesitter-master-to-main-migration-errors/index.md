---
title: "nvim-treesitter の master→main 移行で踏んだ treesitter エラー3連発（Neovim 0.12）"
date: 2026-08-30T11:30:00+09:00
draft: false
description: "Neovim 0.12 で nvim-treesitter を EOL の master ブランチから main へ移行したときに連続で踏んだ3つのエラー ― Markdown が gotmpl parser で落ちる、コードフェンスのハイライトが死ぬ、.txt ファイルで Parser could not be created ― の原因と対処のメモ。"
categories: ["Linux", "トラブルシュート"]
tags:
  - arch-linux
  - neovim
  - treesitter
  - lua
---

Neovim を `0.12.4` に上げたあたりから、`nvim-treesitter` 関連のエラーが立て続けに出るようになった。原因を追っていくと、**`nvim-treesitter` の `master` ブランチがすでに EOL で Neovim 0.12 に付いてこられていない**という一点に行き着く。`main` ブランチへ移行して解決したが、その過程と、移行後にもう一段踏んだ落とし穴をまとめておく。

環境:

| 項目 | 値 |
| --- | --- |
| Neovim | `v0.12.4`（Arch Linux） |
| nvim-treesitter | `master`（tag `v0.10.0`、2025年5月で凍結）→ `main` へ移行 |
| プラグインマネージャ | Lazy.nvim |

---

## 症状1: Markdown を開くと `gotmpl` parser で落ちる

Markdown ファイルを開いた瞬間、エラーで停止する（`続けるにはENTERを押すか…`）。

```
Error in BufReadPost Autocommands for "*":
... ftplugin/markdown.lua: Vim(runtime):E5113: Lua chunk:
.../treesitter.lua:460: Parser could not be created for buffer 1 and language "gotmpl"
```

これを ENTER で流すと、今度はコードフェンス（```` ```go ```` など）の**シンタックスハイライトが効かなくなり**、`:messages` に別のエラーが出ている。

```
Decoration provider "start" (ns=nvim.treesitter.highlighter):
.../treesitter.lua:197: attempt to call method 'range' (a nil value)
```

Packer.nvim → Lazy.nvim へ移行した時期と重なっていたので最初はプラグインマネージャを疑ったが、**それは無関係**。同時期に上げた Neovim 0.12 が引き金だった。原因は2つ重なっていた。

### 原因1-A: `ftplugin/html.vim` が Markdown まで gotmpl 化していた

`~/.config/nvim/ftplugin/html.vim` の中身がこの1行だけだった。

```vim
setlocal filetype=gotmpl
```

これが**すべての HTML バッファ**を問答無用で `gotmpl` に差し替える。Markdown を開くと `vim-markdown` 経由で `syntax/html.vim` が読まれ、その過程でこれが走り、バッファの `filetype` が `markdown` → `gotmpl` に化ける。

直後に標準の `ftplugin/markdown.lua` が `vim.treesitter.start()` を引数なしで呼ぶ。引数なしだと `vim.bo.filetype`（この時点で `gotmpl`）を parser 名として使う。`gotmpl` の tree-sitter parser は入れていないので `Parser could not be created`。

以前の Neovim の標準 `ftplugin/markdown.lua` にこの `vim.treesitter.start()` は無かった。`html.vim` のこの書き方は前から壊れていて、Neovim 側が新しく踏むようになっただけだった。

### 原因1-B: `nvim-treesitter` master ブランチが Neovim 0.12 非対応

`nvim-treesitter` が **`master` ブランチ（tag `v0.10.0`、2025年5月で凍結）** に固定されていた。このブランチはすでに EOL。

Neovim 0.12 で query match のキャプチャが「単一 `TSNode`」から「`TSNode` のリスト」に変わった（quantified captures）。master 版の独自ディレクティブ `#set-lang-from-info-string!` / `#downcase!` などは今も単一ノード前提で `get_node_text()` に渡すため、内部で `node:range()` が nil に対して呼ばれて落ちる。

このうち `#set-lang-from-info-string!` が master 版の **markdown injection query**（コードフェンスの言語名を解決する部分）で使われている。だから ```` ```go ```` ブロックのハイライトが死ぬ。

- `:TSUpdate` しても直らない（parser の ABI ではなく、プラグインの Lua コードの非互換）。
- `~/.config/nvim/after/queries/` での上書きも効かない（master 版は Neovim の query 解決を乗っ取るため、自前の `after/queries/` が無視される）。

---

## 対処: html.vim を消して、main ブランチへ移行する

### 原因1-A → `ftplugin/html.vim` を削除

Hugo の `layouts/**.html` だけ Go テンプレート扱いにしたいだけなら、全 HTML を潰す ftplugin ではなく path pattern で書く。

```lua
vim.filetype.add({
  pattern = { [".*/layouts/.*%.html"] = "gohtmltmpl" },
})
```

### 原因1-B → nvim-treesitter を main ブランチへ

`main` は Neovim 0.11+/0.12 向けに書き直されたブランチ。0.12 互換の query directive を持つので、原因1-B は根本的に解消する。ただし前提と API がだいぶ変わる。

`main` が README で要求するもの:

- Neovim 0.12+
- `tar` / `curl`
- **`tree-sitter-cli` 0.26.1 以上**（パッケージマネージャ経由。npm 版は不可）← master では不要だった
- C コンパイラ

`master` は生成済みの `parser.c` をコンパイルするだけだったが、`main` の `install.lua` は `tree-sitter generate` / `tree-sitter build` を実際に呼ぶ。無いと `:TSInstall` が全部こけて parser ゼロ、つまりハイライト全滅になる。

```bash
sudo pacman -S tree-sitter-cli
```

プラグイン spec（Lazy.nvim）を `branch = 'main'` に差し替え、旧 `require('nvim-treesitter.configs').setup{}` は削除する。

```lua
{
  'nvim-treesitter/nvim-treesitter',
  branch = 'main',
  lazy = false,
  build = ':TSUpdate',
},
{
  'nvim-treesitter/nvim-treesitter-textobjects',
  branch = 'main',
  dependencies = { 'nvim-treesitter/nvim-treesitter' },
},
```

`main` の大きな違いは、**highlight も indent も自動では有効にならない**こと。`ensure_installed` も無い。parser のインストールと、filetype ごとの起動を自分で書く。

```lua
local parsers = {
  "javascript", "typescript", "tsx", "json", "css", "html", "lua", "go",
  "markdown", "markdown_inline", "yaml",
}

require("nvim-treesitter").install(parsers)

-- highlight & indent を、parser が入っている filetype でだけ有効化する
vim.api.nvim_create_autocmd("FileType", {
  callback = function(ev)
    local lang = vim.treesitter.language.get_lang(vim.bo[ev.buf].filetype)
    if not lang then
      return
    end
    if not pcall(vim.treesitter.get_parser, ev.buf, lang) then
      return
    end
    vim.treesitter.start(ev.buf)
    vim.bo[ev.buf].indentexpr = "v:lua.require'nvim-treesitter'.indentexpr()"
  end,
})
```

`:Lazy! sync` で両プラグインを `main` の commit へ移動し、parser を同期インストールする（初回は数分）。

```lua
require('nvim-treesitter').install({
  'javascript','typescript','tsx','json','css','html','lua','go',
  'markdown','markdown_inline','yaml'
}):wait(500000)
```

parser は `~/.local/share/nvim/site/parser/` に入る。master 時代の `~/.local/share/nvim/lazy/nvim-treesitter/parser/*.so` は orphan になるので消してよい。

### 移行で失ったもの

- **`incremental_selection`（`gnn` / `grn` / `grc` / `grm`）は完全に消えた。** `main` コアにも Neovim 組み込みにも代替なし。要るなら `mini.ai` などを別途入れる。
- **TS インデントは experimental。** 上の設定では全 TS filetype で `indentexpr` を有効にしている。どこかの言語でインデントが変なら該当の1行を消す。

ここまでで Markdown も コードフェンスのハイライトも直った。……が、数日後にもう1つ踏んだ。

---

## 症状2: `.txt` を開くと `Parser could not be created for language "text"`

`.txt` ファイル（filetype = `text`）を開くと、また開いた瞬間にエラーで停止する。

```
Error in BufReadPost Autocommands for "*":
Lua callback: /usr/share/nvim/runtime/filetype.lua:28: ... FileType Autocommands for "*":
.../treesitter.lua:460: Parser could not be created for buffer 1 and language "text"
stack traceback:
	[C]: in function 'assert'
	.../vim/treesitter.lua:460: in function 'start'
	~/.config/nvim/lua/treesitter-config.lua:41: in function <...treesitter-config.lua:32>
```

スタックトレースの `treesitter-config.lua:41` は、さっき移行のときに書いた **あの FileType autocmd の `vim.treesitter.start(ev.buf)` の行**。`text` の parser は入れていないのだから、2つのガード（`get_lang` チェックと `pcall(get_parser)` チェック）のどちらかで弾かれるはず……なのに素通りしている。

### 原因2: 0.12 では両方のガードが機能しない

Neovim 0.12 で挙動を直接確認した。

```
$ nvim --headless -c 'lua
  local l = vim.treesitter.language.get_lang("text"); print(vim.inspect(l))       --> "text"
  local ok, p = pcall(vim.treesitter.get_parser, 0, l); print(ok, vim.inspect(p)) --> true  nil
' -c qa
```

1. **`get_lang("text")` は `"text"` を返す。** マッピングの無い filetype に対して、0.12 は filetype 名をそのまま返す（`nil` ではない）。だから `if not lang then return end` は素通りする。
2. **`get_parser` は 0.12 でエラーを投げない。** parser を作れないとき、以前は例外を投げていたが、0.12 では **エラーを出さず `nil` を返す**仕様に変わった。`pcall(vim.treesitter.get_parser, ...)` は成功（`true`）を返すので、`if not pcall(...) then return end` も素通りする。`pcall` の成否は「関数が例外を投げたか」しか見ておらず、「parser が取れたか」は見ていない。

結果 `vim.treesitter.start(ev.buf)` に到達し、その内部の `assert`（`treesitter.lua:460`）が `Parser could not be created` を投げる。

### 対処2: `pcall` の成否ではなく戻り値を見る

```lua
vim.api.nvim_create_autocmd("FileType", {
  callback = function(ev)
    local lang = vim.treesitter.language.get_lang(vim.bo[ev.buf].filetype)
    if not lang then
      return
    end
    -- Neovim 0.12 の get_parser は parser を作れないとき
    -- 「エラーを投げず nil を返す」ため、pcall の成否ではなく戻り値そのものを見る
    local ok, parser = pcall(vim.treesitter.get_parser, ev.buf, lang)
    if not ok or not parser then
      return
    end
    vim.treesitter.start(ev.buf)
    vim.bo[ev.buf].indentexpr = "v:lua.require'nvim-treesitter'.indentexpr()"
  end,
})
```

`not ok`（古い Neovim で例外を投げるケース）と `not parser`（0.12 で `nil` を返すケース）の両方を弾く。副次的に、`nvim-treesitter` の非同期インストールがまだ終わっていない時に対象ファイルを開いたケースも正しくスキップされるようになった。

---

## 検証

`nvim --headless` で実ファイルを開いて確認した。

| ファイル | 期待 | 結果 |
| --- | --- | --- |
| `.txt`（parser 無し） | エラーが出ない | OK |
| `.lua` | エラー無し + `vim.treesitter.highlighter.active` が立つ | OK |
| `.go` | 同上 | OK |
| `.md`（```` ```go ```` フェンス入り） | エラー無し、`gotmpl` エラーも `range nil` も出ない | OK |

修正前は `.txt` / `.md` を開くと該当スタックトレースが再現し、修正後は消えること、かつ `.lua` / `.go` では treesitter ハイライトが有効なまま（過剰に弾いていない）ことを確認した。

---

## まとめ

- **`nvim-treesitter` の `master` ブランチは EOL。** Neovim 0.12 に上げるなら `main` への移行は避けられない。`:TSUpdate` では直らない種類の非互換（Lua コード側の quantified captures 対応漏れ）が入っている。
- **`main` は前提が増える。** `tree-sitter-cli`（パッケージマネージャ版、0.26.1+）が必須。highlight/indent は自動で有効にならないので FileType autocmd を自分で書く。`incremental_selection` は消える。
- **Neovim 0.12 で `vim.treesitter.get_parser` は「例外を投げる」から「`nil` を返す」に変わった。** `pcall` でくるんで成否を見るガードは 0.12 では機能しない。戻り値そのものを見ること。
- **`vim.treesitter.language.get_lang()` は、マッピングの無い filetype に対して filetype 名をそのまま返す。** `nil` が返る前提のガードは `text` のような「parser の無い素の filetype」を素通りさせる。
- 別々に見えた2つのエラーは、どちらも「parser を入れていない言語に対して `vim.treesitter.start()` が呼ばれる」という同じ形だった。1つ目は filetype が化けて、2つ目はガードが機能せずに。
