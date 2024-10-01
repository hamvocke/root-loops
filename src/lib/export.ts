import { type Recipe } from "$lib/ingredients";
import { prepare } from "$lib/cereals";

export function exportToJson(recipe: Recipe): string {
  const cereals = prepare(recipe);
  const colors = {
    source: "rootloops.sh",
    hex: {
      background: cereals.black.color_hex,
      foreground: cereals.brightWhite.color_hex,
      text: cereals.black.color_hex,
      cursor: cereals.white.color_hex,
      black: cereals.black.color_hex,
      red: cereals.red.color_hex,
      green: cereals.green.color_hex,
      yellow: cereals.yellow.color_hex,
      blue: cereals.blue.color_hex,
      magenta: cereals.magenta.color_hex,
      cyan: cereals.cyan.color_hex,
      white: cereals.white.color_hex,
      brightBlack: cereals.brightBlack.color_hex,
      brightRed: cereals.brightRed.color_hex,
      brightGreen: cereals.brightGreen.color_hex,
      brightYellow: cereals.brightYellow.color_hex,
      brightBlue: cereals.brightBlue.color_hex,
      brightMagenta: cereals.brightMagenta.color_hex,
      brightCyan: cereals.brightCyan.color_hex,
      brightWhite: cereals.brightWhite.color_hex,
    },
  };

  return JSON.stringify(colors, null, 2);
}

export function exportToAlacritty(recipe: Recipe): string {
  const cereals = prepare(recipe);
  return `
# Copy the configuration below and add it to your
# ~/.config/alacritty/alacritty.toml file

# Colors (Root Loops)
# via rootloops.sh

[colors.primary]
background = '${cereals.black.color_hex}'
foreground = '${cereals.brightWhite.color_hex}'

[colors.cursor]
text = '${cereals.black.color_hex}'
cursor = '${cereals.white.color_hex}'

[colors.normal]
black = '${cereals.black.color_hex}'
red = '${cereals.red.color_hex}'
green = '${cereals.green.color_hex}'
yellow = '${cereals.yellow.color_hex}'
blue = '${cereals.blue.color_hex}'
magenta = '${cereals.magenta.color_hex}'
cyan = '${cereals.cyan.color_hex}'
white = '${cereals.white.color_hex}'

[colors.bright]
black = '${cereals.brightBlack.color_hex}'
red = '${cereals.brightRed.color_hex}'
green = '${cereals.brightGreen.color_hex}'
yellow = '${cereals.brightYellow.color_hex}'
blue = '${cereals.brightBlue.color_hex}'
magenta = '${cereals.brightMagenta.color_hex}'
cyan = '${cereals.brightCyan.color_hex}'
white = '${cereals.brightWhite.color_hex}'
`;
}

export function exportToWindowsTerminal(recipe: Recipe): string {
  const cereals = prepare(recipe);
  const colors = {
    name: "Root Loops",

    cursorColor: cereals.white.color_hex,
    selectionBackground: cereals.black.color_hex,

    background: cereals.black.color_hex,
    foreground: cereals.brightWhite.color_hex,

    black: cereals.black.color_hex,
    blue: cereals.blue.color_hex,
    cyan: cereals.cyan.color_hex,
    green: cereals.green.color_hex,
    purple: cereals.magenta.color_hex,
    red: cereals.red.color_hex,
    white: cereals.white.color_hex,
    yellow: cereals.yellow.color_hex,
    brightBlack: cereals.brightBlack.color_hex,
    brightBlue: cereals.brightBlue.color_hex,
    brightCyan: cereals.brightCyan.color_hex,
    brightGreen: cereals.brightGreen.color_hex,
    brightPurple: cereals.brightMagenta.color_hex,
    brightRed: cereals.brightRed.color_hex,
    brightWhite: cereals.brightWhite.color_hex,
    brightYellow: cereals.brightYellow.color_hex,
  };
  return JSON.stringify(colors, null, 2);
}

export function exportToXresources(recipe: Recipe): string {
  const cereals = prepare(recipe);
  return `
! Copy the configuration below to your ~/.Xresources file
! Root Loops (via rootloops.sh)

*.foreground:  ${cereals.brightWhite.color_hex}
*.background:  ${cereals.black.color_hex}
*.cursorColor: ${cereals.white.color_hex}

*.color0: ${cereals.black.color_hex}
*.color1: ${cereals.red.color_hex}
*.color2: ${cereals.green.color_hex}
*.color3: ${cereals.yellow.color_hex}
*.color4: ${cereals.blue.color_hex}
*.color5: ${cereals.magenta.color_hex}
*.color6: ${cereals.cyan.color_hex}
*.color7: ${cereals.white.color_hex}
*.color8: ${cereals.brightBlack.color_hex}
*.color9: ${cereals.brightRed.color_hex}
*.color10: ${cereals.brightGreen.color_hex}
*.color11: ${cereals.brightYellow.color_hex}
*.color12: ${cereals.brightBlue.color_hex}
*.color13: ${cereals.brightMagenta.color_hex}
*.color14: ${cereals.brightCyan.color_hex}
*.color15: ${cereals.brightWhite.color_hex}
`;
}

export function exportToKitty(recipe: Recipe): string {
  const cereals = prepare(recipe);
  return `
# Copy the configuration below and add it to your
# ~/.config/kitty/kitty.conf file

## Root Loops color scheme
## via https://rootloops.sh

# The basic colors
background              ${cereals.black.color_hex}
foreground              ${cereals.brightWhite.color_hex}
selection_background    ${cereals.brightWhite.color_hex}
selection_foreground    ${cereals.black.color_hex}

# Cursor colors
cursor_text_color       ${cereals.black.color_hex}
cursor                  ${cereals.white.color_hex}

# URL underline color when hovering with mouse
url_color               ${cereals.brightYellow.color_hex}

# Kitty window border colors
active_border_color     ${cereals.white.color_hex}
inactive_border_color   ${cereals.brightBlack.color_hex}
bell_border_color       ${cereals.red.color_hex}

# OS Window titlebar colors
wayland_titlebar_color system
macos_titlebar_color system

# Tab bar colors
active_tab_foreground   ${cereals.brightWhite.color_hex}
active_tab_background   ${cereals.brightBlack.color_hex}
inactive_tab_foreground ${cereals.white.color_hex}
inactive_tab_background ${cereals.brightBlack.color_hex}
tab_bar_background      ${cereals.black.color_hex}

# Colors for marks (marked text in the terminal)
mark1_foreground ${cereals.black.color_hex}
mark1_background ${cereals.brightRed.color_hex}
mark2_foreground ${cereals.black.color_hex}
mark2_background ${cereals.brightYellow.color_hex}
mark3_foreground ${cereals.black.color_hex}
mark3_background ${cereals.brightGreen.color_hex}

# The 16 terminal colors

# black
color0 ${cereals.black.color_hex}
color8 ${cereals.brightBlack.color_hex}

# red
color1 ${cereals.red.color_hex}
color9 ${cereals.brightRed.color_hex}

# green
color2  ${cereals.green.color_hex}
color10 ${cereals.brightGreen.color_hex}

# yellow
color3  ${cereals.yellow.color_hex}
color11 ${cereals.brightYellow.color_hex}

# blue
color4  ${cereals.blue.color_hex}
color12 ${cereals.brightBlue.color_hex}

# magenta
color5  ${cereals.magenta.color_hex}
color13 ${cereals.brightMagenta.color_hex}

# cyan
color6  ${cereals.cyan.color_hex}
color14 ${cereals.brightCyan.color_hex}

# white
color7  ${cereals.white.color_hex}
color15 ${cereals.brightWhite.color_hex}
`;
}

export function exportToWezTerm(recipe: Recipe): string {
  const cereals = prepare(recipe);
  return `
-- Copy the configuration below and add it to your
-- ~/.wezterm.lua or ~/.config/wezterm/wezterm.lua file

-- NOTE: make sure to *not* use any config.color_scheme option
--       if you want to define your own root loops color scheme

-- Root Loops color scheme
-- via https://rootloops.sh
config.colors = {
  foreground = "${cereals.brightWhite.color_hex}",
  background = "${cereals.black.color_hex}",
  cursor_bg = "${cereals.white.color_hex}",
  cursor_border = "${cereals.brightWhite.color_hex}",
  cursor_fg = "${cereals.black.color_hex}",
  selection_bg = "${cereals.brightWhite.color_hex}",
  selection_fg = "${cereals.black.color_hex}",
  ansi = {
    "${cereals.black.color_hex}",
    "${cereals.red.color_hex}",
    "${cereals.green.color_hex}",
    "${cereals.yellow.color_hex}",
    "${cereals.blue.color_hex}",
    "${cereals.magenta.color_hex}",
    "${cereals.cyan.color_hex}",
    "${cereals.white.color_hex}"
  },
  brights = {
    "${cereals.brightBlack.color_hex}",
    "${cereals.brightRed.color_hex}",
    "${cereals.brightGreen.color_hex}",
    "${cereals.brightYellow.color_hex}",
    "${cereals.brightBlue.color_hex}",
    "${cereals.brightMagenta.color_hex}",
    "${cereals.brightCyan.color_hex}",
    "${cereals.brightWhite.color_hex}"
  },
}
`;
}

export function exportToHelix(recipe: Recipe): string {
  const cereals = prepare(recipe);
  return `# Copy the configuration below to ~/.config/helix/themes/rootloops.toml


# Root Loops (https://rootloops.sh)

"ui.background" = { fg = "white"}
"ui.background.separator" = { fg = "gray" }
"ui.text" = { fg = "light-gray" }
"ui.text.focus" = { fg = "white" }
"ui.menu" = { fg = "white" }
"ui.menu.selected" = { modifiers = ["reversed"] }
"ui.menu.scroll" = { fg = "light-gray" }
"ui.linenr" = { fg = "light-gray" }
"ui.linenr.selected" = { fg = "white",  modifiers = ["bold"] }
"ui.popup" = { fg = "white" }
"ui.window" = { fg = "gray" }
"ui.selection" = { bg = "gray" }
"comment" = "light-gray"
"ui.statusline" = { fg = "white" }
"ui.statusline.inactive" = { fg = "gray" }
"ui.statusline.normal" = { fg = "black", bg = "blue" }
"ui.statusline.insert" = { fg = "black", bg = "green" }
"ui.statusline.select" = { fg = "black", bg = "magenta" }
"ui.help" = { fg = "light-gray" }
"ui.cursor" = { modifiers = ["reversed"] }
"ui.cursor.match" = { fg = "light-yellow", underline = { color = "light-yellow", style = "line" } }
"ui.cursor.primary" = { modifiers = ["reversed", "slow_blink"] }
"ui.cursor.secondary" = { modifiers = ["reversed"] }
"ui.cursorline.primary" = { underline = { color = "light-gray", style = "line" } }
"ui.cursorline.secondary" = { underline = { color = "light-gray", style = "line" } }
"ui.cursorcolumn.primary" = { bg = "gray" }
"ui.cursorcolumn.secondary" = { bg = "gray" }
"ui.virtual.ruler" = { bg = "gray" }
"ui.virtual.whitespace" = "gray"
"ui.virtual.indent-guide" = "gray"
"ui.virtual.inlay-hint" = { fg = "white", bg = "gray" }
"ui.virtual.inlay-hint.parameter" = { fg = "white", bg = "gray"}
"ui.virtual.inlay-hint.type" = { fg = "white", bg = "gray"}
"ui.virtual.wrap" = "gray"
"ui.virtual.jump-label" = { fg = "blue", modifiers = ["bold", "underlined"] }

"variable" = "light-red"
"constant.numeric" = "yellow"
"constant" = "yellow"
"attribute" = "yellow"
"type" = "light-yellow"
"string"  = "light-green"
"variable.other.member" = "green"
"constant.character.escape" = "light-cyan"
"function" = "light-blue"
"constructor" = "light-blue"
"special" = "light-blue"
"keyword" = "light-magenta"
"label" = "light-magenta"
"namespace" = "light-magenta"

"markup.heading" = "light-blue"
"markup.list" = "light-red"
"markup.bold" = { fg = "light-yellow", modifiers = ["bold"] }
"markup.italic" = { fg = "light-magenta", modifiers = ["italic"] }
"markup.strikethrough" = { modifiers = ["crossed_out"] }
"markup.link.url" = { fg = "yellow", underline = { color = "yellow", style = "line"} }
"markup.link.text" = "light-red"
"markup.quote" = "light-cyan"
"markup.raw" = "green"
"markup.normal" = { fg = "blue" }
"markup.insert" = { fg = "green" }
"markup.select" = { fg = "magenta" }

"diff.plus" = "light-green"
"diff.delta" = "light-blue"
"diff.delta.moved" = "blue"
"diff.minus" = "light-red"

"ui.gutter" = "gray"
"info" = "light-blue"
"hint" = "light-gray"
"debug" = "light-gray"
"warning" = "light-yellow"
"error" = "light-red"

"diagnostic.info" = { underline = { color = "light-blue", style = "dotted" } }
"diagnostic.hint" = { underline = { color = "light-gray", style = "double_line" } }
"diagnostic.debug" = { underline ={ color ="light-gray", style = "dashed" } }
"diagnostic.warning" = { underline = { color = "light-yellow", style = "curl" } }
"diagnostic.error" = { underline = { color ="light-red", style = "curl" } }

[palette]
black = "${cereals.black.color_hex}"
red = "${cereals.red.color_hex}"
green = "${cereals.green.color_hex}"
yellow = "${cereals.yellow.color_hex}"
blue = "${cereals.blue.color_hex}"
magenta = "${cereals.magenta.color_hex}"
cyan = "${cereals.cyan.color_hex}"
light-gray = "${cereals.white.color_hex}"

gray = "${cereals.brightBlack.color_hex}"
light-red = "${cereals.brightRed.color_hex}"
light-green = "${cereals.brightGreen.color_hex}"
light-yellow = "${cereals.brightYellow.color_hex}"
light-blue = "${cereals.brightBlue.color_hex}"
light-magenta = "${cereals.brightMagenta.color_hex}"
light-cyan = "${cereals.brightCyan.color_hex}"
white = "${cereals.brightWhite.color_hex}"
`;
}
