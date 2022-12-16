// https://astro.build/config

import { defineConfig } from 'astro/config';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

export default defineConfig({
  integrations: [sitemap(), prefetch(), compress()],
  site: 'https://parallel.report',
});