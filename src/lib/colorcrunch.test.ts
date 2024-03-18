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

  it('generates colors with equal hue distance', () => {
    let colors = generateColors(8);

    expect(colors[0].h).toBe(0);
    expect(colors[1].h).toBe(45);
    expect(colors[2].h).toBe(90);
    expect(colors[3].h).toBe(135);
    expect(colors[4].h).toBe(180);
    expect(colors[5].h).toBe(225);
    expect(colors[6].h).toBe(270);
    expect(colors[7].h).toBe(315);
  });
});
