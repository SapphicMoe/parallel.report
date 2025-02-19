import type { Link } from '@utils/types';

const config = {
  name: 'parallel.report', // The site name (example.com)

  icon: {
    name: '/favicon.png', // Icon name (/favicon.png)
    altText: 'The Parallel Program emblem icon.', // Alt text for the icon
  },

  themeColor: '#CA2917', // Theme color for the site

  analytics: true, // Whether to enable Plausible Analytics or not

  navLinks: [{ link: '/', icon: 'mdi:home', text: 'Home' }] satisfies Link[],
};

export default config;
