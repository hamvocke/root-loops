import { describe, expect, it } from "vitest";
import { fromQueryString, defaultRecipe, validationRules, toQueryString } from "$lib/ingredients";

describe("ingredient parsing", () => {
  it("returns default recipe if no query params are given", () => {
    const recipe = fromQueryString(new URLSearchParams());
    expect(recipe).toEqual(defaultRecipe);
  });

  it("can handle unknown parameters", () => {
    const recipe = fromQueryString(new URLSearchParams("?foo=bar"));
    expect(recipe).toEqual(defaultRecipe);
  });

  it("uses missing values from default recipe", () => {
    const recipe = fromQueryString(new URLSearchParams("?sugar=1&sogginess=7"));
    expect(recipe.sugar).toBe(1);
    expect(recipe.sogginess).toBe(7);
    expect(recipe.milkAmount).toBe(defaultRecipe.milkAmount);
    expect(recipe.artificialColors).toBe(defaultRecipe.artificialColors);
    expect(recipe.fruit).toBe(defaultRecipe.fruit);
    expect(recipe.flavor).toBe(defaultRecipe.flavor);
  });

  describe("for sugar ingredient", () => {
    it("returns default value when string is given", () => {
      const recipe = fromQueryString(new URLSearchParams("?sugar=someSugar"));
      expect(recipe.sugar).toBe(defaultRecipe.sugar);
    });

    it("returns max value when value is too large", () => {
      const recipe = fromQueryString(new URLSearchParams("?sugar=999"));
      expect(recipe.sugar).toBe(validationRules.sugar.maxValue);
    });

    it("returns min value when value is too small", () => {
      const recipe = fromQueryString(new URLSearchParams("?sugar=-1"));
      expect(recipe.sugar).toBe(validationRules.sugar.minValue);
    });

    it("parses valid value correctly", () => {
      const recipe = fromQueryString(new URLSearchParams("?sugar=3"));
      expect(recipe.sugar).toBe(3);
    });
  });

  describe("for artificial colors ingredient", () => {
    it("returns default value when string is given", () => {
      const recipe = fromQueryString(new URLSearchParams("?colors=some"));
      expect(recipe.artificialColors).toBe(defaultRecipe.artificialColors);
    });

    it("returns max value when value is too large", () => {
      const recipe = fromQueryString(new URLSearchParams("?colors=999"));
      expect(recipe.artificialColors).toBe(validationRules.artificialColors.maxValue);
    });

    it("returns min value when value is too small", () => {
      const recipe = fromQueryString(new URLSearchParams("?colors=-1"));
      expect(recipe.artificialColors).toBe(validationRules.artificialColors.minValue);
    });

    it("parses valid value correctly", () => {
      const recipe = fromQueryString(new URLSearchParams("?colors=3"));
      expect(recipe.artificialColors).toBe(3);
    });
  });

  describe("for sogginess ingredient", () => {
    it("returns default value when string is given", () => {
      const recipe = fromQueryString(new URLSearchParams("?sogginess=some"));
      expect(recipe.sogginess).toBe(defaultRecipe.sogginess);
    });

    it("returns max value when value is too large", () => {
      const recipe = fromQueryString(new URLSearchParams("?sogginess=999"));
      expect(recipe.sogginess).toBe(validationRules.sogginess.maxValue);
    });

    it("returns min value when value is too small", () => {
      const recipe = fromQueryString(new URLSearchParams("?sogginess=-1"));
      expect(recipe.sogginess).toBe(validationRules.sogginess.minValue);
    });

    it("parses valid value correctly", () => {
      const recipe = fromQueryString(new URLSearchParams("?sogginess=3"));
      expect(recipe.sogginess).toBe(3);
    });
  });

  describe("for milk ingredient", () => {
    it("returns default value when string is given", () => {
      const recipe = fromQueryString(new URLSearchParams("?milk=some"));
      expect(recipe.milkAmount).toBe(defaultRecipe.milkAmount);
    });

    it("returns max value when value is too large", () => {
      const recipe = fromQueryString(new URLSearchParams("?milk=4"));
      expect(recipe.milkAmount).toBe(validationRules.milk.maxValue);
    });

    it("returns min value when value is too small", () => {
      const recipe = fromQueryString(new URLSearchParams("?milk=-1"));
      expect(recipe.milkAmount).toBe(validationRules.milk.minValue);
    });

    it("parses valid value correctly", () => {
      const recipe = fromQueryString(new URLSearchParams("?milk=3"));
      expect(recipe.milkAmount).toBe(3);
    });
  });

  describe("for fruit ingredient", () => {
    it("returns default value when string is given", () => {
      const recipe = fromQueryString(new URLSearchParams("?fruit=some"));
      expect(recipe.fruit).toBe(defaultRecipe.fruit);
    });

    it("returns max value when value is too large", () => {
      const recipe = fromQueryString(new URLSearchParams("?fruit=15"));
      expect(recipe.fruit).toBe(validationRules.fruit.maxValue);
    });

    it("returns min value when value is too small", () => {
      const recipe = fromQueryString(new URLSearchParams("?fruit=-1"));
      expect(recipe.fruit).toBe(validationRules.fruit.minValue);
    });

    it("parses valid value correctly", () => {
      const recipe = fromQueryString(new URLSearchParams("?fruit=5"));
      expect(recipe.fruit).toBe(5);
    });
  });

  describe("for flavor ingredient", () => {
    it("returns default value when string is given", () => {
      const recipe = fromQueryString(new URLSearchParams("?flavor=some"));
      expect(recipe.flavor).toBe(defaultRecipe.flavor);
    });

    it("returns max value when value is too large", () => {
      const recipe = fromQueryString(new URLSearchParams("?flavor=3"));
      expect(recipe.flavor).toBe(validationRules.flavor.maxValue);
    });

    it("returns min value when value is too small", () => {
      const recipe = fromQueryString(new URLSearchParams("?flavor=-1"));
      expect(recipe.flavor).toBe(validationRules.flavor.minValue);
    });

    it("parses valid value correctly", () => {
      const recipe = fromQueryString(new URLSearchParams("?flavor=2"));
      expect(recipe.flavor).toBe(2);
    });
  });

  describe("for fruitMix ingredient", () => {
    it("returns default value when string is given", () => {
      const recipe = fromQueryString(new URLSearchParams("?fruitMix=some"));
      expect(recipe.fruitMix).toBe(undefined);
    });

    it("returns max value when value is too large", () => {
      const recipe = fromQueryString(new URLSearchParams("?fruitMix=361"));
      expect(recipe.fruitMix).toBe(validationRules.fruitMix.maxValue);
    });

    it("returns min value when value is too small", () => {
      const recipe = fromQueryString(new URLSearchParams("?fruitMix=-1"));
      expect(recipe.fruitMix).toBe(validationRules.fruitMix.minValue);
    });

    it("parses valid value correctly", () => {
      const recipe = fromQueryString(new URLSearchParams("?fruitMix=111"));
      expect(recipe.fruitMix).toBe(111);
    });
  });
  describe("for preciseMilkAmount ingredient", () => {
    it("returns default value when string is given", () => {
      const recipe = fromQueryString(new URLSearchParams("?preciseMilk=some"));
      expect(recipe.preciseMilkAmount).toBe(undefined);
    });

    it("returns max value when value is too large", () => {
      const recipe = fromQueryString(new URLSearchParams("?preciseMilk=101"));
      expect(recipe.preciseMilkAmount).toBe(validationRules.preciseMilkAmount.maxValue);
    });

    it("returns min value when value is too small", () => {
      const recipe = fromQueryString(new URLSearchParams("?preciseMilk=-1"));
      expect(recipe.preciseMilkAmount).toBe(validationRules.preciseMilkAmount.minValue);
    });

    it("parses valid value correctly", () => {
      const recipe = fromQueryString(new URLSearchParams("?preciseMilk=80"));
      expect(recipe.preciseMilkAmount).toBe(80);
    });
  });
});

describe("recipe serialization", () => {
  it("should convert to URL params", () => {
    const recipe = defaultRecipe;

    const queryString = toQueryString(recipe);

    const expected = `sugar=${recipe.sugar}&colors=${recipe.artificialColors}&sogginess=${recipe.sogginess}&flavor=${recipe.flavor}&fruit=${recipe.fruit}&milk=${recipe.milkAmount}`;

    expect(queryString).toBe(expected);
  });

  it("should only include optional URL params if explicitly specified", () => {
    const recipe = defaultRecipe;
    recipe.fruitMix = 350;
    recipe.preciseMilkAmount = 78;

    const queryString = toQueryString(recipe);

    const expected = `sugar=${recipe.sugar}&colors=${recipe.artificialColors}&sogginess=${recipe.sogginess}&flavor=${recipe.flavor}&fruit=${recipe.fruit}&milk=${recipe.milkAmount}&fruitMix=${recipe.fruitMix}&preciseMilk=${recipe.preciseMilkAmount}`;

    expect(queryString).toBe(expected);
  });
});
