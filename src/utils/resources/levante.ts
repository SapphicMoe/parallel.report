import type { Resource } from '..';

export default {
  title: 'Levante',
  prefix: 'Levante',
  category: ['discord', 'rotations', 'stats'],
  color: {
    background: 'bg-light-levante dark:bg-levante',
    border: 'border-light-levante dark:border-levante',
    text: 'text-light-levante dark:text-levante',
  },
  image: {
    file: 'Levante.png',
    height: 50,
    width: 50,
  },
  description: 'A multi-purpose Destiny 2 Discord bot. Track daily rotations, emblems, and more.',
  site: 'https://www.levante.dev',
  contributors: [
    {
      name: 'GoGo',
      link: 'https://twitter.com/gogotheworld',
      role: 'Networking & Communications',
      bold: true,
    },
    {
      name: 'OatsFX',
      link: 'https://twitter.com/OatsFX',
      role: 'Owner',
      bold: true,
    },
    {
      name: 'Jaken',
      link: 'https://twitter.com/ThyJaken',
      role: 'Staff',
    },
    {
      name: 'Moonie',
      link: 'https://leafhub.dev',
      role: 'Contributor',
    },
  ],
} satisfies Resource;
