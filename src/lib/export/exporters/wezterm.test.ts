import { describe, expect, it } from "vitest";
import { type Recipe, MilkAmount, Flavor, Fruit } from "$lib/ingredients";
import { toWezTerm } from "./wezterm";

describe("WezTerm export", () => {
  const someRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Intense,
    artificialColors: 2,
    sugar: 3,
    fruit: Fruit.Elderberry,
    sogginess: 2,
  };

  it("exports the right format", () => {
    const config = toWezTerm(someRecipe);
    // prettier-ignore
    const expected = `-- Copy the configuration below and add it to your
-- ~/.wezterm.lua or ~/.config/wezterm/wezterm.lua file

-- NOTE: make sure to *not* use any config.color_scheme option
--       if you want to define your own root loops color scheme

-- Root Loops color scheme
-- via https://rootloops.sh?sugar=3&colors=2&sogginess=2&flavor=2&fruit=9&milk=2
config.colors = {
  foreground = "#1e222d",
  background = "#dfe2eb",
  cursor_bg = "#4a5165",
  cursor_border = "#07080d",
  cursor_fg = "#dfe2eb",
  selection_bg = "#1e222d",
  selection_fg = "#dfe2eb",
  ansi = {
    "#d0d4e1",
    "#55403c",
    "#3c4a3e",
    "#4b4536",
    "#3f4557",
    "#50404e",
    "#374a4d",
    "#4a5165"
  },
  brights = {
    "#959eb5",
    "#6b524e",
    "#4d5e50",
    "#5f5946",
    "#51586e",
    "#655263",
    "#475e62",
    "#07080d"
  },
}`;

    expect(config).toBe(expected);
  });
});
