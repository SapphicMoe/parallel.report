import type { Resource } from '..';

export default {
  title: 'Ghost Overlay',
  prefix: 'Ghost Overlay',
  category: ['progress'],
  color: {
    background: 'bg-light-text dark:bg-ghostoverlay',
    border: 'border-light-text dark:border-ghostoverlay',
    text: 'text-light-text dark:text-ghostoverlay',
  },
  image: {
    file: 'GhostOverlay.png',
    height: 50,
    width: 50,
  },
  description:
    'A mini app that lets you pin bounties, triumphs, and quests on top of Destiny 2 so you can track them while you play.',
  site: 'https://ghostoverlay.com',
  contributors: [
    {
      name: 'joshhunt',
      link: 'https://hachyderm.io/@joshhunt',
      role: 'Developer',
      bold: true,
    },
    {
      name: 'kapowaz',
      link: 'https://www.bungie.net/7/en/User/Profile/254/66567?bgn=kapowaz',
      role: 'Icon Designer',
    },
  ],
} satisfies Resource;
