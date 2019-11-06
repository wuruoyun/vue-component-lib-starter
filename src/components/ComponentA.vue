<template>
  <div>Load time: {{ count }}.</div>
</template>

<script>
import moment from 'moment'

export default {
  data: function () {
    return {
      count: moment().format('MMMM Do YYYY, h:mm:ss a')
    }
  }
}
</script>
