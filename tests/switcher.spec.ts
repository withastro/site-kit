import { test, expect } from "@playwright/test"

test("<Switcher />", async ({ page }) => {
	await page.goto("/components/switcher")

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Switcher | Astro/)

	await page.setViewportSize({ width: 414, height: 966 })
	expect(await page.screenshot()).toMatchSnapshot("components-switcher-mobile.png")

	await page.setViewportSize({ width: 800, height: 1200 })
	expect(await page.screenshot()).toMatchSnapshot("components-switcher-tablet.png")

	await page.setViewportSize({ width: 1920, height: 1080 })
	expect(await page.screenshot()).toMatchSnapshot("components-switcher-desktop.png")
})
