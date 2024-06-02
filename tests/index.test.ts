import { expect, test, type Page } from "@playwright/test";

test.describe("index", () => {
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
    await expect(page.getByRole("combobox", { name: "Juice" })).toBeVisible();
    await expect(page.getByRole("combobox", { name: "Milk" })).toBeVisible();
  });

  test("has bowl with 16 cereals", async ({ page }) => {
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

    expect(clipboardContent).toEqual("#09080d");
  });

  test("changing an input changes cereal color", async ({ page, context }) => {
    async function getClipboardContent(page: Page) {
      const handle = await page.evaluateHandle(() => navigator.clipboard.readText());
      return await handle.jsonValue();
    }

    await context.grantPermissions(["clipboard-read", "clipboard-write"]);

    const redCereal = page.getByRole("button", { name: "red", exact: true });
    await redCereal.click();
    expect(await getClipboardContent(page)).toEqual("#e49097");

    // change sugar slider via keyboard navigation
    const sugarSlider = page.getByRole("slider", { name: "Sugar" });
    await sugarSlider.press("ArrowRight");

    await redCereal.click();
    expect(await getClipboardContent(page)).toEqual("#efb6b9");
  });

  test("has terminal with different tabs", async ({ page }) => {
    const terminal = page.getByRole("region", { name: "Terminal Preview", exact: true });
    await expect(terminal).toBeVisible();

    await expect(terminal.getByRole("tab")).toHaveCount(5);

    await terminal.getByRole("tab").filter({ hasText: "vitest" }).click();

    await expect(terminal.getByRole("tabpanel")).toContainText(
      "test.js > root loops color generator > pours milk into the bowl",
    );
  });

  test("clicking terminal tabs switches content", async ({ page }) => {
    const terminal = page.getByRole("region", { name: "Terminal Preview", exact: true });

    function getTab(tabName: string) {
      return terminal.getByRole("tab").filter({ hasText: tabName });
    }

    await getTab("screenfetch").click();
    // check that a part of that apple logo's ascii art is showing up
    await expect(terminal.getByRole("tabpanel")).toContainText(".:/++++++/::::/++++++/:`");

    await getTab("vitest").click();
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
  });

  test("clicking 'save' button stores state in URL", async ({ page }) => {
    expect(page.url()).toBe("http://localhost:4173/");

    await page.getByRole("button", { name: "Save" }).click();

    expect(page.url()).toBe(
      "http://localhost:4173/?sugar=7&colors=6&sogginess=2&flavor=1&juice=10&milk=0",
    );
  });
});
