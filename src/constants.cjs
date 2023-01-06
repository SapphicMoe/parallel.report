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
