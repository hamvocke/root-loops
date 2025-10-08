import { describe, expect, it } from "vitest";
import { type Recipe, MilkAmount, Flavor, Fruit } from "$lib/ingredients";
import { toTabby } from "./tabby";

describe("Tabby export", () => {
  const someRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Intense,
    artificialColors: 2,
    sugar: 3,
    fruit: Fruit.Elderberry,
    sogginess: 2,
  };

  it("exports the right format", () => {
    const config = toTabby(someRecipe);
    // prettier-ignore
    const expected = `# Copy the configuration below and add it to the
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
    - name: Root Loops # via https://rootloops.sh?sugar=3&colors=2&sogginess=2&flavor=2&fruit=9&milk=2
      foreground: '#1e222d'
      background: '#dfe2eb'
      cursor: '#4a5165'
      colors:
        - '#d0d4e1'
        - '#55403c'
        - '#3c4a3e'
        - '#4b4536'
        - '#3f4557'
        - '#50404e'
        - '#374a4d'
        - '#4a5165'
        - '#959eb5'
        - '#6b524e'
        - '#4d5e50'
        - '#5f5946'
        - '#51586e'
        - '#655263'
        - '#475e62'
        - '#07080d'`

    expect(config).toBe(expected);
  });
});
