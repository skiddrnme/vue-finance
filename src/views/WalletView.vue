<template>
  <div class="wallet">
    <div class="info">
      <h3>{{ wallet.bank }}</h3>
      <div class="vl"></div>
      <h3>{{ wallet.name }}</h3>
      <div class="btns">
        <button class="edit">
          <img src="../assets/img/PencilSimple.svg" alt="" />
        </button>
        <button class="del" @click="removeWallet">
          <img src="../assets/img/TrashSimple.svg" alt="" />
        </button>
      </div>
    </div>

    <div class="balance">
      <img src="../assets/img/HandCoins.svg" alt="" />
      <div class="bal__info">
        <p>
          Баланс <strong>{{ wallet.name }}</strong>
        </p>
        <h2>{{ wallet.sum }}р</h2>
      </div>
    </div>

    <button class="new" @click="showModal">+ Новая цель</button>

    <goals-list />

    <my-modal><goals-form></goals-form></my-modal>
  </div>
</template>

<script setup>
import { useWalletStore } from '../store/wallet'
const wallets = useWalletStore()
import { useRoute } from 'vue-router'
import { ref, onBeforeMount } from 'vue'
import { useModalStore } from '../store/modal'
import MyModal from '../components/UI/MyModal.vue'
import GoalsForm from '../components/GoalsForm.vue'
import GoalsList from '../components/GoalsList.vue'
const route = useRoute()
const wallet = ref(null)
const modal = useModalStore()
const remove = wallets.removeWallet


onBeforeMount(() => {
  let walletData = wallets.wallets.find((item) => item.name == route.params.name)
  if (walletData) {
    wallet.value = walletData
    
  }
})

const removeWallet = () => {
  remove(wallet)
}


const showModal = () => {
  modal.show = true
}
</script>

<style scoped>
.wallet {
  margin-top: 40px;
  position: relative;
}
.vl {
  display: block;
  height: 27px;
  border: 1px solid #fff;
  margin: 0 10px;
}
.info {
  display: flex;
  align-items: center;
}
.btns {
  display: flex;
  margin-left: 50px;
  gap: 10px;
}
.edit {
  display: inline-flex;
  padding: 8px;
  align-items: center;
  border: none;
  background: rgba(36, 36, 36, 0.5);
  border-radius: 16px;
  cursor: pointer;
  &:hover {
    background: rgba(71, 71, 71, 0.5);
  }
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
.balance {
  display: inline-flex;
  padding: 22px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 32px;
  border: 2px solid #242424;
  margin-top: 80px;
}

.new {
  padding: 8px 16px;
  align-items: center;
  border: none;
  position: absolute;
  right: 0;
  top: 200px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  background: #0ae360;
  &:hover {
    background: rgb(13, 182, 21);
  }
}
</style>
