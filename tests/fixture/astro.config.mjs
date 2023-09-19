import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://test.com',
	vite: {
		ssr: {
			noExternal: ['smartypants'],
		},
	},
});
