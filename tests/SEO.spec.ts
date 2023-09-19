import { expect, test, type Page } from '@playwright/test';

type SEOMetadata = {
	name: string;
	title: string;
	description: string;
	image: { src: string; alt: string };
	canonicalURL?: URL | null;
	locale?: string;
};
type OpenGraph = Partial<SEOMetadata> & {
	type?: string;
};
type Twitter = Partial<SEOMetadata> & {
	handle?: string;
	card?: 'summary' | 'summary_large_image';
};

type Props = SEOMetadata & {
	og?: OpenGraph;
	twitter?: Twitter;
};

test.describe('<SEO />', () => {
	async function expectMeta(page: Page, props: Props) {
		await expect(page).toHaveTitle(props.title);

		await expect(page.locator('meta[name=description]')).toHaveAttribute(
			'content',
			props.description,
		);

		if (props.canonicalURL !== null) {
			const canonicalURL =
				props.canonicalURL ?? new URL(new URL(page.url()).pathname + '/', 'https://test.com');

			await expect(page.locator('link[rel=canonical]')).toHaveAttribute(
				'href',
				canonicalURL.toString(),
			);
		} else {
			await expect(page.locator('link[rel=canonical]')).toHaveCount(0);
		}
	}

	test('Basic props', async ({ page }) => {
		await page.goto('/components/seo/basic');

		await expectMeta(page, {
			title: 'Basic SEO',
			description: 'Basic SEO description',
			name: 'Site Kit',
			image: {
				src: 'https://astro.build/social.jpg',
				alt: 'Basic SEO image',
			},
		});
	});

	test('Without canoncial URL', async ({ page }) => {
		await page.goto('/components/seo/without-canonical');

		await expectMeta(page, {
			title: 'Without Canonical URL',
			description: 'Basic SEO without a canonical URL',
			name: 'Site Kit',
			canonicalURL: null,
			image: {
				src: 'https://astro.build/social.jpg',
				alt: 'Basic SEO image',
			},
		});
	});
});
