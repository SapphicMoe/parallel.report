import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import compress from 'astro-compress';

import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: cloudflare(),
  site: 'https://parallel.report',
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noopener'],
        },
      ],
    ],
  },
  integrations: [tailwind(), mdx(), react(), keystatic(), compress()],
});
