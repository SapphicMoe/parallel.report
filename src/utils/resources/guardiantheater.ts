import type { Resource } from '..';

export default {
  title: 'Guardian Theater',
  prefix: 'Guardian Theater',
  category: ['api'],
  color: {
    background: 'bg-light-guardiantheater dark:bg-guardiantheater',
    border: 'border-light-guardiantheater dark:border-guardiantheater',
    text: 'text-light-guardiantheater dark:text-guardiantheater',
  },
  image: {
    file: 'GuardianTheater.png',
    height: 60,
    width: 60,
  },
  description: 'Find yourself in the Twitch VODs that your Destiny 2 teammates and opponents recorded.',
  site: 'https://guardian.theater',
  contributors: [
    {
      name: 'Chris Fried',
      link: 'https://chrisfried.com/@chrisfried',
      role: 'Founder',
      bold: true,
    },
    {
      name: 'My Derpy Turtle',
      link: 'https://www.bungie.net/7/en/User/Profile/1/4611686018444338689',
      role: 'Contributor',
    },
    {
      name: 'RealAngryMonkey',
      link: 'https://www.bungie.net/7/en/User/Profile/254/5116514?bgn=RealAngryMonkey',
      role: 'Contributor',
    },
  ],
} satisfies Resource;
