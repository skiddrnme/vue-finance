<template>
  <div class="home">
    
    <button @click="showModal" class="btn">
      <img src="../assets/img/Plus.svg" alt="" width="20" /> Добавить кошелек
    </button>
    

    <br />
    <hr />

    <wallet-list @remove="removeWallet"/>
    <my-modal><wallet-form @create="addNewWallet" /></my-modal>
    <!-- <footer-comp /> -->
  </div>
</template>
<script setup>
import HeaderComp from '../components/HeaderComp.vue'
import WalletList from '../components/WalletList.vue'
import WalletForm from '../components/WalletForm.vue'
import FooterComp from '../components/FooterComp.vue'
import MyModal from '../components/UI/MyModal.vue'
import { ref } from 'vue'
import { useWalletStore } from '../store/wallet'
import { useModalStore } from '../store/modal'
const modal = useModalStore()
const wallet = useWalletStore()

const addNewWallet = (newWallet) => {
  if (newWallet.name == '' || newWallet.sum == '') {
    return alert('Вы ничего не ввели!')
  }

  wallet.wallets.push(newWallet)
  localStorage.setItem('wallet', JSON.stringify(newWallet))
}

const removeWallet = (w) => {
  wallet.wallets = wallet.wallets.filter(item => item.id !== w.id)
  
}

const showModal = () => {
  modal.show = true
}
</script>
<style scop>
.home {
  width: 100%;
  max-width: 1270px;
  margin: auto;
  position: relative;
  
}
.btn {
  margin-top: 20px;
  background: #0ae360;
  border: none;
  border-radius: 16px;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: 0.1s linear;
}
.btn:hover {
  background: #09be51;
}
</style>
