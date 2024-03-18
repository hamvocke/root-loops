import { describe, it, expect } from 'vitest';
import { generateColors } from './colorcrunch';

describe('generateColors', () => {
	it('generates the right amount of colors', () => {
    let colors = generateColors(16);
		expect(colors.length).toBe(16);
	});
});
