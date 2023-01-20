# <img src='public/favicon.png' title='Parallel Program emblem' alt='Parallel Program emblem' width='20' height='20' /> [Parallel Program Report][site]

This site covers Guardians who contributed to Destiny 2 and/or its API in a meaningful way, and have received the [Parallel
Program emblem][parallel].

Powered by [Astro][astro].

## Getting yourself added

Have the emblem, but not on this list? Or would you simply like to send feedback? Make a GitHub issue [here][issue], or
visit [https://www.arciniega.one][chloe] for various ways to contact me.

## How to Deploy

To host this website, use a solution like Vercel, Netlify, Render, or Heroku:

[![Deploy to Vercel](https://vercel.com/button)][vercel]
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)][netlify]
[![Deploy to Render](https://binbashbanana.github.io/deploy-buttons/buttons/official/render.svg)][render]
[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)][heroku]

You're now up and running!

_GitHub Pages is not recommended for deploying this site._

## Customizing the website

To customize and tailor this website for yourself, you'll want to:

- Edit the [`site.config.ts`](src/site.config.ts) file. This acts as the website's configuration. 
- Edit the [`footer.astro`](src/components/footer.astro) file.
- Edit the [`index.astro`](src/pages/index.astro) file. This is the main content that will be displayed on the site.
- Optional:
    - Change the `site` variable in [`astro.config.ts`](astro.config.ts) if you plan on making your site public.
    - Edit the variables found in [`custom.scss`](src/styles/custom.scss) to stylize the website to your needs.
    - Edit the [`public`](public/) folder's contents. 
        - I would appreciate if you credited me in the [`public/credits.txt`](public/credits.txt) file if you do decide to edit that. ❤️

## Hosting in a local environment

**Node.js 18+** or newer is required to be installed for this site.

1. `git clone https://github.com/solelychloe/parallel.report`
2. `corepack enable`
3. `yarn install`

- To preview, run `yarn dev`. Pages will update automatically on file save.
- To build your site, run `yarn build`. Afterwards, you can run `yarn preview` to serve the site from the `dist/`
  folder.

You're now up and running!

## License

This website is licensed under the [zlib][license] License.

&copy; 2023 [Chloe Arciniega][chloe].

[astro]: https://astro.build 'Astro'
[chloe]: https://www.arciniega.one 'Chloe Arciniega'
[issue]:
  https://github.com/solelychloe/parallel.report/issues/new?assignees=&labels=&template=parallel-program-request.md&title=Parallel+Program+Request
  'GitHub issue link'
[license]: https://github.com/solelychloe/parallel.report/blob/main/LICENSE 'zlib License'
[parallel]: https://destinyemblemcollector.com/emblem?id=3936625542 'Parallel Program emblem'
[site]: https://www.parallel.report 'parallel.report'
[heroku]: https://heroku.com/deploy?template=https://github.com/solelychloe/parallel.report 'Deploy to Heroku'
[netlify]:
  https://app.netlify.com/start/deploy?repository=https://github.com/solelychloe/parallel.report
  'Deploy to Netlify'
[render]: https://render.com/deploy?repo=https://github.com/solelychloe/parallel.report 'Deploy to Render'
[vercel]: https://vercel.com/new/clone?repository-url=https://github.com/solelychloe/parallel.report 'Deploy to Vercel'
