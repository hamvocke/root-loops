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
  milk?: number;
  flavors?: number;
  artificialColors?: number;
};

enum MilkAmount {
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
  const milk = recipe?.milk ? recipe.milk / 10 : 0.5;
  const flavors = normalizeChroma(recipe?.flavors ?? 0.2);
  const shift = recipe?.artificialColors ?? 0;
  const baseColors = equalLightnessDistance(6, flavors);
  const accentColors = equalHueDistance(6, milk, flavors, shift);
  const brightAccentColors = equalHueDistance(6, milk + 0.1, flavors, shift);
  const cereals = {
    black: baseColors[1],
    red: accentColors[0],
    green: accentColors[2],
    yellow: accentColors[1],
    blue: accentColors[4],
    magenta: accentColors[5],
    cyan: accentColors[3],
    white: baseColors[4],
    brightBlack: baseColors[2],
    brightRed: brightAccentColors[0],
    brightGreen: brightAccentColors[2],
    brightYellow: brightAccentColors[1],
    brightBlue: brightAccentColors[4],
    brightMagenta: brightAccentColors[5],
    brightCyan: brightAccentColors[3],
    brightWhite: baseColors[5],
  };
  return cereals;
}
