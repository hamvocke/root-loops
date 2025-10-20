import { describe, expect, it } from "vitest";
import { type Recipe, MilkAmount, Flavor, Fruit } from "$lib/ingredients";
import { toKitty } from "./kitty";

describe("Kitty export", () => {
  const someRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Intense,
    artificialColors: 2,
    sugar: 3,
    fruit: Fruit.Elderberry,
    sogginess: 2,
  };

  it("exports the right format", () => {
    const config = toKitty(someRecipe);
    // prettier-ignore
    const expected = `# Copy the configuration below and add it to your
# ~/.config/kitty/kitty.conf file

## Root Loops color scheme
## via https://rootloops.sh?sugar=3&colors=2&sogginess=2&flavor=2&fruit=9&milk=2

# The basic colors
background              #e5e7ee
foreground              #0f1219
selection_background    #0f1219
selection_foreground    #e5e7ee

# Cursor colors
cursor_text_color       #e5e7ee
cursor                  #4e556a

# URL underline color when hovering with mouse
url_color               #5f5946

# Kitty window border colors
active_border_color     #4e556a
inactive_border_color   #9fa7bd
bell_border_color       #55403c

# Tab bar colors
active_tab_foreground   #0f1219
active_tab_background   #e5e7ee
inactive_tab_foreground #d4d9e4
inactive_tab_background #4e556a
tab_bar_background      #e5e7ee

# Colors for marks (marked text in the terminal)
mark1_foreground #0f1219
mark1_background #6b524e
mark2_foreground #0f1219
mark2_background #5f5946
mark3_foreground #0f1219
mark3_background #4d5e50

# The 16 terminal colors

# black
color0 #d4d9e4
color8 #9fa7bd

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
color7  #4e556a
color15 #262a37`;

    expect(config).toBe(expected);
  });
});
