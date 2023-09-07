import { defineStore } from 'pinia'

export const useWalletStore = defineStore('wallets', {
  state: () => ({
    wallets: [
      {
        id: Date.now(),
        name: 'Первый кошелек',
        sum: 120000,
        bank: 'Сбербанк',
       
      }
    ],
    walletSum: '',
    selectedSort: '',
    bankSort: [
      {
        value: 'Alfa',
        title: 'Альфа Банк'
      },
      {
        value: 'Sber',
        title: 'Сбербанк'
      },
      {
        value: 'Tinkoff',
        title: 'Тинькофф Банк'
      }
    ]
  }),
  actions: {
    addWallet(newWallet) {
      this.wallets.push(newWallet)
    },
    removeWallet(w){
      this.wallets.filter(item => item.id !== w.id)
    }
  }
})
