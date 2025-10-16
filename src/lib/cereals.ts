import { MilkAmount, Flavor, Fruit, type Recipe } from "./ingredients";
import { converter, formatHex, formatHsl, type Rgb, type Okhsl } from "culori";
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

export function prepare(recipe: Recipe, useNew: boolean = false): Cereals {
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

  const baseColors = useNew ? getBaseColorsLogistics(recipe) : getBaseColors(recipe);

  const rgb = converter("rgb");
  const colorDefinitions = (name: string, color: Okhsl) => {
    return {
      name: name,
      color: color,
      color_rgb: rgb(color),
      color_hex: formatHex(color),
      color_hsl: formatHsl(color),
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
  const numberOfFruits = Object.keys(Fruit).length / 2; // divide by 2, since numeric enums get "reverse mappings", leading to the total number of keys being doubled
  return recipe.fruit * (hueRange / numberOfFruits);
}

function getBaseColorsLogistics(recipe: Recipe) {
  const baseColor = (lightness: number): Okhsl => {
    return {
      mode: "okhsl",
      h: getBaseHue(recipe),
      s: getBaseSaturation(recipe),
      l: lightness / 100,
    };
  };

  /**
   * Generalised logistic function.
   * See https://en.wikipedia.org/wiki/Generalised_logistic_function for details.
   *
   * Compared to the first algorithm which only generated colors for four discrete
   * milk values, this algorithm allows generating colors for a continuous range of
   * milk values between 0 and 3, giving many more options. The drawback is that
   * this allows to create some truly cursed combinations where legibility is pretty
   * messed up. C'est la vie.
   *
   * @param {number} a - the left horizontal asymptote (the lightness we want to have at a milk value approaching 0)
   * @param {number} k - the right horizontal asymptote (the lightness we want to have at a milk value approaching 3)
   *
   * @returns a logistics function for the provided boundaries
   */
  function logisticsFn(a: number, k: number): (x: number) => number {
    const b = 5.06; // growth factor, figured out by trial and error
    const nu = 1;
    const C = 1;
    const Q = 1;
    const e = 2.71828;
    const xOffset = 7.1; // figured out by trial and error

    return (x) => a + (k - a) / Math.pow(C + Q * Math.pow(e, -b * x + xOffset), 1 / nu);
  }

  const backgroundFn = logisticsFn(4, 96);
  const blackFn = logisticsFn(15, 90);
  const brightBlackFn = logisticsFn(35, 70);
  const whiteFn = logisticsFn(70, 35);
  const brightWhiteFn = logisticsFn(90, 15);
  const foregroundFn = logisticsFn(96, 4);

  const background = baseColor(backgroundFn(recipe.milkAmount));
  const black = baseColor(blackFn(recipe.milkAmount));
  const brightBlack = baseColor(brightBlackFn(recipe.milkAmount));
  const white = baseColor(whiteFn(recipe.milkAmount));
  const brightWhite = baseColor(brightWhiteFn(recipe.milkAmount));
  const foreground = baseColor(foregroundFn(recipe.milkAmount));

  const result = {
    background,
    black,
    brightBlack,
    white,
    foreground,
    brightWhite,
  };

  return result;
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
