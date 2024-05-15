import { type Cereals } from "$lib/cereals";

// TODO: check if the colors below really make sense for the respective tokens
export function generateCssColors(cereals: Cereals): string {
  return `
--root-loops-foreground: ${cereals.white};
--root-loops-background: ${cereals.black};
--root-loops-token-constant: ${cereals.yellow};
--root-loops-token-string: ${cereals.green};
--root-loops-token-comment: ${cereals.cyan};
--root-loops-token-keyword: ${cereals.magenta};
--root-loops-token-parameter: ${cereals.red};
--root-loops-token-function: ${cereals.blue};
--root-loops-token-string-expression: ${cereals.green};
--root-loops-token-punctuation: ${cereals.red};
--root-loops-token-link: ${cereals.yellow};

--root-loops-ansi-black: ${cereals.black};
--root-loops-ansi-black-dim: ${cereals.black};
--root-loops-ansi-red: ${cereals.red};
--root-loops-ansi-red-dim: ${cereals.red};
--root-loops-ansi-green: ${cereals.green};
--root-loops-ansi-green-dim: ${cereals.green};
--root-loops-ansi-yellow: ${cereals.yellow};
--root-loops-ansi-yellow-dim: ${cereals.yellow};
--root-loops-ansi-blue: ${cereals.blue};
--root-loops-ansi-blue-dim: ${cereals.blue};
--root-loops-ansi-magenta: ${cereals.magenta};
--root-loops-ansi-magenta-dim: ${cereals.magenta};
--root-loops-ansi-cyan: ${cereals.cyan};
--root-loops-ansi-cyan-dim: ${cereals.cyan};
--root-loops-ansi-white: ${cereals.white};
--root-loops-ansi-white-dim: ${cereals.white};
--root-loops-ansi-bright-black: ${cereals.brightBlack};
--root-loops-ansi-bright-black-dim: ${cereals.brightBlack};
--root-loops-ansi-bright-red: ${cereals.brightRed};
--root-loops-ansi-bright-red-dim: ${cereals.brightRed};
--root-loops-ansi-bright-green: ${cereals.brightGreen};
--root-loops-ansi-bright-green-dim: ${cereals.brightGreen};
--root-loops-ansi-bright-yellow: ${cereals.brightYellow};
--root-loops-ansi-bright-yellow-dim: ${cereals.brightYellow};
--root-loops-ansi-bright-blue: ${cereals.brightBlue};
--root-loops-ansi-bright-blue-dim: ${cereals.brightBlue};
--root-loops-ansi-bright-magenta: ${cereals.brightMagenta};
--root-loops-ansi-bright-magenta-dim: ${cereals.brightMagenta};
--root-loops-ansi-bright-cyan: ${cereals.brightCyan};
--root-loops-ansi-bright-cyan-dim: ${cereals.brightCyan};
--root-loops-ansi-bright-white: ${cereals.brightWhite};
--root-loops-ansi-bright-white-dim: ${cereals.brightWhite};
`;
}
