import { describe, expect, it } from "vitest";
import { normalize, clamp } from "./math";

describe("clamp()", () => {
  it.each([
    { actual: 0, min: 1, max: 2, expected: 1 },
    { actual: 3, min: 1, max: 2, expected: 2 },
    { actual: 1, min: 1, max: 1, expected: 1 },
    { actual: 1, min: 0, max: 2, expected: 1 },
  ])("clamps correctly", ({ actual, min, max, expected }) => {
    expect(clamp(actual, min, max)).toBe(expected);
  });
});

describe("normalize()", () => {
  it.each([
    { value: 2, oldMin: 1, oldMax: 2, newMin: 10, newMax: 20, expected: 20 },
    { value: 1, oldMin: 1, oldMax: 2, newMin: 1, newMax: 20, expected: 1 },
    { value: 2, oldMin: 1, oldMax: 2, newMin: 1, newMax: 20, expected: 20 },
    { value: 10, oldMin: 0, oldMax: 20, newMin: 1, newMax: 3, expected: 2 },
  ])("normalizes correctly", ({ value, oldMin, oldMax, newMin, newMax, expected }) => {
    expect(normalize(value, oldMin, oldMax, newMin, newMax)).toBe(expected);
  });
});
