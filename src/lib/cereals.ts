import {
  equalHueDistance,
  equalLightnessDistance,
  normalizeChroma,
  normalizeLightness,
} from "./colors";
import { MilkAmount, Flavor, Juice, type Recipe } from "./ingredients";
import Color from "colorjs.io";

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
  const colors = normalizeChroma(recipe.artificialColors, 0.3);
  const sugar = normalizeLightness(recipe.sugar);
  const shift = applyFlavor(recipe.flavor);
  const sogginess = normalizeChroma(recipe.sogginess, 0.2);
  const juice = pickJuice(recipe.juice);
  const baseColors = pourMilk(recipe.milkAmount, sogginess, juice);
  const accentColors = equalHueDistance(6, sugar, colors, shift);
  const brightAccentColors = equalHueDistance(6, sugar + 0.1, colors, shift);

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

function applyFlavor(flavor: Flavor) {
  return flavor * 15;
}

function pickJuice(juice: Juice) {
  return juice * 30;
}

function pourMilk(milk: MilkAmount, sogginess: number, juice: number) {
  const colors = equalLightnessDistance(6, sogginess, juice);

  switch (milk) {
    case MilkAmount.None:
      return {
        black: colors[0],
        brightBlack: colors[1],
        white: colors[4],
        brightWhite: colors[5],
      };
    case MilkAmount.Splash:
      return {
        black: colors[1],
        brightBlack: colors[2],
        white: colors[4],
        brightWhite: colors[5],
      };
    case MilkAmount.Glug:
      return {
        black: colors[5],
        brightBlack: colors[4],
        white: colors[1],
        brightWhite: colors[0],
      };
    case MilkAmount.Cup:
      return {
        black: colors[5],
        brightBlack: colors[4],
        white: colors[2],
        brightWhite: colors[1],
      };
  }
}

function getHueShift(flavor: Flavor) {
  switch (flavor) {
    case Flavor.Fruity:
      return -15;
    case Flavor.Classic:
      return 0;
    case Flavor.Intense:
      return 15;
  }
}

export function prepareHsl(recipe: Recipe): Cereals {
  // TODO: no magic numbers

  const accentHueShift = getHueShift(recipe.flavor);
  const accentLightness = recipe.sugar * 10;
  const accentSaturation = recipe.artificialColors * 10;

  const baseHue = recipe.juice * 30;
  const baseSaturation = recipe.sogginess * 10;

  const accentColors = [];
  const brightAccentColors = [];
  const numberOfAccentColors = 6;
  for (let i = 0; i <= numberOfAccentColors; i++) {
    const hue = Math.round(360 / numberOfAccentColors) * i + accentHueShift;
    accentColors.push(new Color("hsluv", [hue, accentSaturation, accentLightness]).to("hsl"));
    brightAccentColors.push(
      new Color("hsluv", [hue, accentSaturation, accentLightness + 10]).to("hsl"),
    );
  }

  const baseColor = (lightness: number) =>
    new Color("hsl", [baseHue, baseSaturation, lightness]).to("hsl");

  return {
    black: {
      name: "black",
      color: baseColor(5),
    },
    red: {
      name: "red",
      color: accentColors[0],
    },
    green: {
      name: "green",
      color: accentColors[2],
    },
    yellow: {
      name: "yellow",
      color: accentColors[1],
    },
    blue: {
      name: "blue",
      color: accentColors[4],
    },
    magenta: {
      name: "magenta",
      color: accentColors[5],
    },
    cyan: {
      name: "cyan",
      color: accentColors[3],
    },
    white: {
      name: "white",
      color: baseColor(70),
    },
    brightBlack: {
      name: "bright black",
      color: baseColor(20),
    },
    brightRed: {
      name: "bright red",
      color: brightAccentColors[0],
    },
    brightGreen: {
      name: "bright green",
      color: brightAccentColors[2],
    },
    brightYellow: {
      name: "bright yellow",
      color: brightAccentColors[1],
    },
    brightBlue: {
      name: "bright blue",
      color: brightAccentColors[4],
    },
    brightMagenta: {
      name: "bright magenta",
      color: brightAccentColors[5],
    },
    brightCyan: {
      name: "bright cyan",
      color: brightAccentColors[3],
    },
    brightWhite: {
      name: "bright white",
      color: baseColor(90),
    },
  };
}
