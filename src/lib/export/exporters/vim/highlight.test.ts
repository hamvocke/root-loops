import { describe, expect, it } from "vitest";
import {
  type HighlightGroup,
  type ColorDefinition,
  hi,
  type LinkedHighlightGroup,
  renderLinkedHighlights,
} from "./highlight";

describe("hi()", () => {
  const green: ColorDefinition = { hex: "#00ff00", ansi: 2 };
  const black: ColorDefinition = { hex: "#000000", ansi: 0 };

  describe("in ANSI mode", () => {
    const mode = "ANSI";

    it("uses provided values only", () => {
      const highlight: HighlightGroup = { group: "NonText", fg: "fg" };

      const expected = "hi NonText ctermfg=fg";
      expect(hi(highlight, mode)).toBe(expected);
    });

    it("uses all given values if present", () => {
      const highlight: HighlightGroup = {
        group: "NonText",
        bg: "bg",
        fg: "fg",
        style: "underline,bold,italic",
      };

      const expected = "hi NonText ctermbg=bg ctermfg=fg cterm=underline,bold,italic";
      expect(hi(highlight, mode)).toBe(expected);
    });

    it("uses ANSI color definitions when passing a ColorDefinition", () => {
      const highlight: HighlightGroup = { group: "String", fg: green, bg: black };

      const expected = "hi String ctermbg=0 ctermfg=2";
      expect(hi(highlight, mode)).toBe(expected);
    });
  });

  describe("in Truecolor mode", () => {
    const mode = "Truecolor";

    it("uses provided values only", () => {
      const highlight: HighlightGroup = { group: "NonText", fg: "fg" };

      const expected = "hi NonText ctermfg=fg guifg=fg";

      expect(hi(highlight, mode)).toBe(expected);
    });

    it("uses given values if present", () => {
      const highlight: HighlightGroup = {
        group: "Comment",
        fg: "fg",
        bg: "bg",
        style: "underline",
      };

      const expected =
        "hi Comment ctermbg=bg ctermfg=fg cterm=underline guibg=bg guifg=fg gui=underline";

      expect(hi(highlight, mode)).toBe(expected);
    });

    it("uses Hex color definitions when passing a ColorDefinition", () => {
      const highlight: HighlightGroup = { group: "String", fg: green, bg: black };

      const expected = "hi String ctermbg=0 ctermfg=2 guibg=#000000 guifg=#00ff00";
      expect(hi(highlight, mode)).toBe(expected);
    });

    it("uses undercurl param", () => {
      const highlight: HighlightGroup = {
        group: "Comment",
        fg: "fg",
        bg: "bg",
        style: "underline",
        undercurl: green,
      };

      const expected =
        "hi Comment ctermbg=bg ctermfg=fg cterm=underline guibg=bg guifg=fg gui=underline guisp=#00ff00";

      expect(hi(highlight, mode)).toBe(expected);
    });
  });

  describe("renderLinkedHighlights()", () => {
    it("links group to targetGroup", () => {
      const links: LinkedHighlightGroup[] = [
        { group: "Number", targetGroup: "Constant" },
        { group: "String", targetGroup: "Comment" },
      ];
      const expected = "hi link Number Constant\nhi link String Comment";
      expect(renderLinkedHighlights(links)).toBe(expected);
    });
  });
});
