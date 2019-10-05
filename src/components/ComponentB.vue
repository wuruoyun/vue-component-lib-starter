<template>
  <div class="component-b">
    <input type="text" v-model="value">
    <button @click="onClick">Click me</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 'Hello'
    }
  },
  methods: {
    onClick () {
      this.$emit('click', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.component-b {
  background-color: lightgrey;
  padding: 10px;
  border-radius: 3px;
  button {
    font-weight: bold;
  }
}
</style>
