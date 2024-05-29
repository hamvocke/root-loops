import type { PageLoad } from "./$types";
import {
  sanitizeSugar,
  sanitizeArtificialColors,
  sanitizeSogginess,
  sanitizeFlavor,
  sanitizeJuice,
  sanitizeMilk,
} from "$lib/ingredients";

export const load: PageLoad = ({ url }) => {
  return {
    sugar: sanitizeSugar(url.searchParams.get("sugar")),
    colors: sanitizeArtificialColors(url.searchParams.get("colors")),
    sogginess: sanitizeSogginess(url.searchParams.get("sogginess")),
    flavor: sanitizeFlavor(url.searchParams.get("flavor")),
    juice: sanitizeJuice(url.searchParams.get("juice")),
    milk: sanitizeMilk(url.searchParams.get("milk")),
  };
};
