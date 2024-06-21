import { parseRecipeFromQueryString } from "$lib/ingredients";
import { exportToAlacritty } from "$lib/export";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = ({ url }) => {
  const recipe = parseRecipeFromQueryString(url.searchParams);
  const config = exportToAlacritty(recipe);

  return new Response(String(config));
};
