import { type Recipe } from "$lib/ingredients";
import { prepare } from "$lib/cereals";
import { noHash } from "./util";

export function toFoot(recipe: Recipe): string {
  const cereals = prepare(recipe);
  return `# Copy the configuration below and add it to your
# ~/.config/foot/foot.ini file

[colors]
# Root Loops color scheme
# via https://rootloops.sh

background=${noHash(cereals.black.color_hex)}
foreground=${noHash(cereals.brightWhite.color_hex)}

# Normal/regular colors (color palette 0-7)
regular0=${noHash(cereals.black.color_hex)} # black
regular1=${noHash(cereals.red.color_hex)} # red
regular2=${noHash(cereals.green.color_hex)} # green
regular3=${noHash(cereals.yellow.color_hex)} # yellow
regular4=${noHash(cereals.blue.color_hex)} # blue
regular5=${noHash(cereals.magenta.color_hex)} # magenta
regular6=${noHash(cereals.cyan.color_hex)} # cyan
regular7=${noHash(cereals.white.color_hex)} # white

# Bright colors (color palette 8-15)
bright0=${noHash(cereals.brightBlack.color_hex)} # bright black
bright1=${noHash(cereals.brightRed.color_hex)} # bright red
bright2=${noHash(cereals.brightGreen.color_hex)} # bright green
bright3=${noHash(cereals.brightYellow.color_hex)} # bright yellow
bright4=${noHash(cereals.brightBlue.color_hex)} # bright blue
bright5=${noHash(cereals.brightMagenta.color_hex)} # bright magenta
bright6=${noHash(cereals.brightCyan.color_hex)} # bright cyan
bright7=${noHash(cereals.brightWhite.color_hex)} # bright white`;
}
