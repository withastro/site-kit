# @astrojs/site-kit

This is a collection of tooling configuration, styles, components and icons used for \*.astro.build websites. **It is not a general purpose component kit.**

## Setup

Install the package from git and related dependencies:

```bash
pnpm i github:withastro/site-kit
pnpm i -D eslint prettier typescript npm-run-all @astrojs/check
```

Update `package.json`:

```json
{
  "scripts": {
    "lint": "run-s --continue-on-error lint:*",
    "lint:types": "tsc -b",
    "lint:astro": "astro check",
    "lint:eslint": "eslint . --cache --fix --report-unused-disable-directives",
    "lint:prettier": "prettier . \"**/*.astro\" --cache --write --list-different"
  },
  "eslintConfig": {
    "extends": "./node_modules/@astrojs/site-kit/eslint.config.cjs"
  },
  "prettier": "@astrojs/site-kit/prettier"
}
```

Add `.prettierignore`:

```ignore
pnpm-lock.yaml
```

Copy the workflow file into your repo:

```bash
wget https://raw.githubusercontent.com/withastro/site-kit/main/.github/workflows/lint.yml -O .github/workflows/lint.yml
```

### For Monorepos

If you're in a monorepo, add a new script to typecheck workspaces:

```json
{
  "scripts": {
    "lint:types-workspaces": "pnpm -r exec tsc -b"
  }
}
```

## Setup with Tailwind (optional)

Install dependencies:

```bash
pnpm i -D tailwindcss @astrojs/tailwind
```

Add `tailwind.config.cjs`:

```js
module.exports = require('@astrojs/site-kit/tailwind');
```

Add the tailwind integration, and disable base styles:

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
```

Import tailwind.css in your base layout component:

```astro
---
import '@astrojs/site-kit/tailwind.css';
---
```
