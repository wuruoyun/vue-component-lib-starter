# {{ name }}

> {{ description }}

## Build Setup

``` bash
# install dependencies
npm install

# serve doc app with hot reload at localhost:8080
npm run start

# build for production with minification
npm run build
{{#unit}}

# run unit tests
npm run unit
{{/unit}}
```

## Get Started

The library has two example components [ComponentA.vue](src/components/ComponentA.vue) and [ComponentB.vue](src/components/ComponentB.vue). They are exported in [index.js](src/index.js). 

To add your own Vue components, add your Vue files under [src](src), and make sure export them in `index.js`. You should use scoped CSS for your Vue components. If your component is complicated and involves a number of internal components, create a sub-folder to host these related components and add `index.js` to this sub-folder to export only the public component(s). Regular single file Vue components go to [src/components](src/components). If you have mixins and directives in your library, create `mixins` and `directives` folder under [src](src) and put them there.

To publish the documentation app online, such as to [GitHub Pages](https://pages.github.com/) or [Surge](https://surge.sh/), run `npm run build-docs`, and publish the `docs/dist` folder. 

## How it Works

The project makes use of both [Rollup](https://rollupjs.org/) and [WebPack 2](https://webpack.github.io/). Although they are two different bundlers and producting separate ouputs, they can coexist in the same project, sharing the following:

- Package definition [package.json](package.json)
- Babel configuration [.babelrc](.babelrc)
- Source codes for library components [src](src)

In addition, Rollup uses the following:

- Rollup configuration [rollup.config.js](rollup.config.js)

And Webpack uses the following:

- Webpack configuration [webpack.config.js](webpack.config.js)
- Source codes for documentation apps [docs/src](docs/src)

As [package.json](package.json) is shared by both library and document app, their dependencies are shared. To make the dependencies clean for the library, if an external library is only used by the documentation app, add them as `devDependencies` instead of `dependencies` or `peerDependencies`.

## License

[MIT](LICENSE).
