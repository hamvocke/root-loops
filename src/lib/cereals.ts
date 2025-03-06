import { MilkAmount, Flavor, Fruit, type Recipe } from "./ingredients";
import { toGamut, converter, formatHex, formatHsl, type Rgb, type Okhsl } from "culori";
import { normalize } from "./math";

export type Cereal = {
  name: string;
  color: Okhsl;
  color_rgb: Rgb;
  color_hex: string;
  color_hsl: string;
};

export type Cereals = {
  black: Cereal;
  red: Cereal;
  green: Cereal;
  yellow: Cereal;
  blue: Cereal;
  magenta: Cereal;
  cyan: Cereal;
  white: Cereal;

  brightBlack: Cereal;
  brightRed: Cereal;
  brightGreen: Cereal;
  brightYellow: Cereal;
  brightBlue: Cereal;
  brightMagenta: Cereal;
  brightCyan: Cereal;
  brightWhite: Cereal;

  foreground: Cereal;
  background: Cereal;
};

export function prepare(recipe: Recipe): Cereals {
  const accentHueShift = getAccentHueShift(recipe);
  const accentSaturation = getAccentSaturation(recipe);

  const accentColors: Okhsl[] = [];
  const brightAccentColors: Okhsl[] = [];
  const numberOfAccentColors = 6;
  for (let i = 0; i <= numberOfAccentColors; i++) {
    const hue = Math.round(360 / numberOfAccentColors) * i + accentHueShift;
    accentColors.push({
      mode: "okhsl",
      h: hue,
      s: accentSaturation,
      l: getAccentLightness(recipe.sugar),
    });
    brightAccentColors.push({
      mode: "okhsl",
      h: hue,
      s: accentSaturation,
      l: getAccentLightness(recipe.sugar + 1),
    });
  }

  const baseColors = getBaseColors(recipe);

  const toP3 = toGamut("p3", "oklch");
  const rgb = converter("rgb");
  const colorDefinitions = (name: string, color: Okhsl) => {
    return {
      name: name,
      color: color,
      color_rgb: rgb(color),
      color_hex: formatHex(toP3(color)),
      color_hsl: formatHsl(toP3(color)),
    };
  };

  return {
    black: colorDefinitions("black", baseColors.black),
    red: colorDefinitions("red", accentColors[0]),
    green: colorDefinitions("green", accentColors[2]),
    yellow: colorDefinitions("yellow", accentColors[1]),
    blue: colorDefinitions("blue", accentColors[4]),
    magenta: colorDefinitions("magenta", accentColors[5]),
    cyan: colorDefinitions("cyan", accentColors[3]),
    white: colorDefinitions("white", baseColors.white),

    background: colorDefinitions("background", baseColors.background),
    brightBlack: colorDefinitions("bright black", baseColors.brightBlack),
    brightRed: colorDefinitions("bright red", brightAccentColors[0]),
    brightGreen: colorDefinitions("bright green", brightAccentColors[2]),
    brightYellow: colorDefinitions("bright yellow", brightAccentColors[1]),
    brightBlue: colorDefinitions("bright blue", brightAccentColors[4]),
    brightMagenta: colorDefinitions("bright magenta", brightAccentColors[5]),
    brightCyan: colorDefinitions("bright cyan", brightAccentColors[3]),
    brightWhite: colorDefinitions("bright white", baseColors.brightWhite),
    foreground: colorDefinitions("foreground", baseColors.foreground),
  };
}

function getAccentLightness(sugar: number): number {
  const minSugar = 0;
  const maxSugar = 11; // we allow the 'sugar' input to go to 10, but we use 10 + 1 for the 'bright' shades
  const minHslLightness = 0.05;
  const maxHslLightness = 0.95;

  return normalize(sugar, minSugar, maxSugar, minHslLightness, maxHslLightness);
}

function getAccentHueShift(recipe: Recipe): number {
  switch (recipe.flavor) {
    case Flavor.Fruity:
      return 0;
    case Flavor.Classic:
      return 15;
    case Flavor.Intense:
      return 30;
  }
}

function getAccentSaturation(recipe: Recipe) {
  return getSaturation(recipe.artificialColors);
}

function getBaseSaturation(recipe: Recipe) {
  return getSaturation(recipe.sogginess);
}

function getSaturation(saturation: number): number {
  const minSaturation = 0;
  const maxSaturation = 10;
  const minHslSaturation = 0;
  const maxHslSaturation = 1;

  return normalize(saturation, minSaturation, maxSaturation, minHslSaturation, maxHslSaturation);
}

function getBaseHue(recipe: Recipe): number {
  const hueRange = 360;
  const numberOfFruits = Object.keys(Fruit).length / 2; // divide by 2, since numeric enums get reverse mappings
  return recipe.fruit * (hueRange / numberOfFruits);
}

function getBaseColors(recipe: Recipe) {
  const baseColor = (lightness: number): Okhsl => {
    return {
      mode: "okhsl",
      h: getBaseHue(recipe),
      s: getBaseSaturation(recipe),
      l: lightness / 100,
    };
  };

  switch (recipe.milkAmount) {
    case MilkAmount.None:
      return {
        background: baseColor(5),
        black: baseColor(15),
        brightBlack: baseColor(35),
        white: baseColor(75),
        foreground: baseColor(90),
        brightWhite: baseColor(95),
      };
    case MilkAmount.Splash:
      return {
        background: baseColor(15),
        black: baseColor(25),
        brightBlack: baseColor(45),
        white: baseColor(80),
        foreground: baseColor(93),
        brightWhite: baseColor(97),
      };
    case MilkAmount.Glug:
      return {
        background: baseColor(90),
        black: baseColor(85),
        brightBlack: baseColor(65),
        white: baseColor(35),
        foreground: baseColor(15),
        brightWhite: baseColor(5),
      };
    case MilkAmount.Cup:
      return {
        background: baseColor(95),
        black: baseColor(90),
        brightBlack: baseColor(70),
        white: baseColor(45),
        foreground: baseColor(25),
        brightWhite: baseColor(15),
      };
  }
}
