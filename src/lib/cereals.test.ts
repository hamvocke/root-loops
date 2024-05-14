import Color from "colorjs.io";
import { describe, expect, it } from "vitest";
import { prepare, MilkAmount, Flavor } from "./cereals";
import { type Recipe } from "./cereals";

describe("prepare(defaultRecipe)", () => {
  const defaultRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Classic,
    artificialColors: 2,
    sugar: 3,
  };

  function someRecipe(recipe: object) {
    return { ...defaultRecipe, ...recipe };
  }

  it("generates colors in oklch space", () => {
    const cereals = prepare(defaultRecipe);
    expect(Object.values(cereals).every((c) => c.space === Color.spaces.oklch)).toBeTruthy();
  });

  it("generates base tone cereals with low chroma", () => {
    const cereals = prepare(defaultRecipe);

    expect(cereals.black.c).toBeLessThan(0.06);
    expect(cereals.white.c).toBeLessThan(0.06);
    expect(cereals.brightBlack.c).toBeLessThan(0.06);
    expect(cereals.brightWhite.c).toBeLessThan(0.06);
  });

  it("generates red tone cereals with right hue", () => {
    const cereals = prepare(defaultRecipe);

    expect(cereals.red.h).toBeGreaterThanOrEqual(0);
    expect(cereals.red.h).toBeLessThanOrEqual(60);

    expect(cereals.brightRed.h).toBeGreaterThanOrEqual(0);
    expect(cereals.brightRed.h).toBeLessThanOrEqual(60);
  });

  it("generates yellow tone cereals with right hue", () => {
    const cereals = prepare(defaultRecipe);

    expect(cereals.yellow.h).toBeGreaterThanOrEqual(60);
    expect(cereals.yellow.h).toBeLessThanOrEqual(120);

    expect(cereals.brightYellow.h).toBeGreaterThanOrEqual(60);
    expect(cereals.brightYellow.h).toBeLessThanOrEqual(120);
  });

  it("generates green tone cereals with right hue", () => {
    const cereals = prepare(defaultRecipe);

    expect(cereals.green.h).toBeGreaterThanOrEqual(120);
    expect(cereals.green.h).toBeLessThanOrEqual(180);

    expect(cereals.brightGreen.h).toBeGreaterThanOrEqual(120);
    expect(cereals.brightGreen.h).toBeLessThanOrEqual(180);
  });

  it("generates cyan tone cereals with right hue", () => {
    const cereals = prepare(defaultRecipe);

    expect(cereals.cyan.h).toBeGreaterThanOrEqual(180);
    expect(cereals.cyan.h).toBeLessThanOrEqual(240);

    expect(cereals.brightCyan.h).toBeGreaterThanOrEqual(180);
    expect(cereals.brightCyan.h).toBeLessThanOrEqual(240);
  });

  it("generates blue tone cereals with right hue", () => {
    const cereals = prepare(defaultRecipe);

    expect(cereals.blue.h).toBeGreaterThanOrEqual(240);
    expect(cereals.blue.h).toBeLessThanOrEqual(300);

    expect(cereals.brightBlue.h).toBeGreaterThanOrEqual(240);
    expect(cereals.brightBlue.h).toBeLessThanOrEqual(300);
  });

  it("generates magenta tone cereals with right hue", () => {
    const cereals = prepare(defaultRecipe);

    expect(cereals.magenta.h).toBeGreaterThanOrEqual(300);
    expect(cereals.magenta.h).toBeLessThanOrEqual(360);

    expect(cereals.brightMagenta.h).toBeGreaterThanOrEqual(300);
    expect(cereals.brightMagenta.h).toBeLessThanOrEqual(360);
  });

  it("generates bright colors with higher lightness than regular colors", () => {
    const cereals = prepare(someRecipe({ milkAmount: MilkAmount.Splash }));

    expect(cereals.brightBlack.l).toBeGreaterThan(cereals.black.l);
    expect(cereals.brightRed.l).toBeGreaterThan(cereals.red.l);
    expect(cereals.brightGreen.l).toBeGreaterThan(cereals.green.l);
    expect(cereals.brightYellow.l).toBeGreaterThan(cereals.yellow.l);
    expect(cereals.brightBlue.l).toBeGreaterThan(cereals.blue.l);
    expect(cereals.brightMagenta.l).toBeGreaterThan(cereals.magenta.l);
    expect(cereals.brightCyan.l).toBeGreaterThan(cereals.cyan.l);
    expect(cereals.brightWhite.l).toBeGreaterThan(cereals.white.l);
  });

  it("creates dark base colors for milk amount of 'None'", () => {
    const recipe = someRecipe({ milkAmount: MilkAmount.None });
    const cereals = prepare(recipe);

    expect(cereals.black.l).toBe(0);
    expect(cereals.brightBlack.l).toBe(0.2);
    expect(cereals.white.l).toBe(0.6);
    expect(cereals.brightWhite.l).toBe(0.8);
  });

  it("creates lighter base colors for milk amount of 'Splash'", () => {
    const recipe = someRecipe({ milkAmount: MilkAmount.Splash });
    const cereals = prepare(recipe);

    expect(cereals.black.l).toBe(0.2);
    expect(cereals.brightBlack.l).toBe(0.4);
    expect(cereals.white.l).toBe(0.8);
    expect(cereals.brightWhite.l).toBe(1);
  });

  it("creates light base colors for milk amount of 'Glug'", () => {
    const recipe = someRecipe({ milkAmount: MilkAmount.Glug });
    const cereals = prepare(recipe);

    expect(cereals.black.l).toBe(0.8);
    expect(cereals.brightBlack.l).toBe(0.6);
    expect(cereals.white.l).toBe(0.2);
    expect(cereals.brightWhite.l).toBe(0);
  });

  it("creates lightest base colors for milk amount of 'Cup'", () => {
    const recipe = someRecipe({ milkAmount: MilkAmount.Cup });
    const cereals = prepare(recipe);

    expect(cereals.black.l).toBe(1);
    expect(cereals.brightBlack.l).toBe(0.8);
    expect(cereals.white.l).toBe(0.4);
    expect(cereals.brightWhite.l).toBe(0.2);
  });

  it("ignores 'milk' parameter for accent colors", () => {
    const lessMilk = prepare(someRecipe({ milkAmount: MilkAmount.Glug }));
    const moreMilk = prepare(someRecipe({ milkAmount: MilkAmount.Cup }));

    expect(lessMilk.red.l).toBe(moreMilk.red.l);
    expect(lessMilk.green.l).toBe(moreMilk.green.l);
    expect(lessMilk.yellow.l).toBe(moreMilk.yellow.l);
    expect(lessMilk.blue.l).toBe(moreMilk.blue.l);
    expect(lessMilk.magenta.l).toBe(moreMilk.magenta.l);
    expect(lessMilk.cyan.l).toBe(moreMilk.cyan.l);

    expect(lessMilk.brightRed.l).toBe(moreMilk.brightRed.l);
    expect(lessMilk.brightGreen.l).toBe(moreMilk.brightGreen.l);
    expect(lessMilk.brightYellow.l).toBe(moreMilk.brightYellow.l);
    expect(lessMilk.brightBlue.l).toBe(moreMilk.brightBlue.l);
    expect(lessMilk.brightMagenta.l).toBe(moreMilk.brightMagenta.l);
    expect(lessMilk.brightCyan.l).toBe(moreMilk.brightCyan.l);
  });

  it("uses 'artificial colors' parameter to drive chroma of accent colors", () => {
    const lessColor = prepare(someRecipe({ artificialColors: 2 }));
    const moreColor = prepare(someRecipe({ artificialColors: 3 }));

    expect(lessColor.red.c).toBeLessThan(moreColor.red.c);
    expect(lessColor.green.c).toBeLessThan(moreColor.green.c);
    expect(lessColor.yellow.c).toBeLessThan(moreColor.yellow.c);
    expect(lessColor.blue.c).toBeLessThan(moreColor.blue.c);
    expect(lessColor.magenta.c).toBeLessThan(moreColor.magenta.c);
    expect(lessColor.cyan.c).toBeLessThan(moreColor.cyan.c);

    expect(lessColor.brightRed.c).toBeLessThan(moreColor.brightRed.c);
    expect(lessColor.brightGreen.c).toBeLessThan(moreColor.brightGreen.c);
    expect(lessColor.brightYellow.c).toBeLessThan(moreColor.brightYellow.c);
    expect(lessColor.brightBlue.c).toBeLessThan(moreColor.brightBlue.c);
    expect(lessColor.brightMagenta.c).toBeLessThan(moreColor.brightMagenta.c);
    expect(lessColor.brightCyan.c).toBeLessThan(moreColor.brightCyan.c);
  });

  it("uses 'flavor' parameter to drive hue shift of accent colors", () => {
    const fruityFlavor = prepare(someRecipe({ flavor: Flavor.Fruity }));
    const classicFlavor = prepare(someRecipe({ flavor: Flavor.Classic }));
    const unicornFlavor = prepare(someRecipe({ flavor: Flavor.Unicorn }));

    expect(fruityFlavor.red.h).toBe(0);
    expect(classicFlavor.red.h).toBe(15);
    expect(unicornFlavor.red.h).toBe(30);
    expect(fruityFlavor.black.h).toBe(340);
    expect(classicFlavor.black.h).toBe(340);
    expect(unicornFlavor.black.h).toBe(340);
  });

  it("uses 'sugar' parameter to drive lightness of accent colors", () => {
    const lessSugar = prepare(someRecipe({ sugar: 1 }));
    const moreSugar = prepare(someRecipe({ sugar: 2 }));

    expect(lessSugar.red.l).toBe(0.1);
    expect(lessSugar.brightRed.l).toBe(0.2);
    expect(moreSugar.blue.l).toBe(0.2);
    expect(moreSugar.brightBlue.l).toBeCloseTo(0.3, 4);
    expect(lessSugar.black.l).toBe(0.8);
    expect(moreSugar.black.l).toBe(0.8);
  });
});
