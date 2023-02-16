/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
  theme: {
    fontFamily: {
      body: ['Inter', 'sans-serif'],
      display: ['Atkinson Hyperlegible', 'sans-serif'],
    },
    colors: {},
    extend: {
      typography: () => ({
        invert: {
          css: {
            a: {
              background: '#f5c2e7',
              backgroundClip: 'text',
              color: 'transparent',
            },
            'a:hover': {
              background: '#c99fbe',
              backgroundClip: 'text',
              color: 'transparent',
            },
          },
        },
      }),
      fontSize: {
        '3xl': ['1.8rem', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
      prefix: 'ctp',
      defaultFlavour: 'mocha',
    }),
    require('@tailwindcss/typography'),
  ],
};
