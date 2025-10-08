import { clamp } from "$lib/math";
import { type SelectOption } from "./selectOptions";

export enum MilkAmount {
  None,
  Splash,
  Glug,
  Cup,
}

export enum Flavor {
  Fruity = 0,
  Classic = 1,
  Intense = 2,
}

export enum Fruit {
  Cherry = 0,
  Tomato,
  Orange,
  Pineapple,
  Apple,
  Kiwi,
  Kale,
  Blueberry,
  Plum,
  Elderberry,
  Blackberry,
  Raspberry,
}

export const validationRules = {
  sugar: {
    name: "sugar",
    minValue: 1,
    maxValue: 10,
  },
  artificialColors: {
    name: "colors",
    minValue: 0,
    maxValue: 10,
  },
  sogginess: {
    name: "sogginess",
    minValue: 0,
    maxValue: 10,
  },
  fruit: {
    name: "fruit",
    minValue: Fruit.Cherry,
    maxValue: Fruit.Raspberry,
  },
  flavor: {
    name: "flavor",
    minValue: Flavor.Fruity,
    maxValue: Flavor.Intense,
  },
  milk: {
    name: "milk",
    minValue: MilkAmount.None,
    maxValue: MilkAmount.Cup,
  },
  fruitMix: {
    name: "fruitMix",
    minValue: 0,
    maxValue: 360,
  },
  preciseMilkAmount: {
    name: "preciseMilk",
    minValue: 0,
    maxValue: 100,
  },
};

export const milkSelectOptions: SelectOption[] = [
  { value: MilkAmount.None, label: "No milk" },
  { value: MilkAmount.Splash, label: "Just a splash" },
  { value: MilkAmount.Glug, label: "A good glug" },
  { value: MilkAmount.Cup, label: "Go all in!" },
];

export const flavorSelectOptions: SelectOption[] = [
  { value: Flavor.Fruity, label: "Fruity" },
  { value: Flavor.Classic, label: "Classic" },
  { value: Flavor.Intense, label: "Intense" },
];

export const fruitSelectOptions: SelectOption[] = [
  { value: Fruit.Cherry, label: "Cherry" },
  { value: Fruit.Tomato, label: "Tomato" },
  { value: Fruit.Orange, label: "Orange" },
  { value: Fruit.Pineapple, label: "Pineapple" },
  { value: Fruit.Apple, label: "Apple" },
  { value: Fruit.Kiwi, label: "Kiwi" },
  { value: Fruit.Kale, label: "Kale" },
  { value: Fruit.Blueberry, label: "Blueberry" },
  { value: Fruit.Plum, label: "Plum" },
  { value: Fruit.Elderberry, label: "Elderberry" },
  { value: Fruit.Blackberry, label: "Blackberry" },
  { value: Fruit.Raspberry, label: "Raspberry" },
];

export type Recipe = {
  milkAmount: MilkAmount;
  artificialColors: number;
  flavor: Flavor;
  sugar: number;
  fruit: Fruit;
  sogginess: number;
  fruitMix?: number;
  preciseMilkAmount?: number;
};

export const defaultRecipe: Recipe = {
  milkAmount: MilkAmount.None,
  artificialColors: 6,
  flavor: Flavor.Classic,
  sugar: 7,
  fruit: Fruit.Blackberry,
  sogginess: 4,
};

function sanitize(value: string | number | null, min: number, max: number): number | undefined {
  if (!value) {
    return undefined;
  }

  let n = value;
  if (typeof n === "string") {
    n = parseInt(n);
  }

  if (isNaN(n)) {
    return undefined;
  }

  return clamp(n, min, max);
}

function sanitizeSugar(value: string | number | null) {
  return (
    sanitize(value, validationRules.sugar.minValue, validationRules.sugar.maxValue) ??
    defaultRecipe.sugar
  );
}

function sanitizeArtificialColors(value: string | number | null) {
  return (
    sanitize(
      value,
      validationRules.artificialColors.minValue,
      validationRules.artificialColors.maxValue,
    ) ?? defaultRecipe.artificialColors
  );
}

function sanitizeFlavor(value: string | number | null) {
  return (
    sanitize(value, validationRules.flavor.minValue, validationRules.flavor.maxValue) ??
    defaultRecipe.flavor
  );
}

function sanitizeSogginess(value: string | number | null) {
  return (
    sanitize(value, validationRules.sogginess.minValue, validationRules.sogginess.maxValue) ??
    defaultRecipe.sogginess
  );
}

function sanitizeFruit(value: string | number | null) {
  return (
    sanitize(value, validationRules.fruit.minValue, validationRules.fruit.maxValue) ??
    defaultRecipe.fruit
  );
}

function sanitizeMilk(value: string | number | null) {
  return (
    sanitize(value, validationRules.milk.minValue, validationRules.milk.maxValue) ??
    defaultRecipe.milkAmount
  );
}

function sanitizeFruitMix(value: string | number | null) {
  return sanitize(value, validationRules.fruitMix.minValue, validationRules.fruitMix.maxValue);
}

function sanitizePreciseMilkAmount(value: string | number | null) {
  return sanitize(
    value,
    validationRules.preciseMilkAmount.minValue,
    validationRules.preciseMilkAmount.maxValue,
  );
}

export function toQueryString(recipe: Recipe): string {
  const urlParams = new URLSearchParams({
    [validationRules.sugar.name]: `${recipe.sugar}`,
    [validationRules.artificialColors.name]: `${recipe.artificialColors}`,
    [validationRules.sogginess.name]: `${recipe.sogginess}`,
    [validationRules.flavor.name]: `${recipe.flavor}`,
    [validationRules.fruit.name]: `${recipe.fruit}`,
    [validationRules.milk.name]: `${recipe.milkAmount}`,
  });

  if (recipe.fruitMix) {
    urlParams.append(validationRules.fruitMix.name, `${recipe.fruitMix}`);
  }

  if (recipe.preciseMilkAmount) {
    urlParams.append(validationRules.preciseMilkAmount.name, `${recipe.preciseMilkAmount}`);
  }

  return urlParams.toString();
}

export function fromQueryString(searchParams: URLSearchParams): Recipe {
  if (searchParams.size === 0) {
    return structuredClone(defaultRecipe);
  }

  return {
    sugar: sanitizeSugar(searchParams.get(validationRules.sugar.name)),
    artificialColors: sanitizeArtificialColors(
      searchParams.get(validationRules.artificialColors.name),
    ),
    sogginess: sanitizeSogginess(searchParams.get(validationRules.sogginess.name)),
    milkAmount: sanitizeMilk(searchParams.get(validationRules.milk.name)),
    fruit: sanitizeFruit(searchParams.get(validationRules.fruit.name)),
    flavor: sanitizeFlavor(searchParams.get(validationRules.flavor.name)),
    fruitMix: sanitizeFruitMix(searchParams.get(validationRules.fruitMix.name)),
    preciseMilkAmount: sanitizePreciseMilkAmount(
      searchParams.get(validationRules.preciseMilkAmount.name),
    ),
  };
}
