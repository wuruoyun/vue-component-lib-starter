# Getting Started

You may add the usage of the library here.

> If you remove Component B and the [PrimeFaces](https://www.primefaces.org/) (PrimeVue, PrimeIcons and PrimeFlex) dependencies from your library, the setup related to PrimeFaces won't be needed from the guide below.

## Setup

This setup assumes your client app is created with Vite and vue-ts template, and you use 'npm link' to link to `my-lib` locally.

In your `package.json`, you shall have the dependencies compatible with the following:

```json
"dependencies": {
  "primeflex": "^3.1.2",
  "primeicons": "^5.0.0",
  "primevue": "^3.11.1",
  "vue": "^3.2.25"
}
```

In your `vite.config.ts`, you shall configure to dedupe `vue`:

```ts
export default defineConfig({
  resolve: {
    dedupe: ['vue'],
  },
});
```

In your `main.ts`, you shall import the libraries and CSS:

```ts
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import 'my-lib/dist/style.css';
```

Import components from this library in your own component:

```html
<script setup lang="ts">
  import { ComponentA, ComponentB } from 'my-lib';
</script>
```
