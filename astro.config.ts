import { defineConfig } from 'astro/config';

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
    mdx(),

    // TEMP: The Lost Sector logo looks weird when compressed.
    compress({ exclude: 'LostSector.svg' }),
  ],
});
