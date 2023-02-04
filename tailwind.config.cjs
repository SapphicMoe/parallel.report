/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
  plugins: [
    require('@catppuccin/tailwindcss')({
      prefix: 'ctp',
      defaultFlavour: 'mocha',
    }),
    require('@tailwindcss/typography'),
  ],
  theme: {
    fontFamily: {
      body: ['Inter', 'sans-serif'],
      display: ['Atkinson Hyperlegible', 'sans-serif'],
    },
    colors: {},
    extend: {
      fontSize: {
        '3xl': [
          '1.8rem',
          {
            lineHeight: '1.5',
          },
        ],
      },
    },
  },
};
