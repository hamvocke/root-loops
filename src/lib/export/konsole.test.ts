import { describe, expect, it } from "vitest";
import { type Recipe, MilkAmount, Flavor, Fruit } from "$lib/ingredients";
import { toKonsole } from "./konsole";

describe("Konsole export", () => {
  const someRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Intense,
    artificialColors: 2,
    sugar: 3,
    fruit: Fruit.Elderberry,
    sogginess: 2,
  };

  it("exports the correct format", () => {
    const config = toKonsole(someRecipe);
    // prettier-ignore
    const expected = `# Save this configuration to
# ~/.local/share/konsole/rootloops.colorscheme

# Colors (Root Loops)
# via https://rootloops.sh?sugar=3&colors=2&sogginess=2&flavor=2&fruit=9&milk=2

[Background]
Color=230,232,239

[BackgroundFaint]
Color=230,232,239

[BackgroundIntense]
Color=230,232,239

[Color0]
Color=213,217,229

[Color0Faint]
Color=213,217,229

[Color0Intense]
Color=159,167,190

[Color1]
Color=85,64,61

[Color1Faint]
Color=85,64,61

[Color1Intense]
Color=107,83,78

[Color2]
Color=60,74,63

[Color2Faint]
Color=60,74,63

[Color2Intense]
Color=78,95,80

[Color3]
Color=75,70,54

[Color3Faint]
Color=75,70,54

[Color3Intense]
Color=96,89,71

[Color4]
Color=63,69,87

[Color4Faint]
Color=63,69,87

[Color4Intense]
Color=81,89,110

[Color5]
Color=80,64,78

[Color5Faint]
Color=80,64,78

[Color5Intense]
Color=102,82,99

[Color6]
Color=55,74,77

[Color6Faint]
Color=55,74,77

[Color6Intense]
Color=71,94,98

[Color7]
Color=78,85,106

[Color7Faint]
Color=78,85,106

[Color7Intense]
Color=38,42,55

[Foreground]
Color=15,18,25

[ForegroundFaint]
Color=15,18,25

[ForegroundIntense]
Color=15,18,25

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

    expect(config).toBe(expected);
  });
});
