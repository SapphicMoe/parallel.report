import type { Resource } from '..';

export default {
  title: 'Ishtar Collective',
  prefix: 'Ishtar Collective',
  category: ['lore'],
  color: {
    background: 'bg-ishtarcollective',
    border: 'border-ishtarcollective',
    text: 'text-ishtarcollective',
  },
  image: {
    file: 'Ishtar.svg',
    height: 50,
    width: 50,
  },
  description: 'Categorizing Destiny Lore.',
  site: 'https://ishtar-collective.net',
  contributors: [
    {
      name: 'baxter',
      link: 'https://twitter.com/baxt3r',
      role: 'Founder',
      bold: true,
    },
    {
      name: 'nev',
      link: 'https://twitter.com/nev_rtheless',
      role: 'Transcript Manager',
      bold: true,
    },
    {
      name: 'Throudin',
      link: 'https://ggwp.social/@Throudin',
      role: 'Developer',
      bold: true,
    },
    {
      name: 'unisys12',
      link: 'https://twitter.com/unisys12',
      role: 'Engineer',
      bold: true,
    },
    {
      name: 'waferbaby',
      link: 'https://waferbaby.com/@d',
      role: 'Engineer',
      bold: true,
    },
    {
      name: 'erinhc',
      link: 'https://www.bungie.net/7/en/User/Profile/254/10724644/erinhc',
      role: 'Archivist',
    },
    {
      name: 'firecracker ace',
      link: 'https://twitter.com/depyootee',
      role: 'Server Mod',
    },
    {
      name: 'MyNinjaH8sU',
      link: 'https://twitter.com/MyNinjaH8sU',
      role: 'Contributor',
    },
    {
      name: 'n0rmaln0rman',
      link: 'https://www.bungie.net/7/en/User/Profile/254/9657131/n0rmaln0rman',
      role: 'Contributor',
    },

    {
      name: 'Vertigo',
      link: 'https://twitter.com/Sean_Vertigo',
      role: 'Archivist',
    },

    {
      name: 'Wafflesquad',
      link: 'https://www.bungie.net/7/en/User/Profile/254/21511557?bgn=Wafflesquad',
      role: 'Archivist',
    },
  ],
} satisfies Resource;
