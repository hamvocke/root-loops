import { type Recipe } from "$lib/ingredients";
import { prepare, type Cereals } from "$lib/cereals";
import {
  type HighlightGroups,
  type ColorDefinition,
  renderHighlights,
  renderLinkedHighlights,
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
  const background: ColorDefinition = { hex: c.background.color_hex, ansi: 0 };
  const foreground: ColorDefinition = { hex: c.foreground.color_hex, ansi: 15 };

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
    { group: "NonText", fg: black },
    { group: "EndOfBuffer", targetGroup: "NonText" },
    { group: "Comment", fg: darkgray, style: "italic" },
    { group: "Constant", fg: darkyellow },
    { group: "Error", fg: darkred },
    { group: "Identifier", fg: red },
    { group: "Function", fg: darkblue },
    { group: "Ignore" },
    { group: "PreProc", fg: magenta },
    { group: "Special", fg: magenta },
    { group: "Statement", fg: darkmagenta },
    { group: "String", fg: darkgreen },
    { group: "Operator", fg: darkcyan },
    { group: "Boolean", fg: darkyellow },
    { group: "Label", fg: cyan },
    { group: "Keyword", fg: darkmagenta },
    { group: "Exception", fg: darkmagenta },
    { group: "Conditional", fg: darkmagenta },

    { group: "Number", targetGroup: "Constant" },
    { group: "Float", targetGroup: "Number" },
    { group: "Todo", bg: red, fg: background, style: "bold" },
    { group: "Type", fg: yellow },
    { group: "Underlined", style: "underline" },
    { group: "StatusLine", bg: gray, fg: black },
    { group: "StatusLineNC", bg: black, fg: white }, // status line of not-current window
    { group: "StatusLineTerm", targetGroup: "StatusLine" },
    { group: "StatusLineTermNC", targetGroup: "StatusLineNC" },
    { group: "VertSplit", fg: darkgray },
    { group: "WinSeparator", targetGroup: "VertSplit" },
    { group: "TabLine", bg: white, fg: black },
    { group: "TabLineFill", bg: gray },
    { group: "TabLineSel", bg: yellow, fg: black }, // active tab panel
    { group: "Title", fg: darkblue, style: "bold" },
    { group: "CursorLine", bg: black, fg: "NONE" },
    { group: "LineNr", fg: darkgray },
    { group: "CursorLineNr", fg: darkcyan },
    { group: "helpLeadBlank", bg: "NONE", fg: "NONE" },
    { group: "helpNormal", bg: "NONE", fg: "NONE" },
    { group: "Visual", bg: gray, style: "bold" }, // visual mode selection
    { group: "VisualNOS", bg: gray, style: "bold" },
    { group: "Pmenu", bg: black, fg: foreground }, // popup menu item
    { group: "PmenuSbar", bg: darkgray }, // popup menu scrollbar
    { group: "PmenuSel", bg: darkgray, style: "bold" }, // popup menu selected item
    { group: "PmenuThumb", bg: gray, fg: "NONE" }, // popup menu scrollbar thumb
    { group: "FoldColumn", fg: gray },
    { group: "Folded", fg: blue },
    { group: "WildMenu", bg: darkgray, style: "NONE" }, // current selection in 'wildmenu' completion
    { group: "SpecialKey", targetGroup: "NonText" },
    { group: "DiffAdd", fg: green },
    { group: "DiffChange", fg: blue },
    { group: "DiffDelete", fg: red },
    { group: "DiffText", bg: darkblue, fg: white },
    { group: "IncSearch", bg: darkred, fg: background },
    { group: "CurSearch", bg: darkyellow, fg: background },
    { group: "Search", bg: yellow, fg: background },
    { group: "Directory", fg: darkblue },
    { group: "MatchParen", bg: gray, fg: darkyellow, style: "bold" },
    { group: "SpellBad", style: "undercurl", undercurl: red },
    { group: "SpellCap", style: "undercurl", undercurl: yellow },
    { group: "SpellLocal", style: "undercurl", undercurl: blue },
    { group: "SpellRare", style: "undercurl", undercurl: green },
    { group: "ColorColumn", bg: darkgray },
    { group: "SignColumn", fg: gray },
    { group: "ErrorMsg", fg: darkred, style: "bold,italic" },
    { group: "ModeMsg", fg: foreground, style: "bold" },
    { group: "MoreMsg", fg: darkblue },
    { group: "Question", fg: darkblue },
    { group: "WarningMsg", fg: yellow },
    { group: "Cursor", bg: foreground, fg: background }, // character under cursor
    { group: "lCursor", targetGroup: "Cursor" },
    { group: "CursorIM", targetGroup: "Cursor" },
    { group: "CursorColumn", bg: black },
    { group: "QuickFixLine", bg: gray },
    { group: "Terminal", targetGroup: "Normal" },
    { group: "Conceal", fg: darkgray },
    { group: "ToolbarLine", bg: black, fg: white },
    { group: "ToolbarButton", bg: darkgray, fg: white },
    { group: "debugPC", fg: gray },
    { group: "debugBreakpoint", fg: darkgray },
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
${renderHighlights(highlights, "Truecolor")}

elseif &t_Co == 8 || $TERM !~# '^linux' || &t_Co == 16
    set t_Co=16
${renderHighlights(highlights, "ANSI")}
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
