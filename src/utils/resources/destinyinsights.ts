import type { Resource } from '..';

export default {
  title: 'Destiny Insights',
  prefix: 'Destiny Insights',
  category: ['rotations'],
  color: {
    background: 'bg-destinyinsights',
    border: 'border-destinyinsights',
    text: 'text-destinyinsights',
  },
  image: {
    file: 'DestinyInsights.png',
    height: 35,
    width: 35,
  },
  description:
    'An app that provides insightful info for mods: how many times they were sold, when they made their last appearance, and more!',
  site: 'https://twitter.com/DestinyInsights',
  contributors: [
    {
      name: 'Matt Jarett',
      link: 'https://mattjarrett.dev/',
      role: 'Founder',
      bold: true,
    },
    {
      name: 'TinCanBeef',
      link: 'https://twitter.com/TinCanBeef',
      role: 'Contributor',
    },
  ],
} satisfies Resource;
