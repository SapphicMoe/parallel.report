import type { Resource } from '..';

export default {
  title: 'D2Foundry',
  prefix: 'Foundry',
  category: ['planning', 'stats'],
  color: {
    background: 'bg-foundry',
    border: 'border-foundry',
    text: 'text-foundry',
  },
  image: {
    file: 'Foundry2.png',
    height: 50,
    width: 50,
  },
  description:
    'A weapon roll explorer and theorycrafting tool for Destiny 2.',
  site: 'https://d2foundry.gg/',
  contributors: [
    {
      name: 'gothfemme',
      link: 'https://gothfem.me',
      role: 'Founder, Web Designer, and Developer',
      bold: true,
    },
    {
      name: 'Harm',
      link: 'https://github.com/BarmonHammer',
      role: 'Calculator and Testing Lead',
      bold: true
    },
    {
      name: 'Crystal',
      link: 'https://github.com/DevantHugo',
      role: 'Rust Engineer',
      bold: true
    },
    {
      name: 'Andromeda',
      link: 'https://discord.com/users/84069481239805952',
      role: 'Rust Engineer',
      bold: true
    },
    {
      name: 'MossyMax',
      link: 'https://mossy.max',
      role: 'Damage Values / PVE Power Level Formulas',
    },
  ],
} satisfies Resource;
