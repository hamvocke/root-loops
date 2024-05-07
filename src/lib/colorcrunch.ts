import Color from "colorjs.io";

function equalHueDistance(
  count: number,
  l: number = 0.6,
  c: number = 0.2,
  shift: number = 0,
): Color[] {
  function hue(index: number, colorCount: number, shift: number = 0): number {
    const maxHue = 360;
    const step = maxHue / colorCount;
    return Math.round(step * index) + shift;
  }

  const h = (i: number) => hue(i, count, shift);

  return new Array(count).fill(undefined).map((_color, i) => new Color("oklch", [l, c, h(i)]));
}

function equalLightnessDistance(count: number, chroma: number = 0.02): Color[] {
  function lightness(index: number, colorCount: number): number {
    const maxLightness = 100;
    const step = maxLightness / (colorCount - 1);
    return Math.round(step * index) / 100;
  }

  const l = (i: number) => lightness(i, count);

  return new Array(count)
    .fill(undefined)
    .map((_color, i) => new Color("oklch", [l(i), chroma, 340]));
}

export type CrunchOptions = {
  milk?: number;
  flavors?: number;
  artificialColors?: number;
};

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

// TODO: find better name for 'crunch()'. 'pour'? 'prepare'? 'make'?
// TODO: more mixers?
// milk -> drives brightness of base colors
// sugar -> drives brightness of cereals (accents)
// artificial colors -> drives chroma of accents
// sogginess -> drives chroma of base colors
// flavor -> drives hue shift of accent colors
// liquid -> determines base hue of base colors (orange juice, water, milk, grape juice, energy drink)
export function crunch(options?: CrunchOptions): Cereals {
  const milk = options?.milk ? options.milk / 10 : 0.5;
  const flavors = normalizeChroma(options?.flavors ?? 0.2);
  const shift = options?.artificialColors ?? 0;
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

export function normalizeChroma(input: number): number {
  const newMin = 0.01;
  const newMax = 0.2;

  const oldMin = 1;
  const oldMax = 10;

  const oldRange = oldMax - oldMin;
  const newRange = newMax - newMin;

  const newValue = ((input - oldMin) * newRange) / oldRange + newMin;
  return Math.ceil(newValue * 100) / 100;
}
