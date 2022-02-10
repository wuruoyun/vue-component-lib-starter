<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
const count = ref(0)
</script>

<template>
  <div class="flex align-content-center flex-wrap counter">
    <label class="flex align-items-center justify-content-center">Counter:</label>
    <Button icon="pi pi-plus" class="p-button-sm flex align-items-center justify-content-center" @click="count++"></Button>
    <span class="flex align-items-center justify-content-center count">{{ count }}</span>
    <Button icon="pi pi-minus" class="p-button-sm flex align-items-center justify-content-center" @click="count--"></Button>
  </div>
</template>

<style lang="scss" scoped>
.counter {
  label {
    padding-right: 10px;
    font-weight: bold;
  }
  .count {
  padding: 0 10px;
}
}
</style>
