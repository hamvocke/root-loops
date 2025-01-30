import { type Recipe } from "$lib/ingredients";
import { prepare, type Cereals } from "$lib/cereals";
import {
  type HighlightGroups,
  renderAnsiHighlights,
  renderLinkedHighlights,
  renderTruecolorHighlights,
} from "./vim/highlight";

/**
 * With a lot of gratitute to https://github.com/romainl/vim-rnb who provided the
 * whole mechanism as a Ruby implementation that I could port to TypeScript.
 */

/**
 *  Assign colors and styles to vim highlight groups.
 *
 *  For Root Loops, we use 16 cereal colors (the standard ANSI colors) plus a
 *  foreground and a background color that are shades of gray. That's all you get.
 *  For vim, we could get away with simply setting the 'notermguicolors' option
 *  and rely on setting 'ctermfg' and 'ctermbg' alone, but since some folks
 *  might not use Root Loops for their terminal and only want to use it for vim
 *  we're setting the full truecolor attributes using 'guifg' and 'guibg' and
 *  assigning the hex colors we get from our Root Loops recipe.
 *
 *  @remark
 *  * To learn more about highlight groups in vim, see :help highlight-default
 *  and :help group-name
 *  * To see all currently active highlight groups in your vim instance, use :so $VIMRUNTIME/syntax/hitest.vim
 *
 *
 *  @returns HighlightGroups - mapping a single highlight group to a background and
 *  foreground color, a font style, and an optional underline color. Alternatively
 *  you can link two highlight groups together to declare that one should follow the
 *  style of the other.
 */
function defineHighlights(c: Cereals): HighlightGroups {
  const background: ColorDefinition = { hex: c.background.color_hex, ansi: "NONE" };
  const foreground: ColorDefinition = { hex: c.foreground.color_hex, ansi: "NONE" };

  const black: ColorDefinition = { hex: c.black.color_hex, ansi: 0 };
  const darkred: ColorDefinition = { hex: c.red.color_hex, ansi: 1 };
  const darkgreen: ColorDefinition = { hex: c.green.color_hex, ansi: 2 };
  const darkyellow: ColorDefinition = { hex: c.yellow.color_hex, ansi: 3 };
  const darkblue: ColorDefinition = { hex: c.blue.color_hex, ansi: 4 };
  const darkmagenta: ColorDefinition = { hex: c.magenta.color_hex, ansi: 5 };
  const darkcyan: ColorDefinition = { hex: c.cyan.color_hex, ansi: 6 };
  const gray: ColorDefinition = { hex: c.white.color_hex, ansi: 7 };

  const darkgray: ColorDefinition = { hex: c.brightBlack.color_hex, ansi: 8 };
  const red: ColorDefinition = { hex: c.brightRed.color_hex, ansi: 9 };
  const green: ColorDefinition = { hex: c.brightGreen.color_hex, ansi: 10 };
  const yellow: ColorDefinition = { hex: c.brightYellow.color_hex, ansi: 11 };
  const blue: ColorDefinition = { hex: c.brightBlue.color_hex, ansi: 12 };
  const magenta: ColorDefinition = { hex: c.brightMagenta.color_hex, ansi: 13 };
  const cyan: ColorDefinition = { hex: c.brightCyan.color_hex, ansi: 14 };
  const white: ColorDefinition = { hex: c.brightWhite.color_hex, ansi: 15 };

  return [
    { group: "Normal", bg: background, fg: foreground, style: "NONE" },
    { group: "NonText", bg: "NONE", fg: black, style: "NONE" },
    { group: "EndOfBuffer", targetGroup: "NonText" },
    { group: "Comment", bg: "NONE", fg: darkgray, style: "italic" },
    { group: "Constant", bg: background, fg: darkyellow, style: "NONE" },
    { group: "Error", bg: background, fg: darkred, style: "NONE" },
    { group: "Identifier", bg: background, fg: darkmagenta, style: "NONE" },
    { group: "Ignore", bg: background, fg: background, style: "NONE" },
    { group: "PreProc", bg: background, fg: magenta, style: "NONE" },
    { group: "Special", bg: background, fg: magenta, style: "NONE" },
    { group: "Statement", bg: background, fg: darkcyan, style: "NONE" },
    { group: "String", bg: background, fg: darkgreen, style: "NONE" },
    { group: "Opeator", bg: background, fg: cyan, style: "NONE" },

    // TODO: boolean? statement? operator? label? keyword? exception? conditional? repeat?
    { group: "Number", targetGroup: "Constant" },
    { group: "Todo", bg: darkmagenta, fg: background, style: "NONE" },
    { group: "Type", bg: background, fg: yellow, style: "NONE" },
    { group: "Underlined", bg: "bg", fg: "fg", style: "underline" },
    { group: "StatusLine", bg: "NONE", fg: foreground, style: "NONE" },
    { group: "StatusLineNC", bg: "NONE", fg: white, style: "NONE" }, // status line of not-current window
    { group: "StatusLineTerm", targetGroup: "StatusLine" },
    { group: "StatusLineTermNC", targetGroup: "StatusLineNC" },
    { group: "VertSplit", bg: background, fg: black, style: "NONE" },
    { group: "TabLine", bg: black, fg: white, style: "NONE" },
    { group: "TabLineFill", bg: darkgray, fg: "NONE", style: "NONE" },
    { group: "TabLineSel", bg: gray, fg: black, style: "NONE" }, // active tab panel
    { group: "Title", bg: "NONE", fg: darkblue, style: "bold" },
    { group: "CursorLine", bg: gray, fg: "NONE", style: "NONE" },
    { group: "LineNr", bg: "NONE", fg: darkgray, style: "NONE" },
    { group: "CursorLineNr", bg: "bg", fg: blue, style: "NONE" },
    { group: "helpLeadBlank", bg: "NONE", fg: "NONE", style: "NONE" },
    { group: "helpNormal", bg: "NONE", fg: "NONE", style: "NONE" },
    { group: "Visual", bg: darkgray, fg: "NONE", style: "bold" }, // visual mode selection
    { group: "VisualNOS", bg: darkgray, fg: "NONE", style: "bold" },
    { group: "Pmenu", bg: black, fg: foreground, style: "NONE" }, // popup menu item
    { group: "PmenuSbar", bg: darkgray, fg: "NONE", style: "NONE" }, // popup menu scrollbar
    { group: "PmenuSel", bg: darkgray, fg: "NONE", style: "bold" }, // popup menu selected item
    { group: "PmenuThumb", bg: gray, fg: "NONE", style: "NONE" }, // popup menu scrollbar thumb
    { group: "FoldColumn", bg: "NONE", fg: gray, style: "NONE" },
    { group: "Folded", bg: white, fg: blue, style: "NONE" },
    { group: "WildMenu", bg: darkgray, fg: "NONE", style: "NONE" }, // current selection in 'wildmenu' completion
    { group: "SpecialKey", targetGroup: "NonText" },
    { group: "DiffAdd", bg: "NONE", fg: green, style: "NONE" },
    { group: "DiffChange", bg: "NONE", fg: blue, style: "NONE" },
    { group: "DiffDelete", bg: "NONE", fg: red, style: "NONE" },
    { group: "DiffText", bg: "NONE", fg: white, style: "NONE" },
    { group: "IncSearch", bg: black, fg: white, style: "NONE" },
    { group: "CurSearch", bg: darkyellow, fg: background, style: "NONE" },
    { group: "Search", bg: black, fg: foreground, style: "NONE" },
    { group: "Directory", bg: "NONE", fg: darkblue, style: "NONE" },
    { group: "MatchParen", bg: gray, fg: darkyellow, style: "bold" },
    { group: "SpellBad", bg: "bg", fg: "fg", style: "undercurl", undercurl: red },
    { group: "SpellCap", bg: "bg", fg: "fg", style: "undercurl", undercurl: yellow },
    { group: "SpellLocal", bg: "bg", fg: "fg", style: "undercurl", undercurl: blue },
    { group: "SpellRare", bg: "bg", fg: "fg", style: "undercurl", undercurl: green },
    { group: "ColorColumn", bg: gray, fg: "NONE", style: "NONE" },
    { group: "SignColumn", bg: "NONE", fg: white, style: "NONE" },
    { group: "ErrorMsg", bg: "NONE", fg: red, style: "bold,italic" },
    { group: "ModeMsg", bg: "NONE", fg: foreground, style: "bold" },
    { group: "MoreMsg", bg: "NONE", fg: darkblue, style: "NONE" },
    { group: "Question", bg: "NONE", fg: darkblue, style: "NONE" },
    { group: "WarningMsg", bg: "NONE", fg: darkyellow, style: "NONE" },
    { group: "Cursor", bg: foreground, fg: background, style: "NONE" }, // character under cursor
    { group: "CursorIM", targetGroup: "Cursor" },
    { group: "CursorColumn", bg: black, fg: "fg", style: "NONE" },
    { group: "QuickFixLine", bg: black, fg: foreground, style: "NONE" },
    { group: "Terminal", targetGroup: "Normal" },
    { group: "Conceal", bg: "NONE", fg: gray, style: "NONE" },
    { group: "ToolbarLine", bg: black, fg: white, style: "NONE" },
    { group: "ToolbarButton", bg: darkgray, fg: white, style: "NONE" },
    { group: "debugPC", bg: black, fg: "fg", style: "NONE" },
    { group: "debugBreakpoint", bg: gray, fg: foreground, style: "NONE" },
  ];
}

export function toNeovim(recipe: Recipe): string {
  const cereals = prepare(recipe);
  const highlights = defineHighlights(cereals);

  const template = `
" Store the following config under ~/.config/nvim/colors/root-loops.vim
" then load it into neovim via :colorscheme root-loops or by declaring
" it as your colorscheme in your neovim config.

" root-loops.vim -- Root Loops Vim Color Scheme.
" Webpage:          https://rootloops.sh
" Description:      A (neo)vim color scheme for cereal lovers

hi clear

if exists("syntax_on")
  syntax reset
endif

let colors_name = "root loops"

if ($TERM =~ '256' || &t_Co >= 256) || has("gui_running")
    ${renderTruecolorHighlights(highlights)}

elseif &t_Co == 8 || $TERM !~# '^linux' || &t_Co == 16
    set t_Co=16
    ${renderAnsiHighlights(highlights)}
endif

${renderLinkedHighlights(highlights)}

if (has('termguicolors') && &termguicolors) || has('gui_running')
    let g:terminal_ansi_colors = [
      '${cereals.black.color_hex}',
      '${cereals.red.color_hex}',
      '${cereals.green.color_hex}',
      '${cereals.yellow.color_hex}',
      '${cereals.blue.color_hex}',
      '${cereals.magenta.color_hex}',
      '${cereals.cyan.color_hex}',
      '${cereals.white.color_hex}',
      '${cereals.brightBlack.color_hex}',
      '${cereals.brightRed.color_hex}',
      '${cereals.brightGreen.color_hex}',
      '${cereals.brightYellow.color_hex}',
      '${cereals.brightBlue.color_hex}',
      '${cereals.brightMagenta.color_hex}',
      '${cereals.brightCyan.color_hex}',
      '${cereals.brightWhite.color_hex}'
    ]
endif
`;
  return template;
}
