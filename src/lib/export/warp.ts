import { toQueryString, type Recipe } from "$lib/ingredients";
import { prepare } from "$lib/cereals";

export function toWarp(recipe: Recipe): string {
  const queryString = toQueryString(recipe);
  const cereals = prepare(recipe);

  return `# Copy the configuration below and add it to a new file under
# ~/.warp/themes/rootloops.yaml
# Open Warp's Settings > Appearance > Themes and select the 'Root Loops' theme.

# via https://rootloops.sh?${queryString}

name: Root Loops
accent: '${cereals.white.color_hex}'
cursor: '${cereals.white.color_hex}'
background: '${cereals.background.color_hex}'
foreground: '${cereals.foreground.color_hex}'
details: darker
terminal_colors:
  bright:
    black: '${cereals.brightBlack.color_hex}'
    blue: '${cereals.brightBlue.color_hex}'
    cyan: '${cereals.brightCyan.color_hex}'
    green: '${cereals.brightGreen.color_hex}'
    magenta: '${cereals.brightMagenta.color_hex}'
    red: '${cereals.brightRed.color_hex}'
    white: '${cereals.brightWhite.color_hex}'
    yellow: '${cereals.brightYellow.color_hex}'
  normal:
    black: '${cereals.black.color_hex}'
    blue: '${cereals.blue.color_hex}'
    cyan: '${cereals.cyan.color_hex}'
    green: '${cereals.green.color_hex}'
    magenta: '${cereals.magenta.color_hex}'
    red: '${cereals.red.color_hex}'
    white: '${cereals.white.color_hex}'
    yellow: '${cereals.yellow.color_hex}'`;
}
