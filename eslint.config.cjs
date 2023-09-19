/** @type {import('eslint').Linter.Config} */
module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/strict',
		'plugin:@typescript-eslint/strict-type-checked',
		'plugin:@typescript-eslint/stylistic',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'plugin:astro/recommended',
		'prettier',
	],
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
			rules: {
				// this is currently broken in astro files
				'@typescript-eslint/no-unsafe-assignment': 'off',
				// astro JSX elements are `any`, which causes too many false-positives
				'@typescript-eslint/no-unsafe-return': 'off',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: true, // uses the closest tsconfig.json for each file
	},
	plugins: ['@typescript-eslint', 'astro'],
	rules: {
		'@typescript-eslint/array-type': [
			'warn',
			{ default: 'array-simple', readonly: 'array-simple' },
		],
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/consistent-type-imports': [
			'warn',
			{
				disallowTypeAnnotations: false,
				fixStyle: 'inline-type-imports',
			},
		],
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/triple-slash-reference': 'off',
		'no-console': [
			'warn',
			{
				allow: ['warn', 'error', 'info'],
			},
		],
		'no-undef': 'off',
		'no-useless-rename': 'warn',
		'object-shorthand': 'warn',
		'@typescript-eslint/no-non-null-assertion': 'warn',
		'@typescript-eslint/no-confusing-void-expression': 'off',
		'@typescript-eslint/no-floating-promises': 'warn',
		'@typescript-eslint/consistent-type-definitions': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'warn',
		'@typescript-eslint/no-unsafe-call': 'warn',
		'@typescript-eslint/no-unsafe-return': 'warn',
		'@typescript-eslint/no-unsafe-argument': 'warn',
		'@typescript-eslint/no-unsafe-assignment': 'warn',
		'@typescript-eslint/no-import-type-side-effects': 'error',
		'@typescript-eslint/prefer-nullish-coalescing': [
			'warn',
			{ ignorePrimitives: { string: true, boolean: true } },
		],
	},
};
