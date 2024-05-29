import type { PageLoad } from "./$types";

export const load: PageLoad = ({ url }) => {
  return {
    sugar: url.searchParams.get("sugar"),
    colors: url.searchParams.get("colors"),
    sogginess: url.searchParams.get("sogginess"),
    flavor: url.searchParams.get("flavor"),
    juice: url.searchParams.get("juice"),
    milk: url.searchParams.get("milk"),
  };
};
