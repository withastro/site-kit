import { test, expect } from '@playwright/test';

test('<Cluster />', async ({ page }) => {
	await page.goto('/components/cluster');

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Cluster | Astro/);

	expect(await page.screenshot()).toMatchSnapshot('components-cluster.png');
});
