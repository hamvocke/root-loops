import { type Recipe } from "$lib/ingredients";
import { prepare } from "$lib/cereals";

export function exportToJson(recipe: Recipe): string {
  const cereals = prepare(recipe);
  const colors = {
    source: "rootloops.sh",
    hex: {
      background: cereals.black.color_hex,
      foreground: cereals.white.color_hex,
      text: cereals.black.color_hex,
      cursor: cereals.brightWhite.color_hex,
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
foreground = '${cereals.white.color_hex}'

[colors.cursor]
text = '${cereals.black.color_hex}'
cursor = '${cereals.brightWhite.color_hex}'

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
