# generator-innovet-vuepress-course

<!-- [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/amimaro/generator-vuepress) -->

> Yeoman generator for Innovet VuePress Courses

## Installation

First, install [Yeoman](http://yeoman.io) and generator-vuepress using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g vuepress
npm install -g yo
npm install -g generator-innovet-vuepress-course
```

Then generate your new project:

```bash
yo innovet-vuepress-course
```

Check out for VuePress Docs [here](https://vuepress.vuejs.org/).

## Getting started

```bash
npm run docs:dev
```

## Generate Page

```bash
yo innovet-vuepress-course:page
```

Creates a `[folder]/README.md` under `docs` and an `[folder]/assets` for your images. Overwrite the conflicts to persist the theme configurations.

## Build

```bash
npm run docs:build
```

Build generated under the root of your project.

## File tree

```bash
│   .gitignore
│   netlify.toml
│   package-lock.json
│   package.json
│   README.md
└───docs
    │   LICENSE.md
    │   README.md
    ├───.vuepress
    │   │   config.js
    │   ├───public
    │   │       favicon.ico
    │   └───styles
    │           palette.styl
    ├───assets
    │       success.png
    └───introduction
        │   README.md
        └───assets
                .gitkeep
```

## Getting To Know Yeoman

* Yeoman has a heart of gold.
* Yeoman is a person with feelings and opinions, but is very easy to work with.
* Yeoman can be too opinionated at times but is easily convinced not to be.
* Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [VIVES DevBit](https://www.devbit.be)

<!-- [npm-image]: https://badge.fury.io/js/generator-vuepress.svg
[npm-url]: https://npmjs.org/package/generator-vuepress
[travis-image]: https://travis-ci.org/amimaro/generator-vuepress.svg?branch=master
[travis-url]: https://travis-ci.org/amimaro/generator-vuepress
[daviddm-image]: https://david-dm.org/amimaro/generator-vuepress.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/amimaro/generator-vuepress -->
