import { test, expect } from "@playwright/test";

test.describe("export", () => {
  test("navigates to JSON export page from main page", async ({ page }) => {
    await page.goto("/");

    const responsePromise = page.waitForResponse(
      "**/export?format=json&sugar=7&colors=6&sogginess=4&flavor=1&fruit=10&milk=0",
    );
    const exportLink = page.getByRole("button", { name: "Export" });
    await exportLink.click();

    await page.getByRole("link", { name: "JSON" }).click();

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

  test("exports to json when format is not specified", async ({ page }) => {
    const response = await page.goto(
      "/export?sugar=7&colors=6&sogginess=4&flavor=1&fruit=10&milk=0",
    );

    expect(response).not.toBeNull();
    expect(await response!.headerValue("Content-Type")).toBe("application/json");
  });

  test("navigates to Alacritty export page from main page", async ({ page }) => {
    await page.goto("/");

    const responsePromise = page.waitForResponse(
      "**/export?format=alacritty&sugar=7&colors=6&sogginess=4&flavor=1&fruit=10&milk=0",
    );
    const exportLink = page.getByRole("button", { name: "Export" });
    await exportLink.click();

    await page.getByRole("link", { name: "Alacritty" }).click();

    const expectedResponseBody = `
# Copy the configuration below and add it to your
# ~/.config/alacritty/alacritty.toml file

# Colors (Root Loops)
# via rootloops.sh

[colors.primary]
background = '#0a0611'
foreground = '#b2a2d1'

[colors.cursor]
text = '#0a0611'
cursor = '#f2eff8'

[colors.normal]
black = '#0a0611'
red = '#d97780'
green = '#7aa860'
yellow = '#bc904f'
blue = '#6b9bd9'
magenta = '#b77ed1'
cyan = '#52a9a9'
white = '#b2a2d1'

[colors.bright]
black = '#584875'
red = '#e6949a'
green = '#8ebf73'
yellow = '#d3a563'
blue = '#88b1e5'
magenta = '#c899de'
cyan = '#63c0bf'
white = '#f2eff8'
`;

    const response = await responsePromise;

    expect(await response.headerValue("Content-Type")).toBe("text/plain");
    expect((await response.body()) + "").toEqual(expectedResponseBody);
  });

  test("navigates to Windows Terminal export page from main page", async ({ page }) => {
    await page.goto("/");

    const responsePromise = page.waitForResponse(
      "**/export?format=windows-terminal&sugar=7&colors=6&sogginess=4&flavor=1&fruit=10&milk=0",
    );
    const exportLink = page.getByRole("button", { name: "Export" });
    await exportLink.click();

    await page.getByRole("link", { name: "Windows Terminal" }).click();

    const expectedResponseBody = {
      name: "Root Loops",
      cursorColor: "#f2eff8",
      selectionBackground: "#584875",
      background: "#0a0611",
      foreground: "#b2a2d1",
      black: "#0a0611",
      blue: "#6b9bd9",
      cyan: "#52a9a9",
      green: "#7aa860",
      purple: "#b77ed1",
      red: "#d97780",
      white: "#b2a2d1",
      yellow: "#bc904f",
      brightBlack: "#584875",
      brightBlue: "#88b1e5",
      brightCyan: "#63c0bf",
      brightGreen: "#8ebf73",
      brightPurple: "#c899de",
      brightRed: "#e6949a",
      brightWhite: "#f2eff8",
      brightYellow: "#d3a563",
    };

    const response = await responsePromise;

    expect(await response.headerValue("Content-Type")).toBe("application/json");
    expect(await response.json()).toEqual(expectedResponseBody);
  });
});
