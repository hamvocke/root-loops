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
    expect(colors.every(c => c.space === Color.spaces.oklch));
  });
});
