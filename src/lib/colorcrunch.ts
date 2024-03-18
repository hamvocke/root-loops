import Color from "colorjs.io";

export function generateColors(count: number): Color[] {
  const l = (i: number) => lightness(i, count);

  return new Array(count)
    .fill(undefined)
    .map((_color, i) => new Color("oklch", [l(i), 0, 0]));
}

function lightness(index: number, colorCount: number): number {
  const maxLightness = 100;
  const step = maxLightness / (colorCount - 1);
  return Math.round(step * index);
}
