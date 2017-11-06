# Component A

The description for Component A goes here.

### Example

```html
<template>
  <component-a :msg="msg"/>
</template>
<script>
import { ComponentA } from 'mylib';

export default {
  data() {
    return {
      msg: 'Greeting'
    }
  },
  components: {
    ComponentA
  }
}
</script>
<!-- component-demo.vue -->
````

### Props

Name                 | Type       | Default      | Required | Description
----------------     | ---------- | ------------ | -------- | -----------------------
`msg`                | String     | Hello World! |          | A message for Component A
