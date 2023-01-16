import { defineConfig } from 'astro/config';

// Astro modules
import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// Rehype modules
import externalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.parallel.report',
  integrations: [
    mdx({
      rehypePlugins: [[externalLinks, { target: '_blank', rel: ['nofollow', 'noopener'] }]],
    }),
    prefetch(),
    sitemap(),
    compress(),
  ],
});
