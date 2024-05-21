<template>
  <div class="demo">
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Demo'
})
defineProps(['title'])
</script>

<style lang="scss" scoped></style>
