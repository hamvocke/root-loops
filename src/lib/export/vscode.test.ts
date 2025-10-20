import { describe, expect, it } from "vitest";
import { type Recipe, MilkAmount, Flavor, Fruit } from "$lib/ingredients";
import { toVSCode } from "./vscode";

describe("Visual Studio Code terminal export", () => {
  const someRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Intense,
    artificialColors: 2,
    sugar: 3,
    fruit: Fruit.Elderberry,
    sogginess: 2,
  };

  it("export the right format", () => {
    const config = toVSCode(someRecipe);
    const expected = {
      "workbench.colorCustomizations": {
        "terminal.ansiBlack": "#d4d9e4",
        "terminal.ansiBlue": "#3f4557",
        "terminal.ansiBrightBlack": "#9fa7bd",
        "terminal.ansiBrightBlue": "#51586e",
        "terminal.ansiBrightCyan": "#475e62",
        "terminal.ansiBrightGreen": "#4d5e50",
        "terminal.ansiBrightMagenta": "#655263",
        "terminal.ansiBrightRed": "#6b524e",
        "terminal.ansiBrightWhite": "#262a37",
        "terminal.ansiBrightYellow": "#5f5946",
        "terminal.ansiCyan": "#374a4d",
        "terminal.ansiGreen": "#3c4a3e",
        "terminal.ansiMagenta": "#50404e",
        "terminal.ansiRed": "#55403c",
        "terminal.ansiWhite": "#4e556a",
        "terminal.ansiYellow": "#4b4536",
        "terminal.background": "#e5e7ee",
        "terminal.foreground": "#0f1219",
        "terminalCursor.foreground": "#4e556a",
      },
    };
    expect(JSON.parse(config)).toStrictEqual(expected);
  });
});
