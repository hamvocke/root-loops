import { type Recipe } from "$lib/ingredients";
import { prepare, type Cereals } from "$lib/cereals";

/**
 * with a lot of gratitute to https://github.com/romainl/vim-rnb
 */

type HighlightGroup = {
  name: string;
  background: ColorDefinition | "NONE" | "fg" | "bg";
  foreground: ColorDefinition | "NONE" | "fg" | "bg";
  style: "NONE" | "bold" | "underline" | "reverse" | "italic" | "standout" | "undercurl" | string;
  undercurl?: ColorDefinition;
};

type LinkedHighlightGroup = {
  highlight1: string;
  highlight2: string;
};

type HighlightGroups = Array<HighlightGroup | LinkedHighlightGroup>;

type ColorDefinition = {
  hex: string; // used for true-color terminals
  octal: number | "NONE"; // used for 256 color terminals
  name: // used for less capable terminals
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
    | "NONE";
};

function generateHighlights(cereals: Cereals): HighlightGroups {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const background: ColorDefinition = {
    hex: cereals.background.color_hex,
    octal: 0,
    name: "black",
  };
  const foreground: ColorDefinition = {
    hex: cereals.foreground.color_hex,
    octal: 15,
    name: "white",
  };

  const black: ColorDefinition = { hex: cereals.black.color_hex, octal: 0, name: "black" };
  const darkred: ColorDefinition = { hex: cereals.red.color_hex, octal: 1, name: "darkred" };
  const darkgreen: ColorDefinition = { hex: cereals.green.color_hex, octal: 2, name: "darkgreen" };
  const darkyellow: ColorDefinition = {
    hex: cereals.yellow.color_hex,
    octal: 3,
    name: "darkyellow",
  };
  const darkblue: ColorDefinition = { hex: cereals.blue.color_hex, octal: 4, name: "darkblue" };
  const darkmagenta: ColorDefinition = {
    hex: cereals.magenta.color_hex,
    octal: 5,
    name: "darkmagenta",
  };

  const darkcyan: ColorDefinition = { hex: cereals.cyan.color_hex, octal: 6, name: "darkcyan" };
  const gray: ColorDefinition = { hex: cereals.white.color_hex, octal: 7, name: "gray" };

  const darkgray: ColorDefinition = {
    hex: cereals.brightBlack.color_hex,
    octal: 8,
    name: "darkgray",
  };
  const red: ColorDefinition = { hex: cereals.brightRed.color_hex, octal: 9, name: "red" };
  const green: ColorDefinition = { hex: cereals.brightGreen.color_hex, octal: 10, name: "green" };
  const yellow: ColorDefinition = {
    hex: cereals.brightYellow.color_hex,
    octal: 11,
    name: "yellow",
  };
  const blue: ColorDefinition = { hex: cereals.brightBlue.color_hex, octal: 12, name: "blue" };
  const magenta: ColorDefinition = {
    hex: cereals.brightMagenta.color_hex,
    octal: 13,
    name: "magenta",
  };
  const cyan: ColorDefinition = { hex: cereals.brightCyan.color_hex, octal: 14, name: "cyan" };
  const white: ColorDefinition = { hex: cereals.brightWhite.color_hex, octal: 15, name: "white" };
  /* eslint-enable @typescript-eslint/no-unused-vars */

  // Highlight groups
  // see :help highlight-default and :help group-name for additional groups
  const highlights: HighlightGroups = [
    { name: "Normal", background, foreground, style: "NONE" },
    { name: "NonText", background, foreground: white, style: "NONE" },
    { highlight1: "EndOfBuffer", highlight2: "NonText" },
    { name: "Comment", background, foreground: darkgray, style: "italic" },
    { name: "Constant", background, foreground: darkyellow, style: "NONE" },
    { name: "Error", background: darkred, foreground: black, style: "NONE" },
    { name: "Identifier", background, foreground: darkblue, style: "NONE" },
    { name: "Ignore", background, foreground, style: "NONE" },
    { name: "PreProc", background, foreground, style: "NONE" },
    { name: "Special", background, foreground: darkcyan, style: "NONE" },
    { name: "Statement", background, foreground: darkred, style: "NONE" },
    { name: "String", background, foreground: darkgreen, style: "NONE" },
    { highlight1: "Number", highlight2: "Constant" },
    { name: "Todo", background: white, foreground: darkgray, style: "NONE" },
    { name: "Type", background: white, foreground: darkgray, style: "NONE" },
    { name: "Underlined", background: white, foreground: darkgray, style: "NONE" },
    { name: "StatusLine", background: white, foreground: darkgray, style: "NONE" },
    { name: "StatusLineNC", background: white, foreground: darkgray, style: "NONE" },
    { highlight1: "StatusLineTerm", highlight2: "StatusLine" },
    { highlight1: "StatusLineTermNC", highlight2: "StatusLineNC" },
    { name: "VertSplit", background: darkgray, foreground: black, style: "NONE" },
    { name: "TabLine", background: white, foreground: darkgray, style: "NONE" },
    { name: "TabLineFill", background: white, foreground: darkgray, style: "NONE" },
    { name: "TabLineSel", background: white, foreground: darkgray, style: "NONE" },
    { name: "Title", background: white, foreground: darkgray, style: "NONE" },
    { name: "CursorLine", background: darkgray, foreground: white, style: "NONE" },
    { name: "LineNr", background: black, foreground: darkgray, style: "NONE" },
    { name: "CursorLineNr", background: white, foreground: darkgray, style: "NONE" },
    { name: "helpLeadBlank", background: white, foreground: darkgray, style: "NONE" },
    { name: "helpNormal", background: white, foreground: darkgray, style: "NONE" },
    { name: "Visual", background: white, foreground: darkgray, style: "NONE" },
    { name: "VisualNOS", background: white, foreground: darkgray, style: "NONE" },
    { name: "Pmenu", background: white, foreground: darkgray, style: "NONE" },
    { name: "PmenuSbar", background: white, foreground: darkgray, style: "NONE" },
    { name: "PmenuSel", background: white, foreground: darkgray, style: "NONE" },
    { name: "PmenuThumb", background: white, foreground: darkgray, style: "NONE" },
    { name: "FoldColumn", background: white, foreground: darkgray, style: "NONE" },
    { name: "Folded", background: white, foreground: darkgray, style: "NONE" },
    { name: "WildMenu", background: black, foreground: white, style: "NONE" },
    { name: "SpecialKey", background: white, foreground: darkgray, style: "NONE" },
    { name: "DiffAdd", background: white, foreground: darkgray, style: "NONE" },
    { name: "DiffChange", background: white, foreground: darkgray, style: "NONE" },
    { name: "DiffDelete", background: white, foreground: darkgray, style: "NONE" },
    { name: "DiffText", background: white, foreground: darkgray, style: "NONE" },
    { name: "IncSearch", background: white, foreground: darkgray, style: "NONE" },
    { name: "Search", background: white, foreground: darkgray, style: "NONE" },
    { name: "Directory", background: white, foreground: darkgray, style: "NONE" },
    { name: "MatchParen", background: white, foreground: darkgray, style: "NONE" },
    { name: "SpellBad", background: white, foreground: darkgray, style: "NONE", undercurl: red },
    { name: "SpellCap", background: white, foreground: darkgray, style: "NONE", undercurl: blue },
    {
      name: "SpellLocal",
      background: white,
      foreground: darkgray,
      style: "NONE",
      undercurl: magenta,
    },
    { name: "SpellRare", background: white, foreground: darkgray, style: "NONE", undercurl: cyan },
    { name: "ColorColumn", background: white, foreground: darkgray, style: "NONE" },
    { name: "SignColumn", background: white, foreground: darkgray, style: "NONE" },
    { name: "ErrorMsg", background: white, foreground: darkgray, style: "NONE" },
    { name: "ModeMsg", background: white, foreground: darkgray, style: "NONE" },
    { name: "MoreMsg", background: white, foreground: darkgray, style: "NONE" },
    { name: "Question", background: white, foreground: darkgray, style: "NONE" },
    { highlight1: "WarningMsg", highlight2: "Error" },
    { name: "Cursor", background: white, foreground: darkgray, style: "NONE" },
    { highlight1: "CursorIM", highlight2: "Cursor" },
    { name: "CursorColumn", background: white, foreground: darkgray, style: "NONE" },
    { name: "QuickFixLine", background: white, foreground: darkgray, style: "NONE" },
    { highlight1: "Terminal", highlight2: "Normal" },
    { name: "Conceal", background: white, foreground: darkgray, style: "NONE" },
    { name: "ToolbarLine", background: white, foreground: darkgray, style: "NONE" },
    { name: "ToolbarButton", background: white, foreground: darkgray, style: "NONE" },
    { name: "debugPC", background: white, foreground: darkgray, style: "NONE" },
    { name: "debugBreakpoint", background: white, foreground: darkgray, style: "NONE" },
  ];

  return highlights;
}

function renderHighlights(highlights: HighlightGroups): string {
  const renderedHighlights = [];
  for (const highlight of highlights) {
    if ("name" in highlight) {
      if (highlight.undercurl) {
        const hi = `hi ${highlight.name} ctermbg=${typeof highlight.background === "string" ? highlight.background : highlight.background.octal} ctermfg=${typeof highlight.foreground === "string" ? highlight.foreground : highlight.foreground.octal} cterm=${highlight.style} guibg=${typeof highlight.background === "string" ? highlight.background : highlight.background.hex} guifg=${typeof highlight.foreground === "string" ? highlight.foreground : highlight.foreground.hex} gui=${highlight.style} guisp=${typeof highlight.undercurl === "string" ? highlight.undercurl : highlight.undercurl.hex}`;
        renderedHighlights.push(hi);
      } else {
        const hi = `hi ${highlight.name} ctermbg=${typeof highlight.background === "string" ? highlight.background : highlight.background.octal} ctermfg=${typeof highlight.foreground === "string" ? highlight.foreground : highlight.foreground.octal} cterm=${highlight.style} guibg=${typeof highlight.background === "string" ? highlight.background : highlight.background.hex} guifg=${typeof highlight.foreground === "string" ? highlight.foreground : highlight.foreground.hex} gui=${highlight.style}`;
        renderedHighlights.push(hi);
      }
    }
  }

  // TODO: find a better way to do padding
  return renderedHighlights.join("\n    ");
}

function renderSimpleHighlights(highlights: HighlightGroups): string {
  const renderedHighlights = [];
  for (const highlight of highlights) {
    if ("name" in highlight) {
      const hi = `hi ${highlight.name} ctermbg=${typeof highlight.background === "string" ? highlight.background : highlight.background.name} ctermfg=${typeof highlight.foreground === "string" ? highlight.foreground : highlight.foreground.name} cterm=${highlight.style}`;
      renderedHighlights.push(hi);
    }
  }

  // TODO: find a better way to do padding
  return renderedHighlights.join("\n    ");
}

function renderLinks(links: HighlightGroups): string {
  const renderedLinks = [];
  for (const link of links) {
    if ("highlight1" in link) {
      renderedLinks.push(`hi link ${link.highlight1} ${link.highlight2}`);
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
