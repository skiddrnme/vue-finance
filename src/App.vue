<template>
  <div>
    <div class="container"><header-comp /><router-view></router-view></div>
  </div>
</template>
<script setup>
import HeaderComp from './components/HeaderComp.vue'
</script>
<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
}
</style>
