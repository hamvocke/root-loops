import { expect, test } from "@playwright/test";

test.describe("index", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("shows heading", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Root Loops", exact: true })).toBeVisible();
  });

  test("shows all range sliders", async ({ page }) => {
    await expect(page.getByRole("slider", { name: "Milk" })).toBeVisible();
    await expect(page.getByRole("slider", { name: "Flavor" })).toBeVisible();
    await expect(page.getByRole("slider", { name: "Sugar" })).toBeVisible();
    await expect(page.getByRole("slider", { name: "Artificial Colors" })).toBeVisible();
    await expect(page.getByRole("slider", { name: "Juice" })).toBeVisible();
    await expect(page.getByRole("slider", { name: "Sogginess" })).toBeVisible();
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

  test("has terminal with different tabs", async ({ page }) => {
    const terminal = page.getByRole("region", { name: "Terminal Preview", exact: true });
    await expect(terminal).toBeVisible();

    await expect(terminal.getByRole("tab")).toHaveCount(5);

    await terminal.getByRole("tab").filter({ hasText: "vitest" }).click();

    await expect(terminal.getByRole("tabpanel")).toContainText(
      "test.js > root loops color generator > pours milk into the bowl",
    );
  });
});
