import Color from "colorjs.io";

export function generateColors(count: number, l: number = 0.6, c: number = 0.2): Color[] {
  const h = (i: number) => hue(i, count);

  return new Array(count)
    .fill(undefined)
    .map((_color, i) => new Color("oklch", [l, c, h(i)]));
}

export function generateBowlColors(count: number): Color[] {
  const l = (i: number) => lightness(i, count);

  return new Array(count)
    .fill(undefined)
    .map((_color, i) => new Color("oklch", [l(i), 0.02, 340]));
}

function hue(index: number, colorCount: number): number {
  const maxHue = 360
  const step = maxHue / (colorCount);
  return Math.round(step * index);
}

function lightness(index: number, colorCount: number): number {
  const maxLightness = 100;
  const step = maxLightness / (colorCount - 1);
  return Math.round(step * index) / 100;
}
