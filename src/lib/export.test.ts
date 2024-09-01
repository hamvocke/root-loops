import { describe, expect, it } from "vitest";
import {
  exportToAlacritty,
  exportToJson,
  exportToWindowsTerminal,
  exportToXresources,
  exportToKitty,
} from "$lib/export";
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
          foreground: "#1e222d",
          text: "#dfe2eb",
          cursor: "#565d73",
          black: "#dfe2eb",
          red: "#55403c",
          green: "#3c4a3e",
          yellow: "#4b4536",
          blue: "#3f4557",
          magenta: "#50404e",
          cyan: "#374a4d",
          white: "#565d73",
          brightBlack: "#a3abc1",
          brightRed: "#6b524e",
          brightGreen: "#4d5e50",
          brightYellow: "#5f5946",
          brightBlue: "#51586e",
          brightMagenta: "#655263",
          brightCyan: "#475e62",
          brightWhite: "#1e222d",
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
        selectionBackground: "#dfe2eb",

        background: "#dfe2eb",
        foreground: "#1e222d",

        black: "#dfe2eb",
        red: "#55403c",
        green: "#3c4a3e",
        yellow: "#4b4536",
        blue: "#3f4557",
        purple: "#50404e",
        cyan: "#374a4d",
        white: "#565d73",
        brightBlack: "#a3abc1",
        brightRed: "#6b524e",
        brightGreen: "#4d5e50",
        brightYellow: "#5f5946",
        brightBlue: "#51586e",
        brightPurple: "#655263",
        brightCyan: "#475e62",
        brightWhite: "#1e222d",
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
foreground = '#1e222d'

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
white = '#565d73'

[colors.bright]
black = '#a3abc1'
red = '#6b524e'
green = '#4d5e50'
yellow = '#5f5946'
blue = '#51586e'
magenta = '#655263'
cyan = '#475e62'
white = '#1e222d'
`;

      expect(config).toBe(expected);
    });
  });

  describe("to xterm", () => {
    it("generates Xresources format", () => {
      const config = exportToXresources(someRecipe);
      // prettier-ignore
      const expected = `
! Copy the configuration below to your ~/.Xresources file
! Root Loops (via rootloops.sh)

*.foreground:  #1e222d
*.background:  #dfe2eb
*.cursorColor: #565d73

*.color0: #dfe2eb
*.color1: #55403c
*.color2: #3c4a3e
*.color3: #4b4536
*.color4: #3f4557
*.color5: #50404e
*.color6: #374a4d
*.color7: #565d73
*.color8: #a3abc1
*.color9: #6b524e
*.color10: #4d5e50
*.color11: #5f5946
*.color12: #51586e
*.color13: #655263
*.color14: #475e62
*.color15: #1e222d
`;

      expect(config).toBe(expected);
    });

    describe("to Kitty", () => {
      it("generates conf format", () => {
        const config = exportToKitty(someRecipe);
        // prettier-ignore
        const expected = `
# Copy the configuration below and add it to your
# ~/.config/kitty/kitty.conf file

## name:   Root Loops
## blurb:  Terminal color schemes for cereal lovers
## url:    https://rootloops.sh

# The basic colors
background              #dfe2eb
foreground              #1e222d
selection_background    #1e222d
selection_foreground    #dfe2eb

# Cursor colors
cursor_text_color       #dfe2eb
cursor                  #565d73

# URL underline color when hovering with mouse
url_color               #5f5946

# Kitty window border colors
active_border_color     #565d73
inactive_border_color   #a3abc1
bell_border_color       #55403c

# OS Window titlebar colors
wayland_titlebar_color system
macos_titlebar_color system

# Tab bar colors
active_tab_foreground   #1e222d
active_tab_background   #a3abc1
inactive_tab_foreground #565d73
inactive_tab_background #a3abc1
tab_bar_background      #dfe2eb

# Colors for marks (marked text in the terminal)
mark1_foreground #dfe2eb
mark1_background #6b524e
mark2_foreground #dfe2eb
mark2_background #5f5946
mark3_foreground #dfe2eb
mark3_background #4d5e50

# The 16 terminal colors

# black
color0 #dfe2eb
color8 #a3abc1

# red
color1 #55403c
color9 #6b524e

# green
color2  #3c4a3e
color10 #4d5e50

# yellow
color3  #4b4536
color11 #5f5946

# blue
color4  #3f4557
color12 #51586e

# magenta
color5  #50404e
color13 #655263

# cyan
color6  #374a4d
color14 #475e62

# white
color7  #565d73
color15 #1e222d
`;

        expect(config).toBe(expected);
      });
    });
  });
});
