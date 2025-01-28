import { type Recipe } from "$lib/ingredients";
import { prepare, type Cereals } from "$lib/cereals";

/**
 * Generates a single-file vim color scheme from a few highlight group definitions
 * that should work across vim, neovim, gvim, in terminals with 16 colors, 256 colors,
 * truecolor, and more.
 * With a lot of gratitute to https://github.com/romainl/vim-rnb who provided the
 * whole mechanism as a Ruby implementation that I could port to TypeScript.
 */

/**
 * A highlight group takes the name of a vim highlight group and assigns a background color, foreground color, style modifier, and optional undercurl color.
 * The style modifier can either be "NONE", one of the allowed values, or a string combining multiple values in a comma-separated way, e.g. "bold,underline"
 * The undercurl color is only supported in certain vim distributions (gvim on Mac as far as I'm aware) and will only take effect if the style modifier includes the value "undercurl"
 */
type HighlightGroup = {
  group: string;
  bg: ColorDefinition | "NONE" | "fg" | "bg";
  fg: ColorDefinition | "NONE" | "fg" | "bg";
  style: "NONE" | "bold" | "underline" | "reverse" | "italic" | "standout" | "undercurl" | string;
  undercurl?: ColorDefinition;
};

/**
 * Links two highlight groups. "group" will inherit the styles of "targetGroup"
 */
type LinkedHighlightGroup = { group: string; targetGroup: string };

function isLinkedHighlightGroup(
  group: HighlightGroup | LinkedHighlightGroup,
): group is LinkedHighlightGroup {
  return "targetGroup" in group;
}

type HighlightGroups = Array<HighlightGroup | LinkedHighlightGroup>;

type ColorMode = "ANSI" | "256";

type ColorDefinition = [
  hex: string, // used for true-color terminals
  octal: number | "NONE", // used for 256 color terminals
  name:  // used for less capable terminals
    | "black"
    | "darkred"
    | "darkgreen"
    | "darkyellow"
    | "darkblue"
    | "darkmagenta"
    | "darkcyan"
    | "gray"
    | "darkgray"
    | "red"
    | "green"
    | "yellow"
    | "blue"
    | "magenta"
    | "cyan"
    | "white"
    | "NONE",
];

/**
 *  Take color definitions in the form of cereals and assign them to highlight groups.
 *  This is where we declare that something like a "constant" should be vibrant red,
 *  a comment should appear in dimmed dark and italic font, and that a "number" should
 *  always look the same as a "constant".
 *
 *  For Root Loops, we use 16 cereal colors (the standard ANSI colors) plus a
 *  foreground and a background color that are shades of gray. That's all you get.
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
function generateHighlights(cereals: Cereals): HighlightGroups {
  const background: ColorDefinition = [cereals.background.color_hex, 0, "black"];
  const foreground: ColorDefinition = [cereals.foreground.color_hex, 15, "white"];

  const black: ColorDefinition = [cereals.black.color_hex, 0, "black"];
  const darkred: ColorDefinition = [cereals.red.color_hex, 1, "darkred"];
  const darkgreen: ColorDefinition = [cereals.green.color_hex, 2, "darkgreen"];
  const darkyellow: ColorDefinition = [cereals.yellow.color_hex, 3, "darkyellow"];
  const darkblue: ColorDefinition = [cereals.blue.color_hex, 4, "darkblue"];
  const darkmagenta: ColorDefinition = [cereals.magenta.color_hex, 5, "darkmagenta"];
  const darkcyan: ColorDefinition = [cereals.cyan.color_hex, 6, "darkcyan"];
  const gray: ColorDefinition = [cereals.white.color_hex, 7, "gray"];

  const darkgray: ColorDefinition = [cereals.brightBlack.color_hex, 8, "darkgray"];
  const red: ColorDefinition = [cereals.brightRed.color_hex, 9, "red"];
  const green: ColorDefinition = [cereals.brightGreen.color_hex, 10, "green"];
  const yellow: ColorDefinition = [cereals.brightYellow.color_hex, 11, "yellow"];
  const blue: ColorDefinition = [cereals.brightBlue.color_hex, 12, "blue"];
  const magenta: ColorDefinition = [cereals.brightMagenta.color_hex, 13, "magenta"];
  const cyan: ColorDefinition = [cereals.brightCyan.color_hex, 14, "cyan"];
  const white: ColorDefinition = [cereals.brightWhite.color_hex, 15, "white"];

  // Highlight groups
  // see :help highlight-default and :help group-name for additional groups
  return [
    { group: "Normal", bg: background, fg: foreground, style: "NONE" },
    { group: "NonText", bg: background, fg: black, style: "NONE" },
    { group: "EndOfBuffer", targetGroup: "NonText" },
    { group: "Comment", bg: background, fg: darkgray, style: "italic" },
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

function hi(group: HighlightGroup, mode: ColorMode): string {
  if (mode === "ANSI") {
    return `hi ${group.group} ctermbg=${typeof group.bg === "string" ? group.bg : (group.bg as ColorDefinition)[2]} ctermfg=${typeof group.fg === "string" ? group.fg : (group.fg as ColorDefinition)[2]} cterm=${group.style}`;
  } else {
    let command = `hi ${group.group} ctermbg=${typeof group.bg === "string" ? group.bg : (group.bg as ColorDefinition)[1]} ctermfg=${typeof group.fg === "string" ? group.fg : (group.fg as ColorDefinition)[1]} cterm=${group.style} guibg=${typeof group.bg === "string" ? group.bg : (group.bg as ColorDefinition)[0]} guifg=${typeof group.fg === "string" ? group.fg : (group.fg as ColorDefinition)[0]} gui=${group.style}`;

    if (group.undercurl) {
      command += ` guisp=${typeof group.undercurl === "string" ? group.undercurl : (group.undercurl as ColorDefinition)[0]}`;
    }

    return command;
  }
}

function renderAnsiHighlights(highlights: HighlightGroups) {
  const template = [];
  for (const group of highlights) {
    if (isLinkedHighlightGroup(group)) {
      continue;
    }

    template.push(hi(group, "ANSI"));
  }
  return template.join("\n    ");
}

function render256ColorHighlights(highlights: HighlightGroups) {
  const template = [];
  for (const group of highlights) {
    if (isLinkedHighlightGroup(group)) {
      continue;
    }

    template.push(hi(group, "256"));
  }
  return template.join("\n    ");
}

function renderLinkedHighlights(highlights: HighlightGroups) {
  const template = [];
  for (const link of highlights) {
    if (isLinkedHighlightGroup(link)) {
      template.push(`hi link ${link.group} ${link.targetGroup}`);
    }
  }
  return template.join("\n  ");
}

export function toNeovim(recipe: Recipe): string {
  const cereals = prepare(recipe);
  const highlights = generateHighlights(cereals);

  const template = `
" root-loops.vim -- Root Loops Vim Color Scheme.
" Webpage:          https://rootloops.sh
" Description:      A (neo)vim color scheme for cereal lovers

hi clear

if exists("syntax_on")
  syntax reset
endif

let colors_name = "root loops"

if ($TERM =~ '256' || &t_Co >= 256) || has("gui_running")
    ${render256ColorHighlights(highlights)}

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
  console.log(template);
  return template;
}
