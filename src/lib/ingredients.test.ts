import { describe, expect, it } from "vitest";
import {
  sanitizeSugar,
  sanitizeArtificialColors,
  defaultRecipe,
  validationRules,
  sanitizeSogginess,
  sanitizeFlavor,
  Flavor,
  sanitizeJuice,
  Juice,
  sanitizeMilk,
  MilkAmount,
} from "$lib/ingredients";

describe("ingredient sanitization", () => {
  describe("for sugar ingredient", () => {
    it("returns default value when string is given", () => {
      expect(sanitizeSugar("some string")).toBe(defaultRecipe.sugar);
    });

    it("returns max value when value is too large", () => {
      expect(sanitizeSugar(999)).toBe(validationRules.sugar.maxValue);
    });

    it("returns min value when value is too small", () => {
      expect(sanitizeSugar(-1)).toBe(validationRules.sugar.minValue);
    });

    it("returns default value when no value is given", () => {
      expect(sanitizeSugar(null)).toBe(defaultRecipe.sugar);
    });

    it("returns given value when in numeric range", () => {
      expect(sanitizeSugar(5)).toBe(5);
    });
  });

  describe("for artificial colors ingredient", () => {
    it("returns default value when string is given", () => {
      expect(sanitizeArtificialColors("some string")).toBe(defaultRecipe.artificialColors);
    });

    it("returns max value when value is too large", () => {
      expect(sanitizeArtificialColors(999)).toBe(validationRules.artificialColors.maxValue);
    });

    it("returns min value when value is too small", () => {
      expect(sanitizeArtificialColors(-1)).toBe(validationRules.artificialColors.minValue);
    });

    it("returns default value when no value is given", () => {
      expect(sanitizeArtificialColors(null)).toBe(defaultRecipe.artificialColors);
    });

    it("returns given value when in numeric range", () => {
      expect(sanitizeArtificialColors(2)).toBe(2);
    });
  });

  describe("for sogginess ingredient", () => {
    it("returns default value when string is given", () => {
      expect(sanitizeSogginess("some string")).toBe(defaultRecipe.sogginess);
    });

    it("returns max value when value is too large", () => {
      expect(sanitizeSogginess(999)).toBe(validationRules.sogginess.maxValue);
    });

    it("returns min value when value is too small", () => {
      expect(sanitizeSogginess(-1)).toBe(validationRules.sogginess.minValue);
    });

    it("returns default value when no value is given", () => {
      expect(sanitizeSogginess(null)).toBe(defaultRecipe.sogginess);
    });

    it("returns given value when in numeric range", () => {
      expect(sanitizeSogginess(6)).toBe(6);
    });
  });

  describe("for flavor ingredient", () => {
    it("returns default value when string is given", () => {
      expect(sanitizeFlavor("some string")).toBe(defaultRecipe.flavor);
    });

    it("returns max value when value is too large", () => {
      expect(sanitizeFlavor(999)).toBe(validationRules.flavor.maxValue);
    });

    it("returns min value when value is too small", () => {
      expect(sanitizeFlavor(-1)).toBe(validationRules.flavor.minValue);
    });

    it("returns default value when no value is given", () => {
      expect(sanitizeFlavor(null)).toBe(defaultRecipe.flavor);
    });

    it("returns given value when in right range", () => {
      expect(sanitizeFlavor(Flavor.Unicorn)).toBe(Flavor.Unicorn);
    });
  });

  describe("for juice ingredient", () => {
    it("returns default value when string is given", () => {
      expect(sanitizeJuice("some string")).toBe(defaultRecipe.juice);
    });

    it("returns max value when value is too large", () => {
      expect(sanitizeJuice(999)).toBe(validationRules.juice.maxValue);
    });

    it("returns min value when value is too small", () => {
      expect(sanitizeJuice(-1)).toBe(validationRules.juice.minValue);
    });

    it("returns default value when no value is given", () => {
      expect(sanitizeJuice(null)).toBe(defaultRecipe.juice);
    });

    it("returns given value when in right range", () => {
      expect(sanitizeJuice(Juice.Kale)).toBe(Juice.Kale);
    });
  });

  describe("for milk ingredient", () => {
    it("returns default value when string is given", () => {
      expect(sanitizeMilk("some string")).toBe(defaultRecipe.milkAmount);
    });

    it("returns max value when value is too large", () => {
      expect(sanitizeMilk(999)).toBe(validationRules.milk.maxValue);
    });

    it("returns min value when value is too small", () => {
      expect(sanitizeMilk(-1)).toBe(validationRules.milk.minValue);
    });

    it("returns default value when no value is given", () => {
      expect(sanitizeMilk(null)).toBe(defaultRecipe.milkAmount);
    });

    it("returns given value when in right range", () => {
      expect(sanitizeMilk(MilkAmount.Glug)).toBe(MilkAmount.Glug);
    });
  });
});
