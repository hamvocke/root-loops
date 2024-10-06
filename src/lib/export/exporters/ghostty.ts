import { type Recipe } from "$lib/ingredients";
import { prepare } from "$lib/cereals";
import { noHash } from "./util";

export function toGhostty(recipe: Recipe): string {
  const cereals = prepare(recipe);

  return `# Copy the configuration below and add it to your
# ~/.config/ghostty/config file

# Colors (Root Loops)
# via rootloops.sh

background = ${noHash(cereals.background.color_hex)}
foreground = ${noHash(cereals.foreground.color_hex)}

# black
palette = 0=${cereals.black.color_hex}
palette = 8=${cereals.brightBlack.color_hex}

# red
palette = 1=${cereals.red.color_hex}
palette = 9=${cereals.brightRed.color_hex}

# green
palette = 2=${cereals.green.color_hex}
palette = 10=${cereals.brightGreen.color_hex}

# yellow
palette = 3=${cereals.yellow.color_hex}
palette = 11=${cereals.brightYellow.color_hex}

# blue
palette = 4=${cereals.blue.color_hex}
palette = 12=${cereals.brightBlue.color_hex}

# purple
palette = 5=${cereals.magenta.color_hex}
palette = 13=${cereals.brightMagenta.color_hex}

# aqua
palette = 6=${cereals.cyan.color_hex}
palette = 14=${cereals.brightCyan.color_hex}

# white
palette = 7=${cereals.white.color_hex}
palette = 15=${cereals.brightWhite.color_hex}`;
}
