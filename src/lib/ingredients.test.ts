import { describe, expect, it } from "vitest";
import { parseRecipeFromQueryString, defaultRecipe, validationRules } from "$lib/ingredients";

describe("ingredient parsing", () => {
  it("returns default recipe if no query params are given", () => {
    const recipe = parseRecipeFromQueryString(new URLSearchParams());
    expect(recipe).toEqual(defaultRecipe);
  });

  it("can handle unknown parameters", () => {
    const recipe = parseRecipeFromQueryString(new URLSearchParams("?foo=bar"));
    expect(recipe).toEqual(defaultRecipe);
  });

  it("parses uses missing values from default recipe", () => {
    const recipe = parseRecipeFromQueryString(new URLSearchParams("?sugar=1&sogginess=7"));
    expect(recipe.sugar).toBe(1);
    expect(recipe.sogginess).toBe(7);
    expect(recipe.milkAmount).toBe(defaultRecipe.milkAmount);
    expect(recipe.artificialColors).toBe(defaultRecipe.artificialColors);
    expect(recipe.juice).toBe(defaultRecipe.juice);
    expect(recipe.flavor).toBe(defaultRecipe.flavor);
  });

  describe("for sugar ingredient", () => {
    it("returns default value when string is given", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?sugar=someSugar"));
      expect(recipe.sugar).toBe(defaultRecipe.sugar);
    });

    it("returns max value when value is too large", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?sugar=999"));
      expect(recipe.sugar).toBe(validationRules.sugar.maxValue);
    });

    it("returns min value when value is too small", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?sugar=-1"));
      expect(recipe.sugar).toBe(validationRules.sugar.minValue);
    });

    it("parses valid value correctly", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?sugar=3"));
      expect(recipe.sugar).toBe(3);
    });
  });

  describe("for artificial colors ingredient", () => {
    it("returns default value when string is given", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?colors=some"));
      expect(recipe.artificialColors).toBe(defaultRecipe.artificialColors);
    });

    it("returns max value when value is too large", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?colors=999"));
      expect(recipe.artificialColors).toBe(validationRules.artificialColors.maxValue);
    });

    it("returns min value when value is too small", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?colors=-1"));
      expect(recipe.artificialColors).toBe(validationRules.artificialColors.minValue);
    });

    it("parses valid value correctly", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?colors=3"));
      expect(recipe.artificialColors).toBe(3);
    });
  });

  describe("for sogginess ingredient", () => {
    it("returns default value when string is given", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?sogginess=some"));
      expect(recipe.sogginess).toBe(defaultRecipe.sogginess);
    });

    it("returns max value when value is too large", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?sogginess=999"));
      expect(recipe.sogginess).toBe(validationRules.sogginess.maxValue);
    });

    it("returns min value when value is too small", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?sogginess=-1"));
      expect(recipe.sogginess).toBe(validationRules.sogginess.minValue);
    });

    it("parses valid value correctly", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?sogginess=3"));
      expect(recipe.sogginess).toBe(3);
    });
  });

  describe("for milk ingredient", () => {
    it("returns default value when string is given", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?milk=some"));
      expect(recipe.milkAmount).toBe(defaultRecipe.milkAmount);
    });

    it("returns max value when value is too large", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?milk=4"));
      expect(recipe.milkAmount).toBe(validationRules.milk.maxValue);
    });

    it("returns min value when value is too small", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?milk=-1"));
      expect(recipe.milkAmount).toBe(validationRules.milk.minValue);
    });

    it("parses valid value correctly", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?milk=3"));
      expect(recipe.milkAmount).toBe(3);
    });
  });

  describe("for juice ingredient", () => {
    it("returns default value when string is given", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?juice=some"));
      expect(recipe.juice).toBe(defaultRecipe.juice);
    });

    it("returns max value when value is too large", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?juice=15"));
      expect(recipe.juice).toBe(validationRules.juice.maxValue);
    });

    it("returns min value when value is too small", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?juice=-1"));
      expect(recipe.juice).toBe(validationRules.juice.minValue);
    });

    it("parses valid value correctly", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?juice=5"));
      expect(recipe.juice).toBe(5);
    });
  });

  describe("for flavor ingredient", () => {
    it("returns default value when string is given", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?flavor=some"));
      expect(recipe.flavor).toBe(defaultRecipe.flavor);
    });

    it("returns max value when value is too large", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?flavor=3"));
      expect(recipe.flavor).toBe(validationRules.flavor.maxValue);
    });

    it("returns min value when value is too small", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?flavor=-1"));
      expect(recipe.flavor).toBe(validationRules.flavor.minValue);
    });

    it("parses valid value correctly", () => {
      const recipe = parseRecipeFromQueryString(new URLSearchParams("?flavor=2"));
      expect(recipe.flavor).toBe(2);
    });
  });
});
