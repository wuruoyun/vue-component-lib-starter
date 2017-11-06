# Component B
    
The description for Component B goes here.

### Example

```html
<template>
  <component-b @click="onClick"/>
</template>

<script>
import { ComponentB } from 'mylib';

export default {
  methods: {
    onClick(value) {
      alert("Component B has value: " + value);
    }
  },
  components: {
    ComponentB
  }
}
</script>
<!-- component-demo.vue -->
```

### Events

Name                 | Params     | Description
----------------     | ---------- | -----------------------
`click`              | value      | Fire after the button is clicked, with value in text field
