import { expect, test } from "@playwright/test"

test.describe("<SEO />", () => {
	test("Basic props", async ({ page }) => {
		await page.goto("/components/seo/basic")
		await expect(page).toHaveTitle(/Basic SEO/)

		const description = page.locator("meta[name=description]")
		await expect(description).toHaveAttribute(
			"content",
			"Basic SEO description",
		)
	})
})
