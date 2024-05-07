import { describe, expect, it } from "vitest";
import { equalHueDistance, equalLightnessDistance, normalizeChroma } from "./colors";

describe("equalHueDistance()", () => {
  it("generates colors with equal hue distance", () => {
    const colors = equalHueDistance(6);

    expect(colors[0].h).toBe(0);
    expect(colors[1].h).toBe(60);
    expect(colors[2].h).toBe(120);
    expect(colors[3].h).toBe(180);
    expect(colors[4].h).toBe(240);
    expect(colors[5].h).toBe(300);
  });

  it("uses lightness parameter to determine lightness", () => {
    const colors = equalHueDistance(2, 0.2,);

    expect(colors[0].l).toBe(0.2);
    expect(colors[1].l).toBe(0.2);
  });

  it("uses chroma parameter to determine chroma", () => {
    const colors = equalHueDistance(2, 0.2, 0.1);

    expect(colors[0].c).toBe(0.1);
    expect(colors[1].c).toBe(0.1);
  });
});

describe("equalLightnessDistance()", () => {
  it("generates colors with equal lightness distance", () => {
    const colors = equalLightnessDistance(5);

    expect(colors[0].l).toBe(0);
    expect(colors[1].l).toBe(0.25);
    expect(colors[2].l).toBe(0.5);
    expect(colors[3].l).toBe(0.75);
    expect(colors[4].l).toBe(1);
  });

  it("uses chroma parameter to determine chroma", () => {
    const colors = equalLightnessDistance(2, 0.15);

    expect(colors[0].c).toBe(0.15);
    expect(colors[1].c).toBe(0.15);
  });
});

describe("normalizeChroma()", () => {
  it.each([
    { val: 1, expected: 0.01 },
    { val: 2, expected: 0.04 },
    { val: 3, expected: 0.06 },
    { val: 5, expected: 0.1 },
    { val: 10, expected: 0.2 },
  ])("normalizes 1-10 to reasonable chroma values ($val to $expected)", ({ val, expected }) => {
    expect(normalizeChroma(val)).toBe(expected);
  });
});
