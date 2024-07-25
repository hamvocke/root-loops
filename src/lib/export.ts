import { type Recipe } from "$lib/ingredients";
import { type SelectOption } from "./selectOptions";
import { prepare } from "$lib/cereals";

export enum ExportFormat {
  JSON = 0,
  WindowsTerminal = 1,
  Alacritty = 2,
  XResources = 3,
}

export const exportSelectOptions: SelectOption[] = [
  { value: ExportFormat.JSON, label: "JSON" },
  { value: ExportFormat.WindowsTerminal, label: "Windows Terminal" },
  { value: ExportFormat.Alacritty, label: "Alacritty" },
  { value: ExportFormat.XResources, label: "XResources" },
];

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
