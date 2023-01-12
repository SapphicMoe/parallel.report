// Base configuration for this website.
export const base = {
  // The accent color for this website
  color: '#ca2197',
  // The favicon for this website
  favicon: {
    // Alt text for the favicon
    alt: 'The Parallel Program emblem icon.',
    // File name for the favicon (for example, /favicon.png)
    fileName: '/favicon.png',
  },
  // Plausible Analytics settings
  plausible: {
    // Whether to enable Plausible Analytics.
    // If you're using Vercel, you must also edit the rewrites found in the vercel.json file.
    // Read more about Plausible here: <https://plausible.io/>
    analytics: true,
  },
  // SEO information
  seo: {
    // Keywords for search engines
    keywords: [
      'parallel program emblem',
      'parallel program destiny 2',
      'parallel program emblem destiny 2',
      'destiny 2 parallel program',
      'destiny 2 parallel program emblem',
    ],
  },
  // The site name. Used for Plausible Analytics (will appear as https://example.com)
  site: 'parallel.report',
};

// URL variables for the home page
export const links = {
  bungie: 'https://www.bungie.net/7/en/User/Profile',
  github: 'https://github.com',
  twitch: 'https://twitch.tv',
  twitter: 'https://twitter.com',
};

// Social links for SEO information.
// If you don't want to link anything here, leave this object empty. Don't uncomment or remove this, as you'll face errors!
export const socials = {
  // Your Mastodon instance identifier and link
  mastodon: {
    // Instance identifier (will appear as name@instance.link)
    alt: 'solely@tech.lgbt',
    // Instance link (will appear as https://instance.link/name)
    link: 'https://tech.lgbt/@solely',
  },
  // Your Twitter username (will appear as https://twitter.com/yourusername)
  twitter: 'solelychloe',
};
