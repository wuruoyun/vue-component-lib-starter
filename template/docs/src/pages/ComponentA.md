# Component A

The description for Component A goes here.

### Example

```html
<template>
  <component-a :msg="msg"/>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Greeting'
    }
  }
}
</script>
<!-- component-demo.vue -->
````

### Props

Name                 | Type       | Default      | Required | Description
----------------     | ---------- | ------------ | -------- | -----------------------
`msg`                | String     | Hello World! |          | A message for Component A
