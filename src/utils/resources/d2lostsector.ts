import type { Resource } from '..';

export default {
  title: 'D2 Lost Sector Report',
  prefix: 'Lost Sector',
  category: ['rotations'],
  color: {
    background: 'bg-light-d2lostsector dark:bg-d2lostsector',
    border: 'border-light-d2lostsector dark:border-d2lostsector',
    text: 'text-light-d2lostsector dark:text-d2lostsector',
  },
  image: {
    file: 'LostSector.svg',
    height: 45,
    width: 45,
  },
  description: 'Your daily Destiny 2 Legend & Master Lost Sector report.',
  site: 'https://twitter.com/D2LostSector',
  contributors: [
    {
      name: 'Quiff Boy',
      link: 'https://twitter.com/QuiffBoy',
      role: 'Founder',
      bold: true,
    },
    {
      name: 'AbnormalBenjy7',
      link: 'https://www.bungie.net/7/en/User/Profile/254/11415300?bgn=AbnormalBenjy7',
      role: 'Contributor',
    },
    {
      name: 'Bazz1984',
      link: 'https://www.bungie.net/7/en/User/Profile/254/5038249?bgn=Bazz1984',
      role: 'Contributor',
    },
    {
      name: 'Fauxres',
      link: 'https://www.bungie.net/7/en/User/Profile/2/4611686018473009644?bgn=Fauxres',
      role: 'Contributor',
    },
    {
      name: 'knight2qb3',
      link: 'https://www.bungie.net/7/en/User/Profile/254/14560907?bgn=knight2qb3',
      role: 'Contributor',
    },
    {
      name: 'Nerfs',
      link: 'https://www.bungie.net/7/en/User/Profile/2/4611686018446760774',
      role: 'Server Admin',
    },
    {
      name: 'Papilli0n',
      link: 'https://www.bungie.net/7/en/User/Profile/254/4994187?bgn=Papilli0n',
      role: 'Contributor',
    },
    {
      name: 'Raver boyz',
      link: 'https://www.bungie.net/7/en/User/Profile/254/11080142?bgn=Raver%2520boyz',
      role: 'Contributor',
    },
    {
      name: 'Sep7ember',
      link: 'https://www.bungie.net/7/en/User/Profile/254/54741?bgn=Sep7ember',
      role: 'Contributor',
    },
    {
      name: 'Syriis',
      link: 'https://www.bungie.net/7/en/User/Profile/254/6392697?bgn=Syriis',
      role: 'Contributor',
    },
  ],
} satisfies Resource;
