import { toQueryString, type Recipe } from "$lib/ingredients";
import { prepare, type Cereal } from "$lib/cereals";

export function toITerm(recipe: Recipe): string {
  const cereals = prepare(recipe);
  const queryString = toQueryString(recipe);

  const colorMarkup = (name: string, cereal: Cereal, alpha: number = 1) => {
    return `<key>${name}</key>
  <dict>
    <key>Alpha Component</key>
    <real>${alpha}</real>
    <key>Blue Component</key>
    <real>${cereal.color_rgb.b}</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>${cereal.color_rgb.g}</real>
    <key>Red Component</key>
    <real>${cereal.color_rgb.r}</real>
  </dict>
`;
  };
  return `<!--
Save the configuration below to a file called root-loops.itermcolors.
Open iTerm2's Settings > Profiles > Color tab and import the file into iTerm2.
-->

<!-- Root Loops (https://rootloops.sh?${queryString}) -->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  ${colorMarkup("Ansi 0 Color", cereals.black)}
  ${colorMarkup("Ansi 1 Color", cereals.red)}
  ${colorMarkup("Ansi 10 Color", cereals.brightGreen)}
  ${colorMarkup("Ansi 11 Color", cereals.brightYellow)}
  ${colorMarkup("Ansi 12 Color", cereals.brightBlue)}
  ${colorMarkup("Ansi 13 Color", cereals.brightMagenta)}
  ${colorMarkup("Ansi 14 Color", cereals.brightCyan)}
  ${colorMarkup("Ansi 15 Color", cereals.brightWhite)}
  ${colorMarkup("Ansi 2 Color", cereals.green)}
  ${colorMarkup("Ansi 3 Color", cereals.yellow)}
  ${colorMarkup("Ansi 4 Color", cereals.blue)}
  ${colorMarkup("Ansi 5 Color", cereals.magenta)}
  ${colorMarkup("Ansi 6 Color", cereals.cyan)}
  ${colorMarkup("Ansi 7 Color", cereals.white)}
  ${colorMarkup("Ansi 8 Color", cereals.brightBlack)}
  ${colorMarkup("Ansi 9 Color", cereals.brightRed)}
  ${colorMarkup("Background Color", cereals.background)}
  ${colorMarkup("Badge Color", cereals.red, 0.5)}
  ${colorMarkup("Bold Color", cereals.brightWhite)}
  ${colorMarkup("Cursor Color", cereals.white)}
  ${colorMarkup("Cursor Guide Color", cereals.brightCyan, 0.5)}
  ${colorMarkup("Cursor Text Color", cereals.background)}
  ${colorMarkup("Foreground Color", cereals.foreground)}
  ${colorMarkup("Match Background Color", cereals.black)}
  ${colorMarkup("Selected Text Color", cereals.white)}
  ${colorMarkup("Selection Color", cereals.brightBlack)}
  ${colorMarkup("Tab Color", cereals.background)}
</dict>
</plist>`;
}
