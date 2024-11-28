import { describe, expect, it } from "vitest";
import { toAlacritty } from "./alacritty";
import { toFoot } from "./foot";
import { toGhostty } from "./ghostty";
import { toHelix } from "./helix";
import { toITerm } from "./iterm";
import { toJson } from "./json";
import { toKitty } from "./kitty";
import { toWezTerm } from "./wezterm";
import { toWindowsTerminal } from "./windows-terminal";
import { toXresources } from "./xresources";
import { toZellij } from "./zellij";
import { type Recipe, MilkAmount, Flavor, Fruit } from "$lib/ingredients";
import { toFzf } from "./fzf";

describe("export", () => {
  const someRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Intense,
    artificialColors: 2,
    sugar: 3,
    fruit: Fruit.Elderberry,
    sogginess: 2,
  };

  it("to JSON", () => {
    const config = toJson(someRecipe);
    const expected = {
      source: "rootloops.sh",
      hex: {
        background: "#dfe2eb",
        foreground: "#1e222d",
        cursor: "#4a5165",
        black: "#d0d4e1",
        red: "#55403c",
        green: "#3c4a3e",
        yellow: "#4b4536",
        blue: "#3f4557",
        magenta: "#50404e",
        cyan: "#374a4d",
        white: "#4a5165",
        brightBlack: "#959eb5",
        brightRed: "#6b524e",
        brightGreen: "#4d5e50",
        brightYellow: "#5f5946",
        brightBlue: "#51586e",
        brightMagenta: "#655263",
        brightCyan: "#475e62",
        brightWhite: "#07080d",
      },
      hsl: {
        background: "hsl(223.99, 22.31%, 89.84%)",
        foreground: "hsl(224.61, 19.01%, 14.72%)",
        cursor: "hsl(224.57, 15.33%, 34.4%)",
        black: "hsl(224.04, 21.81%, 84.81%)",
        red: "hsl(9.05, 16.78%, 28.44%)",
        green: "hsl(130.28, 10.55%, 26.25%)",
        yellow: "hsl(43.69, 16.1%, 25.35%)",
        blue: "hsl(224.58, 15.97%, 29.43%)",
        magenta: "hsl(306.93, 11.22%, 28.16%)",
        cyan: "hsl(189.28, 16.76%, 25.84%)",
        white: "hsl(224.57, 15.33%, 34.4%)",
        brightBlack: "hsl(224.3, 17.66%, 64.74%)",
        brightRed: "hsl(9.06, 15.77%, 36.25%)",
        brightGreen: "hsl(130.23, 9.89%, 33.61%)",
        brightYellow: "hsl(43.69, 15.07%, 32.53%)",
        brightBlue: "hsl(224.55, 14.95%, 37.41%)",
        brightMagenta: "hsl(306.98, 10.5%, 35.91%)",
        brightCyan: "hsl(189.29, 15.72%, 33.12%)",
        brightWhite: "hsl(226.23, 31.52%, 3.92%)",
      },
    };

    expect(config).toBe(JSON.stringify(expected, null, 2));
  });

  it("to Windows Terminal", () => {
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

  it("to Alacritty", () => {
    const config = toAlacritty(someRecipe);
    // prettier-ignore
    const expected = `# Copy the configuration below and add it to your
# ~/.config/alacritty/alacritty.toml file

# Colors (Root Loops)
# via rootloops.sh

[colors.primary]
background = '#dfe2eb'
foreground = '#1e222d'

[colors.cursor]
text = '#1e222d'
cursor = '#4a5165'

[colors.normal]
black = '#d0d4e1'
red = '#55403c'
green = '#3c4a3e'
yellow = '#4b4536'
blue = '#3f4557'
magenta = '#50404e'
cyan = '#374a4d'
white = '#4a5165'

[colors.bright]
black = '#959eb5'
red = '#6b524e'
green = '#4d5e50'
yellow = '#5f5946'
blue = '#51586e'
magenta = '#655263'
cyan = '#475e62'
white = '#07080d'`;

    expect(config).toBe(expected);
  });

  it("to Xresources", () => {
    const config = toXresources(someRecipe);
    // prettier-ignore
    const expected = `! Copy the configuration below to your ~/.Xresources file
! Root Loops (via rootloops.sh)

*.foreground:  #1e222d
*.background:  #dfe2eb
*.cursorColor: #4a5165

*.color0: #d0d4e1
*.color1: #55403c
*.color2: #3c4a3e
*.color3: #4b4536
*.color4: #3f4557
*.color5: #50404e
*.color6: #374a4d
*.color7: #4a5165
*.color8: #959eb5
*.color9: #6b524e
*.color10: #4d5e50
*.color11: #5f5946
*.color12: #51586e
*.color13: #655263
*.color14: #475e62
*.color15: #07080d`;

    expect(config).toBe(expected);
  });

  it("to Kitty", () => {
    const config = toKitty(someRecipe);
    // prettier-ignore
    const expected = `# Copy the configuration below and add it to your
# ~/.config/kitty/kitty.conf file

## Root Loops color scheme
## via https://rootloops.sh

# The basic colors
background              #dfe2eb
foreground              #1e222d
selection_background    #1e222d
selection_foreground    #dfe2eb

# Cursor colors
cursor_text_color       #1e222d
cursor                  #4a5165

# URL underline color when hovering with mouse
url_color               #5f5946

# Kitty window border colors
active_border_color     #4a5165
inactive_border_color   #959eb5
bell_border_color       #55403c

# Tab bar colors
active_tab_foreground   #1e222d
active_tab_background   #dfe2eb
inactive_tab_foreground #d0d4e1
inactive_tab_background #4a5165
tab_bar_background      #dfe2eb

# Colors for marks (marked text in the terminal)
mark1_foreground #1e222d
mark1_background #6b524e
mark2_foreground #1e222d
mark2_background #5f5946
mark3_foreground #1e222d
mark3_background #4d5e50

# The 16 terminal colors

# black
color0 #d0d4e1
color8 #959eb5

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
color7  #4a5165
color15 #07080d`;

    expect(config).toBe(expected);
  });

  it("to WezTerm", () => {
    const config = toWezTerm(someRecipe);
    // prettier-ignore
    const expected = `-- Copy the configuration below and add it to your
-- ~/.wezterm.lua or ~/.config/wezterm/wezterm.lua file

-- NOTE: make sure to *not* use any config.color_scheme option
--       if you want to define your own root loops color scheme

-- Root Loops color scheme
-- via https://rootloops.sh
config.colors = {
  foreground = "#1e222d",
  background = "#dfe2eb",
  cursor_bg = "#4a5165",
  cursor_border = "#07080d",
  cursor_fg = "#1e222d",
  selection_bg = "#1e222d",
  selection_fg = "#dfe2eb",
  ansi = {
    "#d0d4e1",
    "#55403c",
    "#3c4a3e",
    "#4b4536",
    "#3f4557",
    "#50404e",
    "#374a4d",
    "#4a5165"
  },
  brights = {
    "#959eb5",
    "#6b524e",
    "#4d5e50",
    "#5f5946",
    "#51586e",
    "#655263",
    "#475e62",
    "#07080d"
  },
}`;

    expect(config).toBe(expected);
  });

  it("to Helix", () => {
    const config = toHelix(someRecipe);
    // prettier-ignore
    const expected = `# Copy the configuration below to ~/.config/helix/themes/rootloops.toml


# Root Loops (https://rootloops.sh)

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

  it("to ghostty", () => {
    const config = toGhostty(someRecipe);
    // prettier-ignore
    const expected = `# Copy the configuration below and add it to your
# ~/.config/ghostty/config file

# Colors (Root Loops)
# via rootloops.sh

background = dfe2eb
foreground = 1e222d

# black
palette = 0=#d0d4e1
palette = 8=#959eb5

# red
palette = 1=#55403c
palette = 9=#6b524e

# green
palette = 2=#3c4a3e
palette = 10=#4d5e50

# yellow
palette = 3=#4b4536
palette = 11=#5f5946

# blue
palette = 4=#3f4557
palette = 12=#51586e

# purple
palette = 5=#50404e
palette = 13=#655263

# aqua
palette = 6=#374a4d
palette = 14=#475e62

# white
palette = 7=#4a5165
palette = 15=#07080d`;

    expect(config).toBe(expected);
  });

  it("to foot", () => {
    const config = toFoot(someRecipe);
    // prettier-ignore
    const expected = `# Copy the configuration below and add it to your
# ~/.config/foot/foot.ini file

[colors]
# Root Loops color scheme
# via https://rootloops.sh

background=dfe2eb
foreground=1e222d

# Normal/regular colors (color palette 0-7)
regular0=d0d4e1 # black
regular1=55403c # red
regular2=3c4a3e # green
regular3=4b4536 # yellow
regular4=3f4557 # blue
regular5=50404e # magenta
regular6=374a4d # cyan
regular7=4a5165 # white

# Bright colors (color palette 8-15)
bright0=959eb5 # bright black
bright1=6b524e # bright red
bright2=4d5e50 # bright green
bright3=5f5946 # bright yellow
bright4=51586e # bright blue
bright5=655263 # bright magenta
bright6=475e62 # bright cyan
bright7=07080d # bright white`;

    expect(config).toBe(expected);
  });

  it("to zellij", () => {
    const config = toZellij(someRecipe);
    // prettier-ignore
    const expected = `// Copy the configuration below and add it to your
// ~/.config/zellij/zellij.kdl file

// Colors (Root Loops)
// via rootloops.sh
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

  it("to fzf", () => {
    const config = toFzf(someRecipe);
    // prettier-ignore
    const expected = `# Add the 'export' statement below to your shell's configuration
# (e.g. ~/.bashrc, ~/.zshrc, or a custom file you load during shell startup)

export FZF_DEFAULT_OPTS="\
  --color=fg:#1e222d,fg+:#07080d,bg:#dfe2eb,bg+:#d0d4e1 \\
  --color=hl:#374a4d,hl+:#475e62,info:#4b4536,marker:#3c4a3e \\
  --color=prompt:#55403c,spinner:#50404e,pointer:#50404e,header:#3f4557 \\
  --color=border:#959eb5,label:#4a5165,query:#1e222d"`;

    expect(config).toBe(expected);
  });

  it.todo("to iTerm2", () => {
    const recipe: Recipe = {
      milkAmount: MilkAmount.None,
      flavor: Flavor.Classic,
      artificialColors: 8,
      sugar: 8,
      fruit: Fruit.Elderberry,
      sogginess: 7,
    };

    const config = toITerm(recipe);

    // prettier-ignore
    const expected = `<!--
Save the configuration below to a file called root-loops.itermcolors.
Open iTerm2's Preferences > Color tab and load the file into iTerm2.
-->

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Ansi 0 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.30980393290519714</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.10980392247438431</real>
    <key>Red Component</key>
    <real>0.070588238537311554</real>
  </dict>
  <key>Ansi 1 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.46666666865348816</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.40000000596046448</real>
    <key>Red Component</key>
    <real>0.92941176891326904</real>
  </dict>
  <key>Ansi 10 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.32549020648002625</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.76862746477127075</real>
    <key>Red Component</key>
    <real>0.49803921580314636</real>
  </dict>
  <key>Ansi 11 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.24313725531101227</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.63137257099151611</real>
    <key>Red Component</key>
    <real>0.87450981140136719</real>
  </dict>
  <key>Ansi 12 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.96078431606292725</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.69411766529083252</real>
    <key>Red Component</key>
    <real>0.48627451062202454</real>
  </dict>
  <key>Ansi 13 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.93725490570068359</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.56078433990478516</real>
    <key>Red Component</key>
    <real>0.81960785388946533</real>
  </dict>
  <key>Ansi 14 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.76862746477127075</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.76862746477127075</real>
    <key>Red Component</key>
    <real>0.23921568691730499</real>
  </dict>
  <key>Ansi 15 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.99215686321258545</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.94509804248809814</real>
    <key>Red Component</key>
    <real>0.92549020051956177</real>
  </dict>
  <key>Ansi 2 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.27843138575553894</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.67843139171600342</real>
    <key>Red Component</key>
    <real>0.43137255311012268</real>
  </dict>
  <key>Ansi 3 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.18039216101169586</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.54901963472366333</real>
    <key>Red Component</key>
    <real>0.7764706015586853</real>
  </dict>
  <key>Ansi 4 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.92549020051956177</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.60784316062927246</real>
    <key>Red Component</key>
    <real>0.35294118523597717</real>
  </dict>
  <key>Ansi 5 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.90588235855102539</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.43137255311012268</real>
    <key>Red Component</key>
    <real>0.76470589637756348</real>
  </dict>
  <key>Ansi 6 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.67450982332229614</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.67450982332229614</real>
    <key>Red Component</key>
    <real>0.20000000298023224</real>
  </dict>
  <key>Ansi 7 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.96470588445663452</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.7137255072593689</real>
    <key>Red Component</key>
    <real>0.63137257099151611</real>
  </dict>
  <key>Ansi 8 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.65882354974746704</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.27058824896812439</real>
    <key>Red Component</key>
    <real>0.19607843458652496</real>
  </dict>
  <key>Ansi 9 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.57647061347961426</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.5372549295425415</real>
    <key>Red Component</key>
    <real>0.96078431606292725</real>
  </dict>
  <key>Background Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.11372549086809158</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.023529412224888802</real>
    <key>Red Component</key>
    <real>0.011764706112444401</real>
  </dict>
  <key>Badge Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>0.5</real>
    <key>Blue Component</key>
    <real>0.65882354974746704</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.27058824896812439</real>
    <key>Red Component</key>
    <real>0.19607843458652496</real>
  </dict>
  <key>Bold Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.96078431606292725</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.96078431606292725</real>
    <key>Red Component</key>
    <real>0.96078431606292725</real>
  </dict>
  <key>Cursor Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.96470588445663452</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.7137255072593689</real>
    <key>Red Component</key>
    <real>0.63137257099151611</real>
  </dict>
  <key>Cursor Guide Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.20742881298065186</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.20378798246383667</real>
    <key>Red Component</key>
    <real>0.20070254802703857</real>
  </dict>
  <key>Cursor Text Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.10588235408067703</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.10588235408067703</real>
    <key>Red Component</key>
    <real>0.10588235408067703</real>
  </dict>
  <key>Foreground Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.9843137264251709</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.88627451658248901</real>
    <key>Red Component</key>
    <real>0.85098040103912354</real>
  </dict>
  <key>Link Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.54509806632995605</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.28235295414924622</real>
    <key>Red Component</key>
    <real>0.070588238537311554</real>
  </dict>
  <key>Match Background Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.38823530077934265</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.64705884456634521</real>
    <key>Red Component</key>
    <real>0.82745099067687988</real>
  </dict>
  <key>Selected Text Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.7380143404006958</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.40652185678482056</real>
    <key>Red Component</key>
    <real>0.33299350738525391</real>
  </dict>
  <key>Selection Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.30980393290519714</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.56470590829849243</real>
    <key>Red Component</key>
    <real>0.73725491762161255</real>
  </dict>
  <key>Tab Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.0</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.0</real>
    <key>Red Component</key>
    <real>0.0</real>
  </dict>
</dict>
</plist>`;

    expect(config).toBe(expected);
  });
});
