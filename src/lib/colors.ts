import Color from "colorjs.io";

export function equalHueDistance(
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

export function equalLightnessDistance(count: number, chroma: number = 0.05): Color[] {
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

export function normalizeChroma(input: number): number {
  const sanitizedInput = clamp(input, 1, 10);
  return normalize(sanitizedInput, 1, 10, 0.01, 0.3);
}

export function normalizeLightness(input: number): number {
  const sanitizedInput = clamp(input, 1, 9);
  return normalize(sanitizedInput, 0, 10, 0, 1);
}

function clamp(actual: number, min: number, max: number) {
  return Math.max(min, Math.min(actual, max));
}

function normalize(number: number, oldMin = 0, oldMax = 10, newMin = 0, newMax = 10): number {
  const oldRange = oldMax - oldMin;
  const newRange = newMax - newMin;

  const newValue = ((number - oldMin) * newRange) / oldRange + newMin;
  return Math.ceil(newValue * 100) / 100;
}
