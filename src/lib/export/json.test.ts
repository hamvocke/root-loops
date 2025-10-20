import { describe, expect, it } from "vitest";
import { type Recipe, MilkAmount, Flavor, Fruit } from "$lib/ingredients";
import { toJson } from "./json";

describe("JSON export", () => {
  const someRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Intense,
    artificialColors: 2,
    sugar: 3,
    fruit: Fruit.Elderberry,
    sogginess: 2,
  };

  it("exports the right format", () => {
    const config = toJson(someRecipe);
    const expected = {
      source: "https://rootloops.sh?sugar=3&colors=2&sogginess=2&flavor=2&fruit=9&milk=2",
      hex: {
        background: "#e5e7ee",
        foreground: "#0f1219",
        cursor: "#4e556a",
        black: "#d4d9e4",
        red: "#55403c",
        green: "#3c4a3e",
        yellow: "#4b4536",
        blue: "#3f4557",
        magenta: "#50404e",
        cyan: "#374a4d",
        white: "#4e556a",
        brightBlack: "#9fa7bd",
        brightRed: "#6b524e",
        brightGreen: "#4d5e50",
        brightYellow: "#5f5946",
        brightBlue: "#51586e",
        brightMagenta: "#655263",
        brightCyan: "#475e62",
        brightWhite: "#262a37",
      },
      hsl: {
        background: "hsl(223.98, 22.43%, 91.58%)",
        foreground: "hsl(224.62, 23.75%, 7.79%)",
        cursor: "hsl(224.56, 15.13%, 36.03%)",
        black: "hsl(224.03, 21.98%, 86.33%)",
        red: "hsl(9.05, 16.78%, 28.44%)",
        green: "hsl(130.28, 10.55%, 26.25%)",
        yellow: "hsl(43.69, 16.1%, 25.35%)",
        blue: "hsl(224.58, 15.97%, 29.43%)",
        magenta: "hsl(306.93, 11.22%, 28.16%)",
        cyan: "hsl(189.28, 16.76%, 25.84%)",
        white: "hsl(224.56, 15.13%, 36.03%)",
        brightBlack: "hsl(224.25, 18.59%, 68.13%)",
        brightRed: "hsl(9.06, 15.77%, 36.25%)",
        brightGreen: "hsl(130.23, 9.89%, 33.61%)",
        brightYellow: "hsl(43.69, 15.07%, 32.53%)",
        brightBlue: "hsl(224.55, 14.95%, 37.41%)",
        brightMagenta: "hsl(306.98, 10.5%, 35.91%)",
        brightCyan: "hsl(189.29, 15.72%, 33.12%)",
        brightWhite: "hsl(224.61, 17.96%, 18.15%)",
      },
    };

    expect(config).toBe(JSON.stringify(expected, null, 2));
  });
});
