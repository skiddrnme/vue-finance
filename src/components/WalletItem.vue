<template>
  <div class="wallet">
    <div class="names">
      <strong>{{ wallet.name }}</strong>
      <div class="vl"></div>
      <!-- <img src="../assets/img/alfa.svg" alt="" width="100" /> -->
      <p>{{ wallet.bank }}</p>
    </div>
    <div class="btns">
      <button class="open" @click="$router.push(`wallet/${wallet.name}`)">Open</button>
      <button class="del" @click="$emit('remove', wallet)">
        <img src="../assets/img/TrashSimple.svg" alt="" />
      </button>
    </div>
    <div class="sum">{{ wallet.sum }}p</div>
  </div>
</template>
<script setup>
defineProps({
  wallet: Object
})
</script>
<style scoped>
.wallet {
  display: flex;
  max-width: 1208px;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background: rgba(36, 36, 36, 0.25);
  margin-bottom: 20px;
  position: relative;
  /* cursor: pointer; */
}

.names {
  display: flex;
  align-items: center;
}
.sum {
  color: #09be51;
}
.vl {
  display: block;
  height: 27px;
  border: 1px solid #fff;
  margin: 0 10px;
}

.del {
  display: inline-flex;
  padding: 8px;
  align-items: center;
  border: none;
  background: rgba(235, 91, 100, 0.25);
  border-radius: 16px;
  cursor: pointer;
  &:hover {
    background: rgba(235, 91, 100, 0.15);
  }
}
.open {
  padding: 8px;
  align-items: center;
  border: none;

  border-radius: 16px;
  cursor: pointer;
  background: #0ae360;
  &:hover {
    background: rgb(13, 182, 21);
  }
}
.btns {
  display: flex;
  align-items: center;
  gap: 20px;
  position: absolute;
  right: 100px;
}
</style>
