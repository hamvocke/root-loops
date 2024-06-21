import { expect, test } from "@playwright/test";

test.describe("help", () => {
  test("can navigate to help page from index", async ({ page }) => {
    await page.goto("/");

    const helpLink = page.getByRole("link", { name: "Help" });
    await helpLink.click();

    await page.waitForURL("**/help");
  });

  test("renders FAQ", async ({ page }) => {
    await page.goto("/help");

    await expect(
      page.getByRole("heading", {
        name: "Your own terminal color scheme, as simple as making a bowl of cereal",
      }),
    ).toBeVisible();
  });

  test("shows heading", async ({ page }) => {
    await page.goto("/help");

    await expect(page.getByRole("heading", { name: "Root Loops", exact: true })).toBeVisible();
  });

  test("has backlink that takes us back to the index page", async ({ page }) => {
    await page.goto("/help");

    const goBackLink = page.getByRole("link", { name: "Go back" });
    await goBackLink.click();

    await page.waitForURL("**/");
  });
});
