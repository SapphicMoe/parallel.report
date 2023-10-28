import type { Resource } from '..';

export default {
  title: 'TodayInDestiny',
  prefix: 'TodayInDestiny',
  category: ['rotations'],
  color: {
    background: 'bg-todayindestiny',
    border: 'border-todayindestiny',
    text: 'text-todayindestiny',
  },
  image: {
    file: 'TodayInDestiny.png',
    height: 60,
    width: 60,
  },
  description: "A summary of what's available in Destiny today.",
  site: 'https://www.todayindestiny.com',
  contributors: [
    {
      name: 'JpDeathBlade',
      link: 'https://twitter.com/JpDeathBlade',
      role: 'Developer',
      bold: true,
    },
    {
      name: 'CthulhuReigns',
      link: 'https://www.bungie.net/7/en/User/Profile/254/20614816?bgn=CthulhuReigns',
      role: 'Contributor',
    },
  ],
} satisfies Resource;
