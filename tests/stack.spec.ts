import { test, expect } from '@playwright/test';

test('<Stack />', async ({ page }) => {
	await page.goto('/components/stack');

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Stack | Astro/);

	expect(await page.screenshot()).toMatchSnapshot('components-stack.png');
});
