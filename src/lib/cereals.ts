import { MilkAmount, Flavor, Juice, type Recipe } from "./ingredients";
import { toGamut, formatHex, formatCss } from "culori";
import { normalize } from "./math";

type Color = {
  mode: string;
  h: number;
  s: number;
  l: number;
};

export type Cereal = {
  name: string;
  color: Color;
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
};

export function prepare(recipe: Recipe): Cereals {
  const accentHueShift = getAccentHueShift(recipe);
  const accentSaturation = getAccentSaturation(recipe);

  const accentColors = [];
  const brightAccentColors = [];
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

  const toHsl = toGamut("hsl");

  return {
    black: {
      name: "black",
      color: baseColors.black,
      color_hex: formatHex(toHsl(baseColors.black)),
      color_hsl: formatCss(toHsl(baseColors.black)),
    },
    red: {
      name: "red",
      color: accentColors[0],
      color_hex: formatHex(toHsl(accentColors[0])),
      color_hsl: formatCss(toHsl(accentColors[0])),
    },
    green: {
      name: "green",
      color: accentColors[2],
      color_hex: formatHex(toHsl(accentColors[2])),
      color_hsl: formatCss(toHsl(accentColors[2])),
    },
    yellow: {
      name: "yellow",
      color: accentColors[1],
      color_hex: formatHex(toHsl(accentColors[1])),
      color_hsl: formatCss(toHsl(accentColors[1])),
    },
    blue: {
      name: "blue",
      color: accentColors[4],
      color_hex: formatHex(toHsl(accentColors[4])),
      color_hsl: formatCss(toHsl(accentColors[4])),
    },
    magenta: {
      name: "magenta",
      color: accentColors[5],
      color_hex: formatHex(toHsl(accentColors[5])),
      color_hsl: formatCss(toHsl(accentColors[5])),
    },
    cyan: {
      name: "cyan",
      color: accentColors[3],
      color_hex: formatHex(toHsl(accentColors[3])),
      color_hsl: formatCss(toHsl(accentColors[3])),
    },
    white: {
      name: "white",
      color: baseColors.white,
      color_hex: formatHex(toHsl(baseColors.white)),
      color_hsl: formatCss(toHsl(baseColors.white)),
    },
    brightBlack: {
      name: "bright black",
      color: baseColors.brightBlack,
      color_hex: formatHex(toHsl(baseColors.brightBlack)),
      color_hsl: formatCss(toHsl(baseColors.brightBlack)),
    },
    brightRed: {
      name: "bright red",
      color: brightAccentColors[0],
      color_hex: formatHex(toHsl(brightAccentColors[0])),
      color_hsl: formatCss(toHsl(brightAccentColors[0])),
    },
    brightGreen: {
      name: "bright green",
      color: brightAccentColors[2],
      color_hex: formatHex(toHsl(brightAccentColors[2])),
      color_hsl: formatCss(toHsl(brightAccentColors[2])),
    },
    brightYellow: {
      name: "bright yellow",
      color: brightAccentColors[1],
      color_hex: formatHex(toHsl(brightAccentColors[1])),
      color_hsl: formatCss(toHsl(brightAccentColors[1])),
    },
    brightBlue: {
      name: "bright blue",
      color: brightAccentColors[4],
      color_hex: formatHex(toHsl(brightAccentColors[4])),
      color_hsl: formatCss(toHsl(brightAccentColors[4])),
    },
    brightMagenta: {
      name: "bright magenta",
      color: brightAccentColors[5],
      color_hex: formatHex(toHsl(brightAccentColors[5])),
      color_hsl: formatCss(toHsl(brightAccentColors[5])),
    },
    brightCyan: {
      name: "bright cyan",
      color: brightAccentColors[3],
      color_hex: formatHex(toHsl(brightAccentColors[3])),
      color_hsl: formatCss(toHsl(brightAccentColors[3])),
    },
    brightWhite: {
      name: "bright white",
      color: baseColors.brightWhite,
      color_hex: formatHex(toHsl(baseColors.brightWhite)),
      color_hsl: formatCss(toHsl(baseColors.brightWhite)),
    },
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
  const numberOfJuices = Object.keys(Juice).length / 2; // divide by 2, since numeric enums get reverse mappings
  return recipe.juice * (hueRange / numberOfJuices);
}

function getBaseColors(recipe: Recipe) {
  const baseColor = (lightness: number): Color => {
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
        black: baseColor(5),
        brightBlack: baseColor(30),
        white: baseColor(70),
        brightWhite: baseColor(95),
      };
    case MilkAmount.Splash:
      return {
        black: baseColor(10),
        brightBlack: baseColor(35),
        white: baseColor(90),
        brightWhite: baseColor(65),
      };
    case MilkAmount.Glug:
      return {
        black: baseColor(90),
        brightBlack: baseColor(65),
        white: baseColor(10),
        brightWhite: baseColor(35),
      };
    case MilkAmount.Cup:
      return {
        black: baseColor(95),
        brightBlack: baseColor(70),
        white: baseColor(30),
        brightWhite: baseColor(5),
      };
  }
}
