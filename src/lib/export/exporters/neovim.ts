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

    // TODO: treesitter
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
