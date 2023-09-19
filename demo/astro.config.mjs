import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
	site: 'https://ds.astro.build',
	integrations: [tailwind()],
	markdown: {
		shikiConfig: {
			theme: JSON.parse(fs.readFileSync(join(__dirname, './houston.theme.json'), 'utf-8')),
		},
	},
});
