import { defineStore } from 'pinia'
import { ref } from 'vue'

const countStore = defineStore('count', () => {
  const sum = ref(0)
  function add() {
    sum.value++
  }
  return {
    sum,
    add
  }
})

export default countStore
