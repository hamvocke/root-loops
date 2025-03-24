import { type Recipe } from "$lib/ingredients";
import { prepare, type Cereals } from "$lib/cereals";
import {
  type HighlightGroups,
  renderHighlights,
  renderLinkedHighlights,
  defineColors,
} from "./vim/highlight";
import { defineVimHighlights } from "./vim";

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
function defineHighlights(cereals: Cereals): HighlightGroups {
  const c = defineColors(cereals);

  const vimHighlights = defineVimHighlights(cereals);

  return [
    ...vimHighlights,
    // errors and warnings
    { group: "healthError", fg: c.darkred },
    { group: "healthSuccess", fg: c.darkgreen },
    { group: "healthWarning", fg: c.darkyellow },

    // neovim UI
    { group: "NormalFloat", bg: c.background, fg: c.foreground },
    { group: "FloatBorder", bg: c.background, fg: c.gray },
    { group: "FloatShadow", bg: c.black, fg: c.foreground },

    // Treesitter
    { group: "@variable", fg: c.foreground },
    { group: "@variable.builtin", fg: c.darkred }, // this, self, ...
    { group: "@variable.parameter", fg: c.darkred },
    { group: "@variable.parameter.builtin", targetGroup: "@variable.parameter" }, // _, it
    { group: "@variable.member", fg: c.darkred },

    { group: "@constant", targetGroup: "Constant" },
    { group: "@constant.builtin", fg: c.darkmagenta }, // built-in constant values, e.g. nil
    { group: "@constant.macro", targetGroup: "Macro" },

    { group: "@module", targetGroup: "Structure" },
    { group: "@module.builtin", targetGroup: "Special" },
    { group: "@label", targetGroup: "Label" },

    { group: "@string", targetGroup: "String" },
    { group: "@string.regexp", fg: c.darkred },
    { group: "@string.escape", fg: c.darkcyan },
    { group: "@string.special", targetGroup: "Special" },
    { group: "@string.special.url", fg: c.darkblue, style: "underline" },
    { group: "@string.special.symbol", fg: c.magenta },

    { group: "@character", targetGroup: "Character" },
    { group: "@character.special", targetGroup: "SpecialChar" },

    { group: "@boolean", targetGroup: "Boolean" },
    { group: "@number", targetGroup: "Number" },
    { group: "@number.float", targetGroup: "Float" },

    { group: "@type", targetGroup: "Type" },
    { group: "@type.builtin", fg: c.darkyellow },
    { group: "@type.definition", targetGroup: "Type" },

    { group: "@attribute", targetGroup: "Constant" },
    { group: "@attribute.builtin", targetGroup: "Constant" },
    { group: "@property", fg: c.darkred },

    { group: "@function", targetGroup: "Function" },
    { group: "@function.builtin", fg: c.darkmagenta },
    { group: "@function.call", targetGroup: "Function" },
    { group: "@function.method", targetGroup: "Function" },
    { group: "@function.method.call", targetGroup: "Function" },

    { group: "@constructor", fg: c.yellow },
    { group: "@operator", targetGroup: "Operator" },

    { group: "@keyword", targetGroup: "Keyword" },
    { group: "@keyword.coroutine", targetGroup: "Keyword" },
    { group: "@keyword.function", fg: c.darkmagenta },
    { group: "@keyword.operator", targetGroup: "Operator" },
    { group: "@keyword.import", targetGroup: "Include" },
    { group: "@keyword.type", targetGroup: "Keyword" },
    { group: "@keyword.modifier", targetGroup: "Keyword" },
    { group: "@keyword.repeat", targetGroup: "Repeat" },
    { group: "@keyword.return", fg: c.darkmagenta },
    { group: "@keyword.debug", targetGroup: "Exception" },
    { group: "@keyword.exception", targetGroup: "Exception" },
    { group: "@keyword.conditional", targetGroup: "Conditional" },
    { group: "@keyword.conditional.ternary", targetGroup: "Operator" },
    { group: "@keyword.directive", targetGroup: "PreProc" },
    { group: "@keyword.directive.define", targetGroup: "Define" },
    { group: "@keyword.export", fg: c.blue },

    { group: "@punctuation.delimiter", targetGroup: "Delimiter" },
    { group: "@punctuation.bracket", fg: c.foreground },
    { group: "@punctuation.special", targetGroup: "Special" },

    { group: "@comment", targetGroup: "Comment" },
    { group: "@comment.documentation", targetGroup: "Comment" },
    { group: "@comment.error", fg: c.background, bg: c.red },
    { group: "@comment.warning", fg: c.background, bg: c.yellow },
    { group: "@comment.todo", fg: c.background, bg: c.blue },
    { group: "@comment.note", fg: c.background, bg: c.cyan },

    { group: "@markup", fg: c.foreground },
    { group: "@markup.strong", fg: c.foreground, style: "bold" },
    { group: "@markup.italic", fg: c.foreground, style: "italic" },
    { group: "@markup.strikethrough", fg: c.foreground, style: "strikethrough" },
    { group: "@markup.underline", targetGroup: "underline" },
    { group: "@markup.heading", fg: c.darkblue, style: "bold" },
    { group: "@markup.quote", fg: c.darkcyan },
    { group: "@markup.math", fg: c.darkblue },
    { group: "@markup.link", targetGroup: "Tag" },
    { group: "@markup.link.label", targetGroup: "Label" },
    { group: "@markup.link.url", fg: c.darkmagenta, style: "underline" },
    { group: "@markup.raw", fg: c.cyan },
    { group: "@markup.list", targetGroup: "Special" },
    { group: "@markup.list.checked", fg: c.darkgreen },
    { group: "@markup.list.unchecked", fg: c.gray },

    { group: "@diff.plus", targetGroup: "diffAdded" },
    { group: "@diff.minus", targetGroup: "diffRemoved" },
    { group: "@diff.delta", targetGroup: "diffChanged" },

    { group: "@tag", fg: c.darkmagenta },
    { group: "@tag.builtin", fg: c.darkcyan },
    { group: "@tag.attribute", fg: c.darkblue },
    { group: "@tag.delimiter", fg: c.foreground },
  ];
}

export function toNeovim(recipe: Recipe): string {
  const cereals = prepare(recipe);
  const highlights = defineHighlights(cereals);

  const template = `" Store the following config under ~/.config/nvim/colors/root-loops.vim
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
