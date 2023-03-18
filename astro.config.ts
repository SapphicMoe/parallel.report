import { defineConfig } from 'astro/config';
import type { AstroIntegration } from 'astro';

import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

import externalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://parallel.report',
  markdown: {
    rehypePlugins: [
      [
        externalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noopener'],
        },
      ],
    ],
  },
  integrations: [
    tailwind(),
    prefetch(),
    sitemap(),
    compress(),

    // TEMP: The recent Astro update broke integration logic, so "AstroIntegration" has been supplied here for now.
    mdx() as AstroIntegration,
  ],
});
