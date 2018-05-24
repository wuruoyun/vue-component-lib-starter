# Component B
    
The description for Component B goes here.

### Example

```html
<template>
  <component-b @click="onClick"/>
</template>

<script>
export default {
  methods: {
    onClick (value) {
      alert('Component B has value: ' + value)
    }
  }
}
</script>
<!-- component-demo.vue -->
```

### Events

Name                 | Params     | Description
----------------     | ---------- | -----------------------
`click`              | value      | Fire after the button is clicked, with value in text field
