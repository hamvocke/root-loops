import { type Recipe } from "$lib/ingredients";
import { prepare } from "$lib/cereals";

export function toFzf(recipe: Recipe): string {
  const cereals = prepare(recipe);
  return `# Add the 'export' statement below to your shell's configuration
# (e.g. ~/.bashrc, ~/.zshrc, or a custom file you load during shell startup)

export FZF_DEFAULT_OPTS="\
  --color=fg:${cereals.foreground.color_hex},fg+:${cereals.brightWhite.color_hex},bg:${cereals.background.color_hex},bg+:${cereals.black.color_hex} \\
  --color=hl:${cereals.cyan.color_hex},hl+:${cereals.brightCyan.color_hex},info:${cereals.yellow.color_hex},marker:${cereals.green.color_hex} \\
  --color=prompt:${cereals.red.color_hex},spinner:${cereals.magenta.color_hex},pointer:${cereals.magenta.color_hex},header:${cereals.blue.color_hex} \\
  --color=border:${cereals.brightBlack.color_hex},label:${cereals.white.color_hex},query:${cereals.foreground.color_hex}"`;
}
