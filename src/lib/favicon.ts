import { type Cereals } from "$lib/cereals";

function favicon(cereals: Cereals) {
  return `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'>
    <mask id='hole-red'>
      <rect width='100%' height='100%' fill='white'/>
      <circle r='20' cx='65' cy='65' fill='black'/>
    </mask>

    <mask id='hole-blue'>
      <rect width='100%' height='100%' fill='white'/>
      <circle r='20' cx='110' cy='110' fill='black'/>
    </mask>
    <circle cx='110' cy='110' r='60' fill='${cereals.blue.color_hex}' stroke='${cereals.brightBlue.color_hex}' stroke-width='10' mask='url(#hole-blue)' />
    <circle cx='110' cy='110' r='30' fill='${cereals.brightBlue.color_hex}' mask='url(#hole-blue)' />
    <circle cx='65' cy='65' r='60' fill='${cereals.red.color_hex}' stroke='${cereals.brightRed.color_hex}' stroke-width='10' mask='url(#hole-red)'/>
    <circle cx='65' cy='65' r='30' fill='${cereals.brightRed.color_hex}' mask='url(#hole-red)'/>
  </svg>`.replaceAll("#", "%23");
}

export function faviconDataUrl(cereals: Cereals) {
  return `data: image/svg+xml, ${favicon(cereals)}`;
}
