import type { Resource } from '..';

export default {
  title: 'Ishtar Commander',
  prefix: 'Ishtar Commander',
  category: ['inventory'],
  color: {
    background: 'bg-ishtarcommander',
    border: 'border-ishtarcommander',
    text: 'text-ishtarcommander',
  },
  image: {
    file: 'Ishtar.svg',
    height: 50,
    width: 50,
  },
  description: "Tap into your Guardian's arsenal, vault, and inventory; all from your device.",
  site: 'https://ishtar.app',
  contributors: [
    {
      name: 'Nigel Hietala',
      link: 'https://twitter.com/IshqtarCommander',
      role: 'Founder',
      bold: true,
    },
    {
      name: 'cowgod77',
      link: 'https://www.bungie.net/7/en/User/Profile/3/4611686018467183040',
      role: 'Contributor',
    },
    {
      name: 'Daskeladden',
      link: 'https://www.bungie.net/7/en/User/Profile/254/8338415?bgn=Daskeladden',
      role: 'Contributor',
    },
    {
      name: 'Ethan_e_e_e',
      link: 'https://twitter.com/asacre45',
      role: 'Japanese (ja-JP) Translator',
    },

    {
      name: 'WhiskyEnjoyer',
      link: 'https://www.bungie.net/7/en/User/Profile/254/9691563?bgn=WhiskyEnjoyer',
      role: 'Contributor',
    },
  ],
} satisfies Resource;
