import preset from '@astrojs/site-kit/tailwind-preset';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{js,jsx,ts,tsx,mjs,astro}'],
	presets: [preset],
} satisfies Config;
