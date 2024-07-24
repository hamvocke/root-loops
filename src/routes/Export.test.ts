import { render, screen, fireEvent } from "@testing-library/svelte";
import "@testing-library/jest-dom/vitest";
import { expect, test, vitest } from "vitest";

import Export from "./Export.svelte";
import { defaultRecipe } from "$lib/ingredients";

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

// testing-library offers a better way to interact with the clipboard, but this seems good enough
function mockClipboard() {
  const writeText = vitest.fn();

  Object.assign(navigator, {
    clipboard: {
      writeText,
    },
  });

  return writeText;
}
