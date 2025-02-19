import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';

import catppuccin from '@catppuccin/tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts,tsx}'],
  theme: {
    fontFamily: {
      body: ['Atkinson Hyperlegible', 'sans-serif'],
    },
    colors: {
      'accent-light': '#d20f39',
      'accent-light-hover': '#a60c2d',
      'accent-dark': '#f38ba8',
      'accent-dark-hover': '#d97e97',
    },
    extend: {
      typography: (theme: PluginAPI['theme']) => ({
        // TODO: re-enable light mode. Not working as expected atm.
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.accent-dark'),
              textDecorationLine: 'none',

              '&:hover': {
                color: theme('colors.accent-dark-hover'),
                textDecorationLine: 'underline',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    catppuccin({
      prefix: 'ctp',
    }),
    typography,
  ],
} satisfies Config;
