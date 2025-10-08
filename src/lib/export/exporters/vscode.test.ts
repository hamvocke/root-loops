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
        "terminal.ansiBlack": "#d0d4e1",
        "terminal.ansiBlue": "#3f4557",
        "terminal.ansiBrightBlack": "#959eb5",
        "terminal.ansiBrightBlue": "#51586e",
        "terminal.ansiBrightCyan": "#475e62",
        "terminal.ansiBrightGreen": "#4d5e50",
        "terminal.ansiBrightMagenta": "#655263",
        "terminal.ansiBrightRed": "#6b524e",
        "terminal.ansiBrightWhite": "#07080d",
        "terminal.ansiBrightYellow": "#5f5946",
        "terminal.ansiCyan": "#374a4d",
        "terminal.ansiGreen": "#3c4a3e",
        "terminal.ansiMagenta": "#50404e",
        "terminal.ansiRed": "#55403c",
        "terminal.ansiWhite": "#4a5165",
        "terminal.ansiYellow": "#4b4536",
        "terminal.background": "#dfe2eb",
        "terminal.foreground": "#1e222d",
        "terminalCursor.foreground": "#4a5165",
      },
    };
    expect(JSON.parse(config)).toStrictEqual(expected);
  });
});
