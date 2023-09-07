<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/img/Vector.svg" alt="" />
      <div class="name">finance app.js</div>
    </div>
    <div class="links">
      <RouterLink to="/about">About</RouterLink>
      <a href="/"><img src="../assets/img/avatar2.svg" alt="" width="50"></a>
    </div>
</header>
</template>
<script setup>

</script>

<style>
.header {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
.logo {
  display: flex;
  align-items: center;
  width: 75px;
  justify-content: space-between;
}
.name {
  width: 20px;
  font-weight: 700;
}
.links{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.links > *{
  margin-left: 20px;
}
</style>
