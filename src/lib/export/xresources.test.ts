import { describe, expect, it } from "vitest";
import { type Recipe, MilkAmount, Flavor, Fruit } from "$lib/ingredients";
import { toXresources } from "./xresources";

describe("Xresources export", () => {
  const someRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Intense,
    artificialColors: 2,
    sugar: 3,
    fruit: Fruit.Elderberry,
    sogginess: 2,
  };

  it("exports the right format", () => {
    const config = toXresources(someRecipe);
    // prettier-ignore
    const expected = `! Copy the configuration below to your ~/.Xresources file
! Root Loops (via https://rootloops.sh?sugar=3&colors=2&sogginess=2&flavor=2&fruit=9&milk=2)

*.foreground:  #0f1219
*.background:  #e5e7ee
*.cursorColor: #4e556a

*.color0: #d4d9e4
*.color1: #55403c
*.color2: #3c4a3e
*.color3: #4b4536
*.color4: #3f4557
*.color5: #50404e
*.color6: #374a4d
*.color7: #4e556a
*.color8: #9fa7bd
*.color9: #6b524e
*.color10: #4d5e50
*.color11: #5f5946
*.color12: #51586e
*.color13: #655263
*.color14: #475e62
*.color15: #262a37`;

    expect(config).toBe(expected);
  });
});
