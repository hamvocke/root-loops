import { type Recipe } from "$lib/ingredients";
import { prepare } from "$lib/cereals";

export function toKitty(recipe: Recipe): string {
  const cereals = prepare(recipe);
  return `# Copy the configuration below and add it to your
# ~/.config/kitty/kitty.conf file

## Root Loops color scheme
## via https://rootloops.sh

# The basic colors
background              ${cereals.background.color_hex}
foreground              ${cereals.foreground.color_hex}
selection_background    ${cereals.foreground.color_hex}
selection_foreground    ${cereals.background.color_hex}

# Cursor colors
cursor_text_color       ${cereals.foreground.color_hex}
cursor                  ${cereals.white.color_hex}

# URL underline color when hovering with mouse
url_color               ${cereals.brightYellow.color_hex}

# Kitty window border colors
active_border_color     ${cereals.white.color_hex}
inactive_border_color   ${cereals.brightBlack.color_hex}
bell_border_color       ${cereals.red.color_hex}

# Tab bar colors
active_tab_foreground   ${cereals.foreground.color_hex}
active_tab_background   ${cereals.background.color_hex}
inactive_tab_foreground ${cereals.black.color_hex}
inactive_tab_background ${cereals.white.color_hex}
tab_bar_background      ${cereals.background.color_hex}

# Colors for marks (marked text in the terminal)
mark1_foreground ${cereals.foreground.color_hex}
mark1_background ${cereals.brightRed.color_hex}
mark2_foreground ${cereals.foreground.color_hex}
mark2_background ${cereals.brightYellow.color_hex}
mark3_foreground ${cereals.foreground.color_hex}
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
color15 ${cereals.brightWhite.color_hex}`;
}
