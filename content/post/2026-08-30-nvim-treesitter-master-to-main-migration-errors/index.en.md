---
title: "Three treesitter Errors From Migrating nvim-treesitter master → main (Neovim 0.12)"
date: 2026-08-30T11:30:00+09:00
draft: false
description: "Notes on three errors I hit back to back after migrating nvim-treesitter from the EOL master branch to main on Neovim 0.12 — Markdown crashing on a gotmpl parser, code-fence highlighting dying, and 'Parser could not be created' on .txt files — with the cause and fix for each."
categories: ["Linux", "トラブルシュート"]
tags:
  - arch-linux
  - neovim
  - treesitter
  - lua
---

Around the time I bumped Neovim to `0.12.4`, `nvim-treesitter` errors started piling up one after another. Tracing them all leads back to a single fact: **`nvim-treesitter`'s `master` branch is already EOL and can't keep up with Neovim 0.12.** Migrating to the `main` branch fixed it, but here's the path there — plus one more pitfall I stepped on *after* the migration.

Environment:

| Item | Value |
| --- | --- |
| Neovim | `v0.12.4` (Arch Linux) |
| nvim-treesitter | `master` (tag `v0.10.0`, frozen May 2025) → migrated to `main` |
| Plugin manager | Lazy.nvim |

---

## Symptom 1: Opening Markdown crashes on a `gotmpl` parser

The moment I open a Markdown file, it halts with an error (`Press ENTER or type command to continue`).

```
Error in BufReadPost Autocommands for "*":
... ftplugin/markdown.lua: Vim(runtime):E5113: Lua chunk:
.../treesitter.lua:460: Parser could not be created for buffer 1 and language "gotmpl"
```

Press ENTER to dismiss it, and now the **syntax highlighting inside code fences** (```` ```go ```` and friends) is broken, with a different error in `:messages`.

```
Decoration provider "start" (ns=nvim.treesitter.highlighter):
.../treesitter.lua:197: attempt to call method 'range' (a nil value)
```

This overlapped with a Packer.nvim → Lazy.nvim switch, so I suspected the plugin manager at first — **wrong lead**. The trigger was the Neovim 0.12 bump that happened around the same time. Two causes were stacked on top of each other.

### Cause 1-A: `ftplugin/html.vim` was turning Markdown into gotmpl

My `~/.config/nvim/ftplugin/html.vim` contained exactly one line.

```vim
setlocal filetype=gotmpl
```

That forcibly replaces the filetype of **every HTML buffer** with `gotmpl`, no questions asked. When you open Markdown, `vim-markdown` pulls in `syntax/html.vim`, this line runs as a side effect, and the buffer's `filetype` mutates from `markdown` to `gotmpl`.

Right after that, the stock `ftplugin/markdown.lua` calls `vim.treesitter.start()` with no argument. With no argument it uses `vim.bo.filetype` (now `gotmpl`) as the parser name. I don't have the `gotmpl` tree-sitter parser installed, so: `Parser could not be created`.

Older Neovim's stock `ftplugin/markdown.lua` didn't have that `vim.treesitter.start()` call. The `html.vim` one-liner was broken all along; Neovim just started tripping over it.

### Cause 1-B: the `nvim-treesitter` master branch doesn't support Neovim 0.12

`nvim-treesitter` was pinned to the **`master` branch (tag `v0.10.0`, frozen May 2025)**. That branch is EOL.

In Neovim 0.12, query-match captures changed from "a single `TSNode`" to "a list of `TSNode`s" (quantified captures). The master branch's custom directives — `#set-lang-from-info-string!`, `#downcase!`, and so on — still assume a single node when handing it to `get_node_text()`, so internally `node:range()` gets called on a nil and blows up.

One of those, `#set-lang-from-info-string!`, is used in master's **markdown injection query** (the part that resolves the language name of a code fence). That's why highlighting inside ```` ```go ```` blocks dies.

- `:TSUpdate` doesn't help (it's not a parser ABI issue, it's a Lua-code incompatibility in the plugin).
- Overriding via `~/.config/nvim/after/queries/` doesn't help either — the master branch hijacks Neovim's query resolution, so your own `after/queries/` is ignored.

---

## Fix: delete html.vim, migrate to the main branch

### Cause 1-A → delete `ftplugin/html.vim`

If all you want is to treat Hugo's `layouts/**.html` as Go templates, don't use an ftplugin that flattens *every* HTML buffer — use a path pattern.

```lua
vim.filetype.add({
  pattern = { [".*/layouts/.*%.html"] = "gohtmltmpl" },
})
```

### Cause 1-B → move nvim-treesitter to the main branch

`main` is the branch rewritten for Neovim 0.11+/0.12. It has 0.12-compatible query directives, so 1-B is fixed at the root. But the prerequisites and API change quite a bit.

What `main` requires per its README:

- Neovim 0.12+
- `tar` / `curl`
- **`tree-sitter-cli` 0.26.1 or newer** (via a package manager; the npm build won't do) ← not needed on master
- a C compiler

`master` just compiled a pre-generated `parser.c`, but `main`'s `install.lua` actually calls `tree-sitter generate` / `tree-sitter build`. Without the CLI, every `:TSInstall` fails, leaving zero parsers — i.e. all highlighting gone.

```bash
sudo pacman -S tree-sitter-cli
```

Change the plugin spec (Lazy.nvim) to `branch = 'main'` and drop the old `require('nvim-treesitter.configs').setup{}`.

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

The big difference with `main`: **neither highlight nor indent is enabled automatically.** There's no `ensure_installed` either. You install parsers and start treesitter per-filetype yourself.

```lua
local parsers = {
  "javascript", "typescript", "tsx", "json", "css", "html", "lua", "go",
  "markdown", "markdown_inline", "yaml",
}

require("nvim-treesitter").install(parsers)

-- enable highlight & indent only for filetypes whose parser is installed
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

Run `:Lazy! sync` to move both plugins to their `main` commits, then install parsers synchronously (a few minutes the first time).

```lua
require('nvim-treesitter').install({
  'javascript','typescript','tsx','json','css','html','lua','go',
  'markdown','markdown_inline','yaml'
}):wait(500000)
```

Parsers land in `~/.local/share/nvim/site/parser/`. The master-era `~/.local/share/nvim/lazy/nvim-treesitter/parser/*.so` files are now orphans and can be deleted.

### What the migration costs you

- **`incremental_selection` (`gnn` / `grn` / `grc` / `grm`) is gone entirely.** No replacement in `main` core or in Neovim's built-ins. If you want it, add something like `mini.ai`.
- **TS indent is experimental.** The config above enables `indentexpr` for every TS filetype; if indentation goes weird in some language, delete that one line.

At this point Markdown and code-fence highlighting both worked again. Then a few days later I hit one more.

---

## Symptom 2: Opening `.txt` gives `Parser could not be created for language "text"`

Open a `.txt` file (filetype = `text`) and it halts on open, again.

```
Error in BufReadPost Autocommands for "*":
Lua callback: /usr/share/nvim/runtime/filetype.lua:28: ... FileType Autocommands for "*":
.../treesitter.lua:460: Parser could not be created for buffer 1 and language "text"
stack traceback:
	[C]: in function 'assert'
	.../vim/treesitter.lua:460: in function 'start'
	~/.config/nvim/lua/treesitter-config.lua:41: in function <...treesitter-config.lua:32>
```

`treesitter-config.lua:41` in the trace is the **`vim.treesitter.start(ev.buf)` line in that FileType autocmd I wrote during the migration**. I don't have a `text` parser installed, so one of the two guards (the `get_lang` check and the `pcall(get_parser)` check) should catch it — yet it sails straight through.

### Cause 2: on 0.12, neither guard works

I checked the behavior directly on Neovim 0.12.

```
$ nvim --headless -c 'lua
  local l = vim.treesitter.language.get_lang("text"); print(vim.inspect(l))       --> "text"
  local ok, p = pcall(vim.treesitter.get_parser, 0, l); print(ok, vim.inspect(p)) --> true  nil
' -c qa
```

1. **`get_lang("text")` returns `"text"`.** For a filetype with no registered mapping, 0.12 returns the filetype name itself (not `nil`). So `if not lang then return end` passes through.
2. **`get_parser` does not throw on 0.12.** When it can't create a parser it used to raise; on 0.12 it **returns `nil` without raising**. `pcall(vim.treesitter.get_parser, ...)` therefore returns success (`true`), so `if not pcall(...) then return end` passes through too. `pcall`'s success value only tells you whether the function *threw*, not whether you got a parser back.

Execution reaches `vim.treesitter.start(ev.buf)`, whose internal `assert` (`treesitter.lua:460`) throws `Parser could not be created`.

### Fix 2: check the return value, not pcall's success

```lua
vim.api.nvim_create_autocmd("FileType", {
  callback = function(ev)
    local lang = vim.treesitter.language.get_lang(vim.bo[ev.buf].filetype)
    if not lang then
      return
    end
    -- On Neovim 0.12, get_parser returns nil (instead of raising) when it
    -- can't create a parser, so check the return value, not pcall's success.
    local ok, parser = pcall(vim.treesitter.get_parser, ev.buf, lang)
    if not ok or not parser then
      return
    end
    vim.treesitter.start(ev.buf)
    vim.bo[ev.buf].indentexpr = "v:lua.require'nvim-treesitter'.indentexpr()"
  end,
})
```

This catches both `not ok` (older Neovim that raises) and `not parser` (0.12 that returns nil). As a bonus, the case where you open a file before `nvim-treesitter`'s async install has finished is now skipped correctly too.

---

## Verification

Checked by opening real files with `nvim --headless`.

| File | Expected | Result |
| --- | --- | --- |
| `.txt` (no parser) | no error | OK |
| `.lua` | no error + `vim.treesitter.highlighter.active` set | OK |
| `.go` | same | OK |
| `.md` (with a ```` ```go ```` fence) | no error, no `gotmpl` error, no `range nil` | OK |

Before the fix, opening `.txt` / `.md` reproduced the respective stack traces; after the fix they're gone, and `.lua` / `.go` still get treesitter highlighting (the guard isn't over-rejecting).

---

## Takeaways

- **`nvim-treesitter`'s `master` branch is EOL.** If you're moving to Neovim 0.12, migrating to `main` isn't optional. It carries an incompatibility that `:TSUpdate` can't fix (the Lua side hasn't been updated for quantified captures).
- **`main` adds prerequisites.** `tree-sitter-cli` (package-manager build, 0.26.1+) is mandatory. Highlight/indent aren't enabled automatically, so you write the FileType autocmd yourself. `incremental_selection` goes away.
- **On Neovim 0.12, `vim.treesitter.get_parser` changed from "raises" to "returns `nil`".** A guard that wraps it in `pcall` and checks the success flag does nothing on 0.12. Check the return value itself.
- **`vim.treesitter.language.get_lang()` returns the filetype name as-is for an unregistered filetype.** A guard that assumes `nil` will pass through a bare, parser-less filetype like `text`.
- The two errors looked unrelated, but both were the same shape: `vim.treesitter.start()` getting called for a language whose parser isn't installed. The first because the filetype got mutated; the second because the guard didn't work.
