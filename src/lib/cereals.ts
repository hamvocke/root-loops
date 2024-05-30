import { MilkAmount, Flavor, Juice, type Recipe } from "./ingredients";
import Color from "colorjs.io";
import { normalize } from "./math";

export type Cereal = {
  name: string;
  color: Color;
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
};

export function prepare(recipe: Recipe): Cereals {
  const accentHueShift = getAccentHueShift(recipe);
  const accentLightness = getAccentLightness(recipe);
  const accentSaturation = getAccentSaturation(recipe);

  const accentColors = [];
  const brightAccentColors = [];
  const numberOfAccentColors = 6;
  for (let i = 0; i <= numberOfAccentColors; i++) {
    const hue = Math.round(360 / numberOfAccentColors) * i + accentHueShift;
    accentColors.push(new Color("hsluv", [hue, accentSaturation, accentLightness]));
    brightAccentColors.push(new Color("hsluv", [hue, accentSaturation, accentLightness + 10]));
  }

  const baseColors = getBaseColors(recipe);

  return {
    black: { name: "black", color: baseColors.black },
    red: { name: "red", color: accentColors[0] },
    green: { name: "green", color: accentColors[2] },
    yellow: { name: "yellow", color: accentColors[1] },
    blue: { name: "blue", color: accentColors[4] },
    magenta: { name: "magenta", color: accentColors[5] },
    cyan: { name: "cyan", color: accentColors[3] },
    white: { name: "white", color: baseColors.white },
    brightBlack: { name: "bright black", color: baseColors.brightBlack },
    brightRed: { name: "bright red", color: brightAccentColors[0] },
    brightGreen: { name: "bright green", color: brightAccentColors[2] },
    brightYellow: { name: "bright yellow", color: brightAccentColors[1] },
    brightBlue: { name: "bright blue", color: brightAccentColors[4] },
    brightMagenta: { name: "bright magenta", color: brightAccentColors[5] },
    brightCyan: { name: "bright cyan", color: brightAccentColors[3] },
    brightWhite: { name: "bright white", color: baseColors.brightWhite },
  };
}

function getAccentLightness(recipe: Recipe): number {
  const minSugar = 0;
  const maxSugar = 10;
  const minHslLightness = 0;
  const maxHslLightness = 100;

  return normalize(recipe.sugar, minSugar, maxSugar, minHslLightness, maxHslLightness);
}

function getAccentHueShift(recipe: Recipe): number {
  switch (recipe.flavor) {
    case Flavor.Fruity:
      return -15;
    case Flavor.Classic:
      return 0;
    case Flavor.Intense:
      return 15;
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
  const maxHslSaturation = 100;

  return normalize(saturation, minSaturation, maxSaturation, minHslSaturation, maxHslSaturation);
}

function getBaseHue(recipe: Recipe): number {
  const hueRange = 360;
  const numberOfJuices = Object.keys(Juice).length / 2; // divide by 2, since numeric enums get reverse mappings
  return recipe.juice * (hueRange / numberOfJuices);
}

function getBaseColors(recipe: Recipe) {
  const baseColor = (lightness: number) =>
    new Color("hsluv", [getBaseHue(recipe), getBaseSaturation(recipe), lightness]);

  switch (recipe.milkAmount) {
    case MilkAmount.None:
      return {
        black: baseColor(5),
        brightBlack: baseColor(15),
        white: baseColor(75),
        brightWhite: baseColor(90),
      };
    case MilkAmount.Splash:
      return {
        black: baseColor(10),
        brightBlack: baseColor(20),
        white: baseColor(90),
        brightWhite: baseColor(95),
      };
    case MilkAmount.Glug:
      return {
        black: baseColor(90),
        brightBlack: baseColor(95),
        white: baseColor(10),
        brightWhite: baseColor(0),
      };
    case MilkAmount.Cup:
      return {
        black: baseColor(95),
        brightBlack: baseColor(100),
        white: baseColor(20),
        brightWhite: baseColor(10),
      };
  }
}
