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
  const colors = normalizeChroma(recipe.artificialColors);
  const sugar = normalizeLightness(recipe.sugar);
  const shift = applyFlavor(recipe.flavor);
  const sogginess = normalizeChroma(recipe.sogginess, 0.2);
  const juice = pickJuice(recipe.juice);
  const baseColors = pourMilk(recipe.milkAmount, sogginess, juice);
  const accentColors = equalHueDistance(6, sugar, colors, shift);
  const brightAccentColors = equalHueDistance(6, sugar + 0.1, colors, shift);
  const cereals = {
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
  return cereals;
}

function applyFlavor(flavor: Flavor) {
  switch (flavor) {
    case Flavor.Fruity:
      return 0;
    case Flavor.Classic:
      return 15;
    case Flavor.Unicorn:
      return 30;
  }
}

function pickJuice(juice: Juice) {
  switch (juice) {
    case Juice.Cranberry:
      return 0;
    case Juice.Tomato:
      return 30;
    case Juice.Orange:
      return 60;
    case Juice.Pineapple:
      return 90;
    case Juice.Apple:
      return 120;
    case Juice.Kiwi:
      return 150;
    case Juice.Kale:
      return 180;
    case Juice.Blueberry:
      return 210;
    case Juice.Plum:
      return 240;
    case Juice.Elderberry:
      return 270;
    case Juice.Blackberry:
      return 300;
    case Juice.Raspberry:
      return 330;
  }
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
