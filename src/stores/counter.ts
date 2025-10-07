import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
const myInfo=ref([{name:"Sergio"}])

  return { myInfo }
})
