import { expect, test } from '@playwright/test';

test('index page shows heading', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Root Loops' })).toBeVisible();
});

test('index page shows all range sliders', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('slider', { name: 'Milk' })).toBeVisible();
	await expect(page.getByRole('slider', { name: 'Flavor' })).toBeVisible();
	await expect(page.getByRole('slider', { name: 'Artificial Colors' })).toBeVisible();
});
