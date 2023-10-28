import type { Resource } from '..';

export default {
  title: 'Charlemagne',
  prefix: 'Charlemagne',
  category: ['discord', 'stats'],
  color: {
    background: 'bg-charlemagne',
    border: 'border-charlemagne',
    text: 'text-charlemagne',
  },
  image: {
    file: 'Charlemagne.png',
    height: 50,
    width: 50,
  },
  description:
    'A Discord bot that provides detailed Destiny information. Check profile stats, clan ranking, and schedule LFG posts.',
  site: 'https://warmind.io',
  contributors: [
    {
      name: 'Tor Kallon',
      link: 'https://twitter.com/TorKallon',
      role: 'Developer',
      bold: true,
    },
    {
      name: 'Hanxa13',
      link: 'https://twitter.com/Hanxa13',
      role: 'Community Support',
    },
    {
      name: 'icemanxbe',
      link: 'https://twitter.com/icemanxbe',
      role: 'Community Support',
    },
    {
      name: 'KramRM',
      link: 'https://twitter.com/KramRM',
      role: 'Server Admin',
    },
    {
      name: 'littleben4242',
      link: 'https://www.bungie.net/7/en/User/Profile/254/12511952',
      role: 'Community Support',
    },
    {
      name: 'LoraTheXplorer',
      link: 'https://twitter.com/lorathexplorer_',
      role: 'Server Admin',
    },
    {
      name: 'PandaPaxxy',
      link: 'https://twitter.com/panda_pax',
      role: 'Community Support',
    },
    {
      name: 'TheSpartanAsh',
      link: 'https://twitter.com/TheSpartanAsh',
      role: 'Server Admin',
    },
  ],
} satisfies Resource;
