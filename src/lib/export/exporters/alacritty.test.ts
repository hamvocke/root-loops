import { describe, expect, it } from "vitest";
import { type Recipe, MilkAmount, Flavor, Fruit } from "$lib/ingredients";
import { toAlacritty } from "./alacritty";

describe("Alacritty export", () => {
  const someRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Intense,
    artificialColors: 2,
    sugar: 3,
    fruit: Fruit.Elderberry,
    sogginess: 2,
  };

  it("exports the correct format", () => {
    const config = toAlacritty(someRecipe);
    // prettier-ignore
    const expected = `# Copy the configuration below and add it to your
# ~/.config/alacritty/alacritty.toml file

# Colors (Root Loops)
# via https://rootloops.sh?sugar=3&colors=2&sogginess=2&flavor=2&fruit=9&milk=2

[colors.primary]
background = '#dfe2eb'
foreground = '#1e222d'

[colors.cursor]
text = '#dfe2eb'
cursor = '#4a5165'

[colors.normal]
black = '#d0d4e1'
red = '#55403c'
green = '#3c4a3e'
yellow = '#4b4536'
blue = '#3f4557'
magenta = '#50404e'
cyan = '#374a4d'
white = '#4a5165'

[colors.bright]
black = '#959eb5'
red = '#6b524e'
green = '#4d5e50'
yellow = '#5f5946'
blue = '#51586e'
magenta = '#655263'
cyan = '#475e62'
white = '#07080d'`;

    expect(config).toBe(expected);
  });
});
