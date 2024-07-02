import { describe, expect, it } from "vitest";
import { exportToAlacritty, exportToJson, exportToWindowsTerminal } from "$lib/export";
import { type Recipe, MilkAmount, Flavor, Fruit } from "$lib/ingredients";

describe("export", () => {
  const someRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Intense,
    artificialColors: 2,
    sugar: 3,
    fruit: Fruit.Elderberry,
    sogginess: 2,
  };

  describe("to JSON", () => {
    it("generates JSON format", () => {
      const config = exportToJson(someRecipe);
      const expected = {
        source: "rootloops.sh",
        hex: {
          background: "#dfe2eb",
          foreground: "#13161e",
          text: "#dfe2eb",
          cursor: "#565d73",
          black: "#dfe2eb",
          red: "#55403c",
          green: "#3c4a3e",
          yellow: "#4b4536",
          blue: "#3f4557",
          magenta: "#50404e",
          cyan: "#374a4d",
          white: "#13161e",
          brightBlack: "#959eb5",
          brightRed: "#6b524e",
          brightGreen: "#4d5e50",
          brightYellow: "#5f5946",
          brightBlue: "#51586e",
          brightMagenta: "#655263",
          brightCyan: "#475e62",
          brightWhite: "#565d73",
        },
      };

      expect(config).toBe(JSON.stringify(expected, null, 2));
    });
  });

  describe("to Windows Terminal", () => {
    it("generates JSON format", () => {
      const config = exportToWindowsTerminal(someRecipe);
      const expected = {
        name: "Root Loops",

        cursorColor: "#565d73",
        selectionBackground: "#959eb5",

        background: "#dfe2eb",
        foreground: "#13161e",

        black: "#dfe2eb",
        red: "#55403c",
        green: "#3c4a3e",
        yellow: "#4b4536",
        blue: "#3f4557",
        purple: "#50404e",
        cyan: "#374a4d",
        white: "#13161e",
        brightBlack: "#959eb5",
        brightRed: "#6b524e",
        brightGreen: "#4d5e50",
        brightYellow: "#5f5946",
        brightBlue: "#51586e",
        brightPurple: "#655263",
        brightCyan: "#475e62",
        brightWhite: "#565d73",
      };
      expect(JSON.parse(config)).toStrictEqual(expected);
    });
  });

  describe("to Alacritty", () => {
    it("generates TOML format", () => {
      const config = exportToAlacritty(someRecipe);
      // prettier-ignore
      const expected = `
# Copy the configuration below and add it to your
# ~/.config/alacritty/alacritty.toml file

# Colors (Root Loops)
# via rootloops.sh

[colors.primary]
background = '#dfe2eb'
foreground = '#13161e'

[colors.cursor]
text = '#dfe2eb'
cursor = '#565d73'

[colors.normal]
black = '#dfe2eb'
red = '#55403c'
green = '#3c4a3e'
yellow = '#4b4536'
blue = '#3f4557'
magenta = '#50404e'
cyan = '#374a4d'
white = '#13161e'

[colors.bright]
black = '#959eb5'
red = '#6b524e'
green = '#4d5e50'
yellow = '#5f5946'
blue = '#51586e'
magenta = '#655263'
cyan = '#475e62'
white = '#565d73'
`;

      expect(config).toBe(expected);
    });
  });
});
