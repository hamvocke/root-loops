import { describe, expect, it } from "vitest";
import { type Recipe, MilkAmount, Flavor, Fruit } from "$lib/ingredients";
import { toNix } from "./nix";

describe("Nix export", () => {
  const someRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Intense,
    artificialColors: 2,
    sugar: 3,
    fruit: Fruit.Elderberry,
    sogginess: 2,
  };
  it("exports the right format", () => {
    const config = toNix(someRecipe);
    // prettier-ignore
    const expected = `{
  source = "https://rootloops.sh?sugar=3&colors=2&sogginess=2&flavor=2&fruit=9&milk=2";
  hex = {
    background = "#dfe2eb";
    foreground = "#1e222d";
    cursor = "#4a5165";
    black = "#d0d4e1";
    red = "#55403c";
    green = "#3c4a3e";
    yellow = "#4b4536";
    blue = "#3f4557";
    magenta = "#50404e";
    cyan = "#374a4d";
    white = "#4a5165";
    brightBlack = "#959eb5";
    brightRed = "#6b524e";
    brightGreen = "#4d5e50";
    brightYellow = "#5f5946";
    brightBlue = "#51586e";
    brightMagenta = "#655263";
    brightCyan = "#475e62";
    brightWhite = "#07080d";
  };
  hsl = {
    background = "hsl(223.99, 22.31%, 89.84%)";
    foreground = "hsl(224.61, 19.01%, 14.72%)";
    cursor = "hsl(224.57, 15.33%, 34.4%)";
    black = "hsl(224.04, 21.81%, 84.81%)";
    red = "hsl(9.05, 16.78%, 28.44%)";
    green = "hsl(130.28, 10.55%, 26.25%)";
    yellow = "hsl(43.69, 16.1%, 25.35%)";
    blue = "hsl(224.58, 15.97%, 29.43%)";
    magenta = "hsl(306.93, 11.22%, 28.16%)";
    cyan = "hsl(189.28, 16.76%, 25.84%)";
    white = "hsl(224.57, 15.33%, 34.4%)";
    brightBlack = "hsl(224.3, 17.66%, 64.74%)";
    brightRed = "hsl(9.06, 15.77%, 36.25%)";
    brightGreen = "hsl(130.23, 9.89%, 33.61%)";
    brightYellow = "hsl(43.69, 15.07%, 32.53%)";
    brightBlue = "hsl(224.55, 14.95%, 37.41%)";
    brightMagenta = "hsl(306.98, 10.5%, 35.91%)";
    brightCyan = "hsl(189.29, 15.72%, 33.12%)";
    brightWhite = "hsl(226.23, 31.52%, 3.92%)";
  };
}`;

    expect(config).toBe(expected);
  });
});
