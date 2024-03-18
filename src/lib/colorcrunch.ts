import Color from "colorjs.io";

export function generateColors(count: number): Color[] {
  const l = (i: number) => lightness(i, count);
  const h = (i: number) => hue(i, count);

  return new Array(count)
    .fill(undefined)
    .map((_color, i) => new Color("oklch", [l(i), 0, h(i)]));
}

function lightness(index: number, colorCount: number): number {
  const maxLightness = 100;
  const step = maxLightness / (colorCount - 1);
  return Math.round(step * index);
}

function hue(index: number, colorCount: number): number {
  const maxHue = 360
  const step = maxHue / (colorCount);
  return Math.round(step * index);
}
