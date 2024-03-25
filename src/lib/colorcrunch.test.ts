import { describe, it, expect } from 'vitest';
import { equalHueDistance, equalLightnessDistance } from './colorcrunch';
import Color from 'colorjs.io';

describe('generateColors', () => {
	it('generates the right amount of colors', () => {
		let colors = equalHueDistance(16);
		expect(colors.length).toBe(16);
	});

	it('generates colors in oklch space', () => {
		let colors = equalHueDistance(5);
		expect(colors.every((c) => c.space === Color.spaces.oklch)).toBeTruthy();
	});

	it('generates colors with equal hue distance', () => {
		let colors = equalHueDistance(8);

		expect(colors[0].h).toBe(0);
		expect(colors[1].h).toBe(45);
		expect(colors[2].h).toBe(90);
		expect(colors[3].h).toBe(135);
		expect(colors[4].h).toBe(180);
		expect(colors[5].h).toBe(225);
		expect(colors[6].h).toBe(270);
		expect(colors[7].h).toBe(315);
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
});
