[![Netlify Status](https://api.netlify.com/api/v1/badges/b1b84831-789e-4629-a9e3-55a36e136653/deploy-status)](https://app.netlify.com/sites/sharp-babbage-154f0a/deploys)

# Vue Component Library Starter

> Create your own [Vue 3](https://v3.vuejs.org/) component library with TypeScript, [Vite](https://vitejs.dev) and [VitePress](https://vitepress.vuejs.org/).

Sooner or later, you will find that creating a component library is much better than having all components inside your app project. A component library force to you remove app specific logic from your components, making it easier to test and reuse them in other apps.

Once the components are in a library, documentation becomes critical. This starter project includes a documentation app powered by VitePress. It not only documents the usage of the component, but also provides a testing bed during the development of components. See the generated documentation app [here](https://sharp-babbage-154f0a.netlify.com/).

## Setup

> When running `docs:dev` for the first time, you may encounter error like `vitepress data not properly injected in app` in your browser. Restart the server and reload the browser. Please refer to [issue #30](https://github.com/wuruoyun/vue-component-lib-starter/issues/30) for more details.

```bash
# install dependencies
npm install

# start the doc app with hot reload, great for testing components
npm run docs:dev

# build the library, available under dist
npm run build

# build the doc app, available under docs/.vitepress/dist
npm run docs:build

# preview the doc app locally from docs/.vitepress/dist
npm run docs:serve
```

You may use [Netlify](https://www.netlify.com/) to auto build and deloy the doc app like this project does.

## Develop and test locally

The best way to develop and test your component is by creating demos in `docs/components/demo` folder, as shown by the example components.

If you want to test the library in your Vue3 app locally:

- In the root folder of this library, run `npm link`. This will create a symbolic link to the library.
- In the root folder of your client app, run `npm link my-lib`. This will add the symbolic link to the `node_modules` folder in your client app.
- You can now import `my-lib` in your client app.

There is no need to add `my-lib` to your client app's dependency in this case.

If you made changes to the library, you will need to rebuild the library. Your Vue3 app shall hot reload when the building of library is completed.

## How it works

### Components

The library is a [Vue plugin](https://v3.vuejs.org/guide/plugins.html). The `install` function in [index.ts](src/index.ts) registers all components under [components](src/components) to Vue globably.

The components are also exported by [index.ts](src/index.ts) so that the client app can import them individually and register them locally, instead of using the library as a plugin. This may be a better option if the client app only use a small set of components in your library.

As there are already many UI component libraries for Vue 3, you may just want to build on top of one of them and create components for your specific needs. The Component B in this starter shows the example of using [PrimeVue](https://www.primefaces.org/primevue/) as the fundation library. However, this means the client app shall also use the same fundation component library as your library does.

The doc app itself is a client app of the libary, therefore PrimeVue is imported in [docs/.vitepress/theme/index.js](docs/.vitepress/theme/index.js). The configuration in [docs/.vitepress/config.js](docs/.vitepress/config.js) below forces VitePress to resolve these modules with no duplication, avoiding error at runtime, as PrimeVue also has Vue in its dependency.

```js
module.exports = {
  vite: {
    resolve: {
      dedupe: ['vue', /primevue\/.+/],
    },
  },
}
```

> In [vite.config.ts](vite.config.ts), format 'umd' is not present in `build.lib.formats` option. This is because the PrimeVue components used by this library are externalized, and therefore requiring corresponding options in `rollupOptions.output.globals`. To avoid adding global varaibles for PrimeVue components, 'umd' is removed for simplicity.

### Utilities and constants

The library includes example utilities and constants. They are also exported in [index.ts](src/index.ts). The client app may use them as below:

```js
<script lang="ts">
import { MyConstants, MyUtil } from 'my-lib'

export default {
  data () {
    return {
      magicNum: MyConstants.MAGIC_NUM
    }
  },
  methods: {
    add (a:number, b:number) {
      return MyUtil.add(a, b)
    }
  }
}
</script>
```

### Styling

Individual compopnent may have styles defined in its `.vue` file. They will be processed, combined and minified into `dist/style.css`, which is included in the `exports` list in [package.json](package.json).

If you have library level styles shared by all components in the library, you may add them to [src/assets/main.scss](src/assets/main.scss). This file is imported in [index.ts](src/index.ts), therefore the processed styles are also included into `dist/style.css`. To avoid conflicting with other global styles, consider pre-fixing the class names or wrapping them into a namespace class.

If you have your own special set of SVG icons, you may create a font file (`.woff` format) using tools like [Icomoon](https://icomoon.io/) or [Fontello](https://fontello.com/). This starter includes an example font file [src/assets/fonts/myfont.woff](src/assets/fonts/myfont.woff) and references it in [src/assets/main.scss](src/assets/main.scss), with utility icon CSS classes. An icon from the font file is used in Component A. Vite will include the font file into the build, see [https://vitejs.dev/guide/assets.html](https://vitejs.dev/guide/assets.html).

The client app shall import `style.css`, usually in the entry file:

```js
import 'my-lib/dist/style.css'
```

### Third-party dependencies

Third-party libraries used by you library may bloat up the size of your library, if you simply add them to the `dependencies` in [package.json](package.json).

The following are some strategies to reduce the size of your library:

#### Externalization

If you expect the client app of your library may also need the same dependency, you may externalize the dependency. For example, to exclude PrimeVue from your library build artifact, in [vite.config.ts](vite.config.ts), you may have

```js
module.exports = defineConfig({
    rollupOptions: {
      external: ['vue', /primevue\/.+/]
    }
  }
})
```

The dependency to be externalized may be declared as peer dependency in your library.

#### Cherry picking

If you don't expect the client app of your library also needing the same dependency, you may embed cherry-picked functions. For example, to embed the `fill` function of popular library [lodash](https://lodash.com), import the `fill` function like the following:

```js
import fill from 'lodash/fill'
```

Even with tree-shaking, the codes being brought into your library may still be large, as the function may have its own dependencies.

Note that `import { fill } from 'lodash'` or `import _ from 'lodash'` will not work and will embed the whole `lodash` library.

Finally, if your client app also use `lodash` and you don't want `lodash` to be in both the client app and your libraries, even after cherry-picking, you may consider cherry-picking in component library and re-export them as utils for client to consume, so that the client does not need to depend on `lodash`, therefore avoiding duplication.

### Type generation

In [tsconfig.json](tsconfig.json), the following options instructs `tsc` to emit declaration (`.d.ts` files) only, as `vite build` handles the `.js` file generation. The generated `.d.ts` files are sent to `dist/types` folder.

```json
"compilerOptions": {
  "declaration": true,
  "emitDeclarationOnly": true,
  "declarationDir": "./dist/types"
}
```

In [package.json](package.json), the line below locates the generated types for library client.

```json
"types": "./dist/types/index.d.ts",
```

> In [vite.config.ts](vite.config.ts), `build.emptyOutDir` is set to `false` and `rimraf` is used instead to remove the `dist` folder before the build. This is to avoid the `dist/types` folder generated by `tsc` being deleted when running `vite build`.

### Configuration

#### TypeScript

In [tsconfig.json](tsconfig.js), set the following as recommended by Vite (since esbuild is used). However, enableing this option leads to https://github.com/vitejs/vite/issues/5814. The workaround is to also enable `compilerOptions.skipLibCheck`.

```json
"compilerOptions": {
  "isolatedModules": true
}
```

In [tsconfig.json](tsconfig.js), set the following to address [Issue #32](https://github.com/wuruoyun/vue-component-lib-starter/issues/32). The solution is from https://github.com/johnsoncodehk/volar/discussions/592.

```json
"compilerOptions": {
  "types": [
    "vite/client"
  ]
}
```

#### Dependencies

In [package.json](package.json), Vue and PrimeVue are declared in both `peerDependencies` and `devDependencies`. The former requires the client app to add these dependencies, and the later makes it easier to setup this library by simply running `npm install`.
