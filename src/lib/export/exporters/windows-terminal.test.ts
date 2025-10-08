import { describe, expect, it } from "vitest";
import { type Recipe, MilkAmount, Flavor, Fruit } from "$lib/ingredients";
import { toWindowsTerminal } from "./windows-terminal";

describe("Windows Terminal export", () => {
  const someRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Intense,
    artificialColors: 2,
    sugar: 3,
    fruit: Fruit.Elderberry,
    sogginess: 2,
  };

  it("exports the right format", () => {
    const config = toWindowsTerminal(someRecipe);
    const expected = {
      name: "Root Loops",

      cursorColor: "#4a5165",
      selectionBackground: "#4a5165",

      background: "#dfe2eb",
      foreground: "#1e222d",

      black: "#d0d4e1",
      red: "#55403c",
      green: "#3c4a3e",
      yellow: "#4b4536",
      blue: "#3f4557",
      purple: "#50404e",
      cyan: "#374a4d",
      white: "#4a5165",
      brightBlack: "#959eb5",
      brightRed: "#6b524e",
      brightGreen: "#4d5e50",
      brightYellow: "#5f5946",
      brightBlue: "#51586e",
      brightPurple: "#655263",
      brightCyan: "#475e62",
      brightWhite: "#07080d",
    };
    expect(JSON.parse(config)).toStrictEqual(expected);
  });
});
