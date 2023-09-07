<template>
  <div v-if="wallet.wallets.length > 0">
    <h3 style="text-align: center">Ваши кошельки</h3>
    <wallet-item v-for="wallet in wallet.wallets" :wallet="wallet" :key="wallet.id" @remove="$emit('remove', wallet)"/>
  </div>
  <h3 v-else style="text-align: center">Список ваших кошельков пуст :(</h3>
</template>
<script setup>
import WalletItem from './WalletItem.vue'
import { useWalletStore } from '../store/wallet';
const wallet = useWalletStore();


</script>
<style></style>
