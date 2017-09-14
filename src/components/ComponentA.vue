<template>
  <div class="component-a">
    <p>Component A: {{ msg }}</p>
  </div>
</template>

<script>
export default {
  props: {
     msg: {
       type: String,
       required: 'Hello World!'
     }
  }
}
</script>

<style lang="scss" scoped>
.component-a {
  color: #42b983;
}
</style>