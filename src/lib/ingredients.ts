import { clamp } from "$lib/math";

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

export enum Juice {
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
    minValue: 1,
    maxValue: 9,
  },
  artificialColors: {
    minValue: 0,
    maxValue: 10,
  },
  sogginess: {
    minValue: 0,
    maxValue: 10,
  },
  juice: {
    minValue: Juice.Cherry,
    maxValue: Juice.Raspberry,
  },
  flavor: {
    minValue: Flavor.Fruity,
    maxValue: Flavor.Intense,
  },
  milk: {
    minValue: MilkAmount.None,
    maxValue: MilkAmount.Cup,
  },
};

export type SelectOption = {
  value: number;
  label: string;
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

export const juiceSelectOptions: SelectOption[] = [
  { value: Juice.Cherry, label: "Cherry" },
  { value: Juice.Tomato, label: "Tomato" },
  { value: Juice.Orange, label: "Orange" },
  { value: Juice.Pineapple, label: "Pineapple" },
  { value: Juice.Apple, label: "Apple" },
  { value: Juice.Kiwi, label: "Kiwi" },
  { value: Juice.Kale, label: "Kale" },
  { value: Juice.Blueberry, label: "Blueberry" },
  { value: Juice.Plum, label: "Plum" },
  { value: Juice.Elderberry, label: "Elderberry" },
  { value: Juice.Blackberry, label: "Blackberry" },
  { value: Juice.Raspberry, label: "Raspberry" },
];

export type Recipe = {
  milkAmount: MilkAmount;
  artificialColors: number;
  flavor: Flavor;
  sugar: number;
  juice: Juice;
  sogginess: number;
};

export const defaultRecipe: Recipe = {
  milkAmount: MilkAmount.None,
  artificialColors: 6,
  flavor: Flavor.Classic,
  sugar: 7,
  juice: Juice.Blackberry,
  sogginess: 2,
};

function sanitize(
  value: string | number | null,
  min: number,
  max: number,
  fallback: number,
): number {
  if (!value) {
    return fallback;
  }

  let n = value;
  if (typeof n === "string") {
    n = parseInt(n);
  }

  if (isNaN(n)) {
    return fallback;
  }

  return clamp(n, min, max);
}

function sanitizeSugar(value: string | number | null) {
  return sanitize(
    value,
    validationRules.sugar.minValue,
    validationRules.sugar.maxValue,
    defaultRecipe.sugar,
  );
}

function sanitizeArtificialColors(value: string | number | null) {
  return sanitize(
    value,
    validationRules.artificialColors.minValue,
    validationRules.artificialColors.maxValue,
    defaultRecipe.artificialColors,
  );
}

function sanitizeFlavor(value: string | number | null) {
  return sanitize(
    value,
    validationRules.flavor.minValue,
    validationRules.flavor.maxValue,
    defaultRecipe.flavor,
  );
}

function sanitizeSogginess(value: string | number | null) {
  return sanitize(
    value,
    validationRules.sogginess.minValue,
    validationRules.sogginess.maxValue,
    defaultRecipe.sogginess,
  );
}

function sanitizeJuice(value: string | number | null) {
  return sanitize(
    value,
    validationRules.juice.minValue,
    validationRules.juice.maxValue,
    defaultRecipe.juice,
  );
}

function sanitizeMilk(value: string | number | null) {
  return sanitize(
    value,
    validationRules.milk.minValue,
    validationRules.milk.maxValue,
    defaultRecipe.milkAmount,
  );
}

export function parseRecipeFromQueryString(searchParams: URLSearchParams): Recipe {
  if (searchParams.size === 0) {
    return defaultRecipe;
  }

  return {
    sugar: sanitizeSugar(searchParams.get("sugar")),
    artificialColors: sanitizeArtificialColors(searchParams.get("colors")),
    sogginess: sanitizeSogginess(searchParams.get("sogginess")),
    milkAmount: sanitizeMilk(searchParams.get("milk")),
    juice: sanitizeJuice(searchParams.get("juice")),
    flavor: sanitizeFlavor(searchParams.get("flavor")),
  };
}
