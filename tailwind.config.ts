import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';

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

    ({ addComponents }: PluginAPI) =>
      addComponents({
        '.title': {
          '@apply text-3xl font-bold': {},
        },
      }),
  ],
} satisfies Config;
