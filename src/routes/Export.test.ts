import { render, screen, fireEvent } from "@testing-library/svelte";
import "@testing-library/jest-dom/vitest";
import { describe, expect, test, vi } from "vitest";

import Export from "./Export.svelte";
import { defaultRecipe } from "$lib/ingredients";

describe("Export component", () => {
  test("export region shows code", () => {
    render(Export, { recipe: defaultRecipe });

    const exportRegion = screen.getByRole("region", { name: "Export" });
    const code = screen.getByRole("code");

    expect(exportRegion).toBeInTheDocument();
    expect(code).toBeInTheDocument();
    expect(code).toHaveTextContent(`"source": "rootloops.sh",`);
  });

  test("copies code to clipboard on click", async () => {
    const clipboardSpy = mockClipboard();

    render(Export, { recipe: defaultRecipe });

    const button = screen.getByRole("button");
    await fireEvent.click(button);

    expect(clipboardSpy.mock.lastCall[0]).toContain(`"source": "rootloops.sh",`);
  });

  test("changes button text on click", async () => {
    render(Export, { recipe: defaultRecipe });

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Copy");

    await fireEvent.click(button);

    expect(button).toHaveTextContent("Copied");
  });

  test.each([
    ["JSON", `"source": "rootloops.sh",`],
    ["WindowsTerminal", `"name": "Root Loops",`],
    ["Alacritty", `# ~/.config/alacritty/alacritty.toml file`],
    ["Xresources", `! Copy the configuration below to your ~/.Xresources file`],
    ["Kitty", `# ~/.config/kitty/kitty.conf file`],
    ["WezTerm", `-- ~/.wezterm.lua or ~/.config/wezterm/wezterm.lua file`],
    ["Helix", `# Copy the configuration below to ~/.config/helix/themes/rootloops.toml`],
    ["Ghostty", `# ~/.config/ghostty/config file`],
    ["Foot", `# ~/.config/foot/foot.ini file`],
  ])("generates %s snippet", async (format, expectedExportString) => {
    render(Export, { recipe: defaultRecipe });

    const select = screen.getByRole("combobox");
    const code = screen.getByRole("code");
    await fireEvent.change(select, { target: { value: format } });

    expect(code).toHaveTextContent(expectedExportString);
  });
});

// testing-library offers a better way to interact with the clipboard, but this seems good enough
function mockClipboard() {
  const writeText = vi.fn();

  Object.assign(navigator, {
    clipboard: {
      writeText,
    },
  });

  return writeText;
}
