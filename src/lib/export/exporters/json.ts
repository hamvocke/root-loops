import { toQueryString, type Recipe } from "$lib/ingredients";
import { prepare, mapValues } from "$lib/cereals";

export function toJson(recipe: Recipe): string {
  const cereals = prepare(recipe);
  const queryString = toQueryString(recipe);
  const colors = {
    source: `https://rootloops.sh?${queryString}`,
    hex: mapValues(cereals, (c) => c.color_hex),
    hsl: mapValues(cereals, (c) => c.color_hsl),
  };

  return JSON.stringify(colors, null, 2);
}
