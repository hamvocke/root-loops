import { describe, expect, it } from "vitest";
import { type Recipe, MilkAmount, Flavor, Fruit } from "$lib/ingredients";
import { toHelix } from "./helix";

describe("Helix export", () => {
  const someRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Intense,
    artificialColors: 2,
    sugar: 3,
    fruit: Fruit.Elderberry,
    sogginess: 2,
  };

  it("exports the right format", () => {
    const config = toHelix(someRecipe);
    // prettier-ignore
    const expected = `# Copy the configuration below to ~/.config/helix/themes/rootloops.toml


# Root Loops (https://rootloops.sh?sugar=3&colors=2&sogginess=2&flavor=2&fruit=9&milk=2)

"ui.background" = { fg = "background"}
"ui.background.separator" = { fg = "gray" }
"ui.text" = { fg = "foreground" }
"ui.text.focus" = { fg = "white" }
"ui.menu" = { fg = "white" }
"ui.menu.selected" = { modifiers = ["reversed"] }
"ui.menu.scroll" = { fg = "light-gray" }
"ui.linenr" = { fg = "light-gray" }
"ui.linenr.selected" = { fg = "white",  modifiers = ["bold"] }
"ui.popup" = { fg = "white" }
"ui.window" = { fg = "gray" }
"ui.selection" = { bg = "gray" }
"comment" = "light-gray"
"ui.statusline" = { fg = "white" }
"ui.statusline.inactive" = { fg = "gray" }
"ui.statusline.normal" = { fg = "black", bg = "blue" }
"ui.statusline.insert" = { fg = "black", bg = "green" }
"ui.statusline.select" = { fg = "black", bg = "magenta" }
"ui.help" = { fg = "light-gray" }
"ui.cursor" = { modifiers = ["reversed"] }
"ui.cursor.match" = { fg = "light-yellow", underline = { color = "light-yellow", style = "line" } }
"ui.cursor.primary" = { modifiers = ["reversed", "slow_blink"] }
"ui.cursor.secondary" = { modifiers = ["reversed"] }
"ui.cursorline.primary" = { underline = { color = "light-gray", style = "line" } }
"ui.cursorline.secondary" = { underline = { color = "light-gray", style = "line" } }
"ui.cursorcolumn.primary" = { bg = "gray" }
"ui.cursorcolumn.secondary" = { bg = "gray" }
"ui.virtual.ruler" = { bg = "gray" }
"ui.virtual.whitespace" = "gray"
"ui.virtual.indent-guide" = "gray"
"ui.virtual.inlay-hint" = { fg = "white", bg = "gray" }
"ui.virtual.inlay-hint.parameter" = { fg = "white", bg = "gray"}
"ui.virtual.inlay-hint.type" = { fg = "white", bg = "gray"}
"ui.virtual.wrap" = "gray"
"ui.virtual.jump-label" = { fg = "blue", modifiers = ["bold", "underlined"] }

"variable" = "light-red"
"constant.numeric" = "yellow"
"constant" = "yellow"
"attribute" = "yellow"
"type" = "light-yellow"
"string"  = "light-green"
"variable.other.member" = "green"
"constant.character.escape" = "light-cyan"
"function" = "light-blue"
"constructor" = "light-blue"
"special" = "light-blue"
"keyword" = "light-magenta"
"label" = "light-magenta"
"namespace" = "light-magenta"

"markup.heading" = "light-blue"
"markup.list" = "light-red"
"markup.bold" = { fg = "light-yellow", modifiers = ["bold"] }
"markup.italic" = { fg = "light-magenta", modifiers = ["italic"] }
"markup.strikethrough" = { modifiers = ["crossed_out"] }
"markup.link.url" = { fg = "yellow", underline = { color = "yellow", style = "line"} }
"markup.link.text" = "light-red"
"markup.quote" = "light-cyan"
"markup.raw" = "green"
"markup.normal" = { fg = "blue" }
"markup.insert" = { fg = "green" }
"markup.select" = { fg = "magenta" }

"diff.plus" = "light-green"
"diff.delta" = "light-blue"
"diff.delta.moved" = "blue"
"diff.minus" = "light-red"

"ui.gutter" = "gray"
"info" = "light-blue"
"hint" = "light-gray"
"debug" = "light-gray"
"warning" = "light-yellow"
"error" = "light-red"

"diagnostic.info" = { underline = { color = "light-blue", style = "dotted" } }
"diagnostic.hint" = { underline = { color = "light-gray", style = "double_line" } }
"diagnostic.debug" = { underline ={ color ="light-gray", style = "dashed" } }
"diagnostic.warning" = { underline = { color = "light-yellow", style = "curl" } }
"diagnostic.error" = { underline = { color ="light-red", style = "curl" } }

[palette]
black = "#d0d4e1"
red = "#55403c"
green = "#3c4a3e"
yellow = "#4b4536"
blue = "#3f4557"
magenta = "#50404e"
cyan = "#374a4d"
light-gray = "#4a5165"

gray = "#959eb5"
light-red = "#6b524e"
light-green = "#4d5e50"
light-yellow = "#5f5946"
light-blue = "#51586e"
light-magenta = "#655263"
light-cyan = "#475e62"
white = "#07080d"

foreground = "#1e222d"
background = "#dfe2eb"`;

    expect(config).toBe(expected);
  });
});
