<script setup lang="ts">
interface Props {
  msg: string
}

const props = defineProps<Props>()
</script>

<template>
  <div>Component A: {{ msg }}</div>
</template>
