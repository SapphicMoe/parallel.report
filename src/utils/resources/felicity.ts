import type { Resource } from '..';

export default {
  title: 'Felicity',
  prefix: 'Felicity',
  category: ['collections', 'discord', 'progress'],
  color: {
    background: 'bg-felicity',
    border: 'border-felicity',
    text: 'text-felicity',
  },
  image: {
    file: 'Felicity.png',
    height: 50,
    width: 50,
  },
  description:
    'A multi-purpose Destiny Discord bot, which includes features like a roll finder, crafting recipes progress, collections guide, and more.',
  site: 'https://tryfelicity.one',
  contributors: [
    {
      name: 'Moonie',
      link: 'https://moons.bio',
      role: 'Developer',
      bold: true,
    },
    {
      name: 'MeGl',
      link: 'https://github.com/EndGameGl',
      role: 'Contributor',
    },
  ],
} satisfies Resource;
