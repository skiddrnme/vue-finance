import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WalletView from '../views/WalletView.vue'
import { defineAsyncComponent } from 'vue'
 export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: HomeView
    },
    {
      name: 'About',
      path: '/about',
      component: AboutView
    },
    {
      name: 'Wallets',
      path: '/wallet/:name',
      component: WalletView,
      props: true
    }
  ]
})
