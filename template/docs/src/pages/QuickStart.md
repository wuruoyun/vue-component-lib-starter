# Quick Start

## Install (without npm)

Clone the Git repository of this library and link it.

```bash
git clone [your Git repostiory]
cd {{ name }}
npm install
npm run build
npm link
```

In your client project root folder:
```bash
npm link {{ name }}
```

## Use the library

```javascript
// main.js
import Vue from 'vue'
import * as mylib from '{{ name }}'

Vue.use(mylib);
```

### No Conflict

All components will be installed with no prefix by default, you can add any prefix 
to them to avoid conflicts with other libs if needed.

For example:

```javascript
Vue.use(mylib, { prefix: 'abc' });
```

Results in:

* Components such as `<component-a>` becomes `<abc-component-a>`