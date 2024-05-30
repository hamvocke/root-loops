import { type Cereals } from "$lib/cereals";

export function generateCssColors(cereals: Cereals): string {
  return `
--root-loops-foreground: ${cereals.white.color.to("hsl")};
--root-loops-background: ${cereals.black.color.to("hsl")};
--root-loops-token-constant: ${cereals.yellow.color.to("hsl")};
--root-loops-token-string: ${cereals.green.color.to("hsl")};
--root-loops-token-comment: ${cereals.cyan.color.to("hsl")};
--root-loops-token-keyword: ${cereals.magenta.color.to("hsl")};
--root-loops-token-parameter: ${cereals.red.color.to("hsl")};
--root-loops-token-function: ${cereals.blue.color.to("hsl")};
--root-loops-token-string-expression: ${cereals.green.color.to("hsl")};
--root-loops-token-punctuation: ${cereals.red.color.to("hsl")};
--root-loops-token-link: ${cereals.yellow.color.to("hsl")};

--root-loops-ansi-black: ${cereals.black.color.to("hsl")};
--root-loops-ansi-black-dim: ${cereals.black.color.to("hsl")};
--root-loops-ansi-red: ${cereals.red.color.to("hsl")};
--root-loops-ansi-red-dim: ${cereals.red.color.to("hsl")};
--root-loops-ansi-green: ${cereals.green.color.to("hsl")};
--root-loops-ansi-green-dim: ${cereals.green.color.to("hsl")};
--root-loops-ansi-yellow: ${cereals.yellow.color.to("hsl")};
--root-loops-ansi-yellow-dim: ${cereals.yellow.color.to("hsl")};
--root-loops-ansi-blue: ${cereals.blue.color.to("hsl")};
--root-loops-ansi-blue-dim: ${cereals.blue.color.to("hsl")};
--root-loops-ansi-magenta: ${cereals.magenta.color.to("hsl")};
--root-loops-ansi-magenta-dim: ${cereals.magenta.color.to("hsl")};
--root-loops-ansi-cyan: ${cereals.cyan.color.to("hsl")};
--root-loops-ansi-cyan-dim: ${cereals.cyan.color.to("hsl")};
--root-loops-ansi-white: ${cereals.white.color.to("hsl")};
--root-loops-ansi-white-dim: ${cereals.white.color.to("hsl")};
--root-loops-ansi-bright-black: ${cereals.brightBlack.color.to("hsl")};
--root-loops-ansi-bright-black-dim: ${cereals.brightBlack.color.to("hsl")};
--root-loops-ansi-bright-red: ${cereals.brightRed.color.to("hsl")};
--root-loops-ansi-bright-red-dim: ${cereals.brightRed.color.to("hsl")};
--root-loops-ansi-bright-green: ${cereals.brightGreen.color.to("hsl")};
--root-loops-ansi-bright-green-dim: ${cereals.brightGreen.color.to("hsl")};
--root-loops-ansi-bright-yellow: ${cereals.brightYellow.color.to("hsl")};
--root-loops-ansi-bright-yellow-dim: ${cereals.brightYellow.color.to("hsl")};
--root-loops-ansi-bright-blue: ${cereals.brightBlue.color.to("hsl")};
--root-loops-ansi-bright-blue-dim: ${cereals.brightBlue.color.to("hsl")};
--root-loops-ansi-bright-magenta: ${cereals.brightMagenta.color.to("hsl")};
--root-loops-ansi-bright-magenta-dim: ${cereals.brightMagenta.color.to("hsl")};
--root-loops-ansi-bright-cyan: ${cereals.brightCyan.color.to("hsl")};
--root-loops-ansi-bright-cyan-dim: ${cereals.brightCyan.color.to("hsl")};
--root-loops-ansi-bright-white: ${cereals.brightWhite.color.to("hsl")};
--root-loops-ansi-bright-white-dim: ${cereals.brightWhite.color.to("hsl")};
`;
}
