import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counterStore', {
    state: () => ({
        cart: 0
    }),
    actions: {
      addToCart(){
        this.cart++
      }
    },
  })