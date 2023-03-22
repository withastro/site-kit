import { test, expect } from "@playwright/test"

test("<Split />", async ({ page }) => {
	await page.goto("/components/split")

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Split | Astro/)

	await page.setViewportSize({ width: 414, height: 966 })
	expect(await page.screenshot()).toMatchSnapshot("components-split-mobile.png")

	await page.setViewportSize({ width: 800, height: 1200 })
	expect(await page.screenshot()).toMatchSnapshot("components-split-tablet.png")

	await page.setViewportSize({ width: 1920, height: 1080 })
	expect(await page.screenshot()).toMatchSnapshot(
		"components-split-desktop.png",
	)
})
