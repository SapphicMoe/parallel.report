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
  integrations: [
    tailwind(),
    mdx({
      rehypePlugins: [
        [
          externalLinks,
          {
            target: '_blank',
            rel: ['nofollow', 'noopener'],
          },
        ],
      ],
    }),
    prefetch(),
    sitemap(),
    compress(),
  ],
});
