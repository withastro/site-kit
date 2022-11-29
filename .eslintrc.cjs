module.exports = {
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:astro/recommended',
      'plugin:astro/jsx-a11y-recommended',
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
        rules: {},
      },
      {
        files: ['*.ts'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
          rules: {
            indent: ['error', 2],
            'linebreak-style': ['error', 'unix'],
            quotes: ['error', 'single'],
            semi: ['error', 'never'],
          },
        },
      },
    ],
  }