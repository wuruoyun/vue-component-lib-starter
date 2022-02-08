<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div>
    <span>Component B: </span>
    <button @click="count++">+</button>
    <span class="count">{{ count }}</span>
    <button @click="count--">-</button>
  </div>
</template>

<style lang="scss" scoped>
.count {
  padding: 0 10px;
}
</style>
