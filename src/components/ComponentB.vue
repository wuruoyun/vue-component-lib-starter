<template>
  <div class="component-b">
    <input type="text" v-model="value">
    <button @click="onClick">Click me</button>
  </div>
</template>

<script>
import MyMixin from '../mixins/MyMixin'

export default {
  mixins: [MyMixin],
  data () {
    return {
      value: this.hello()
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
