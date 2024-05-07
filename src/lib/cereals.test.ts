import Color from "colorjs.io";
import { describe, expect, it } from "vitest";
import { prepare, MilkAmount } from "./cereals";

describe("prepare()", () => {
  it("generates colors in oklch space", () => {
    const cereals = prepare();
    expect(Object.values(cereals).every((c) => c.space === Color.spaces.oklch)).toBeTruthy();
  });

  it("generates base tone cereals with low chroma", () => {
    const cereals = prepare();

    expect(cereals.black.c).toBeLessThan(0.03);
    expect(cereals.white.c).toBeLessThan(0.03);
    expect(cereals.brightBlack.c).toBeLessThan(0.03);
    expect(cereals.brightWhite.c).toBeLessThan(0.03);
  });

  it("generates red tone cereals with right hue", () => {
    const cereals = prepare();

    expect(cereals.red.h).toBeGreaterThanOrEqual(0);
    expect(cereals.red.h).toBeLessThanOrEqual(60);

    expect(cereals.brightRed.h).toBeGreaterThanOrEqual(0);
    expect(cereals.brightRed.h).toBeLessThanOrEqual(60);
  });

  it("generates yellow tone cereals with right hue", () => {
    const cereals = prepare();

    expect(cereals.yellow.h).toBeGreaterThanOrEqual(60);
    expect(cereals.yellow.h).toBeLessThanOrEqual(120);

    expect(cereals.brightYellow.h).toBeGreaterThanOrEqual(60);
    expect(cereals.brightYellow.h).toBeLessThanOrEqual(120);
  });

  it("generates green tone cereals with right hue", () => {
    const cereals = prepare();

    expect(cereals.green.h).toBeGreaterThanOrEqual(120);
    expect(cereals.green.h).toBeLessThanOrEqual(180);

    expect(cereals.brightGreen.h).toBeGreaterThanOrEqual(120);
    expect(cereals.brightGreen.h).toBeLessThanOrEqual(180);
  });

  it("generates cyan tone cereals with right hue", () => {
    const cereals = prepare();

    expect(cereals.cyan.h).toBeGreaterThanOrEqual(180);
    expect(cereals.cyan.h).toBeLessThanOrEqual(240);

    expect(cereals.brightCyan.h).toBeGreaterThanOrEqual(180);
    expect(cereals.brightCyan.h).toBeLessThanOrEqual(240);
  });

  it("generates blue tone cereals with right hue", () => {
    const cereals = prepare();

    expect(cereals.blue.h).toBeGreaterThanOrEqual(240);
    expect(cereals.blue.h).toBeLessThanOrEqual(300);

    expect(cereals.brightBlue.h).toBeGreaterThanOrEqual(240);
    expect(cereals.brightBlue.h).toBeLessThanOrEqual(300);
  });

  it("generates magenta tone cereals with right hue", () => {
    const cereals = prepare();

    expect(cereals.magenta.h).toBeGreaterThanOrEqual(300);
    expect(cereals.magenta.h).toBeLessThanOrEqual(360);

    expect(cereals.brightMagenta.h).toBeGreaterThanOrEqual(300);
    expect(cereals.brightMagenta.h).toBeLessThanOrEqual(360);
  });

  it("generates bright colors with higher lightness than regular colors", () => {
    const cereals = prepare();

    expect(cereals.brightBlack.l).toBeGreaterThan(cereals.black.l);
    expect(cereals.brightRed.l).toBeGreaterThan(cereals.red.l);
    expect(cereals.brightGreen.l).toBeGreaterThan(cereals.green.l);
    expect(cereals.brightYellow.l).toBeGreaterThan(cereals.yellow.l);
    expect(cereals.brightBlue.l).toBeGreaterThan(cereals.blue.l);
    expect(cereals.brightMagenta.l).toBeGreaterThan(cereals.magenta.l);
    expect(cereals.brightCyan.l).toBeGreaterThan(cereals.cyan.l);
    expect(cereals.brightWhite.l).toBeGreaterThan(cereals.white.l);
  });

  it.todo("uses 'sugar' parameter to drive lightness of accent colors");

  it("creates dark base colors for milk amount of 'None'", () => {
    const cereals = prepare({ milkAmount: MilkAmount.None });

    expect(cereals.black.l).toBe(0);
    expect(cereals.brightBlack.l).toBe(0.2);
    expect(cereals.white.l).toBe(0.6);
    expect(cereals.brightWhite.l).toBe(0.8);
  });

  it("creates lighter base colors for milk amount of 'Splash'", () => {
    const cereals = prepare({ milkAmount: MilkAmount.Splash });

    expect(cereals.black.l).toBe(0.2);
    expect(cereals.brightBlack.l).toBe(0.4);
    expect(cereals.white.l).toBe(0.8);
    expect(cereals.brightWhite.l).toBe(1);
  });

  it("creates light base colors for milk amount of 'Glug'", () => {
    const cereals = prepare({ milkAmount: MilkAmount.Glug });

    expect(cereals.black.l).toBe(0.8);
    expect(cereals.brightBlack.l).toBe(0.6);
    expect(cereals.white.l).toBe(0.2);
    expect(cereals.brightWhite.l).toBe(0);
  });

  it("creates lightest base colors for milk amount of 'Cup'", () => {
    const cereals = prepare({ milkAmount: MilkAmount.Cup });

    expect(cereals.black.l).toBe(1);
    expect(cereals.brightBlack.l).toBe(0.8);
    expect(cereals.white.l).toBe(0.4);
    expect(cereals.brightWhite.l).toBe(0.2);
  });

  it("ignores 'milk' parameter for accent colors", () => {
    const lessMilk = prepare({ milk: 1 });
    const moreMilk = prepare({ milk: 2 });

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

  it("uses 'flavors' parameter to drive chroma of accent colors", () => {
    const lessFlavors = prepare({ flavors: 3 });
    const moreFlavors = prepare({ flavors: 4 });

    expect(lessFlavors.red.c).toBeLessThan(moreFlavors.red.c);
    expect(lessFlavors.green.c).toBeLessThan(moreFlavors.green.c);
    expect(lessFlavors.yellow.c).toBeLessThan(moreFlavors.yellow.c);
    expect(lessFlavors.blue.c).toBeLessThan(moreFlavors.blue.c);
    expect(lessFlavors.magenta.c).toBeLessThan(moreFlavors.magenta.c);
    expect(lessFlavors.cyan.c).toBeLessThan(moreFlavors.cyan.c);

    expect(lessFlavors.brightRed.c).toBeLessThan(moreFlavors.brightRed.c);
    expect(lessFlavors.brightGreen.c).toBeLessThan(moreFlavors.brightGreen.c);
    expect(lessFlavors.brightYellow.c).toBeLessThan(moreFlavors.brightYellow.c);
    expect(lessFlavors.brightBlue.c).toBeLessThan(moreFlavors.brightBlue.c);
    expect(lessFlavors.brightMagenta.c).toBeLessThan(moreFlavors.brightMagenta.c);
    expect(lessFlavors.brightCyan.c).toBeLessThan(moreFlavors.brightCyan.c);
  });

  it("uses 'artificial colors' parameter to drive hue shift of accent colors", () => {
    const negativeShift = prepare({ artificialColors: -15 });
    const positiveShift = prepare({ artificialColors: 15 });

    expect(negativeShift.red.h).toBe(-15);
    expect(positiveShift.red.h).toBe(15);
    expect(negativeShift.black.h).toBe(340);
    expect(positiveShift.black.h).toBe(340);
  });
});
