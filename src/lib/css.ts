import { type Cereals } from "$lib/cereals";

export function generateCssColors(cereals: Cereals): string {
  return `
--root-loops-foreground: ${cereals.brightWhite.color_hsl};
--root-loops-background: ${cereals.black.color_hsl};
--root-loops-cursor: ${cereals.white.color_hsl};

--root-loops-ansi-black: ${cereals.black.color_hsl};
--root-loops-ansi-black-dim: ${cereals.black.color_hsl};
--root-loops-ansi-red: ${cereals.red.color_hsl};
--root-loops-ansi-red-dim: ${cereals.red.color_hsl};
--root-loops-ansi-green: ${cereals.green.color_hsl};
--root-loops-ansi-green-dim: ${cereals.green.color_hsl};
--root-loops-ansi-yellow: ${cereals.yellow.color_hsl};
--root-loops-ansi-yellow-dim: ${cereals.yellow.color_hsl};
--root-loops-ansi-blue: ${cereals.blue.color_hsl};
--root-loops-ansi-blue-dim: ${cereals.blue.color_hsl};
--root-loops-ansi-magenta: ${cereals.magenta.color_hsl};
--root-loops-ansi-magenta-dim: ${cereals.magenta.color_hsl};
--root-loops-ansi-cyan: ${cereals.cyan.color_hsl};
--root-loops-ansi-cyan-dim: ${cereals.cyan.color_hsl};
--root-loops-ansi-white: ${cereals.white.color_hsl};
--root-loops-ansi-white-dim: ${cereals.white.color_hsl};
--root-loops-ansi-bright-black: ${cereals.brightBlack.color_hsl};
--root-loops-ansi-bright-black-dim: ${cereals.brightBlack.color_hsl};
--root-loops-ansi-bright-red: ${cereals.brightRed.color_hsl};
--root-loops-ansi-bright-red-dim: ${cereals.brightRed.color_hsl};
--root-loops-ansi-bright-green: ${cereals.brightGreen.color_hsl};
--root-loops-ansi-bright-green-dim: ${cereals.brightGreen.color_hsl};
--root-loops-ansi-bright-yellow: ${cereals.brightYellow.color_hsl};
--root-loops-ansi-bright-yellow-dim: ${cereals.brightYellow.color_hsl};
--root-loops-ansi-bright-blue: ${cereals.brightBlue.color_hsl};
--root-loops-ansi-bright-blue-dim: ${cereals.brightBlue.color_hsl};
--root-loops-ansi-bright-magenta: ${cereals.brightMagenta.color_hsl};
--root-loops-ansi-bright-magenta-dim: ${cereals.brightMagenta.color_hsl};
--root-loops-ansi-bright-cyan: ${cereals.brightCyan.color_hsl};
--root-loops-ansi-bright-cyan-dim: ${cereals.brightCyan.color_hsl};
--root-loops-ansi-bright-white: ${cereals.brightWhite.color_hsl};
--root-loops-ansi-bright-white-dim: ${cereals.brightWhite.color_hsl};
`;
}
