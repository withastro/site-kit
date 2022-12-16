import { test, expect } from "@playwright/test"

test("<Grid />", async ({ page }) => {
	await page.goto("/components/grid")

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Grid | Astro/)

	await page.setViewportSize({ width: 414, height: 966 })
	expect(await page.screenshot()).toMatchSnapshot("components-grid-mobile.png")

	await page.setViewportSize({ width: 800, height: 1200 })
	expect(await page.screenshot()).toMatchSnapshot("components-grid-tablet.png")

	await page.setViewportSize({ width: 1920, height: 1080 })
	expect(await page.screenshot()).toMatchSnapshot("components-grid-desktop.png")
})
