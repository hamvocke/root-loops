import { describe, expect, it } from "vitest";
import { prepare } from "./cereals";
import { MilkAmount, Fruit, Flavor, type Recipe } from "./ingredients";

describe("prepare()", () => {
  const defaultRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Classic,
    artificialColors: 2,
    sugar: 3,
    fruit: Fruit.Elderberry,
    sogginess: 2,
  };

  function someRecipe(recipe: object) {
    return { ...defaultRecipe, ...recipe };
  }

  it("generates colors in okhsl color space", () => {
    const cereals = prepare(defaultRecipe);
    expect(Object.values(cereals).every((cereal) => cereal.color.mode === "okhsl")).toBeTruthy();
  });

  it("generates red tone cereals with right hue", () => {
    const cereals = prepare(defaultRecipe);

    expect(cereals.red.color.h).toBeGreaterThanOrEqual(0);
    expect(cereals.red.color.h).toBeLessThanOrEqual(60);

    expect(cereals.brightRed.color.h).toBeGreaterThanOrEqual(0);
    expect(cereals.brightRed.color.h).toBeLessThanOrEqual(60);
  });

  it("generates yellow tone cereals with right hue", () => {
    const cereals = prepare(defaultRecipe);

    expect(cereals.yellow.color.h).toBeGreaterThanOrEqual(60);
    expect(cereals.yellow.color.h).toBeLessThanOrEqual(120);

    expect(cereals.brightYellow.color.h).toBeGreaterThanOrEqual(60);
    expect(cereals.brightYellow.color.h).toBeLessThanOrEqual(120);
  });

  it("generates green tone cereals with right hue", () => {
    const cereals = prepare(defaultRecipe);

    expect(cereals.green.color.h).toBeGreaterThanOrEqual(120);
    expect(cereals.green.color.h).toBeLessThanOrEqual(180);

    expect(cereals.brightGreen.color.h).toBeGreaterThanOrEqual(120);
    expect(cereals.brightGreen.color.h).toBeLessThanOrEqual(180);
  });

  it("generates cyan tone cereals with right hue", () => {
    const cereals = prepare(defaultRecipe);

    expect(cereals.cyan.color.h).toBeGreaterThanOrEqual(180);
    expect(cereals.cyan.color.h).toBeLessThanOrEqual(240);

    expect(cereals.brightCyan.color.h).toBeGreaterThanOrEqual(180);
    expect(cereals.brightCyan.color.h).toBeLessThanOrEqual(240);
  });

  it("generates blue tone cereals with right hue", () => {
    const cereals = prepare(defaultRecipe);

    expect(cereals.blue.color.h).toBeGreaterThanOrEqual(240);
    expect(cereals.blue.color.h).toBeLessThanOrEqual(300);

    expect(cereals.brightBlue.color.h).toBeGreaterThanOrEqual(240);
    expect(cereals.brightBlue.color.h).toBeLessThanOrEqual(300);
  });

  it("generates magenta tone cereals with right hue", () => {
    const cereals = prepare(defaultRecipe);

    expect(cereals.magenta.color.h).toBeGreaterThanOrEqual(300);
    expect(cereals.magenta.color.h).toBeLessThanOrEqual(360);

    expect(cereals.brightMagenta.color.h).toBeGreaterThanOrEqual(300);
    expect(cereals.brightMagenta.color.h).toBeLessThanOrEqual(360);
  });

  it("generates bright colors with higher lightness than regular colors", () => {
    const cereals = prepare(someRecipe({ milkAmount: MilkAmount.Splash }));

    expect(cereals.brightRed.color.l).toBeGreaterThan(cereals.red.color.l);
    expect(cereals.brightGreen.color.l).toBeGreaterThan(cereals.green.color.l);
    expect(cereals.brightYellow.color.l).toBeGreaterThan(cereals.yellow.color.l);
    expect(cereals.brightBlue.color.l).toBeGreaterThan(cereals.blue.color.l);
    expect(cereals.brightMagenta.color.l).toBeGreaterThan(cereals.magenta.color.l);
    expect(cereals.brightCyan.color.l).toBeGreaterThan(cereals.cyan.color.l);
  });

  it("uses the right lower bound for lightness", () => {
    const result = prepare(someRecipe({ milkAmount: 0.1 }), true);

    expect(result.background.color.l).toBeCloseTo(0.04);
    expect(result.black.color.l).toBeCloseTo(0.15);
    expect(result.brightBlack.color.l).toBeCloseTo(0.35);
    expect(result.white.color.l).toBeCloseTo(0.7);
    expect(result.brightWhite.color.l).toBeCloseTo(0.9);
    expect(result.foreground.color.l).toBeCloseTo(0.96);
  });

  it("uses the right upper bound for lightness", () => {
    const result = prepare(someRecipe({ milkAmount: 2.9 }), true);

    expect(result.background.color.l).toBeCloseTo(0.96);
    expect(result.black.color.l).toBeCloseTo(0.9);
    expect(result.brightBlack.color.l).toBeCloseTo(0.7);
    expect(result.white.color.l).toBeCloseTo(0.35);
    expect(result.brightWhite.color.l).toBeCloseTo(0.15);
    expect(result.foreground.color.l).toBeCloseTo(0.04);
  });

  it("ignores 'milk' parameter for accent colors", () => {
    const lessMilk = prepare(someRecipe({ milkAmount: MilkAmount.Glug }));
    const moreMilk = prepare(someRecipe({ milkAmount: MilkAmount.Cup }));

    expect(lessMilk.red.color.l).toBe(moreMilk.red.color.l);
    expect(lessMilk.green.color.l).toBe(moreMilk.green.color.l);
    expect(lessMilk.yellow.color.l).toBe(moreMilk.yellow.color.l);
    expect(lessMilk.blue.color.l).toBe(moreMilk.blue.color.l);
    expect(lessMilk.magenta.color.l).toBe(moreMilk.magenta.color.l);
    expect(lessMilk.cyan.color.l).toBe(moreMilk.cyan.color.l);

    expect(lessMilk.brightRed.color.l).toBe(moreMilk.brightRed.color.l);
    expect(lessMilk.brightGreen.color.l).toBe(moreMilk.brightGreen.color.l);
    expect(lessMilk.brightYellow.color.l).toBe(moreMilk.brightYellow.color.l);
    expect(lessMilk.brightBlue.color.l).toBe(moreMilk.brightBlue.color.l);
    expect(lessMilk.brightMagenta.color.l).toBe(moreMilk.brightMagenta.color.l);
    expect(lessMilk.brightCyan.color.l).toBe(moreMilk.brightCyan.color.l);
  });

  it("uses 'artificial colors' parameter to drive saturation of accent colors", () => {
    const lessColor = prepare(someRecipe({ artificialColors: 2 }));
    const moreColor = prepare(someRecipe({ artificialColors: 3 }));

    expect(lessColor.red.color.s).toBeLessThan(moreColor.red.color.s);
    expect(lessColor.green.color.s).toBeLessThan(moreColor.green.color.s);
    expect(lessColor.yellow.color.s).toBeLessThan(moreColor.yellow.color.s);
    expect(lessColor.blue.color.s).toBeLessThan(moreColor.blue.color.s);
    expect(lessColor.magenta.color.s).toBeLessThan(moreColor.magenta.color.s);
    expect(lessColor.cyan.color.s).toBeLessThan(moreColor.cyan.color.s);

    expect(lessColor.brightRed.color.s).toBeLessThan(moreColor.brightRed.color.s);
    expect(lessColor.brightGreen.color.s).toBeLessThan(moreColor.brightGreen.color.s);
    expect(lessColor.brightYellow.color.s).toBeLessThan(moreColor.brightYellow.color.s);
    expect(lessColor.brightBlue.color.s).toBeLessThan(moreColor.brightBlue.color.s);
    expect(lessColor.brightMagenta.color.s).toBeLessThan(moreColor.brightMagenta.color.s);
    expect(lessColor.brightCyan.color.s).toBeLessThan(moreColor.brightCyan.color.s);
  });

  it("uses 'flavor' parameter to drive hue shift of accent colors", () => {
    const fruityFlavor = prepare(someRecipe({ flavor: Flavor.Fruity }));
    const classicFlavor = prepare(someRecipe({ flavor: Flavor.Classic }));
    const intenseFlavor = prepare(someRecipe({ flavor: Flavor.Intense }));

    expect(fruityFlavor.red.color.h).toBe(0);
    expect(classicFlavor.red.color.h).toBe(15);
    expect(intenseFlavor.red.color.h).toBe(30);
    expect(fruityFlavor.black.color.h).toBe(270);
    expect(classicFlavor.black.color.h).toBe(270);
    expect(intenseFlavor.black.color.h).toBe(270);
  });

  it("uses 'sugar' parameter to drive lightness of accent colors", () => {
    const lessSugar = prepare(someRecipe({ sugar: 1 }));
    const moreSugar = prepare(someRecipe({ sugar: 2 }));

    expect(lessSugar.red.color.l).toBe(0.14);
    expect(lessSugar.brightRed.color.l).toBe(0.22);
    expect(moreSugar.red.color.l).toBe(0.22);
    expect(moreSugar.brightRed.color.l).toBeCloseTo(0.3);
    expect(lessSugar.black.color.l).toBeCloseTo(0.865);
    expect(moreSugar.black.color.l).toBeCloseTo(0.865);
  });

  it("uses 'fruit' parameter to drive hue of base colors", () => {
    const fruitA = prepare(someRecipe({ fruit: Fruit.Kale }));
    const fruitB = prepare(someRecipe({ fruit: Fruit.Kiwi }));

    expect(fruitA.red.color.h).toBe(15);
    expect(fruitA.brightRed.color.h).toBe(15);
    expect(fruitB.red.color.h).toBe(15);
    expect(fruitB.brightRed.color.h).toBe(15);

    expect(fruitA.black.color.h).toBe(180);
    expect(fruitA.brightBlack.color.h).toBe(180);
    expect(fruitA.white.color.h).toBe(180);
    expect(fruitA.brightWhite.color.h).toBe(180);
    expect(fruitB.black.color.h).toBe(150);
    expect(fruitB.brightBlack.color.h).toBe(150);
    expect(fruitB.white.color.h).toBe(150);
    expect(fruitB.brightWhite.color.h).toBe(150);
  });

  it("uses 'sogginess' parameter to drive saturation of base colors", () => {
    const notSoSoggy = prepare(someRecipe({ sogginess: 2 }));
    const soggy = prepare(someRecipe({ sogginess: 10 }));

    expect(notSoSoggy.red.color.s).toBe(0.2);
    expect(soggy.red.color.s).toBe(0.2);

    expect(notSoSoggy.black.color.s).toBe(0.2);
    expect(notSoSoggy.brightBlack.color.s).toBe(0.2);
    expect(notSoSoggy.white.color.s).toBe(0.2);
    expect(notSoSoggy.brightWhite.color.s).toBe(0.2);
    expect(soggy.black.color.s).toBe(1);
    expect(soggy.brightBlack.color.s).toBe(1);
    expect(soggy.white.color.s).toBe(1);
    expect(soggy.brightWhite.color.s).toBe(1);
  });
});
