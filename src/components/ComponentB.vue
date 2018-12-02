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
      value: 'Vue'
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
  color: yellow;
}
</style>
