import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

import icon from 'astro-icon';

import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  site: 'https://parallel.report',
  integrations: [tailwind(), icon(), react(), keystatic()],

  vite: {
    optimizeDeps: {
      exclude: ['keystatic', '@keystatic/astro'],
    },
  },
});
