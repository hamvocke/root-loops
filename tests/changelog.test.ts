import { expect, test } from "@playwright/test";

test.describe("changelog", () => {
  test("can navigate to changelog page from index", async ({ page }) => {
    await page.goto("/");

    const helpLink = page.getByRole("link", { name: "What's new?" });
    await helpLink.click();

    await page.waitForURL("**/changelog");
  });

  test("renders Changelog", async ({ page }) => {
    await page.goto("/changelog");

    await expect(
      page.getByRole("heading", {
        name: "Changelog",
      }),
    ).toBeVisible();
  });

  test("has backlink that takes us back to the index page", async ({ page }) => {
    await page.goto("/changelog");

    const goBackLink = page.getByRole("link", { name: "Go back" });
    await goBackLink.click();

    await page.waitForURL("**/");
  });
});
