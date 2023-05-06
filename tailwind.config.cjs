/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
  safelist: [{ pattern: /(bg|border|text)-light-./ }, { pattern: /(bg|border|text)-./, variants: ['dark'] }],
  theme: {
    fontFamily: {
      body: ['Inter', 'sans-serif'],
      display: ['Atkinson Hyperlegible', 'sans-serif'],
    },
    colors: {
      'light-d2lostsector': '#716ca3',
      'light-ghostoverlay': '#7C7C7C',
      'light-guardiantheater': '#82698F',
      'light-levante': '#65a69b',
      'light-littlelight': '#796cba',
      'light-scrublandeux': '#55a336',
      'light-trialsreport': '#ba9c0d',

      'charlemagne': '#919191',
      'd2lostsector': '#c1b7fe',
      'destinyitemmanager': '#f37422',
      'destinyinsights': '#c0316e',
      'destinyrecipes': '#c8435d',
      'destinysets': '#57b2ad',
      'destinytracker': '#e2263c',
      'felicity': '#ff4351',
      'ghostoverlay': '#e6e9ef',
      'guardiantheater': '#b798c9',
      'ishtarcollective': '#4485c4',
      'ishtarcommander': '#7C7C7C',
      'levante': '#87d3c6',
      'littlelight': '#a492ff',
      'scrublandeux': '#9fdd18',
      'todayindestiny': '#51a8a8',
      'trialsreport': '#ead884',

      'light-bg': '#e6e9ef',
      'light-text': '#4c4f69',
    },
    extend: {
      typography: () => ({
        invert: {
          css: {
            a: {
              background: '#f38ba8',
              backgroundClip: 'text',
              color: 'transparent',
            },
            'a:hover': {
              background: '#d97e97',
              backgroundClip: 'text',
              color: 'transparent',
            },
          },
        },
        DEFAULT: {
          css: {
            a: {
              background: '#d20f39',
              backgroundClip: 'text',
              color: 'transparent',
            },
            'a:hover': {
              background: '#a60c2d',
              backgroundClip: 'text',
              color: 'transparent',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
      prefix: 'ctp',
    }),
    require('@tailwindcss/typography'),
  ],
};
