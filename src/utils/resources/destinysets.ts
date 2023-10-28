import type { Resource } from '..';

export default {
  title: 'Destiny Sets',
  prefix: 'Destiny Sets',
  category: ['collections', 'api'],
  color: {
    background: 'bg-destinysets',
    border: 'border-destinysets',
    text: 'text-destinysets',
  },
  image: {
    file: 'DestinySets.svg',
    height: 50,
    width: 50,
  },
  description: 'Track your missing Collections gear, armor sets, and pursuit badges.',
  site: 'https://destinysets.com',
  contributors: [
    {
      name: 'Jakosaur',
      link: 'https://twitter.com/Jakosaur',
      role: 'Developer',
      bold: true,
    },
    {
      name: 'joshhunt',
      link: 'https://hachyderm.io/@joshhunt',
      role: 'Developer',
      bold: true,
    },
  ],
} satisfies Resource;
