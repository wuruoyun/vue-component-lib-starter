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
