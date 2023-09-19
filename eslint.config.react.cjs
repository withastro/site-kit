/** @type {import('eslint').Linter.Config} */
module.exports = {
	plugins: ['react'],
	settings: {
		react: {
			version: '18.2.0',
		},
	},
	overrides: [
		{
			files: ['*.{ts,tsx}'],
			extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime'],
			rules: {
				'react/no-unknown-property': 'off',
				'react/prop-types': 'off',
			},
		},
	],
};
