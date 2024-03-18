import { describe, it, expect } from 'vitest';
import { generateColors } from './colorcrunch';
import Color from 'colorjs.io';

describe('generateColors', () => {
	it('generates the right amount of colors', () => {
    let colors = generateColors(16);
		expect(colors.length).toBe(16);
	});

  it('generates colors in oklch space', () => {
    let colors = generateColors(5);
    expect(colors.every(c => c.space === Color.spaces.oklch)).toBeTruthy();
  });

  it('generates colors with equal lightness distance', () => {
    let colors = generateColors(4);

    expect(colors[0].l).toBe(0);
    expect(colors[1].l).toBe(33);
    expect(colors[2].l).toBe(67);
    expect(colors[3].l).toBe(100);
  });
});
