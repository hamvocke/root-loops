import { describe, expect, it } from "vitest";
import {
  equalHueDistance,
  equalLightnessDistance,
  normalizeChroma,
  normalizeLightness,
} from "./colors";

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
    const colors = equalHueDistance(2, 0.2);

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

  it("uses hue parameter to determine hue", () => {
    const colors = equalLightnessDistance(2, 0.15, 180);

    expect(colors[0].h).toBe(180);
    expect(colors[1].h).toBe(180);
  });
});

describe("normalizeChroma()", () => {
  it.each([
    { val: 1, expected: 0.03 },
    { val: 2, expected: 0.06 },
    { val: 3, expected: 0.09 },
    { val: 5, expected: 0.15 },
    { val: 10, expected: 0.3 },
  ])("normalizes 1-10 to reasonable chroma values ($val to $expected)", ({ val, expected }) => {
    expect(normalizeChroma(val)).toBe(expected);
  });

  it("doesn't allow values below 0", () => {
    expect(normalizeChroma(0)).toBe(0.0);
    expect(normalizeChroma(-1)).toBe(0.0);
    expect(normalizeChroma(-100)).toBe(0.0);
  });

  it("doesn't allow values larger than 10", () => {
    expect(normalizeChroma(11)).toBe(0.3);
    expect(normalizeChroma(12)).toBe(0.3);
    expect(normalizeChroma(100)).toBe(0.3);
  });
});

describe("normalizeLightness()", () => {
  it.each([
    { val: 1, expected: 0.1 },
    { val: 2, expected: 0.2 },
    { val: 3, expected: 0.3 },
    { val: 5, expected: 0.5 },
    { val: 9, expected: 0.9 },
  ])("normalizes 1-9 to reasonable lightness values ($val to $expected)", ({ val, expected }) => {
    expect(normalizeLightness(val)).toBe(expected);
  });

  it("doesn't allow values below 1", () => {
    expect(normalizeLightness(0)).toBe(0.1);
    expect(normalizeLightness(-1)).toBe(0.1);
    expect(normalizeLightness(-100)).toBe(0.1);
  });

  it("doesn't allow values larger than 9", () => {
    expect(normalizeLightness(10)).toBe(0.9);
    expect(normalizeLightness(11)).toBe(0.9);
    expect(normalizeLightness(100)).toBe(0.9);
  });
});
