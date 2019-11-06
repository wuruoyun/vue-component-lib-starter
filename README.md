[![Netlify Status](https://api.netlify.com/api/v1/badges/b1b84831-789e-4629-a9e3-55a36e136653/deploy-status)](https://app.netlify.com/sites/sharp-babbage-154f0a/deploys)

# Vue Component Library Starter

> Create your own component library with [Vue CLI 3](https://cli.vuejs.org/) and [VuePress](https://vuepress.vuejs.org/).

Sooner or later, you will find that creating a component library is much better than having all components inside your app project. A component library force you remove app specific logic from your components, makes it possible to reuse them in other apps. 

Once the components are in a libraray, documentation becomes critical. This starter project includes a documentation app powered by VuePress. It not only documents the usage of the component, but also provides a testing bed during the development of components. See the generated documentation app [here](https://sharp-babbage-154f0a.netlify.com/).

## Setup

``` bash
# install dependencies
npm install

# start the doc app with hot reload, great for testing components
npm run docs:dev

# build the library, available under dist
npm run build

# build the doc app, available under docs/.vuepress/dist
npm run docs:build
```

## How it works

### Installation

The library is a [Vue plugin](https://vuejs.org/v2/guide/plugins.html). Its `install` function in [install.js](src/install.js) imports all components from `components` folder, registers them to Vue and automatically call itself.

### External libraries

As an example, the popular library [moment](https://momentjs.com/) is used by Component-A. Since it is very likely the client of your library may also use this library, we configure CLI not to include it to the bundle by adding the following in `vue.config.js`.

```js
module.exports = {
  //...
  chainWebpack: config => {
    config.externals({
      moment: 'moment'
    })
  }
}
```

In your client app, you don't need to explicitly add dependency to `moment` in `package.json` as it is a dependency of `my-lib`. However, if you want to reduce the size of the bundle size of client app, add the following in the `vue.config.js` of client app ([details](https://github.com/jmblog/how-to-optimize-momentjs-with-webpack)), assuming it is also built with Vue CLI .

```js
const webpack = require('webpack')
module.exports = {
  //...
  plugins: [
    // Ignore all locale files of moment.js
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
}
```

## Use your component library

You may publish your component library to NPM repository. If you prefer to use/test your component library locally in a client app, you may use `npm link` or [install-local](https://github.com/nicojs/node-install-local).

If your app is not using a bundler, the following is the example of how to use the library in vanilla HTML page.

```html
<!DOCTYPE html>
<html>
  <head><title>Demo app</title></head>
  <body>
    <div id="app">
      <p>Component A: <component-a/></p>
      <p>Component B: <component-b @click="onClick"/></p>
    </div>
  </body>

  <script src="https://unpkg.com/vue"></script>
  <script src="dist/my-lib.umd.js"></script>
  <script>
      console.log(window['my-lib'])
      var app = new Vue({
        el: '#app',
        methods: {
          onClick (message) {
            alert(message)
          }
        }
      })
    </script>
</html>
```