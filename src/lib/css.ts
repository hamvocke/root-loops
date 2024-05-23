import { type Cereals } from "$lib/cereals";

export function generateCssColors(cereals: Cereals): string {
  return `
--root-loops-foreground: ${cereals.white.color};
--root-loops-background: ${cereals.black.color};
--root-loops-token-constant: ${cereals.yellow.color};
--root-loops-token-string: ${cereals.green.color};
--root-loops-token-comment: ${cereals.cyan.color};
--root-loops-token-keyword: ${cereals.magenta.color};
--root-loops-token-parameter: ${cereals.red.color};
--root-loops-token-function: ${cereals.blue.color};
--root-loops-token-string-expression: ${cereals.green.color};
--root-loops-token-punctuation: ${cereals.red.color};
--root-loops-token-link: ${cereals.yellow.color};

--root-loops-ansi-black: ${cereals.black.color};
--root-loops-ansi-black-dim: ${cereals.black.color};
--root-loops-ansi-red: ${cereals.red.color};
--root-loops-ansi-red-dim: ${cereals.red.color};
--root-loops-ansi-green: ${cereals.green.color};
--root-loops-ansi-green-dim: ${cereals.green.color};
--root-loops-ansi-yellow: ${cereals.yellow.color};
--root-loops-ansi-yellow-dim: ${cereals.yellow.color};
--root-loops-ansi-blue: ${cereals.blue.color};
--root-loops-ansi-blue-dim: ${cereals.blue.color};
--root-loops-ansi-magenta: ${cereals.magenta.color};
--root-loops-ansi-magenta-dim: ${cereals.magenta.color};
--root-loops-ansi-cyan: ${cereals.cyan.color};
--root-loops-ansi-cyan-dim: ${cereals.cyan.color};
--root-loops-ansi-white: ${cereals.white.color};
--root-loops-ansi-white-dim: ${cereals.white.color};
--root-loops-ansi-bright-black: ${cereals.brightBlack.color};
--root-loops-ansi-bright-black-dim: ${cereals.brightBlack.color};
--root-loops-ansi-bright-red: ${cereals.brightRed.color};
--root-loops-ansi-bright-red-dim: ${cereals.brightRed.color};
--root-loops-ansi-bright-green: ${cereals.brightGreen.color};
--root-loops-ansi-bright-green-dim: ${cereals.brightGreen.color};
--root-loops-ansi-bright-yellow: ${cereals.brightYellow.color};
--root-loops-ansi-bright-yellow-dim: ${cereals.brightYellow.color};
--root-loops-ansi-bright-blue: ${cereals.brightBlue.color};
--root-loops-ansi-bright-blue-dim: ${cereals.brightBlue.color};
--root-loops-ansi-bright-magenta: ${cereals.brightMagenta.color};
--root-loops-ansi-bright-magenta-dim: ${cereals.brightMagenta.color};
--root-loops-ansi-bright-cyan: ${cereals.brightCyan.color};
--root-loops-ansi-bright-cyan-dim: ${cereals.brightCyan.color};
--root-loops-ansi-bright-white: ${cereals.brightWhite.color};
--root-loops-ansi-bright-white-dim: ${cereals.brightWhite.color};
`;
}
