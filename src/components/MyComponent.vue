<template>
  <div class="my-component">
    <p>My Component says: {{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello!'
    }
  }
}
</script>

<style lang="scss" scoped>
.my-component {
  color: #42b983;
}
</style>