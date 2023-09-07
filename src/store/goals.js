import { defineStore } from 'pinia'

export const useGoalsStore = defineStore('goals', {
  state: () => ({
    goals: [
      {
        name: 'Iphone 14',
        date: Date.now(),
        sum: '10000'
      },
      {
        name: 'Цель 2',
        date: Date.now(),
        sum: '10000'
      },
      {
        name: 'Цель 3',
        date: Date.now(),
        sum: '10000'
      }
    ]
  }),
  actions: {
    addGoals(goal){
      this.goals.push(goal)
    }
  }
})
