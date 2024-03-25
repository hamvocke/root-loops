import { describe, it, expect } from 'vitest';
import { equalHueDistance, equalLightnessDistance, crunch } from './colorcrunch';
import Color from 'colorjs.io';

describe('colorcrunch', () => {
	it('generates the right amount of colors', () => {
		let colors = equalHueDistance(16);
		expect(colors.length).toBe(16);
	});

	it('generates colors in oklch space', () => {
		let colors = equalHueDistance(5);
		expect(colors.every((c) => c.space === Color.spaces.oklch)).toBeTruthy();
	});

	it('generates colors with equal hue distance', () => {
		let colors = equalHueDistance(8, 0.6, 0.2);

		expect(colors[0].h).toBe(15);
		expect(colors[1].h).toBe(60);
		expect(colors[2].h).toBe(105);
		expect(colors[3].h).toBe(150);
		expect(colors[4].h).toBe(195);
		expect(colors[5].h).toBe(240);
		expect(colors[6].h).toBe(285);
		expect(colors[7].h).toBe(330);
	});

	it('generates colors with given lightness and chroma values', () => {
		let colors = equalHueDistance(1, 0.2, 0.1);

		expect(colors[0].l).toBe(0.2);
		expect(colors[0].c).toBe(0.1);
	});

	it('generates bowl colors in oklch space', () => {
		let colors = equalLightnessDistance(5);
		expect(colors.every((c) => c.space === Color.spaces.oklch)).toBeTruthy();
	});

	it('generates bowl colors with equal lightness distance', () => {
		let colors = equalLightnessDistance(4);

		expect(colors[0].l).toBe(0);
		expect(colors[1].l).toBe(0.33);
		expect(colors[2].l).toBe(0.67);
		expect(colors[3].l).toBe(1);
	});

	it('generates bowl colors with given chroma value', () => {
		let colors = equalHueDistance(1, 0.2);

		expect(colors[0].c).toBe(0.2);
	});

  it('generates base tone cereals with low chroma', () => {
    let cereals = crunch();

    expect(cereals["black"].c).toBeLessThan(0.03);
    expect(cereals["white"].c).toBeLessThan(0.03);
    expect(cereals["bright_black"].c).toBeLessThan(0.03);
    expect(cereals["bright_white"].c).toBeLessThan(0.03);
  });

  it('generates red tone cereals with right hue', () => {
    const cereals = crunch();
    const red = cereals["red"];
    const brightRed = cereals["bright_red"];

    expect(red.h).toBeGreaterThanOrEqual(15);
    expect(red.h).toBeLessThanOrEqual(45);

    expect(brightRed.h).toBeGreaterThanOrEqual(15);
    expect(brightRed.h).toBeLessThanOrEqual(45);
  });

  it('generates green tone cereals with right hue', () => {
    const cereals = crunch();
    const green = cereals["green"];
    const brightGreen = cereals["bright_green"];

    expect(green.h).toBeGreaterThanOrEqual(110);
    expect(green.h).toBeLessThanOrEqual(140);

    expect(brightGreen.h).toBeGreaterThanOrEqual(110);
    expect(brightGreen.h).toBeLessThanOrEqual(140);
  });

  it('generates yellow tone cereals with right hue', () => {
    const cereals = crunch();
    const yellow = cereals["yellow"];
    const brightYellow = cereals["bright_yellow"];

    expect(yellow.h).toBeGreaterThanOrEqual(70);
    expect(yellow.h).toBeLessThanOrEqual(100);

    expect(brightYellow.h).toBeGreaterThanOrEqual(70);
    expect(brightYellow.h).toBeLessThanOrEqual(100);
  });

  it('generates bright colors with higher lightness than regular colors', () => {
    const cereals = crunch();

    expect(cereals['bright_black'].l).toBeGreaterThan(cereals['black'].l);
    expect(cereals['bright_red'].l).toBeGreaterThan(cereals['red'].l);
    expect(cereals['bright_green'].l).toBeGreaterThan(cereals['green'].l);
    expect(cereals['bright_yellow'].l).toBeGreaterThan(cereals['yellow'].l);
    expect(cereals['bright_blue'].l).toBeGreaterThan(cereals['blue'].l);
    expect(cereals['bright_magenta'].l).toBeGreaterThan(cereals['magenta'].l);
    expect(cereals['bright_cyan'].l).toBeGreaterThan(cereals['cyan'].l);
    expect(cereals['bright_white'].l).toBeGreaterThan(cereals['white'].l);
  });
});
