import Color from "colorjs.io";
import { describe, expect, it } from "vitest";
import { prepare } from "./cereals";
import { MilkAmount, Juice, Flavor, type Recipe } from "./ingredients";

describe("prepare()", () => {
  const defaultRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Classic,
    artificialColors: 2,
    sugar: 3,
    juice: Juice.Elderberry,
    sogginess: 0.02,
  };

  function someRecipe(recipe: object) {
    return { ...defaultRecipe, ...recipe };
  }

  it("generates colors in oklch space", () => {
    const cereals = prepare(defaultRecipe);
    expect(
      Object.values(cereals).every((cereal) => cereal.color.space === Color.spaces.oklch),
    ).toBeTruthy();
  });

  it("generates base tone cereals with low chroma", () => {
    const cereals = prepare(defaultRecipe);

    expect(cereals.black.color.c).toBeLessThan(0.06);
    expect(cereals.white.color.c).toBeLessThan(0.06);
    expect(cereals.brightBlack.color.c).toBeLessThan(0.06);
    expect(cereals.brightWhite.color.c).toBeLessThan(0.06);
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

    expect(cereals.brightBlack.color.l).toBeGreaterThan(cereals.black.color.l);
    expect(cereals.brightRed.color.l).toBeGreaterThan(cereals.red.color.l);
    expect(cereals.brightGreen.color.l).toBeGreaterThan(cereals.green.color.l);
    expect(cereals.brightYellow.color.l).toBeGreaterThan(cereals.yellow.color.l);
    expect(cereals.brightBlue.color.l).toBeGreaterThan(cereals.blue.color.l);
    expect(cereals.brightMagenta.color.l).toBeGreaterThan(cereals.magenta.color.l);
    expect(cereals.brightCyan.color.l).toBeGreaterThan(cereals.cyan.color.l);
    expect(cereals.brightWhite.color.l).toBeGreaterThan(cereals.white.color.l);
  });

  it("creates dark base colors for milk amount of 'None'", () => {
    const recipe = someRecipe({ milkAmount: MilkAmount.None });
    const cereals = prepare(recipe);

    expect(cereals.black.color.l).toBe(0);
    expect(cereals.brightBlack.color.l).toBe(0.2);
    expect(cereals.white.color.l).toBe(0.8);
    expect(cereals.brightWhite.color.l).toBe(1);
  });

  it("creates lighter base colors for milk amount of 'Splash'", () => {
    const recipe = someRecipe({ milkAmount: MilkAmount.Splash });
    const cereals = prepare(recipe);

    expect(cereals.black.color.l).toBe(0.2);
    expect(cereals.brightBlack.color.l).toBe(0.4);
    expect(cereals.white.color.l).toBe(0.8);
    expect(cereals.brightWhite.color.l).toBe(1);
  });

  it("creates light base colors for milk amount of 'Glug'", () => {
    const recipe = someRecipe({ milkAmount: MilkAmount.Glug });
    const cereals = prepare(recipe);

    expect(cereals.black.color.l).toBe(1);
    expect(cereals.brightBlack.color.l).toBe(0.8);
    expect(cereals.white.color.l).toBe(0.2);
    expect(cereals.brightWhite.color.l).toBe(0);
  });

  it("creates lightest base colors for milk amount of 'Cup'", () => {
    const recipe = someRecipe({ milkAmount: MilkAmount.Cup });
    const cereals = prepare(recipe);

    expect(cereals.black.color.l).toBe(1);
    expect(cereals.brightBlack.color.l).toBe(0.8);
    expect(cereals.white.color.l).toBe(0.4);
    expect(cereals.brightWhite.color.l).toBe(0.2);
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

  it("uses 'artificial colors' parameter to drive chroma of accent colors", () => {
    const lessColor = prepare(someRecipe({ artificialColors: 2 }));
    const moreColor = prepare(someRecipe({ artificialColors: 3 }));

    expect(lessColor.red.color.c).toBeLessThan(moreColor.red.color.c);
    expect(lessColor.green.color.c).toBeLessThan(moreColor.green.color.c);
    expect(lessColor.yellow.color.c).toBeLessThan(moreColor.yellow.color.c);
    expect(lessColor.blue.color.c).toBeLessThan(moreColor.blue.color.c);
    expect(lessColor.magenta.color.c).toBeLessThan(moreColor.magenta.color.c);
    expect(lessColor.cyan.color.c).toBeLessThan(moreColor.cyan.color.c);

    expect(lessColor.brightRed.color.c).toBeLessThan(moreColor.brightRed.color.c);
    expect(lessColor.brightGreen.color.c).toBeLessThan(moreColor.brightGreen.color.c);
    expect(lessColor.brightYellow.color.c).toBeLessThan(moreColor.brightYellow.color.c);
    expect(lessColor.brightBlue.color.c).toBeLessThan(moreColor.brightBlue.color.c);
    expect(lessColor.brightMagenta.color.c).toBeLessThan(moreColor.brightMagenta.color.c);
    expect(lessColor.brightCyan.color.c).toBeLessThan(moreColor.brightCyan.color.c);
  });

  it("uses 'flavor' parameter to drive hue shift of accent colors", () => {
    const fruityFlavor = prepare(someRecipe({ flavor: Flavor.Fruity }));
    const classicFlavor = prepare(someRecipe({ flavor: Flavor.Classic }));
    const unicornFlavor = prepare(someRecipe({ flavor: Flavor.Unicorn }));

    expect(fruityFlavor.red.color.h).toBe(0);
    expect(classicFlavor.red.color.h).toBe(15);
    expect(unicornFlavor.red.color.h).toBe(30);
    expect(fruityFlavor.black.color.h).toBe(270);
    expect(classicFlavor.black.color.h).toBe(270);
    expect(unicornFlavor.black.color.h).toBe(270);
  });

  it("uses 'sugar' parameter to drive lightness of accent colors", () => {
    const lessSugar = prepare(someRecipe({ sugar: 1 }));
    const moreSugar = prepare(someRecipe({ sugar: 2 }));

    expect(lessSugar.red.color.l).toBe(0.1);
    expect(lessSugar.brightRed.color.l).toBe(0.2);
    expect(moreSugar.blue.color.l).toBe(0.2);
    expect(moreSugar.brightBlue.color.l).toBeCloseTo(0.3, 4);
    expect(lessSugar.black.color.l).toBe(1);
    expect(moreSugar.black.color.l).toBe(1);
  });

  it("uses 'juice' parameter to drive hue of base colors", () => {
    const juiceA = prepare(someRecipe({ juice: Juice.Kale }));
    const juiceB = prepare(someRecipe({ juice: Juice.Kiwi }));

    expect(juiceA.red.color.h).toBe(15);
    expect(juiceA.brightRed.color.h).toBe(15);
    expect(juiceB.red.color.h).toBe(15);
    expect(juiceB.brightRed.color.h).toBe(15);

    expect(juiceA.black.color.h).toBe(180);
    expect(juiceA.brightBlack.color.h).toBe(180);
    expect(juiceA.white.color.h).toBe(180);
    expect(juiceA.brightWhite.color.h).toBe(180);
    expect(juiceB.black.color.h).toBe(150);
    expect(juiceB.brightBlack.color.h).toBe(150);
    expect(juiceB.white.color.h).toBe(150);
    expect(juiceB.brightWhite.color.h).toBe(150);
  });

  it("uses 'sogginess' parameter to drive chroma of base colors", () => {
    const notSoSoggy = prepare(someRecipe({ sogginess: 2 }));
    const soggy = prepare(someRecipe({ sogginess: 10 }));

    expect(notSoSoggy.red.color.c).toBe(0.06);
    expect(soggy.red.color.c).toBe(0.06);

    expect(notSoSoggy.black.color.c).toBe(0.04);
    expect(notSoSoggy.brightBlack.color.c).toBe(0.04);
    expect(notSoSoggy.white.color.c).toBe(0.04);
    expect(notSoSoggy.brightWhite.color.c).toBe(0.04);
    expect(soggy.black.color.c).toBe(0.2);
    expect(soggy.brightBlack.color.c).toBe(0.2);
    expect(soggy.white.color.c).toBe(0.2);
    expect(soggy.brightWhite.color.c).toBe(0.2);
  });
});

describe("prepareHsl()", () => {
  const defaultRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Classic,
    artificialColors: 2,
    sugar: 3,
    juice: Juice.Elderberry,
    sogginess: 0.02,
  };

  function someRecipe(recipe: object) {
    return { ...defaultRecipe, ...recipe };
  }

  it("generates colors in hsluv space", () => {
    const cereals = prepareHsl(defaultRecipe);

    expect(
      Object.values(cereals).every((cereal) => cereal.color.space === Color.spaces.hsluv),
    ).toBeTruthy();
  });

  it("generates 4 base colors with increasing lightness", () => {
    const cereals = prepareHsl(defaultRecipe);

    expect(cereals.black.color.hsluv.l).toBe(10);
    expect(cereals.brightBlack.color.hsluv.l).toBe(20);
    expect(cereals.white.color.hsluv.l).toBe(80);
    expect(cereals.brightWhite.color.hsluv.l).toBe(90);
  });

  it("generates 12 accent colors", () => {
    const cereals = prepareHsl(defaultRecipe);

    expect(cereals.red.color.hsluv.h).toBe(10);
    expect(cereals.red.color.hsluv.s).toBe(20);
    expect(cereals.red.color.hsluv.l).toBe(80);
    expect(cereals.brightRed.color.hsluv.h).toBe(90);
  });
});
