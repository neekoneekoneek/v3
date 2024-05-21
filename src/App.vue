<template>
  <div class="app">
    <h1>hello</h1>
    <Demo :title="title"></Demo>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Demo from '@/components/demo.vue'

let title = ref('demo')
</script>

<style scoped lang="scss">
.app {
  background: linear-gradient
    (to right, #ffffff, #f1fdff7f, #edfdff7f, #bdf8fd7f, #adf1f87f, #9df0f77f);
  > h1 {
    color: pink;
  }
}
</style>
