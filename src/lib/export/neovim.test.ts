import { describe, expect, it } from "vitest";
import { type Recipe, MilkAmount, Flavor, Fruit } from "$lib/ingredients";

import { toNeovim } from "$lib/export/neovim";

const someRecipe: Recipe = {
  milkAmount: MilkAmount.Glug,
  flavor: Flavor.Intense,
  artificialColors: 6,
  sugar: 7,
  fruit: Fruit.Elderberry,
  sogginess: 2,
};

describe("neovim export", () => {
  it("should export neovim colorscheme", () => {
    const config = toNeovim(someRecipe);

    expect(config).toBe(expectedTheme);
  });
});

const expectedTheme = `" Store the following config under ~/.config/nvim/colors/root-loops.vim
" then load it into neovim via ':colorscheme root-loops' or by declaring
" it as your colorscheme in your neovim config.

" root-loops.vim -- Root Loops Vim Color Scheme.
" Webpage:          https://rootloops.sh?sugar=7&colors=6&sogginess=2&flavor=2&fruit=9&milk=2
" Description:      A neovim color scheme for cereal lovers

hi clear

if exists("syntax_on")
    syntax reset
endif

let colors_name = "root loops"

if ($TERM =~ '256' || &t_Co >= 256) || has("gui_running")
    hi Normal ctermbg=NONE ctermfg=NONE guibg=NONE guifg=NONE
    hi NonText ctermfg=0 guifg=#e5e7ee
    hi Comment ctermfg=7 cterm=italic guifg=#4e556a gui=italic
    hi Constant ctermfg=3 guifg=#b0964e
    hi Error ctermfg=1 guifg=#d77c6e
    hi Identifier ctermfg=9 guifg=#e4978a
    hi Function ctermfg=4 guifg=#7f95db
    hi Special ctermfg=13 guifg=#d694d0
    hi Delimiter ctermfg=15 guifg=#0f1219
    hi Statement ctermfg=5 guifg=#c877c1
    hi String ctermfg=2 guifg=#66ab75
    hi Operator ctermfg=6 guifg=#51a7b6
    hi Boolean ctermfg=3 guifg=#b0964e
    hi Label ctermfg=14 guifg=#64becd
    hi Keyword ctermfg=5 guifg=#c877c1
    hi Exception ctermfg=5 guifg=#c877c1
    hi Conditional ctermfg=5 guifg=#c877c1
    hi PreProc ctermfg=13 guifg=#d694d0
    hi Include ctermfg=5 guifg=#c877c1
    hi Macro ctermfg=5 guifg=#c877c1
    hi StorageClass ctermfg=11 guifg=#c7ab60
    hi Structure ctermfg=11 guifg=#c7ab60
    hi Todo ctermbg=12 ctermfg=0 cterm=bold guibg=#99ace5 guifg=#e5e7ee gui=bold
    hi Type ctermfg=11 guifg=#c7ab60
    hi Underlined cterm=underline gui=underline
    hi Bold cterm=bold gui=bold
    hi Italic cterm=italic gui=italic
    hi Ignore ctermbg=NONE ctermfg=NONE cterm=NONE guibg=NONE guifg=NONE gui=NONE
    hi StatusLine ctermbg=0 ctermfg=15 cterm=NONE guibg=#d4d9e4 guifg=#0f1219 gui=NONE
    hi StatusLineNC ctermbg=0 ctermfg=15 cterm=NONE guibg=#e5e7ee guifg=#262a37 gui=NONE
    hi VertSplit ctermfg=8 guifg=#9fa7bd
    hi TabLine ctermbg=0 ctermfg=7 guibg=#d4d9e4 guifg=#4e556a
    hi TabLineFill ctermbg=NONE ctermfg=0 guibg=NONE guifg=#d4d9e4
    hi TabLineSel ctermbg=11 ctermfg=0 guibg=#c7ab60 guifg=#d4d9e4
    hi Title ctermfg=4 cterm=bold guifg=#7f95db gui=bold
    hi CursorLine ctermbg=0 ctermfg=NONE guibg=#d4d9e4 guifg=NONE
    hi Cursor ctermbg=15 ctermfg=0 guibg=#0f1219 guifg=#e5e7ee
    hi CursorColumn ctermbg=0 guibg=#d4d9e4
    hi LineNr ctermfg=8 guifg=#9fa7bd
    hi CursorLineNr ctermfg=6 guifg=#51a7b6
    hi helpLeadBlank ctermbg=NONE ctermfg=NONE guibg=NONE guifg=NONE
    hi helpNormal ctermbg=NONE ctermfg=NONE guibg=NONE guifg=NONE
    hi Visual ctermbg=8 ctermfg=15 cterm=bold guibg=#9fa7bd guifg=#0f1219 gui=bold
    hi VisualNOS ctermbg=8 ctermfg=15 cterm=bold guibg=#9fa7bd guifg=#0f1219 gui=bold
    hi Pmenu ctermbg=0 ctermfg=15 guibg=#d4d9e4 guifg=#0f1219
    hi PmenuSbar ctermbg=8 ctermfg=7 guibg=#9fa7bd guifg=#4e556a
    hi PmenuSel ctermbg=8 ctermfg=15 cterm=bold guibg=#9fa7bd guifg=#0f1219 gui=bold
    hi PmenuThumb ctermbg=7 ctermfg=NONE guibg=#4e556a guifg=NONE
    hi FoldColumn ctermfg=7 guifg=#4e556a
    hi Folded ctermfg=12 guifg=#99ace5
    hi WildMenu ctermbg=0 ctermfg=15 cterm=NONE guibg=#d4d9e4 guifg=#0f1219 gui=NONE
    hi SpecialKey ctermfg=0 guifg=#d4d9e4
    hi IncSearch ctermbg=1 ctermfg=0 guibg=#d77c6e guifg=#e5e7ee
    hi CurSearch ctermbg=3 ctermfg=0 guibg=#b0964e guifg=#e5e7ee
    hi Search ctermbg=11 ctermfg=0 guibg=#c7ab60 guifg=#e5e7ee
    hi Directory ctermfg=4 guifg=#7f95db
    hi MatchParen ctermbg=0 ctermfg=3 cterm=bold guibg=#d4d9e4 guifg=#b0964e gui=bold
    hi SpellBad cterm=undercurl gui=undercurl guisp=#e4978a
    hi SpellCap cterm=undercurl gui=undercurl guisp=#c7ab60
    hi SpellLocal cterm=undercurl gui=undercurl guisp=#99ace5
    hi SpellRare cterm=undercurl gui=undercurl guisp=#79c289
    hi ColorColumn ctermbg=8 guibg=#9fa7bd
    hi SignColumn ctermfg=7 guifg=#4e556a
    hi ModeMsg ctermbg=15 ctermfg=0 cterm=bold guibg=#262a37 guifg=#d4d9e4 gui=bold
    hi MoreMsg ctermfg=4 guifg=#7f95db
    hi Question ctermfg=4 guifg=#7f95db
    hi QuickFixLine ctermbg=0 ctermfg=14 guibg=#d4d9e4 guifg=#64becd
    hi Conceal ctermfg=8 guifg=#9fa7bd
    hi ToolbarLine ctermbg=0 ctermfg=15 guibg=#d4d9e4 guifg=#262a37
    hi ToolbarButton ctermbg=8 ctermfg=15 guibg=#9fa7bd guifg=#262a37
    hi debugPC ctermfg=7 guifg=#4e556a
    hi debugBreakpoint ctermfg=8 guifg=#9fa7bd
    hi ErrorMsg ctermfg=1 cterm=bold,italic guifg=#d77c6e gui=bold,italic
    hi WarningMsg ctermfg=11 guifg=#c7ab60
    hi DiffAdd ctermbg=10 ctermfg=0 guibg=#79c289 guifg=#e5e7ee
    hi DiffChange ctermbg=12 ctermfg=0 guibg=#99ace5 guifg=#e5e7ee
    hi DiffDelete ctermbg=9 ctermfg=0 guibg=#e4978a guifg=#e5e7ee
    hi DiffText ctermbg=14 ctermfg=0 guibg=#64becd guifg=#e5e7ee
    hi diffAdded ctermfg=10 guifg=#79c289
    hi diffRemoved ctermfg=9 guifg=#e4978a
    hi diffChanged ctermfg=12 guifg=#99ace5
    hi diffOldFile ctermfg=11 guifg=#c7ab60
    hi diffNewFile ctermfg=13 guifg=#d694d0
    hi diffFile ctermfg=12 guifg=#99ace5
    hi diffLine ctermfg=7 guifg=#4e556a
    hi diffIndexLine ctermfg=14 guifg=#64becd
    hi healthError ctermfg=1 guifg=#d77c6e
    hi healthSuccess ctermfg=2 guifg=#66ab75
    hi healthWarning ctermfg=3 guifg=#b0964e
    hi NormalFloat ctermbg=0 ctermfg=15 guibg=#e5e7ee guifg=#0f1219
    hi FloatBorder ctermbg=0 ctermfg=7 guibg=#e5e7ee guifg=#4e556a
    hi FloatShadow ctermbg=0 ctermfg=15 guibg=#d4d9e4 guifg=#0f1219
    hi @variable ctermfg=15 guifg=#0f1219
    hi @variable.builtin ctermfg=1 guifg=#d77c6e
    hi @variable.parameter ctermfg=1 guifg=#d77c6e
    hi @variable.member ctermfg=1 guifg=#d77c6e
    hi @constant.builtin ctermfg=5 guifg=#c877c1
    hi @string.regexp ctermfg=1 guifg=#d77c6e
    hi @string.escape ctermfg=6 guifg=#51a7b6
    hi @string.special.url ctermfg=4 cterm=underline guifg=#7f95db gui=underline
    hi @string.special.symbol ctermfg=13 guifg=#d694d0
    hi @type.builtin ctermfg=3 guifg=#b0964e
    hi @property ctermfg=1 guifg=#d77c6e
    hi @function.builtin ctermfg=5 guifg=#c877c1
    hi @constructor ctermfg=11 guifg=#c7ab60
    hi @keyword.function ctermfg=5 guifg=#c877c1
    hi @keyword.return ctermfg=5 guifg=#c877c1
    hi @keyword.export ctermfg=12 guifg=#99ace5
    hi @punctuation.bracket ctermfg=15 guifg=#0f1219
    hi @comment.error ctermbg=9 ctermfg=0 guibg=#e4978a guifg=#e5e7ee
    hi @comment.warning ctermbg=11 ctermfg=0 guibg=#c7ab60 guifg=#e5e7ee
    hi @comment.todo ctermbg=12 ctermfg=0 guibg=#99ace5 guifg=#e5e7ee
    hi @comment.note ctermbg=14 ctermfg=0 guibg=#64becd guifg=#e5e7ee
    hi @markup ctermfg=15 guifg=#0f1219
    hi @markup.strong ctermfg=15 cterm=bold guifg=#0f1219 gui=bold
    hi @markup.italic ctermfg=15 cterm=italic guifg=#0f1219 gui=italic
    hi @markup.strikethrough ctermfg=15 cterm=strikethrough guifg=#0f1219 gui=strikethrough
    hi @markup.heading ctermfg=4 cterm=bold guifg=#7f95db gui=bold
    hi @markup.quote ctermfg=6 guifg=#51a7b6
    hi @markup.math ctermfg=4 guifg=#7f95db
    hi @markup.link.url ctermfg=5 cterm=underline guifg=#c877c1 gui=underline
    hi @markup.raw ctermfg=14 guifg=#64becd
    hi @markup.list.checked ctermfg=2 guifg=#66ab75
    hi @markup.list.unchecked ctermfg=7 guifg=#4e556a
    hi @tag ctermfg=5 guifg=#c877c1
    hi @tag.builtin ctermfg=6 guifg=#51a7b6
    hi @tag.attribute ctermfg=4 guifg=#7f95db
    hi @tag.delimiter ctermfg=15 guifg=#0f1219

elseif &t_Co == 8 || $TERM !~# '^linux' || &t_Co == 16
    set t_Co=16
    hi Normal ctermbg=NONE ctermfg=NONE
    hi NonText ctermfg=0
    hi Comment ctermfg=7 cterm=italic
    hi Constant ctermfg=3
    hi Error ctermfg=1
    hi Identifier ctermfg=9
    hi Function ctermfg=4
    hi Special ctermfg=13
    hi Delimiter ctermfg=15
    hi Statement ctermfg=5
    hi String ctermfg=2
    hi Operator ctermfg=6
    hi Boolean ctermfg=3
    hi Label ctermfg=14
    hi Keyword ctermfg=5
    hi Exception ctermfg=5
    hi Conditional ctermfg=5
    hi PreProc ctermfg=13
    hi Include ctermfg=5
    hi Macro ctermfg=5
    hi StorageClass ctermfg=11
    hi Structure ctermfg=11
    hi Todo ctermbg=12 ctermfg=0 cterm=bold
    hi Type ctermfg=11
    hi Underlined cterm=underline
    hi Bold cterm=bold
    hi Italic cterm=italic
    hi Ignore ctermbg=NONE ctermfg=NONE cterm=NONE
    hi StatusLine ctermbg=0 ctermfg=15 cterm=NONE
    hi StatusLineNC ctermbg=0 ctermfg=15 cterm=NONE
    hi VertSplit ctermfg=8
    hi TabLine ctermbg=0 ctermfg=7
    hi TabLineFill ctermbg=NONE ctermfg=0
    hi TabLineSel ctermbg=11 ctermfg=0
    hi Title ctermfg=4 cterm=bold
    hi CursorLine ctermbg=0 ctermfg=NONE
    hi Cursor ctermbg=15 ctermfg=0
    hi CursorColumn ctermbg=0
    hi LineNr ctermfg=8
    hi CursorLineNr ctermfg=6
    hi helpLeadBlank ctermbg=NONE ctermfg=NONE
    hi helpNormal ctermbg=NONE ctermfg=NONE
    hi Visual ctermbg=8 ctermfg=15 cterm=bold
    hi VisualNOS ctermbg=8 ctermfg=15 cterm=bold
    hi Pmenu ctermbg=0 ctermfg=15
    hi PmenuSbar ctermbg=8 ctermfg=7
    hi PmenuSel ctermbg=8 ctermfg=15 cterm=bold
    hi PmenuThumb ctermbg=7 ctermfg=NONE
    hi FoldColumn ctermfg=7
    hi Folded ctermfg=12
    hi WildMenu ctermbg=0 ctermfg=15 cterm=NONE
    hi SpecialKey ctermfg=0
    hi IncSearch ctermbg=1 ctermfg=0
    hi CurSearch ctermbg=3 ctermfg=0
    hi Search ctermbg=11 ctermfg=0
    hi Directory ctermfg=4
    hi MatchParen ctermbg=0 ctermfg=3 cterm=bold
    hi SpellBad cterm=undercurl
    hi SpellCap cterm=undercurl
    hi SpellLocal cterm=undercurl
    hi SpellRare cterm=undercurl
    hi ColorColumn ctermbg=8
    hi SignColumn ctermfg=7
    hi ModeMsg ctermbg=15 ctermfg=0 cterm=bold
    hi MoreMsg ctermfg=4
    hi Question ctermfg=4
    hi QuickFixLine ctermbg=0 ctermfg=14
    hi Conceal ctermfg=8
    hi ToolbarLine ctermbg=0 ctermfg=15
    hi ToolbarButton ctermbg=8 ctermfg=15
    hi debugPC ctermfg=7
    hi debugBreakpoint ctermfg=8
    hi ErrorMsg ctermfg=1 cterm=bold,italic
    hi WarningMsg ctermfg=11
    hi DiffAdd ctermbg=10 ctermfg=0
    hi DiffChange ctermbg=12 ctermfg=0
    hi DiffDelete ctermbg=9 ctermfg=0
    hi DiffText ctermbg=14 ctermfg=0
    hi diffAdded ctermfg=10
    hi diffRemoved ctermfg=9
    hi diffChanged ctermfg=12
    hi diffOldFile ctermfg=11
    hi diffNewFile ctermfg=13
    hi diffFile ctermfg=12
    hi diffLine ctermfg=7
    hi diffIndexLine ctermfg=14
    hi healthError ctermfg=1
    hi healthSuccess ctermfg=2
    hi healthWarning ctermfg=3
    hi NormalFloat ctermbg=0 ctermfg=15
    hi FloatBorder ctermbg=0 ctermfg=7
    hi FloatShadow ctermbg=0 ctermfg=15
    hi @variable ctermfg=15
    hi @variable.builtin ctermfg=1
    hi @variable.parameter ctermfg=1
    hi @variable.member ctermfg=1
    hi @constant.builtin ctermfg=5
    hi @string.regexp ctermfg=1
    hi @string.escape ctermfg=6
    hi @string.special.url ctermfg=4 cterm=underline
    hi @string.special.symbol ctermfg=13
    hi @type.builtin ctermfg=3
    hi @property ctermfg=1
    hi @function.builtin ctermfg=5
    hi @constructor ctermfg=11
    hi @keyword.function ctermfg=5
    hi @keyword.return ctermfg=5
    hi @keyword.export ctermfg=12
    hi @punctuation.bracket ctermfg=15
    hi @comment.error ctermbg=9 ctermfg=0
    hi @comment.warning ctermbg=11 ctermfg=0
    hi @comment.todo ctermbg=12 ctermfg=0
    hi @comment.note ctermbg=14 ctermfg=0
    hi @markup ctermfg=15
    hi @markup.strong ctermfg=15 cterm=bold
    hi @markup.italic ctermfg=15 cterm=italic
    hi @markup.strikethrough ctermfg=15 cterm=strikethrough
    hi @markup.heading ctermfg=4 cterm=bold
    hi @markup.quote ctermfg=6
    hi @markup.math ctermfg=4
    hi @markup.link.url ctermfg=5 cterm=underline
    hi @markup.raw ctermfg=14
    hi @markup.list.checked ctermfg=2
    hi @markup.list.unchecked ctermfg=7
    hi @tag ctermfg=5
    hi @tag.builtin ctermfg=6
    hi @tag.attribute ctermfg=4
    hi @tag.delimiter ctermfg=15
endif

hi link EndOfBuffer NonText
hi link SpecialComment Special
hi link Define PreProc
hi link PreCondit PreProc
hi link Number Constant
hi link Float Number
hi link Typedef Type
hi link SpecialChar Special
hi link Debug Special
hi link StatusLineTerm StatusLine
hi link StatusLineTermNC StatusLineNC
hi link WinSeparator VertSplit
hi link WinBar StatusLine
hi link WinBarNC StatusLineNC
hi link lCursor Cursor
hi link CursorIM Cursor
hi link Terminal Normal
hi link @variable.parameter.builtin @variable.parameter
hi link @constant Constant
hi link @constant.macro Macro
hi link @module Structure
hi link @module.builtin Special
hi link @label Label
hi link @string String
hi link @string.special Special
hi link @character Character
hi link @character.special SpecialChar
hi link @boolean Boolean
hi link @number Number
hi link @number.float Float
hi link @type Type
hi link @type.definition Type
hi link @attribute Constant
hi link @attribute.builtin Constant
hi link @function Function
hi link @function.call Function
hi link @function.method Function
hi link @function.method.call Function
hi link @operator Operator
hi link @keyword Keyword
hi link @keyword.coroutine Keyword
hi link @keyword.operator Operator
hi link @keyword.import Include
hi link @keyword.type Keyword
hi link @keyword.modifier Keyword
hi link @keyword.repeat Repeat
hi link @keyword.debug Exception
hi link @keyword.exception Exception
hi link @keyword.conditional Conditional
hi link @keyword.conditional.ternary Operator
hi link @keyword.directive PreProc
hi link @keyword.directive.define Define
hi link @punctuation.delimiter Delimiter
hi link @punctuation.special Special
hi link @comment Comment
hi link @comment.documentation Comment
hi link @markup.underline underline
hi link @markup.link Tag
hi link @markup.link.label Label
hi link @markup.list Special
hi link @diff.plus diffAdded
hi link @diff.minus diffRemoved
hi link @diff.delta diffChanged

if (has('termguicolors') && &termguicolors) || has('gui_running')
    let g:terminal_ansi_colors = [ '#d4d9e4', '#d77c6e', '#66ab75', '#b0964e', '#7f95db', '#c877c1', '#51a7b6', '#4e556a', '#9fa7bd', '#e4978a', '#79c289', '#c7ab60', '#99ace5', '#d694d0', '#64becd', '#262a37' ]
endif`;
