import Color from "colorjs.io";

export function generateColors(count: number): Color[] {
  const colors: Color[] = new Array(count);
  colors.fill(new Color("oklch", [0, 0, 0]));
  return colors;
}
