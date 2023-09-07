import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    show: false
  })
})
