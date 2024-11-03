import { type Recipe } from "$lib/ingredients";
import { prepare } from "$lib/cereals";

export function toZellij(recipe: Recipe): string {
  const cereals = prepare(recipe);
  return `// Copy the configuration below and add it to your
// ~/.config/zellij/zellij.kdl file

// Colors (Root Loops)
// via rootloops.sh
themes {
   rootloops {
        fg "${cereals.foreground.color_hex}"
        bg "${cereals.background.color_hex}"
        black "${cereals.black.color_hex}"
        red "${cereals.red.color_hex}"
        green "${cereals.green.color_hex}"
        yellow "${cereals.yellow.color_hex}"
        blue "${cereals.blue.color_hex}"
        magenta "${cereals.magenta.color_hex}"
        cyan "${cereals.cyan.color_hex}"
        white "${cereals.white.color_hex}"
        orange "${cereals.brightYellow.color_hex}"
    }
}

theme "rootloops"`;
}
