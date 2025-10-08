import { toQueryString, type Recipe } from "$lib/ingredients";
import { prepare } from "$lib/cereals";

export function toNix(recipe: Recipe): string {
  const cereals = prepare(recipe);
  const queryString = toQueryString(recipe);

  return `{
  source = "https://rootloops.sh?${queryString}";
  hex = {
    background = "${cereals.background.color_hex}";
    foreground = "${cereals.foreground.color_hex}";
    cursor = "${cereals.white.color_hex}";
    black = "${cereals.black.color_hex}";
    red = "${cereals.red.color_hex}";
    green = "${cereals.green.color_hex}";
    yellow = "${cereals.yellow.color_hex}";
    blue = "${cereals.blue.color_hex}";
    magenta = "${cereals.magenta.color_hex}";
    cyan = "${cereals.cyan.color_hex}";
    white = "${cereals.white.color_hex}";
    brightBlack = "${cereals.brightBlack.color_hex}";
    brightRed = "${cereals.brightRed.color_hex}";
    brightGreen = "${cereals.brightGreen.color_hex}";
    brightYellow = "${cereals.brightYellow.color_hex}";
    brightBlue = "${cereals.brightBlue.color_hex}";
    brightMagenta = "${cereals.brightMagenta.color_hex}";
    brightCyan = "${cereals.brightCyan.color_hex}";
    brightWhite = "${cereals.brightWhite.color_hex}";
  };
  hsl = {
    background = "${cereals.background.color_hsl}";
    foreground = "${cereals.foreground.color_hsl}";
    cursor = "${cereals.white.color_hsl}";
    black = "${cereals.black.color_hsl}";
    red = "${cereals.red.color_hsl}";
    green = "${cereals.green.color_hsl}";
    yellow = "${cereals.yellow.color_hsl}";
    blue = "${cereals.blue.color_hsl}";
    magenta = "${cereals.magenta.color_hsl}";
    cyan = "${cereals.cyan.color_hsl}";
    white = "${cereals.white.color_hsl}";
    brightBlack = "${cereals.brightBlack.color_hsl}";
    brightRed = "${cereals.brightRed.color_hsl}";
    brightGreen = "${cereals.brightGreen.color_hsl}";
    brightYellow = "${cereals.brightYellow.color_hsl}";
    brightBlue = "${cereals.brightBlue.color_hsl}";
    brightMagenta = "${cereals.brightMagenta.color_hsl}";
    brightCyan = "${cereals.brightCyan.color_hsl}";
    brightWhite = "${cereals.brightWhite.color_hsl}";
  };
}`;
}
