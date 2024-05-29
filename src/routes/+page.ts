import type { PageLoad } from "./$types";
import { clamp } from "$lib/math";
import { Flavor, Juice, MilkAmount, defaultRecipe } from "$lib/ingredients";

function parseNumber(value: string | null, min: number, max: number, fallback: number): number {
  if (!value) {
    return fallback;
  }
  const n = parseInt(value);

  if (isNaN(n)) {
    return fallback;
  }

  return clamp(n, min, max);
}

export const load: PageLoad = ({ url }) => {
  return {
    sugar: parseNumber(url.searchParams.get("sugar"), 0, 9, defaultRecipe.sugar),
    colors: parseNumber(url.searchParams.get("colors"), 0, 10, defaultRecipe.artificialColors),
    sogginess: parseNumber(url.searchParams.get("sogginess"), 0, 10, defaultRecipe.sogginess),
    flavor: parseNumber(
      url.searchParams.get("flavor"),
      Flavor.Fruity,
      Flavor.Unicorn,
      defaultRecipe.flavor,
    ),
    juice: parseNumber(
      url.searchParams.get("juice"),
      Juice.Cranberry,
      Juice.Raspberry,
      defaultRecipe.juice,
    ),
    milk: parseNumber(
      url.searchParams.get("milk"),
      MilkAmount.None,
      MilkAmount.Cup,
      defaultRecipe.milkAmount,
    ),
  };
};
