<template>
  <div class="component-a">
    Value of 'msg' prop: <span class="message">\{{msg}}</span>
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
  text-align: center;
  padding: 10px;
  border: 1px solid lightgrey;
  border-radius: 5px;

  .message {
    color: #42b983;
  }
}
</style>
