import { type Cereals } from "$lib/cereals";

function favicon(cereals: Cereals) {
  return `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'>
    <circle cx='100' cy='90' r='50' fill='${cereals.blue.color_hex}' />
    <circle cx='60' cy='50' r='50' fill='${cereals.red.color_hex}' />
  </svg>`.replaceAll("#", "%23");
}

export function faviconDataUrl(cereals: Cereals) {
  return `data: image/svg+xml, ${favicon(cereals)}`;
}
