<template>
  <div class="">
    <h3>Цели</h3>
    <div v-if="goals.goals.length > 0">
      <goals-item v-for="goal in goals.goals" :goal="goal" :key="goal.date" />
    </div>
    <h3 v-else>Целей пока нет</h3>
  </div>
</template>
<script setup>
import GoalsItem from './GoalsItem.vue'
import { useGoalsStore } from '../store/goals.js'
const goals = useGoalsStore()
</script>

<style></style>
