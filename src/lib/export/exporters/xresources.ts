import { type Recipe } from "$lib/ingredients";
import { prepare } from "$lib/cereals";

export function toXresources(recipe: Recipe): string {
  const cereals = prepare(recipe);
  return `! Copy the configuration below to your ~/.Xresources file
! Root Loops (via rootloops.sh)

*.foreground:  ${cereals.foreground.color_hex}
*.background:  ${cereals.background.color_hex}
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
*.color15: ${cereals.brightWhite.color_hex}`;
}
