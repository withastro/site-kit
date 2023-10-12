/** @satisfies {import('prettier').Config} */
export default {
	printWidth: 100,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
	plugins: [
		'prettier-plugin-astro',
		'prettier-plugin-jsdoc',
		'prettier-plugin-tailwindcss', // must be last
	],
	overrides: [
		{
			files: ['.*', '*.json', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: false,
			},
		},
		{
			files: ['**/*.astro'],
			options: {
				parser: 'astro',
			},
		},
	],
};
