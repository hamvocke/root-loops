import { type Cereals } from "$lib/cereals";
import { dev } from "$app/environment";

function favicon(cereals: Cereals) {
  let colors = {
    firstFill: cereals.red.color_hex,
    firstStroke: cereals.brightRed.color_hex,
    secondFill: cereals.blue.color_hex,
    secondStroke: cereals.brightBlue.color_hex,
  };

  if (dev) {
    colors = {
      firstFill: cereals.magenta.color_hex,
      firstStroke: cereals.brightMagenta.color_hex,
      secondFill: cereals.cyan.color_hex,
      secondStroke: cereals.brightCyan.color_hex,
    };
  }

  return `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'>
    <mask id='hole-red'>
      <rect width='100%' height='100%' fill='white'/>
      <circle r='20' cx='65' cy='65' fill='black'/>
    </mask>

    <mask id='hole-blue'>
      <rect width='100%' height='100%' fill='white'/>
      <circle r='20' cx='110' cy='110' fill='black'/>
    </mask>
    <circle cx='110' cy='110' r='60' fill='${colors.secondFill}' stroke='${colors.secondStroke}' stroke-width='10' mask='url(#hole-blue)' />
    <circle cx='110' cy='110' r='30' fill='${colors.secondStroke}' mask='url(#hole-blue)' />
    <circle cx='65' cy='65' r='60' fill='${colors.firstFill}' stroke='${colors.firstStroke}' stroke-width='10' mask='url(#hole-red)'/>
    <circle cx='65' cy='65' r='30' fill='${colors.firstStroke}' mask='url(#hole-red)'/>
  </svg>`.replaceAll("#", "%23");
}

export function faviconDataUrl(cereals: Cereals) {
  return `data: image/svg+xml, ${favicon(cereals)}`;
}
