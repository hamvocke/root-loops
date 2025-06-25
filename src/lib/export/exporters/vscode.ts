import { type Recipe } from "$lib/ingredients";
import { prepare } from "$lib/cereals";

export function toVSCode(recipe: Recipe): string {
  const cereals = prepare(recipe);
  const colors = {
    "workbench.colorCustomizations": {
      "terminal.ansiBlack": cereals.black.color_hex,
      "terminal.ansiBlue": cereals.blue.color_hex,
      "terminal.ansiBrightBlack": cereals.brightBlack.color_hex,
      "terminal.ansiBrightBlue": cereals.brightBlue.color_hex,
      "terminal.ansiBrightCyan": cereals.brightCyan.color_hex,
      "terminal.ansiBrightGreen": cereals.brightGreen.color_hex,
      "terminal.ansiBrightMagenta": cereals.brightMagenta.color_hex,
      "terminal.ansiBrightRed": cereals.brightRed.color_hex,
      "terminal.ansiBrightWhite": cereals.brightWhite.color_hex,
      "terminal.ansiBrightYellow": cereals.brightYellow.color_hex,
      "terminal.ansiCyan": cereals.cyan.color_hex,
      "terminal.ansiGreen": cereals.green.color_hex,
      "terminal.ansiMagenta": cereals.magenta.color_hex,
      "terminal.ansiRed": cereals.red.color_hex,
      "terminal.ansiWhite": cereals.white.color_hex,
      "terminal.ansiYellow": cereals.yellow.color_hex,
      "terminal.background": cereals.background.color_hex,
      "terminal.foreground": cereals.foreground.color_hex,
      "terminalCursor.foreground": cereals.white.color_hex,
    },
  };
  return JSON.stringify(colors, null, 2);
}
