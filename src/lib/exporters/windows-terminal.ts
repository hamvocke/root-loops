import { type Recipe } from "$lib/ingredients";
import { prepare } from "$lib/cereals";

export function toWindowsTerminal(recipe: Recipe): string {
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
