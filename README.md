# Civio Graphs Boilerplate

Civio graphs boilerplate with Webpack 4, Babel 7, Sass & hot reload.

Used for graphs development in [`civio-graphs`](https://github.com/civio/civio-graphs).

## Installation

Follow the [instructions on creating a new graph](https://github.com/civio/civio-graphs/wiki/Proceso-de-creación-de-gráficos#gráficos) from `civio-graphs`.

## Features

- ES6 support with [Babel 7](https://babeljs.io/)
- CSS style with [Sass](https://sass-lang.com/) & [Autoprefixer](https://github.com/postcss/autoprefixer) via [sass-loader](https://github.com/webpack-contrib/sass-loader)
- Live reload local server for development with [Webpack dev server](https://github.com/webpack/webpack-dev-server) & [css-hot-loader](https://github.com/shepherdwind/css-hot-loader)

## Commands

### npm run dev

> Note: This will not create or affect the `dist` build.

Start development server on `localhost:5000`.

### npm run build

Generate `dist` folder with `index.html`, `main.css` and `main.js`
