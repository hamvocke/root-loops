import { toQueryString, type Recipe } from "$lib/ingredients";
import { prepare } from "$lib/cereals";

export function toTabby(recipe: Recipe): string {
  const queryString = toQueryString(recipe);
  const cereals = prepare(recipe);

  return `# Copy the configuration below and add it to the
# appropriate config file. (If your config file already
# contains a 'customColorSchemes' section, add all lines
# from '- name:...' to the bottom to the 'customColorSchemes'
# section):
# Linux: ~/.config/tabby/config.yaml
# macOS: ~/Library/Application Support/tabby/config.yaml
# Windows: ~\\AppData\\Roaming\\tabby\\config.yaml
# Open Tabby's Settings > Color scheme and select the 'Root Loops' theme.

terminal:
  customColorSchemes:
    - name: Root Loops # via https://rootloops.sh?${queryString}
      foreground: '${cereals.foreground.color_hex}'
      background: '${cereals.background.color_hex}'
      cursor: '${cereals.white.color_hex}'
      colors:
        - '${cereals.black.color_hex}'
        - '${cereals.red.color_hex}'
        - '${cereals.green.color_hex}'
        - '${cereals.yellow.color_hex}'
        - '${cereals.blue.color_hex}'
        - '${cereals.magenta.color_hex}'
        - '${cereals.cyan.color_hex}'
        - '${cereals.white.color_hex}'
        - '${cereals.brightBlack.color_hex}'
        - '${cereals.brightRed.color_hex}'
        - '${cereals.brightGreen.color_hex}'
        - '${cereals.brightYellow.color_hex}'
        - '${cereals.brightBlue.color_hex}'
        - '${cereals.brightMagenta.color_hex}'
        - '${cereals.brightCyan.color_hex}'
        - '${cereals.brightWhite.color_hex}'`;
}
