import { type Recipe } from "$lib/ingredients";
import { prepare, type Cereals } from "$lib/cereals";

/**
 * with a lot of gratitute to https://github.com/romainl/vim-rnb
 */

type HighlightGroup = [
  name: string,
  background: ColorDefinition | "NONE" | "fg" | "bg",
  foreground: ColorDefinition | "NONE" | "fg" | "bg",
  style: "NONE" | "bold" | "underline" | "reverse" | "italic" | "standout" | "undercurl" | string,
];

// TODO: remove this type, add undercurl as optional field to highlightgroup
type UndercurlHighlightGroup = [
  name: string,
  background: ColorDefinition | "NONE" | "fg" | "bg",
  foreground: ColorDefinition | "NONE" | "fg" | "bg",
  style: "NONE" | "bold" | "underline" | "reverse" | "italic" | "standout" | "undercurl" | string,
  undercurl: ColorDefinition,
];

// TODO: define Links separately to avoid union type?
type LinkedHighlightGroup = [string, string];

type HighlightGroups = Array<HighlightGroup | UndercurlHighlightGroup | LinkedHighlightGroup>;

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
    ["Normal", background, foreground, "NONE"],
    ["NonText", background, white, "NONE"],
    ["EndOfBuffer", "NonText"],
    ["Comment", background, darkgray, "italic"],
    ["Constant", background, darkyellow, "NONE"],
    ["Error", darkred, black, "NONE"],
    ["Identifier", background, darkblue, "NONE"],
    ["Ignore", background, foreground, "NONE"],
    ["PreProc", background, foreground, "NONE"],
    ["Special", background, darkcyan, "NONE"],
    ["Statement", background, darkred, "NONE"],
    ["String", background, darkgreen, "NONE"],
    ["Number", "Constant"],
    ["Todo", white, darkgray, "NONE"],
    ["Type", white, darkgray, "NONE"],
    ["Underlined", white, darkgray, "NONE"],
    ["StatusLine", white, darkgray, "NONE"],
    ["StatusLineNC", white, darkgray, "NONE"],
    ["StatusLineTerm", "StatusLine"],
    ["StatusLineTermNC", "StatusLineNC"],
    ["VertSplit", darkgray, black, "NONE"],
    ["TabLine", white, darkgray, "NONE"],
    ["TabLineFill", white, darkgray, "NONE"],
    ["TabLineSel", white, darkgray, "NONE"],
    ["Title", white, darkgray, "NONE"],
    ["CursorLine", darkgray, white, "NONE"],
    ["LineNr", black, darkgray, "NONE"],
    ["CursorLineNr", white, darkgray, "NONE"],
    ["helpLeadBlank", white, darkgray, "NONE"],
    ["helpNormal", white, darkgray, "NONE"],
    ["Visual", white, darkgray, "NONE"],
    ["VisualNOS", white, darkgray, "NONE"],
    ["Pmenu", white, darkgray, "NONE"],
    ["PmenuSbar", white, darkgray, "NONE"],
    ["PmenuSel", white, darkgray, "NONE"],
    ["PmenuThumb", white, darkgray, "NONE"],
    ["FoldColumn", white, darkgray, "NONE"],
    ["Folded", white, darkgray, "NONE"],
    ["WildMenu", black, white, "NONE"],
    ["SpecialKey", white, darkgray, "NONE"],
    ["DiffAdd", white, darkgray, "NONE"],
    ["DiffChange", white, darkgray, "NONE"],
    ["DiffDelete", white, darkgray, "NONE"],
    ["DiffText", white, darkgray, "NONE"],
    ["IncSearch", white, darkgray, "NONE"],
    ["Search", white, darkgray, "NONE"],
    ["Directory", white, darkgray, "NONE"],
    ["MatchParen", white, darkgray, "NONE"],
    ["SpellBad", white, darkgray, "NONE", red],
    ["SpellCap", white, darkgray, "NONE", blue],
    ["SpellLocal", white, darkgray, "NONE", magenta],
    ["SpellRare", white, darkgray, "NONE", cyan],
    ["ColorColumn", white, darkgray, "NONE"],
    ["SignColumn", white, darkgray, "NONE"],
    ["ErrorMsg", white, darkgray, "NONE"],
    ["ModeMsg", white, darkgray, "NONE"],
    ["MoreMsg", white, darkgray, "NONE"],
    ["Question", white, darkgray, "NONE"],
    ["WarningMsg", "Error"],
    ["Cursor", white, darkgray, "NONE"],
    ["CursorIM", "Cursor"],
    ["CursorColumn", white, darkgray, "NONE"],
    ["QuickFixLine", white, darkgray, "NONE"],
    ["Terminal", "Normal"],
    ["Conceal", white, darkgray, "NONE"],
    ["ToolbarLine", white, darkgray, "NONE"],
    ["ToolbarButton", white, darkgray, "NONE"],
    ["debugPC", white, darkgray, "NONE"],
    ["debugBreakpoint", white, darkgray, "NONE"],
  ];
}

function renderHighlights(highlights: HighlightGroups): string {
  const renderedHighlights = [];
  for (const highlight of highlights) {
    if (highlight.length === 4) {
      // TODO: use types instead of array indexing notation
      const hi = `hi ${highlight[0]} ctermbg=${typeof highlight[1] === "string" ? highlight[1] : highlight[1][1]} ctermfg=${typeof highlight[2] === "string" ? highlight[2] : highlight[2][1]} cterm=${highlight[3]} guibg=${typeof highlight[1] === "string" ? highlight[1] : highlight[1][0]} guifg=${typeof highlight[2] === "string" ? highlight[2] : highlight[2][0]} gui=${highlight[3]}`;
      renderedHighlights.push(hi);
    } else if (highlight.length > 4) {
      const hi = `hi ${highlight[0]} ctermbg=${typeof highlight[1] === "string" ? highlight[1] : highlight[1][1]} ctermfg=${typeof highlight[2] === "string" ? highlight[2] : highlight[2][1]} cterm=${highlight[3]} guibg=${typeof highlight[1] === "string" ? highlight[1] : highlight[1][0]} guifg=${typeof highlight[2] === "string" ? highlight[2] : highlight[2][0]} gui=${highlight[3]} guisp=${typeof highlight[4] === "string" ? highlight[4] : highlight[4][0]}`;
      renderedHighlights.push(hi);
    }
  }

  // TODO: find a better way to do padding
  return renderedHighlights.join("\n    ");
}

function renderSimpleHighlights(highlights: HighlightGroups): string {
  const renderedHighlights = [];
  for (const highlight of highlights) {
    // TODO: use types instead of array indexing notation - should be a check if this is not a link
    if (highlight.length > 2) {
      const hi = `hi ${highlight[0]} ctermbg=${typeof highlight[1] === "string" ? highlight[1] : highlight[1][2]} ctermfg=${typeof highlight[2] === "string" ? highlight[2] : highlight[2][2]} cterm=${highlight[3]}`;
      renderedHighlights.push(hi);
    }
  }

  // TODO: find a better way to do padding
  return renderedHighlights.join("\n    ");
}

function renderLinks(links: HighlightGroups): string {
  const renderedLinks = [];
  for (const link of links) {
    if (link.length === 2) {
      renderedLinks.push(`hi link ${link[0]} ${link[1]}`);
    }
  }

  // TODO: find a better way to do padding
  return renderedLinks.join("\n");
}

function renderTerminalAnsiColors(cereals: Cereals) {
  return `
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
}

export function toNeovim(recipe: Recipe): string {
  const cereals = prepare(recipe);
  const highlights = generateHighlights(cereals);

  return `
" root-loops.vim -- Root Loops Vim Color Scheme.
" Webpage:          https://rootloops.sh
" Description:      A (neo)vim color scheme for cereal lovers

hi clear

if exists("syntax_on")
  syntax reset
endif

let colors_name = "root loops"

if ($TERM =~ '256' || &t_Co >= 256) || has("gui_running")
    ${renderHighlights(highlights)}

elseif &t_Co == 8 || $TERM !~# '^linux' || &t_Co == 16
    set t_Co=16
    ${renderSimpleHighlights(highlights)}
endif

${renderLinks(highlights)}

${renderTerminalAnsiColors(cereals)}
`;
}
