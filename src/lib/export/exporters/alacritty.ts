import { type Recipe } from "$lib/ingredients";
import { prepare } from "$lib/cereals";

export function toAlacritty(recipe: Recipe): string {
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
