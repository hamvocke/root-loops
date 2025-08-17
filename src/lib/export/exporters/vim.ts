import { toQueryString, type Recipe } from "$lib/ingredients";
import { prepare, type Cereals } from "$lib/cereals";
import {
  defineColors,
  type HighlightGroups,
  renderHighlights,
  renderLinkedHighlights,
} from "./vim/highlight";

/**
 * With a lot of gratitute to https://github.com/romainl/vim-rnb who provided the
 * whole mechanism as a Ruby implementation that I could port to TypeScript.
 */

export function defineVimHighlights(cereals: Cereals): HighlightGroups {
  const c = defineColors(cereals);

  return [
    { group: "Normal", bg: "NONE", fg: "NONE" },
    { group: "NonText", fg: c.background },
    { group: "EndOfBuffer", targetGroup: "NonText" },

    // syntax
    { group: "Comment", fg: c.darkgray, style: "italic" },
    { group: "SpecialComment", targetGroup: "Special" },
    { group: "Constant", fg: c.darkyellow },
    { group: "Error", fg: c.darkred },
    { group: "Identifier", fg: c.red },
    { group: "Function", fg: c.darkblue },
    { group: "Special", fg: c.magenta },
    { group: "Delimiter", fg: c.foreground },
    { group: "Statement", fg: c.darkmagenta },
    { group: "String", fg: c.darkgreen },
    { group: "Operator", fg: c.darkcyan },
    { group: "Boolean", fg: c.darkyellow },
    { group: "Label", fg: c.cyan },
    { group: "Keyword", fg: c.darkmagenta },
    { group: "Exception", fg: c.darkmagenta },
    { group: "Conditional", fg: c.darkmagenta },
    { group: "PreProc", fg: c.magenta }, // generic preprocessor
    { group: "Include", fg: c.darkmagenta }, // preprocessor #include
    { group: "Define", targetGroup: "PreProc" }, // preprocessor #define
    { group: "Macro", fg: c.darkmagenta },
    { group: "PreCondit", targetGroup: "PreProc" }, // preprocessor #if, #else
    { group: "StorageClass", fg: c.yellow }, // static, register, volatile
    { group: "Structure", fg: c.yellow }, // struct, union, enum, etc.
    { group: "Number", targetGroup: "Constant" },
    { group: "Float", targetGroup: "Number" },
    { group: "Todo", bg: c.blue, fg: c.background, style: "bold" },
    { group: "Type", fg: c.yellow },
    { group: "Typedef", targetGroup: "Type" },
    { group: "SpecialChar", targetGroup: "Special" }, // special character in a constant
    { group: "Debug", targetGroup: "Special" }, // debugging statements

    { group: "Underlined", style: "underline" },
    { group: "Bold", style: "bold" },
    { group: "Italic", style: "italic" },
    { group: "Ignore", bg: "NONE", fg: "NONE", style: "NONE" },

    // editor elements
    { group: "StatusLine", bg: c.black, fg: c.foreground, style: "NONE" },
    { group: "StatusLineNC", bg: c.background, fg: c.white, style: "NONE" }, // status line of not-current window
    { group: "StatusLineTerm", targetGroup: "StatusLine" },
    { group: "StatusLineTermNC", targetGroup: "StatusLineNC" },
    { group: "VertSplit", fg: c.darkgray },
    { group: "WinSeparator", targetGroup: "VertSplit" },
    { group: "WinBar", targetGroup: "StatusLine" },
    { group: "WinBarNC", targetGroup: "StatusLineNC" },
    { group: "TabLine", bg: c.black, fg: c.gray },
    { group: "TabLineFill", fg: c.black, bg: "NONE" },
    { group: "TabLineSel", bg: c.yellow, fg: c.black }, // active tab panel
    { group: "Title", fg: c.darkblue, style: "bold" },
    { group: "CursorLine", bg: c.black, fg: "NONE" },
    { group: "Cursor", bg: c.foreground, fg: c.background }, // character under cursor
    { group: "lCursor", targetGroup: "Cursor" },
    { group: "CursorIM", targetGroup: "Cursor" },
    { group: "CursorColumn", bg: c.black },
    { group: "LineNr", fg: c.darkgray },
    { group: "CursorLineNr", fg: c.darkcyan },
    { group: "helpLeadBlank", bg: "NONE", fg: "NONE" },
    { group: "helpNormal", bg: "NONE", fg: "NONE" },
    { group: "Visual", bg: c.darkgray, fg: c.foreground, style: "bold" }, // visual mode selection
    { group: "VisualNOS", bg: c.darkgray, fg: c.foreground, style: "bold" },
    { group: "Pmenu", bg: c.black, fg: c.foreground }, // popup menu item
    { group: "PmenuSbar", bg: c.darkgray, fg: c.gray }, // popup menu scrollbar
    { group: "PmenuSel", bg: c.darkgray, fg: c.foreground, style: "bold" }, // popup menu selected item
    { group: "PmenuThumb", bg: c.gray, fg: "NONE" }, // popup menu scrollbar thumb
    { group: "FoldColumn", fg: c.gray },
    { group: "Folded", fg: c.blue },
    { group: "WildMenu", bg: c.black, fg: c.foreground, style: "NONE" }, // current selection in 'wildmenu' completion
    { group: "SpecialKey", fg: c.black }, // unprintable characters
    { group: "IncSearch", bg: c.darkred, fg: c.background },
    { group: "CurSearch", bg: c.darkyellow, fg: c.background },
    { group: "Search", bg: c.yellow, fg: c.background },
    { group: "Directory", fg: c.darkblue },
    { group: "MatchParen", bg: c.black, fg: c.darkyellow, style: "bold" },
    { group: "SpellBad", style: "undercurl", undercurl: c.red },
    { group: "SpellCap", style: "undercurl", undercurl: c.yellow },
    { group: "SpellLocal", style: "undercurl", undercurl: c.blue },
    { group: "SpellRare", style: "undercurl", undercurl: c.green },
    { group: "ColorColumn", bg: c.darkgray },
    { group: "SignColumn", fg: c.gray },
    { group: "ModeMsg", fg: c.black, bg: c.white, style: "bold" },
    { group: "MoreMsg", fg: c.darkblue },
    { group: "Question", fg: c.darkblue },
    { group: "QuickFixLine", bg: c.black, fg: c.cyan },
    { group: "Terminal", targetGroup: "Normal" },
    { group: "Conceal", fg: c.darkgray },
    { group: "ToolbarLine", bg: c.black, fg: c.white },
    { group: "ToolbarButton", bg: c.darkgray, fg: c.white },
    { group: "debugPC", fg: c.gray },
    { group: "debugBreakpoint", fg: c.darkgray },

    // errors and warnings
    { group: "ErrorMsg", fg: c.darkred, style: "bold,italic" },
    { group: "WarningMsg", fg: c.yellow },

    // vim diff (vim -d)
    { group: "DiffAdd", bg: c.green, fg: c.background },
    { group: "DiffChange", bg: c.blue, fg: c.background },
    { group: "DiffDelete", bg: c.red, fg: c.background },
    { group: "DiffText", bg: c.cyan, fg: c.background },

    // diff
    { group: "diffAdded", fg: c.green },
    { group: "diffRemoved", fg: c.red },
    { group: "diffChanged", fg: c.blue },
    { group: "diffOldFile", fg: c.yellow },
    { group: "diffNewFile", fg: c.magenta },
    { group: "diffFile", fg: c.blue },
    { group: "diffLine", fg: c.gray },
    { group: "diffIndexLine", fg: c.cyan },
  ];
}

export function toVim(recipe: Recipe): string {
  const cereals = prepare(recipe);
  const highlights = defineVimHighlights(cereals);
  const queryString = toQueryString(recipe);

  const template = `" Store the following config under ~/.vim/colors/root-loops.vim
" then load it into vim via ':colorscheme root-loops' or by declaring
" it as your colorscheme in your .vimrc.

" root-loops.vim -- Root Loops Vim Color Scheme.
" Webpage:          https://rootloops.sh?${queryString}
" Description:      A vim color scheme for cereal lovers

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
    let g:terminal_ansi_colors = [ '${cereals.black.color_hex}', '${cereals.red.color_hex}', '${cereals.green.color_hex}', '${cereals.yellow.color_hex}', '${cereals.blue.color_hex}', '${cereals.magenta.color_hex}', '${cereals.cyan.color_hex}', '${cereals.white.color_hex}', '${cereals.brightBlack.color_hex}', '${cereals.brightRed.color_hex}', '${cereals.brightGreen.color_hex}', '${cereals.brightYellow.color_hex}', '${cereals.brightBlue.color_hex}', '${cereals.brightMagenta.color_hex}', '${cereals.brightCyan.color_hex}', '${cereals.brightWhite.color_hex}' ]
endif`;

  return template;
}
