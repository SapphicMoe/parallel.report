import type { Resource } from '..';

export default {
  title: 'DestinyTracker',
  prefix: 'DestinyTracker',
  category: ['stats', 'progress', 'rotations', 'api'],
  color: {
    background: 'bg-destinytracker',
    border: 'border-destinytracker',
    text: 'text-destinytracker',
  },
  image: {
    file: 'DestinyTracker.png',
    height: 50,
    width: 50,
  },
  description:
    'The website for detailed profile and weapon statistics. Compete against top players in featured leaderboards.',
  site: 'https://destinytracker.com',
  contributors: [
    {
      name: 'MoreofJay',
      link: 'https://twitter.com/JayDTR01',
      role: 'Media Lead & Content Manager',
      bold: true,
    },
    {
      name: 'Protheon',
      link: 'https://twitter.com/Protheon_',
      role: 'Community Manager',
      bold: true,
    },
    {
      name: 'Suttledge',
      link: 'https://twitter.com/Suttledge',
      role: 'Writer & Team Lead',
      bold: true,
    },
    {
      name: 'Dragosnuv',
      link: 'https://twitter.com/dragosnuv',
      role: 'Member',
    },
    {
      name: 'Finkle',
      link: 'https://twitter.com/vfinklee',
      role: 'Partner',
    },
    {
      name: 'HeatherLovely',
      link: 'https://twitter.com/HeatherLovelyy',
      role: 'Content Creator',
    },
    {
      name: 'illPhysics',
      link: 'https://twitter.com/illPhysics',
      role: 'Member',
    },

    {
      name: 'Separer',
      link: 'https://twitter.com/Separer',
      role: 'Member',
    },

    {
      name: 'SweatyOrNot',
      link: 'https://twitter.com/Sweaty0rNot',
      role: 'Member',
    },
    {
      name: 'TooHardcore',
      link: 'https://twitter.com/TooHardcore',
      role: 'Member',
    },
  ],
} satisfies Resource;
