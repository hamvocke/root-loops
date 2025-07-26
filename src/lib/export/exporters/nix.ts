import { toQueryString, type Recipe } from "$lib/ingredients";
import { prepare, mapValues, type Cereal } from "$lib/cereals";

type CerealMap = { [K in keyof Cereal]: string };

type ColorObject = {
  source: string;
  hex: CerealMap;
  hsl: CerealMap;
};

export function toNix(recipe: Recipe): string {
  const cereals = prepare(recipe);
  const queryString = toQueryString(recipe);
  const colors = {
    source: `https://rootloops.sh?${queryString}`,
    hex: mapValues(cereals, (c) => c.color_hex),
    hsl: mapValues(cereals, (c) => c.color_hsl),
  };

  return toNixExpression(colors, 2);
}

function toNixExpression(colors: ColorObject, space: int): string {
  const spacer = " ".repeat(space);
  const fieldsToNix = (c: CerealMap) => {
    return Object.entries(c)
      .map(([k, v]) => `${" ".repeat(space * 2)}${k} = "${v}";\n`)
      .join("");
  };
  const hexFields = fieldsToNix(colors.hex);
  const hslFields = fieldsToNix(colors.hsl);

  return "{\n"
    .concat(`${spacer}source = "${colors.source}";\n`)
    .concat(`${spacer}hex = {\n`)
    .concat(hexFields)
    .concat(`${spacer}};\n`)
    .concat(`${spacer}hsl = {\n`)
    .concat(hslFields)
    .concat(`${spacer}};\n`)
    .concat("}");
}
