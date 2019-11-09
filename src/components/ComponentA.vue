<template>
  <div class="component-a">
    <p>Load time by moment: {{ loadTime }}.</p>
    <p>Fill array by lodash: {{ filledArray }}</p>
  </div>
</template>

<script>
import moment from 'moment'
import fill from 'lodash/fill'

const array = [1, 2, 3]

export default {
  data: function () {
    return {
      loadTime: moment().format('MMMM Do YYYY, h:mm:ss a'),
      filledArray: fill(array, 'a')
    }
  }
}
</script>

<style lang="scss" scoped>
.component-a {
  background-color: lightgrey;
  padding: 10px;
  border-radius: 3px;
  button {
    font-weight: bold;
  }
}
</style>