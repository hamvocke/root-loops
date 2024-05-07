import { equalHueDistance, equalLightnessDistance, normalizeChroma } from "./colors";
import Color from "colorjs.io";

/**
 * Recipe to be use for preparing a delicious bowl of root loops.
 *
 * milk: more milk means brighter base colors
 * sugar: more sugar means brighter cereal colors
 * artificialColors: more artificial colors means more vibrant cereal colors
 * sogginess: more sogginess means more vibrant base colors TODO: use 'juice' only instead?
 * flavor: allows you to tweak the color spectrum of the cereal colors
 * juice: influences the hue of the base colors
 */
export type Recipe = {
  flavors?: number;
  artificialColors?: number;
  milkAmount?: MilkAmount;
};

export enum MilkAmount {
  None = 0,
  Splash = 1,
  Glug = 2,
  Cup = 3,
}

export type Cereals = {
  black: Color;
  red: Color;
  green: Color;
  yellow: Color;
  blue: Color;
  magenta: Color;
  cyan: Color;
  white: Color;

  brightBlack: Color;
  brightRed: Color;
  brightGreen: Color;
  brightYellow: Color;
  brightBlue: Color;
  brightMagenta: Color;
  brightCyan: Color;
  brightWhite: Color;
};

// TODO: more mixers?
// milk -> drives brightness of base colors
// sugar -> drives brightness of cereals (accents)
// artificial colors -> drives chroma of accents
// sogginess -> drives chroma of base colors
// flavor -> drives hue shift of accent colors
// juice -> determines base hue of base colors (none, orange juice, grape juice, energy drink)
export function prepare(recipe?: Recipe): Cereals {
  const flavors = normalizeChroma(recipe?.flavors ?? 0.2);
  const shift = recipe?.artificialColors ?? 0;
  const baseColors = pourMilk(recipe?.milkAmount ?? MilkAmount.None);
  const accentColors = equalHueDistance(6, 0.5, flavors, shift);
  const brightAccentColors = equalHueDistance(6, 0.6, flavors, shift);
  const cereals = {
    black: baseColors.black,
    red: accentColors[0],
    green: accentColors[2],
    yellow: accentColors[1],
    blue: accentColors[4],
    magenta: accentColors[5],
    cyan: accentColors[3],
    white: baseColors.white,
    brightBlack: baseColors.brightBlack,
    brightRed: brightAccentColors[0],
    brightGreen: brightAccentColors[2],
    brightYellow: brightAccentColors[1],
    brightBlue: brightAccentColors[4],
    brightMagenta: brightAccentColors[5],
    brightCyan: brightAccentColors[3],
    brightWhite: baseColors.brightWhite,
  };
  return cereals;
}

function pourMilk(milkAmount: MilkAmount) {
  const colors = equalLightnessDistance(6);

  switch (milkAmount) {
    case MilkAmount.None:
      return {
        black: colors[0],
        brightBlack: colors[1],
        white: colors[3],
        brightWhite: colors[4],
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
        black: colors[4],
        brightBlack: colors[3],
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
