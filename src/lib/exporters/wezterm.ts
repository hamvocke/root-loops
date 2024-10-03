import { type Recipe } from "$lib/ingredients";
import { prepare } from "$lib/cereals";

export function toWezTerm(recipe: Recipe): string {
  const cereals = prepare(recipe);
  return `
-- Copy the configuration below and add it to your
-- ~/.wezterm.lua or ~/.config/wezterm/wezterm.lua file

-- NOTE: make sure to *not* use any config.color_scheme option
--       if you want to define your own root loops color scheme

-- Root Loops color scheme
-- via https://rootloops.sh
config.colors = {
  foreground = "${cereals.brightWhite.color_hex}",
  background = "${cereals.black.color_hex}",
  cursor_bg = "${cereals.white.color_hex}",
  cursor_border = "${cereals.brightWhite.color_hex}",
  cursor_fg = "${cereals.black.color_hex}",
  selection_bg = "${cereals.brightWhite.color_hex}",
  selection_fg = "${cereals.black.color_hex}",
  ansi = {
    "${cereals.black.color_hex}",
    "${cereals.red.color_hex}",
    "${cereals.green.color_hex}",
    "${cereals.yellow.color_hex}",
    "${cereals.blue.color_hex}",
    "${cereals.magenta.color_hex}",
    "${cereals.cyan.color_hex}",
    "${cereals.white.color_hex}"
  },
  brights = {
    "${cereals.brightBlack.color_hex}",
    "${cereals.brightRed.color_hex}",
    "${cereals.brightGreen.color_hex}",
    "${cereals.brightYellow.color_hex}",
    "${cereals.brightBlue.color_hex}",
    "${cereals.brightMagenta.color_hex}",
    "${cereals.brightCyan.color_hex}",
    "${cereals.brightWhite.color_hex}"
  },
}
`;
}
