import { type Recipe } from "$lib/ingredients";
import { prepare } from "$lib/cereals";

export function toJson(recipe: Recipe): string {
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
