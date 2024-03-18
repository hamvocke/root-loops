import Color from "colorjs.io";

export function generateColors(count: number, l: number = 0.6, c: number = 0.2): Color[] {
  const h = (i: number) => hue(i, count);

  return new Array(count)
    .fill(undefined)
    .map((_color, i) => new Color("oklch", [l, c, h(i)]));
}

function hue(index: number, colorCount: number): number {
  const maxHue = 360
  const step = maxHue / (colorCount);
  return Math.round(step * index);
}
