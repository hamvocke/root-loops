import { describe, expect, it } from "vitest";
import { type Recipe, MilkAmount, Flavor, Fruit } from "$lib/ingredients";
import { toWarp } from "./warp";

describe("Warp export", () => {
  const someRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Intense,
    artificialColors: 2,
    sugar: 3,
    fruit: Fruit.Elderberry,
    sogginess: 2,
  };

  it("exports the right format", () => {
    const config = toWarp(someRecipe);
    // prettier-ignore
    const expected = `# Copy the configuration below and add it to a new file under
# ~/.warp/themes/rootloops.yaml
# Open Warp's Settings > Appearance > Themes and select the 'Root Loops' theme.

# via https://rootloops.sh?sugar=3&colors=2&sogginess=2&flavor=2&fruit=9&milk=2

name: Root Loops
accent: '#4a5165'
cursor: '#4a5165'
background: '#dfe2eb'
foreground: '#1e222d'
details: darker
terminal_colors:
  bright:
    black: '#959eb5'
    blue: '#51586e'
    cyan: '#475e62'
    green: '#4d5e50'
    magenta: '#655263'
    red: '#6b524e'
    white: '#07080d'
    yellow: '#5f5946'
  normal:
    black: '#d0d4e1'
    blue: '#3f4557'
    cyan: '#374a4d'
    green: '#3c4a3e'
    magenta: '#50404e'
    red: '#55403c'
    white: '#4a5165'
    yellow: '#4b4536'`

    expect(config).toBe(expected);
  });
});
