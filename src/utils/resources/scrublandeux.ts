import type { Resource } from '..';

export default {
  title: 'Scrublandeux',
  prefix: 'Scrublandeux',
  category: ['stats'],
  color: {
    background: 'bg-light-scrublandeux dark:bg-scrublandeux',
    border: 'border-light-scrublandeux dark:border-scrublandeux',
    text: 'text-light-scrublandeux dark:text-scrublandeux',
  },
  image: {
    file: 'Scrublandeux.png',
    height: 45,
    width: 45,
  },
  description: 'A calendar heatmap of time spent playing Destiny.',
  site: 'https://chrisfried.github.io/secret-scrublandeux',
  contributors: [
    {
      name: 'Chris Fried',
      link: 'https://chrisfried.com/@chrisfried',
      role: 'Developer',
      bold: true,
    },
    {
      name: 'Myjulot',
      link: 'https://github.com/julesrx/',
      role: 'Contributor',
    },
    {
      name: 'SylentButDedly',
      link: 'https://www.bungie.net/7/en/User/Profile/254/6672089?bgn=Sylent',
      role: 'Contributor',
    },
  ],
} satisfies Resource;
