# Trilogy Multiplayer

![GitHub](https://img.shields.io/github/license/trilogymp/trilogymp.com)
[![Discord](https://img.shields.io/discord/901115701551570954)](https://discord.com/invite/dVfXRBA2zx)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](.github/CODE_OF_CONDUCT.md)

[Trilogy Multiplayer](https://trilogymp.com) (TMP) is a work in progress
nonprofit open source software project for Rockstar Games' Grand Theft Auto: The
Trilogy – The Definitive Edition with a primary goal of adding multiplayer
functionality with an easy scripting interface for players to create unique
experiences together with their friends.

This repository contains the source code of our project's website located at
https://trilogymp.com.

## Stack

- Hosting
  - Free CDN hosting from [Cloudflare Pages](https://pages.cloudflare.com/) with
    [Cloudflare Workers](https://workers.cloudflare.com/)
- Gist
  - [Node.js 14](https://nodejs.org/)
  - [React 17](https://reactjs.org/)
  - [Next.js 11](https://nextjs.org/)
  - CSS modules in [Sass (SCSS)](https://sass-lang.com/)
- CI/CD
  - Cloudflare Pages GitHub integration
- Static code analysis
  - [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) with
    [semistandard](https://github.com/standard/semistandard)
  - Git hooks with [husky](https://typicode.github.io/husky/#/)
  - [stylelint](https://stylelint.io/) with
    [recommended-scss](https://github.com/stylelint-scss/stylelint-config-recommended-scss)
    and
    [css-modules](https://github.com/pascalduez/stylelint-config-css-modules)
- Internationalization
  - [postcss-rtlcss](https://github.com/elchininet/postcss-rtlcss) for automated
    RTL support
  - [react-i18next](https://react.i18next.com/)
- Tools and utilities
  - [classnames](https://github.com/JedWatson/classnames)
  - [Wrangler](https://developers.cloudflare.com/workers/cli-wrangler) for
    Cloudflare Workers

## Setting up the project

1. Clone this repository
2. Run `npm install`

## Developing

1. Run `npm run dev`
2. Navigate to http://localhost:3000

## Publishing the page

To publish a new page build, simply push changes to the `production` branch and
the Cloudflare Pages GitHub integration will take care of the rest.

Pushing to other branches, including the `main` branch, will result in a preview
build. A public preview link will be available on Cloudflare Pages dashboard.

## Publishing the worker

To publish a new worker build, use the
[Wrangler CLI](https://developers.cloudflare.com/workers/cli-wrangler). First
log in to your authorized Cloudflare account using `npm run wrangler login` and
then use `npm run publish-workers` to publish the worker in all environments.
Use `npm run wrangler` to see all available commands.

## Exporting a static version

You can export a static version with `npm run export`. The resulting files will
be located in the default `out` directory.

## License

Unless otherwise specified, all source code hosted on this repository is
licensed under the MIT license. See the LICENSE file for more details.

Trilogy Multiplayer is not affiliated with or endorsed by Rockstar Games,
Take-Two Interactive or other rightsholders. Any trademarks used belong to their
respective owners.
