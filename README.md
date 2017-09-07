# Vue Component Lib Starter

This repo contains a bare-bones example of how to create a Vue component library. The libray is built by Rollup, while the documentation app is built by WebPack 2. This is following the [recommendation](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c): "Use webpack for apps, and Rollup for libraries".

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

## Get Started

The library has an example component [MyComponent.vue](src/components/MyComponent.vue), and it is exported in [index.js](src/index.js). To add your components, make sure you export them in `index.js` too.

The library name is `mylib`. To change it, edit the name property in [package.json](package.json). In addition, [webpack.config.js](webpack.config.js) resolves alias `mylib` to `src` folder, so that the documentation app can access the library components like the following. You may also want to change it, but it is optional.

```
import { MyComponent } from 'mylib';
```

Simple run `npm run star` and keep the browser open at localhost:8080. It will auto reload when you made changes to either the library components or the documentation app itself.

## License

[MIT](LICENSE).
