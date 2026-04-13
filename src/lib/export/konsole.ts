import { toQueryString, type Recipe } from "$lib/ingredients";
import { prepare, type Cereal } from "$lib/cereals";

/**
 * Formats a color as "RRR,GGG,BBB"
 */
function rgbstr(color: Cereal): string {
  return [color.color_rgb.r, color.color_rgb.g, color.color_rgb.b]
    .map((n) => Math.round(n * 256).toFixed(0))
    .join(",");
}

export function toKonsole(recipe: Recipe): string {
  const cereals = prepare(recipe);
  const queryString = toQueryString(recipe);

  return `# Save this configuration to
# ~/.local/share/konsole/rootloops.colorscheme

# Colors (Root Loops)
# via https://rootloops.sh?${queryString}

[Background]
Color=${rgbstr(cereals.background)}

[BackgroundFaint]
Color=${rgbstr(cereals.background)}

[BackgroundIntense]
Color=${rgbstr(cereals.background)}

[Color0]
Color=${rgbstr(cereals.black)}

[Color0Faint]
Color=${rgbstr(cereals.black)}

[Color0Intense]
Color=${rgbstr(cereals.brightBlack)}

[Color1]
Color=${rgbstr(cereals.red)}

[Color1Faint]
Color=${rgbstr(cereals.red)}

[Color1Intense]
Color=${rgbstr(cereals.brightRed)}

[Color2]
Color=${rgbstr(cereals.green)}

[Color2Faint]
Color=${rgbstr(cereals.green)}

[Color2Intense]
Color=${rgbstr(cereals.brightGreen)}

[Color3]
Color=${rgbstr(cereals.yellow)}

[Color3Faint]
Color=${rgbstr(cereals.yellow)}

[Color3Intense]
Color=${rgbstr(cereals.brightYellow)}

[Color4]
Color=${rgbstr(cereals.blue)}

[Color4Faint]
Color=${rgbstr(cereals.blue)}

[Color4Intense]
Color=${rgbstr(cereals.brightBlue)}

[Color5]
Color=${rgbstr(cereals.magenta)}

[Color5Faint]
Color=${rgbstr(cereals.magenta)}

[Color5Intense]
Color=${rgbstr(cereals.brightMagenta)}

[Color6]
Color=${rgbstr(cereals.cyan)}

[Color6Faint]
Color=${rgbstr(cereals.cyan)}

[Color6Intense]
Color=${rgbstr(cereals.brightCyan)}

[Color7]
Color=${rgbstr(cereals.white)}

[Color7Faint]
Color=${rgbstr(cereals.white)}

[Color7Intense]
Color=${rgbstr(cereals.brightWhite)}

[Foreground]
Color=${rgbstr(cereals.foreground)}

[ForegroundFaint]
Color=${rgbstr(cereals.foreground)}

[ForegroundIntense]
Color=${rgbstr(cereals.foreground)}

[General]
Anchor=0.5,0.5
Blur=true
Description=RootLoops
FillStyle=Tile
Opacity=1
Wallpaper=
WallpaperFlipType=NoFlip
WallpaperOpacity=1
`;
}
