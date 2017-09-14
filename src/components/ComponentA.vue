<template>
  <div>
    <p>Component A has 'msg' prop: <span class="message">{{ msg }}</span></p>
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
.message {
  color: #42b983;
}
</style>