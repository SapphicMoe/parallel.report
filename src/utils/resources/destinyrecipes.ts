import type { Resource } from '..';

export default {
  title: 'Destiny Recipes',
  prefix: 'Destiny Recipes',
  category: ['planning'],
  color: {
    background: 'bg-destinyrecipes',
    border: 'border-destinyrecipes',
    text: 'text-destinyrecipes',
  },
  image: {
    file: 'DestinyRecipes.png',
    height: 60,
    width: 60,
  },
  description:
    'A collection of useful tools for Destiny. Prep for future seasons with the Pre-seasonal Checklist, clean your vault with the Vault Cleaner, and much more!',
  site: 'https://destinyrecipes.com',
  contributors: [
    {
      name: 'HerrExion',
      link: 'https://twitter.com/HerrExion',
      role: 'Founder',
      bold: true,
    },
    {
      name: 'ARTES',
      link: 'https://www.bungie.net/7/en/User/Profile/254/24744287/ARTES',
      role: 'Polish (pl-PL) Translator',
    },
    {
      name: 'Catchup',
      link: 'https://www.bungie.net/7/en/User/Profile/254/20726422/Catchup',
      role: 'German (de-DE) Translator',
    },
    {
      name: 'Fly',
      link: 'https://twitter.com/iNotFly',
      role: 'Italian (it-IT) Translator',
    },
    {
      name: 'Frozty',
      link: 'https://twitter.com/Frozty4628',
      role: 'Chinese (zh-CN) Translator',
    },
    {
      name: 'gevoup',
      link: 'https://www.bungie.net/7/en/User/Profile/3/4611686018483638871/gevoup',
      role: 'Russian (ru-RU) Translator',
    },

    {
      name: 'R4NDO',
      link: 'https://twitter.com/R4ndomizor',
      role: 'Japanese (ja-JP) Translator',
    },
    {
      name: 'Sho',
      link: 'https://twitter.com/TheBossManSho',
      role: 'Serbian (sr-SP) Translator',
    },
    {
      name: 'ThePanicEnd',
      link: 'https://www.bungie.net/7/en/User/Profile/254/8270684/ThePanicEnd',
      role: 'Mexican-Spanish (es-MX) Translator',
    },
  ],
} satisfies Resource;
