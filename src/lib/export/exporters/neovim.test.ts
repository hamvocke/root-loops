import { describe, expect, it } from "vitest";
import { type Recipe, MilkAmount, Flavor, Fruit } from "$lib/ingredients";

import { toNeovim } from "$lib/export/exporters/neovim";

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
" Webpage:          https://rootloops.sh
" Description:      A neovim color scheme for cereal lovers

hi clear

if exists("syntax_on")
    syntax reset
endif

let colors_name = "root loops"

if ($TERM =~ '256' || &t_Co >= 256) || has("gui_running")
    hi NonText ctermfg=0 guifg=#d0d4e1
    hi Comment ctermfg=8 cterm=italic guifg=#959eb5 gui=italic
    hi Constant ctermfg=3 guifg=#b0964e
    hi Error ctermfg=1 guifg=#d77c6e
    hi Identifier ctermfg=9 guifg=#e4978a
    hi Function ctermfg=4 guifg=#7f95db
    hi Special ctermfg=13 guifg=#d694d0
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
    hi Todo ctermbg=9 ctermfg=0 cterm=bold guibg=#e4978a guifg=#dfe2eb gui=bold
    hi Type ctermfg=11 guifg=#c7ab60
    hi Underlined cterm=underline gui=underline
    hi Bold cterm=bold gui=bold
    hi Italic cterm=italic gui=italic
    hi Ignore ctermbg=NONE ctermfg=NONE cterm=NONE guibg=NONE guifg=NONE gui=NONE
    hi StatusLine ctermbg=7 ctermfg=0 cterm=NONE guibg=#4a5165 guifg=#d0d4e1 gui=NONE
    hi StatusLineNC ctermbg=0 ctermfg=15 cterm=NONE guibg=#d0d4e1 guifg=#07080d gui=NONE
    hi VertSplit ctermfg=8 guifg=#959eb5
    hi TabLine ctermbg=0 ctermfg=7 guibg=#d0d4e1 guifg=#4a5165
    hi TabLineFill ctermbg=NONE ctermfg=15 guibg=NONE guifg=#07080d
    hi TabLineSel ctermbg=11 ctermfg=0 guibg=#c7ab60 guifg=#d0d4e1
    hi Title ctermfg=4 cterm=bold guifg=#7f95db gui=bold
    hi CursorLine ctermbg=0 ctermfg=NONE guibg=#d0d4e1 guifg=NONE
    hi LineNr ctermfg=8 guifg=#959eb5
    hi CursorLineNr ctermfg=6 guifg=#51a7b6
    hi helpLeadBlank ctermbg=NONE ctermfg=NONE guibg=NONE guifg=NONE
    hi helpNormal ctermbg=NONE ctermfg=NONE guibg=NONE guifg=NONE
    hi Visual ctermbg=7 cterm=bold guibg=#4a5165 gui=bold
    hi VisualNOS ctermbg=7 cterm=bold guibg=#4a5165 gui=bold
    hi Pmenu ctermbg=0 ctermfg=15 guibg=#d0d4e1 guifg=#1e222d
    hi PmenuSbar ctermbg=8 guibg=#959eb5
    hi PmenuSel ctermbg=8 cterm=bold guibg=#959eb5 gui=bold
    hi PmenuThumb ctermbg=7 ctermfg=NONE guibg=#4a5165 guifg=NONE
    hi FoldColumn ctermfg=7 guifg=#4a5165
    hi Folded ctermfg=12 guifg=#99ace5
    hi WildMenu ctermbg=0 ctermfg=15 cterm=NONE guibg=#d0d4e1 guifg=#1e222d gui=NONE
    hi IncSearch ctermbg=1 ctermfg=0 guibg=#d77c6e guifg=#dfe2eb
    hi CurSearch ctermbg=3 ctermfg=0 guibg=#b0964e guifg=#dfe2eb
    hi Search ctermbg=11 ctermfg=0 guibg=#c7ab60 guifg=#dfe2eb
    hi Directory ctermfg=4 guifg=#7f95db
    hi MatchParen ctermbg=7 ctermfg=3 cterm=bold guibg=#4a5165 guifg=#b0964e gui=bold
    hi SpellBad cterm=undercurl gui=undercurl guisp=#e4978a
    hi SpellCap cterm=undercurl gui=undercurl guisp=#c7ab60
    hi SpellLocal cterm=undercurl gui=undercurl guisp=#99ace5
    hi SpellRare cterm=undercurl gui=undercurl guisp=#79c289
    hi ColorColumn ctermbg=8 guibg=#959eb5
    hi SignColumn ctermfg=7 guifg=#4a5165
    hi ModeMsg ctermbg=15 ctermfg=0 cterm=bold guibg=#07080d guifg=#d0d4e1 gui=bold
    hi MoreMsg ctermfg=4 guifg=#7f95db
    hi Question ctermfg=4 guifg=#7f95db
    hi Cursor ctermbg=15 ctermfg=0 guibg=#1e222d guifg=#dfe2eb
    hi CursorColumn ctermbg=0 guibg=#d0d4e1
    hi QuickFixLine ctermbg=7 guibg=#4a5165
    hi Conceal ctermfg=8 guifg=#959eb5
    hi ToolbarLine ctermbg=0 ctermfg=15 guibg=#d0d4e1 guifg=#07080d
    hi ToolbarButton ctermbg=8 ctermfg=15 guibg=#959eb5 guifg=#07080d
    hi debugPC ctermfg=7 guifg=#4a5165
    hi debugBreakpoint ctermfg=8 guifg=#959eb5
    hi ErrorMsg ctermfg=1 cterm=bold,italic guifg=#d77c6e gui=bold,italic
    hi WarningMsg ctermfg=11 guifg=#c7ab60
    hi DiffAdd ctermbg=10 ctermfg=0 guibg=#79c289 guifg=#dfe2eb
    hi DiffChange ctermbg=12 ctermfg=0 guibg=#99ace5 guifg=#dfe2eb
    hi DiffDelete ctermbg=9 ctermfg=0 guibg=#e4978a guifg=#dfe2eb
    hi DiffText ctermbg=14 ctermfg=0 guibg=#64becd guifg=#dfe2eb
    hi diffAdded ctermfg=10 guifg=#79c289
    hi diffRemoved ctermfg=9 guifg=#e4978a
    hi diffChanged ctermfg=12 guifg=#99ace5
    hi diffOldFile ctermfg=11 guifg=#c7ab60
    hi diffNewFile ctermfg=13 guifg=#d694d0
    hi diffFile ctermfg=12 guifg=#99ace5
    hi diffLine ctermfg=7 guifg=#4a5165
    hi diffIndexLine ctermfg=14 guifg=#64becd
    hi healthError ctermfg=1 guifg=#d77c6e
    hi healthSuccess ctermfg=2 guifg=#66ab75
    hi healthWarning ctermfg=3 guifg=#b0964e

elseif &t_Co == 8 || $TERM !~# '^linux' || &t_Co == 16
    set t_Co=16
    hi NonText ctermfg=0
    hi Comment ctermfg=8 cterm=italic
    hi Constant ctermfg=3
    hi Error ctermfg=1
    hi Identifier ctermfg=9
    hi Function ctermfg=4
    hi Special ctermfg=13
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
    hi Todo ctermbg=9 ctermfg=0 cterm=bold
    hi Type ctermfg=11
    hi Underlined cterm=underline
    hi Bold cterm=bold
    hi Italic cterm=italic
    hi Ignore ctermbg=NONE ctermfg=NONE cterm=NONE
    hi StatusLine ctermbg=7 ctermfg=0 cterm=NONE
    hi StatusLineNC ctermbg=0 ctermfg=15 cterm=NONE
    hi VertSplit ctermfg=8
    hi TabLine ctermbg=0 ctermfg=7
    hi TabLineFill ctermbg=NONE ctermfg=15
    hi TabLineSel ctermbg=11 ctermfg=0
    hi Title ctermfg=4 cterm=bold
    hi CursorLine ctermbg=0 ctermfg=NONE
    hi LineNr ctermfg=8
    hi CursorLineNr ctermfg=6
    hi helpLeadBlank ctermbg=NONE ctermfg=NONE
    hi helpNormal ctermbg=NONE ctermfg=NONE
    hi Visual ctermbg=7 cterm=bold
    hi VisualNOS ctermbg=7 cterm=bold
    hi Pmenu ctermbg=0 ctermfg=15
    hi PmenuSbar ctermbg=8
    hi PmenuSel ctermbg=8 cterm=bold
    hi PmenuThumb ctermbg=7 ctermfg=NONE
    hi FoldColumn ctermfg=7
    hi Folded ctermfg=12
    hi WildMenu ctermbg=0 ctermfg=15 cterm=NONE
    hi IncSearch ctermbg=1 ctermfg=0
    hi CurSearch ctermbg=3 ctermfg=0
    hi Search ctermbg=11 ctermfg=0
    hi Directory ctermfg=4
    hi MatchParen ctermbg=7 ctermfg=3 cterm=bold
    hi SpellBad cterm=undercurl
    hi SpellCap cterm=undercurl
    hi SpellLocal cterm=undercurl
    hi SpellRare cterm=undercurl
    hi ColorColumn ctermbg=8
    hi SignColumn ctermfg=7
    hi ModeMsg ctermbg=15 ctermfg=0 cterm=bold
    hi MoreMsg ctermfg=4
    hi Question ctermfg=4
    hi Cursor ctermbg=15 ctermfg=0
    hi CursorColumn ctermbg=0
    hi QuickFixLine ctermbg=7
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
hi link SpecialKey NonText
hi link lCursor Cursor
hi link CursorIM Cursor
hi link Terminal Normal

if (has('termguicolors') && &termguicolors) || has('gui_running')
    let g:terminal_ansi_colors = [ '#d0d4e1', '#d77c6e', '#66ab75', '#b0964e', '#7f95db', '#c877c1', '#51a7b6', '#4a5165', '#959eb5', '#e4978a', '#79c289', '#c7ab60', '#99ace5', '#d694d0', '#64becd', '#07080d' ]
endif`;
