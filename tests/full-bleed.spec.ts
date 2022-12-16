import { test, expect } from "@playwright/test"

test("<FullBleed />", async ({ page }) => {
	await page.goto("/components/full-bleed")

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/FullBleed | Astro/)

	expect(await page.screenshot()).toMatchSnapshot("components-full-bleed.png")
})
