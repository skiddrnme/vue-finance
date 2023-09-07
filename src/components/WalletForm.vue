<template>
  <div class="">
    <form @submit.prevent action="/" class="form">
      <input v-model="newWallet.name" type="text" placeholder="Название кошелька" />
      <select v-model="newWallet.bank" >
        <option disabled value="">--Выберите банк--</option>
        <option v-for="sortOpt in wallet.bankSort" :key="sortOpt.value">{{ sortOpt.title }}</option>
      </select>
      <strong style="color: black;">Введите желаемую сумму:</strong>
      <input v-model="newWallet.sum" type="text" placeholder="Например: 10000" />

      <button @click="createNewWallet" class="btn">Создать кошелек</button>
    </form>
  </div>
</template>
<script setup>
import { ref} from 'vue'
import { useWalletStore } from '../store/wallet';
import { useModalStore } from '../store/modal';
const wallet = useWalletStore()
const modal = useModalStore()
const emit = defineEmits(['create'])
const newWallet = ref({
  name: '',
  sum: 0,
  bank: '',
 
})

const createNewWallet = () => {
  ;(newWallet.value.id = Date.now()), emit('create', newWallet.value), newWallet.value = {name: '', sum: ''}
  modal.show = false
  
}

</script>
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  
  margin-top: 10px;
  
}
.form > * {
  margin-bottom: 15px;
}
</style>
