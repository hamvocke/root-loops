import { describe, expect, it } from "vitest";
import { type Recipe, MilkAmount, Flavor, Fruit } from "$lib/ingredients";
import { toGhostty } from "./ghostty";

describe("Ghostty export", () => {
  const someRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Intense,
    artificialColors: 2,
    sugar: 3,
    fruit: Fruit.Elderberry,
    sogginess: 2,
  };

  it("exports the right format", () => {
    const config = toGhostty(someRecipe);
    // prettier-ignore
    const expected = `# Copy the configuration below and add it to your
# ~/.config/ghostty/config file

# Colors (Root Loops)
# via https://rootloops.sh?sugar=3&colors=2&sogginess=2&flavor=2&fruit=9&milk=2

background = dfe2eb
foreground = 1e222d

# black
palette = 0=#d0d4e1
palette = 8=#959eb5

# red
palette = 1=#55403c
palette = 9=#6b524e

# green
palette = 2=#3c4a3e
palette = 10=#4d5e50

# yellow
palette = 3=#4b4536
palette = 11=#5f5946

# blue
palette = 4=#3f4557
palette = 12=#51586e

# purple
palette = 5=#50404e
palette = 13=#655263

# aqua
palette = 6=#374a4d
palette = 14=#475e62

# white
palette = 7=#4a5165
palette = 15=#07080d`;

    expect(config).toBe(expected);
  });
});
