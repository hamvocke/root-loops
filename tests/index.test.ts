import { defaultRecipe } from "$lib/ingredients";
import { expect, test, type Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("shows heading", async ({ page }) => {
  await expect(page.getByRole("heading", { name: "Root Loops", exact: true })).toBeVisible();
});

test("shows all inputs", async ({ page }) => {
  await expect(page.getByRole("slider", { name: "Sugar" })).toBeVisible();
  await expect(page.getByRole("slider", { name: "Artificial Colors" })).toBeVisible();
  await expect(page.getByRole("slider", { name: "Sogginess" })).toBeVisible();

  await expect(page.getByRole("combobox", { name: "Cereal Flavor" })).toBeVisible();
  await expect(page.getByRole("combobox", { name: "Fruit" })).toBeVisible();
  await expect(page.getByRole("combobox", { name: "Milk" })).toBeVisible();
});

test.describe("cereals", () => {
  test("page has bowl with 16 cereals", async ({ page }) => {
    await expect(page.getByRole("button", { name: "black", exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "red", exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "green", exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "yellow", exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "blue", exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "magenta", exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "cyan", exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "white", exact: true })).toBeVisible();

    await expect(page.getByRole("button", { name: "bright black", exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "bright red", exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "bright green", exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "bright yellow", exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "bright blue", exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "bright magenta", exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "bright cyan", exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "bright white", exact: true })).toBeVisible();
  });

  test("clicking a cereal copies color value to clipboard", async ({ page, context }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    const blackCereal = page.getByRole("button", { name: "black", exact: true });

    await blackCereal.click();

    await expect(page.getByRole("alert")).toHaveText("Copied");

    const handle = await page.evaluateHandle(() => navigator.clipboard.readText());
    const clipboardContent = await handle.jsonValue();

    expect(clipboardContent).toEqual("#0a0611");
  });

  test("changing an input changes cereal color", async ({ page, context }) => {
    async function getClipboardContent(page: Page) {
      const handle = await page.evaluateHandle(() => navigator.clipboard.readText());
      return await handle.jsonValue();
    }

    await context.grantPermissions(["clipboard-read", "clipboard-write"]);

    const redCereal = page.getByRole("button", { name: "red", exact: true });
    await redCereal.click();
    expect(await getClipboardContent(page)).toEqual("#d97780");

    // change sugar slider via keyboard navigation
    const sugarSlider = page.getByRole("slider", { name: "Sugar" });
    await sugarSlider.press("ArrowRight");

    await redCereal.click();
    expect(await getClipboardContent(page)).toEqual("#e6949a");
  });
});

test.describe("terminal", () => {
  test("page as terminal with different tabs", async ({ page }) => {
    const terminal = page.getByRole("region", { name: "Terminal Preview", exact: true });
    await expect(terminal).toBeVisible();

    await expect(terminal.getByRole("tab")).toHaveCount(7);
  });

  test("clicking terminal tabs switches content", async ({ page }) => {
    const terminal = page.getByRole("region", { name: "Terminal Preview", exact: true });

    function getTab(tabName: string) {
      return terminal.getByRole("tab").filter({ hasText: tabName });
    }

    await getTab("fetch").click();
    // check that a part of that apple logo's ascii art is showing up
    await expect(terminal.getByRole("tabpanel")).toContainText(".:/++++++/::::/++++++/:`");

    await getTab("colortest").click();
    await expect(terminal.getByRole("tabpanel")).toContainText(
      "40m     41m     42m     43m     44m     45m     46m     47m",
    );

    await getTab("test").click();
    await expect(terminal.getByRole("tabpanel")).toContainText(
      "test.js > root loops color generator > pours milk into the bowl",
    );

    await getTab("python").click();
    await expect(terminal.getByRole("tabpanel")).toContainText("from flask import Flask");

    await getTab("typescript").click();
    await expect(terminal.getByRole("tabpanel")).toContainText("const app: Express = express();");

    await getTab("elixir").click();
    await expect(terminal.getByRole("tabpanel")).toContainText(
      "defmodule HelloWeb.ProductController do",
    );

    await getTab("rust").click();
    await expect(terminal.getByRole("tabpanel")).toContainText("use actix_web::");
  });
});

test.describe("saving and resetting", () => {
  test("clicking 'save' button stores state in URL", async ({ page }) => {
    expect(page.url()).toBe("http://localhost:4173/");

    await page.getByRole("button", { name: "Save" }).click();

    expect(page.url()).toBe(
      "http://localhost:4173/?sugar=7&colors=6&sogginess=4&flavor=1&fruit=10&milk=0",
    );
  });

  test("clicking 'reset' button without saved recipe restores default recipe", async ({ page }) => {
    const sugarSlider = page.getByRole("slider", { name: "Sugar" });
    expect(sugarSlider).toHaveValue(`${defaultRecipe.sugar}`);

    await sugarSlider.press("ArrowRight");
    await expect(sugarSlider).toHaveValue(`${defaultRecipe.sugar + 1}`);

    await page.getByRole("button", { name: "Reset" }).click();

    await expect(sugarSlider).toHaveValue(`${defaultRecipe.sugar}`);
  });

  test("clicking 'reset' button with a saved recipe restores previously saved recipe", async ({
    page,
  }) => {
    const sugarSlider = page.getByRole("slider", { name: "Sugar" });
    await sugarSlider.press("ArrowRight");
    await page.getByRole("button", { name: "Save" }).click();

    await sugarSlider.press("ArrowRight");
    await sugarSlider.press("ArrowRight");
    await expect(sugarSlider).toHaveValue(`${defaultRecipe.sugar + 3}`);

    await page.getByRole("button", { name: "Reset" }).click();

    await expect(sugarSlider).toHaveValue(`${defaultRecipe.sugar + 1}`);
  });
});

test.describe("exporting", () => {
  test("page has export widget", async ({ page }) => {
    const exportWidget = page.getByRole("region", { name: "Export" });
    const exportSnippet = exportWidget.getByRole("code");
    await expect(exportWidget).toBeVisible();
    await expect(exportSnippet).toBeVisible();
  });
});
