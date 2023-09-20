import type { Config } from 'tailwindcss';

/**
 * @deprecated Use the preset instead:
 *
 *   ```js
 *   import preset from '@astrojs/site-kit/tailwind-preset';
 *   import type { Config } from 'tailwindcss';
 *   export default {
 *   presets: [preset],
 *   content: ['...'],
 *   // your customizations here
 *   } satisfies Config;
 * ```
 */
const config: Config;
export default config;
