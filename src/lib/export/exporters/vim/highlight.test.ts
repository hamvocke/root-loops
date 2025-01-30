import { describe, expect, it } from "vitest";
import { type HighlightGroup, hi } from "./highlight";

describe("hi()", () => {
  describe("in ANSI mode", () => {
    const mode = "ANSI";

    it("uses default values when none are given", () => {
      const highlight: HighlightGroup = { group: "NonText" };

      const expected = "hi NonText ctermbg=NONE ctermfg=NONE cterm=NONE";
      expect(hi(highlight, mode)).toBe(expected);
    });

    it("uses given values if present", () => {
      const highlight: HighlightGroup = {
        group: "NonText",
        bg: "bg",
        fg: "fg",
        style: "underline,bold,italic",
      };

      const expected = "hi NonText ctermbg=bg ctermfg=fg cterm=underline,bold,italic";
      expect(hi(highlight, mode)).toBe(expected);
    });
  });
});
