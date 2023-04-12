# @astrojs/site-kit

This is a collection of tooling configuration, styles, components and icons used in common by \*.astro.build websites. It is not intended as a general purpose component kit.

## Setup

1. Install the package from git and related dependencies:

   ```bash
   pnpm i github:withastro/site-kit
   pnpm i -D eslint prettier typescript tailwindcss @astrojs/tailwind
   ```

1. Add `.eslintrc.cjs`:

   ```js
   module.exports = {
     extends: [require.resolve("@astrojs/site-kit/eslint")],
   }
   ```

1. Add `.prettierrc.cjs`:

   ```js
   module.exports = require("@astrojs/site-kit/prettier")
   ```

1. Add `.prettierignore`:

   ```ignore
   dist
   pnpm-lock.yaml
   ```

1. Add `tailwind.config.cjs`:

   ```js
   module.exports = require("@astrojs/site-kit/tailwind")
   ```

1. Add the tailwind integration, and disable base styles:

   ```js
   import { defineConfig } from "astro/config"
   import tailwind from "@astrojs/tailwind"

   export default defineConfig({
     integrations: [
       tailwind({
         config: {
           applyBaseStyles: false,
         },
       }),
     ],
   })
   ```

1. Import tailwind in your base layout component:

   ```astro
   ---
   import "@astrojs/site-kit/tailwind.css"
   // ...
   ---
   ```
