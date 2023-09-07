<template>
  <div class="goal">
    <div class="goal_info">
      <div class="goal_name">{{ goal.name }}</div>
      <div style="color: gray">{{ goal.date }}</div>
    </div>

    <strong style="color: #EB5B64;;" class="goal_sum"> -{{ goal.sum }}</strong>
  </div>
</template>
<script setup>
defineProps({
  goal: Object
})
</script>
<style scoped>
.goal {
  display: flex;
  padding: 16px;

  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background: #242424;
  margin-bottom: 14px;
}
.goal_info{
    display: flex;
    gap: 15px;
    
}

</style>
