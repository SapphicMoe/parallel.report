import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
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
  integrations: [
    tailwind(),
    prefetch(),
    mdx(),

    // TEMP: The Lost Sector logo looks weird when compressed.
    compress({ Exclude: 'LostSector.svg' }),
  ],
});
