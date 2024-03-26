import { describe, it, expect } from 'vitest';
import { equalHueDistance, equalLightnessDistance, crunch } from './colorcrunch';
import Color from 'colorjs.io';

describe('equalHueDistance', () => {
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

	it('generates bowl colors with given chroma value', () => {
		let colors = equalHueDistance(1, 0.2);

		expect(colors[0].c).toBe(0.2);
	});
});

describe('equalLightnessDistance', () => {
	it('generates bowl colors in oklch space', () => {
		let colors = equalLightnessDistance(5);
		expect(colors.every((c) => c.space === Color.spaces.oklch)).toBeTruthy();
	});

	it('generates the right amount of colors', () => {
		let colors = equalLightnessDistance(16);
		expect(colors.length).toBe(16);
	});

	it('generates colors with equal lightness distance', () => {
		let colors = equalLightnessDistance(4);

		expect(colors[0].l).toBe(0);
		expect(colors[1].l).toBe(0.33);
		expect(colors[2].l).toBe(0.67);
		expect(colors[3].l).toBe(1);
	});

	it('generates colors with given chroma values', () => {
		let colors = equalLightnessDistance(2, 0.2);

		expect(colors[0].c).toBe(0.2);
		expect(colors[1].c).toBe(0.2);
	});
});

describe('crunch', () => {
	it('generates base tone cereals with low chroma', () => {
		let cereals = crunch();

		expect(cereals.black.c).toBeLessThan(0.03);
		expect(cereals.white.c).toBeLessThan(0.03);
		expect(cereals.brightBlack.c).toBeLessThan(0.03);
		expect(cereals.brightWhite.c).toBeLessThan(0.03);
	});

	it('generates base tone cereals with increasing lightness', () => {
		let cereals = crunch();

    expect(cereals.brightWhite.l).toBeGreaterThan(cereals.white.l)
    expect(cereals.white.l).toBeGreaterThan(cereals.brightBlack.l)
    expect(cereals.brightBlack.l).toBeGreaterThan(cereals.black.l)
	});

	it('generates red tone cereals with right hue', () => {
		const cereals = crunch();
		const red = cereals.red;
		const brightRed = cereals.brightRed;

		expect(red.h).toBeGreaterThanOrEqual(0);
		expect(red.h).toBeLessThanOrEqual(60);

		expect(brightRed.h).toBeGreaterThanOrEqual(0);
		expect(brightRed.h).toBeLessThanOrEqual(60);
	});

	it('generates yellow tone cereals with right hue', () => {
		const cereals = crunch();
		const yellow = cereals.yellow;
		const brightYellow = cereals.brightYellow

		expect(yellow.h).toBeGreaterThanOrEqual(60);
		expect(yellow.h).toBeLessThanOrEqual(120);

		expect(brightYellow.h).toBeGreaterThanOrEqual(60);
		expect(brightYellow.h).toBeLessThanOrEqual(120);
	});

	it('generates green tone cereals with right hue', () => {
		const cereals = crunch();
		const green = cereals.green;
		const brightGreen = cereals.brightGreen;

		expect(green.h).toBeGreaterThanOrEqual(120);
		expect(green.h).toBeLessThanOrEqual(180);

		expect(brightGreen.h).toBeGreaterThanOrEqual(120);
		expect(brightGreen.h).toBeLessThanOrEqual(180);
	});

	it('generates cyan tone cereals with right hue', () => {
		const cereals = crunch();
		const cyan = cereals.cyan;
		const brightCyan = cereals.brightCyan;

		expect(cyan.h).toBeGreaterThanOrEqual(180);
		expect(cyan.h).toBeLessThanOrEqual(240);

		expect(brightCyan.h).toBeGreaterThanOrEqual(180);
		expect(brightCyan.h).toBeLessThanOrEqual(240);
	});

	it('generates blue tone cereals with right hue', () => {
		const cereals = crunch();
		const blue = cereals.blue;
		const brightBlue = cereals.brightBlue;

		expect(blue.h).toBeGreaterThanOrEqual(240);
		expect(blue.h).toBeLessThanOrEqual(300);

		expect(brightBlue.h).toBeGreaterThanOrEqual(240);
		expect(brightBlue.h).toBeLessThanOrEqual(300);
	});

	it('generates magenta tone cereals with right hue', () => {
		const cereals = crunch();
		const magenta = cereals.magenta;
		const brightMagenta = cereals.brightMagenta;

		expect(magenta.h).toBeGreaterThanOrEqual(300);
		expect(magenta.h).toBeLessThanOrEqual(360);

		expect(brightMagenta.h).toBeGreaterThanOrEqual(300);
		expect(brightMagenta.h).toBeLessThanOrEqual(360);
	});

	it('generates bright colors with higher lightness than regular colors', () => {
		const cereals = crunch();

		expect(cereals.brightBlack.l).toBeGreaterThan(cereals.black.l);
		expect(cereals.brightRed.l).toBeGreaterThan(cereals.red.l);
		expect(cereals.brightGreen.l).toBeGreaterThan(cereals.green.l);
		expect(cereals.brightYellow.l).toBeGreaterThan(cereals.yellow.l);
		expect(cereals.brightBlue.l).toBeGreaterThan(cereals.blue.l);
		expect(cereals.brightMagenta.l).toBeGreaterThan(cereals.magenta.l);
		expect(cereals.brightCyan.l).toBeGreaterThan(cereals.cyan.l);
		expect(cereals.brightWhite.l).toBeGreaterThan(cereals.white.l);
	});
});
