# Vue Component Library Starter

> Create your own component library with [Vue CLI 3](https://cli.vuejs.org/) and [VuePress](https://vuepress.vuejs.org/).

This project also includes a documentation app. It is also a convenient testbed for the components in the library during the development. See example [here](http://wuruoyun.github.io/vue-component-lib-starter).

## Usage

> VuePress `0.14.8` is using `@babel/core-7.0.0-beta.47`. Installing it globally to avoid confliction with Vue CLI, which is using `@babel/core-7.1.6`.

``` bash
# install VuePress globally
npm install -g vuepress

# install dependencies
npm install

# start the doc app
npm run docs:dev

# build the library
npm run build

# build the doc app
npm run docs:build
```

Replace the example codes in the project with your own to start building your library!