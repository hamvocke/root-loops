import { describe, expect, it } from "vitest";
import { normalizeChroma } from "./colors";

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
