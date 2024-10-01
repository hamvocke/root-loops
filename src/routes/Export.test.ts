import { render, screen, fireEvent } from "@testing-library/svelte";
import "@testing-library/jest-dom/vitest";
import { describe, expect, test, vi } from "vitest";

import Export from "./Export.svelte";
import { defaultRecipe } from "$lib/ingredients";
import { ExportFormat } from "$lib/exporters/exportOptions";

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

  test("generates json snippet when chosing JSON option", async () => {
    render(Export, { recipe: defaultRecipe });

    const select = screen.getByRole("combobox");
    const code = screen.getByRole("code");
    await fireEvent.change(select, { target: { value: ExportFormat.JSON } });

    expect(code).toHaveTextContent(`"source": "rootloops.sh",`);
  });

  test("generates windows terminal snippet when chosing windows terminal option", async () => {
    render(Export, { recipe: defaultRecipe });

    const select = screen.getByRole("combobox");
    const code = screen.getByRole("code");
    await fireEvent.change(select, { target: { value: ExportFormat.WindowsTerminal } });

    expect(code).toHaveTextContent(`"name": "Root Loops",`);
  });

  test("generates alacritty snippet when chosing alacritty option", async () => {
    render(Export, { recipe: defaultRecipe });

    const select = screen.getByRole("combobox");
    const code = screen.getByRole("code");
    await fireEvent.change(select, { target: { value: ExportFormat.Alacritty } });

    expect(code).toHaveTextContent(`# ~/.config/alacritty/alacritty.toml file`);
  });

  test("generates XResources snippet when chosing XResources option", async () => {
    render(Export, { recipe: defaultRecipe });

    const select = screen.getByRole("combobox");
    const code = screen.getByRole("code");
    await fireEvent.change(select, { target: { value: ExportFormat.XResources } });

    expect(code).toHaveTextContent(`! Copy the configuration below to your ~/.Xresources file`);
  });

  test("generates Kitty snippet when chosing Kitty option", async () => {
    render(Export, { recipe: defaultRecipe });

    const select = screen.getByRole("combobox");
    const code = screen.getByRole("code");
    await fireEvent.change(select, { target: { value: ExportFormat.Kitty } });

    expect(code).toHaveTextContent(`# ~/.config/kitty/kitty.conf file`);
  });

  test("generates WezTerm snippet when chosing WezTerm option", async () => {
    render(Export, { recipe: defaultRecipe });

    const select = screen.getByRole("combobox");
    const code = screen.getByRole("code");
    await fireEvent.change(select, { target: { value: ExportFormat.WezTerm } });

    expect(code).toHaveTextContent(`-- ~/.wezterm.lua or ~/.config/wezterm/wezterm.lua file`);
  });

  test("generates Helix snippet when chosing Helix option", async () => {
    render(Export, { recipe: defaultRecipe });

    const select = screen.getByRole("combobox");
    const code = screen.getByRole("code");
    await fireEvent.change(select, { target: { value: ExportFormat.Helix } });

    expect(code).toHaveTextContent(
      `# Copy the configuration below to ~/.config/helix/themes/rootloops.toml`,
    );
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
