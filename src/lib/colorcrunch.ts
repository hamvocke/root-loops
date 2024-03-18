import Color from "colorjs.io";

export function generateColors(count: number): Color[] {
  const maxLightness = 100;
  const lightnessStep = maxLightness / (count - 1);

  const l = (index: number) => Math.round(lightnessStep * index);

  return new Array(count)
    .fill(undefined)
    .map((_color, i) => new Color("oklch", [l(i), 0, 0]));
}
