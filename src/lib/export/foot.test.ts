import { describe, expect, it } from "vitest";
import { type Recipe, MilkAmount, Flavor, Fruit } from "$lib/ingredients";
import { toFoot } from "./foot";

describe("Foot export", () => {
  const someRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Intense,
    artificialColors: 2,
    sugar: 3,
    fruit: Fruit.Elderberry,
    sogginess: 2,
  };

  it("exports the right format", () => {
    const config = toFoot(someRecipe);
    // prettier-ignore
    const expected = `# Copy the configuration below and add it to your
# ~/.config/foot/foot.ini file

[colors]
# Root Loops color scheme
# via https://rootloops.sh?sugar=3&colors=2&sogginess=2&flavor=2&fruit=9&milk=2

background=e5e7ee
foreground=0f1219

# Normal/regular colors (color palette 0-7)
regular0=d4d9e4 # black
regular1=55403c # red
regular2=3c4a3e # green
regular3=4b4536 # yellow
regular4=3f4557 # blue
regular5=50404e # magenta
regular6=374a4d # cyan
regular7=4e556a # white

# Bright colors (color palette 8-15)
bright0=9fa7bd # bright black
bright1=6b524e # bright red
bright2=4d5e50 # bright green
bright3=5f5946 # bright yellow
bright4=51586e # bright blue
bright5=655263 # bright magenta
bright6=475e62 # bright cyan
bright7=262a37 # bright white`;

    expect(config).toBe(expected);
  });
});
