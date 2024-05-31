import { type Cereals } from "$lib/cereals";

export function generateCssColors(cereals: Cereals): string {
  return `
--root-loops-foreground: ${cereals.white.color_css};
--root-loops-background: ${cereals.black.color_css};
--root-loops-token-constant: ${cereals.yellow.color_css};
--root-loops-token-string: ${cereals.green.color_css};
--root-loops-token-comment: ${cereals.cyan.color_css};
--root-loops-token-keyword: ${cereals.magenta.color_css};
--root-loops-token-parameter: ${cereals.red.color_css};
--root-loops-token-function: ${cereals.blue.color_css};
--root-loops-token-string-expression: ${cereals.green.color_css};
--root-loops-token-punctuation: ${cereals.red.color_css};
--root-loops-token-link: ${cereals.yellow.color_css};

--root-loops-ansi-black: ${cereals.black.color_css};
--root-loops-ansi-black-dim: ${cereals.black.color_css};
--root-loops-ansi-red: ${cereals.red.color_css};
--root-loops-ansi-red-dim: ${cereals.red.color_css};
--root-loops-ansi-green: ${cereals.green.color_css};
--root-loops-ansi-green-dim: ${cereals.green.color_css};
--root-loops-ansi-yellow: ${cereals.yellow.color_css};
--root-loops-ansi-yellow-dim: ${cereals.yellow.color_css};
--root-loops-ansi-blue: ${cereals.blue.color_css};
--root-loops-ansi-blue-dim: ${cereals.blue.color_css};
--root-loops-ansi-magenta: ${cereals.magenta.color_css};
--root-loops-ansi-magenta-dim: ${cereals.magenta.color_css};
--root-loops-ansi-cyan: ${cereals.cyan.color_css};
--root-loops-ansi-cyan-dim: ${cereals.cyan.color_css};
--root-loops-ansi-white: ${cereals.white.color_css};
--root-loops-ansi-white-dim: ${cereals.white.color_css};
--root-loops-ansi-bright-black: ${cereals.brightBlack.color_css};
--root-loops-ansi-bright-black-dim: ${cereals.brightBlack.color_css};
--root-loops-ansi-bright-red: ${cereals.brightRed.color_css};
--root-loops-ansi-bright-red-dim: ${cereals.brightRed.color_css};
--root-loops-ansi-bright-green: ${cereals.brightGreen.color_css};
--root-loops-ansi-bright-green-dim: ${cereals.brightGreen.color_css};
--root-loops-ansi-bright-yellow: ${cereals.brightYellow.color_css};
--root-loops-ansi-bright-yellow-dim: ${cereals.brightYellow.color_css};
--root-loops-ansi-bright-blue: ${cereals.brightBlue.color_css};
--root-loops-ansi-bright-blue-dim: ${cereals.brightBlue.color_css};
--root-loops-ansi-bright-magenta: ${cereals.brightMagenta.color_css};
--root-loops-ansi-bright-magenta-dim: ${cereals.brightMagenta.color_css};
--root-loops-ansi-bright-cyan: ${cereals.brightCyan.color_css};
--root-loops-ansi-bright-cyan-dim: ${cereals.brightCyan.color_css};
--root-loops-ansi-bright-white: ${cereals.brightWhite.color_css};
--root-loops-ansi-bright-white-dim: ${cereals.brightWhite.color_css};
`;
}
