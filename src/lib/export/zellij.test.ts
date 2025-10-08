import { describe, expect, it } from "vitest";
import { type Recipe, MilkAmount, Flavor, Fruit } from "$lib/ingredients";
import { toZellij } from "./zellij";

describe("Zellij export", () => {
  const someRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Intense,
    artificialColors: 2,
    sugar: 3,
    fruit: Fruit.Elderberry,
    sogginess: 2,
  };

  it("to zellij", () => {
    const config = toZellij(someRecipe);
    // prettier-ignore
    const expected = `// Copy the configuration below and add it to your
// ~/.config/zellij/zellij.kdl file

// Colors (Root Loops)
// via https://rootloops.sh?sugar=3&colors=2&sogginess=2&flavor=2&fruit=9&milk=2
themes {
   rootloops {
        fg "#1e222d"
        bg "#dfe2eb"
        black "#d0d4e1"
        red "#55403c"
        green "#3c4a3e"
        yellow "#4b4536"
        blue "#3f4557"
        magenta "#50404e"
        cyan "#374a4d"
        white "#4a5165"
        orange "#5f5946"
    }
}

theme "rootloops"`

    expect(config).toBe(expected);
  });
});
