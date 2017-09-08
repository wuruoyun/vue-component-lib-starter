# Vue Component Lib Starter

This repo contains a bare-bones example of how to create your own Vue component library. The libray is built by [Rollup](https://rollupjs.org/), while the documentation app is built by [WebPack 2](https://webpack.github.io/). This is following the [recommendation](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c): "Use webpack for apps, and Rollup for libraries".

## Build Setup

```bash
# install dependencies
npm install

# start the documentation app with hot reload at localhost:8080
npm run start

# build the library for production
npm run build

# build the documentation app for production
npm run build-docs
```

`npm run build` builds the library to `dist`, generating three files:

* `dist/mylib.js`
    an ES module bundle, suitable for use in other people's libraries and applications, that `import`s the external dependency. 
* `dist/mylib.js.map`
    the source map for the library. 
* `dist/mylib.css`
    a regular CSS file that includes all the styles from the library components

`npm run build-docs` buils the documentation app to `docs/dist`. 

## Get Started

The library has an example component [MyComponent.vue](src/components/MyComponent.vue), and it is exported in [index.js](src/index.js). The documentation app is a bare-bones Vue app that make use of the example component in the library. 

To develop components with documentation app running, simple run `npm run start` and keep the browser open at [http://localhost:8080](http://localhost:8080). The documentation app in browser will auto reload whenever you made changes to either the library components or the documentation app itself.

To add your own Vue components, add your Vue files under [src](src), and make sure export them in `index.js`. You should use scoped CSS for your Vue components.

To change the library name from the default `mylib`, edit the name property in [package.json](package.json). In addition, [webpack.config.js](webpack.config.js) resolves alias `mylib` to `src` folder, so that the documentation app can access the library components like the following. You may also want to change it, but it is optional.

```
import { MyComponent } from 'mylib';
```

To publish the documentation app online, such as to [GitHub Pages](https://pages.github.com/) or [Surge](https://surge.sh/), run `npm run build-docs`, and publish the `docs/dist` folder. 

## How it Works

The project makes use of both [Rollup](https://rollupjs.org/) and [WebPack 2](https://webpack.github.io/). Although they are two different bundlers, they can coexist in the same project, sharing the following:

- Package definition [package.json](package.json)
- Babel configuration [.babelrc](.babelrc)
- Source codes for library components [src](src)

In addition, Rollup uses the following:

- Rollup configuration [rollup.config.js](rollup.config.js)

And Webpack uses the following:

- Webpack configuration [webpack.config.js](webpack.config.js)
- Source codes for documentation apps [docs/src](docs/src)

## License

[MIT](LICENSE).
