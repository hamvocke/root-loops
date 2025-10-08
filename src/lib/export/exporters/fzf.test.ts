import { describe, expect, it } from "vitest";
import { type Recipe, MilkAmount, Flavor, Fruit } from "$lib/ingredients";
import { toFzf } from "./fzf";

describe("Fzf export", () => {
  const someRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Intense,
    artificialColors: 2,
    sugar: 3,
    fruit: Fruit.Elderberry,
    sogginess: 2,
  };

  it("exports the right format", () => {
    const config = toFzf(someRecipe);
    // prettier-ignore
    const expected = `# Add the 'export' statement below to your shell's configuration
# (e.g. ~/.bashrc, ~/.zshrc, or a custom file you load during shell startup)

# Root Loops (https://rootloops.sh?sugar=3&colors=2&sogginess=2&flavor=2&fruit=9&milk=2)
export FZF_DEFAULT_OPTS="\
  --color=fg:#1e222d,fg+:#07080d,bg:#dfe2eb,bg+:#d0d4e1 \\
  --color=hl:#374a4d,hl+:#475e62,info:#4b4536,marker:#3c4a3e \\
  --color=prompt:#55403c,spinner:#50404e,pointer:#50404e,header:#3f4557 \\
  --color=border:#959eb5,label:#4a5165,query:#1e222d"`;

    expect(config).toBe(expected);
  });
});
