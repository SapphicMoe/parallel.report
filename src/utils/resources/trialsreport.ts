import type { Resource } from '..';

export default {
  title: 'Trials Report',
  prefix: 'Trials Report',
  category: ['stats'],
  color: {
    background: 'bg-light-trialsreport dark:bg-trialsreport',
    border: 'border-light-trialsreport dark:border-trialsreport',
    text: 'text-light-trialsreport dark:text-trialsreport',
  },
  image: {
    file: 'TrialsReport.png',
    height: 60,
    width: 60,
  },
  description:
    'The ultimate companion for Trials of Osiris. Look up everything on your opponents or yourself and see your game improve!',
  site: 'https://trials.report',
  contributors: [
    {
      name: 'Marruk',
      link: 'https://www.bungie.net/7/en/User/Profile/254/167493/Marruk',
      role: 'Developer',
      bold: true,
    },
    {
      name: 'VlakafatakafA',
      link: 'https://www.bungie.net/7/en/User/Profile/254/5996932/VlakafatakafA',
      role: 'Developer',
      bold: true,
    },
    {
      name: 'Steffwiz',
      link: 'https://twitter.com/Steffwiz',
      role: 'Contributor',
    },
  ],
} satisfies Resource;
