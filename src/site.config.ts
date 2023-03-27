const config = {
  site: {
    name: 'parallel.report', // The site name (example.com)

    icon: {
      name: '/favicon.png', // Icon name (/favicon.png)
      altText: 'The Parallel Program emblem icon.', // Alt text for the icon
    },

    themeColor: '#CA2917', // Theme color for the site

    analytics: true, // Whether to enable Plausible Analytics or not
  },

  socials: {
    mastodon: {
      link: 'https://tech.lgbt/@solely',
      alt: 'solely@tech.lgbt',
    },

    twitter: '@solelychloe',
  },
};

export const site = config.site;
export const socials = config.socials;
