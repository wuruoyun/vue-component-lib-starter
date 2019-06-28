# Vue Component Library Starter

> Create your own component library with [Vue CLI 3](https://cli.vuejs.org/) and [VuePress](https://vuepress.vuejs.org/).

Sooner or later, you will find that creating a component library is much better than having all components inside your app project. A component library force you remove app specific logic from your components, makes it possible to reuse them in other apps. 

Once the components are in a libaray, documentation becomes critical. This starter project includes a documentation app. It not only documents the usage of the component, but also provides a testing bed during development of the components. See example [here](http://wuruoyun.github.io/vue-component-lib-starter).

## Setup

``` bash
# install dependencies
npm install

# start the doc app with hot reload
npm run docs:dev

# test the library
npm run test

# build the library
npm run build

# build the doc app
npm run docs:build
```

To start building your own components:

* Replace the `base` option in `.vuepress/config.js` accordingly
* Replace the example components and their docs with your own

## Client demo

The following simple example shows how the components in the library can be used.

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
  <script src="./mylib.umd.js"></script>
  <script>
      console.log(mylib)
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