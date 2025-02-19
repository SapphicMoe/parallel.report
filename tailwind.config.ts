import type { Config } from 'tailwindcss';

import catppuccin from '@catppuccin/tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts,tsx}'],
  theme: {
    fontFamily: {
      body: ['Atkinson Hyperlegible', 'sans-serif'],
    },
  },
  plugins: [
    catppuccin({
      prefix: 'ctp',
    }),
  ],
} satisfies Config;
