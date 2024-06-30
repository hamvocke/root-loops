import { fromQueryString } from "$lib/ingredients";
import { exportToJson } from "$lib/export";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = ({ url }) => {
  const recipe = fromQueryString(url.searchParams);
  const config = exportToJson(recipe);

  return new Response(String(config));
};
