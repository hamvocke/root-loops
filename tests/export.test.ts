import { test, expect } from "@playwright/test";

test.describe("export", () => {
  test("exports json format by default", async ({ page }) => {
    await page.goto("/");

    const responsePromise = page.waitForResponse(
      "**/export?format=json&sugar=7&colors=6&sogginess=4&flavor=1&fruit=10&milk=0",
    );
    const exportLink = page.getByRole("link", { name: "Export" });
    await exportLink.click();

    const expectedResponseBody = {
      source: "rootloops.sh",
      hex: {
        background: "#0a0611",
        foreground: "#b2a2d1",
        text: "#0a0611",
        cursor: "#f2eff8",
        black: "#0a0611",
        red: "#d97780",
        green: "#7aa860",
        yellow: "#bc904f",
        blue: "#6b9bd9",
        magenta: "#b77ed1",
        cyan: "#52a9a9",
        white: "#b2a2d1",
        brightBlack: "#584875",
        brightRed: "#e6949a",
        brightGreen: "#8ebf73",
        brightYellow: "#d3a563",
        brightBlue: "#88b1e5",
        brightMagenta: "#c899de",
        brightCyan: "#63c0bf",
        brightWhite: "#f2eff8",
      },
    };

    const response = await responsePromise;

    expect(await response.headerValue("Content-Type")).toBe("application/json");
    expect(await response.json()).toEqual(expectedResponseBody);
  });
});
