import Vue from 'vue'
import VueRouter from 'vue-router'
import { authGuard } from '@/auth/authGuard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/tfa-style-code-generator/',
    redirect: '/'
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    beforeEnter: authGuard
  },
  {
    path: '/clothing',
    name: 'Clothing',
    component: () =>
      import(/* webpackChunkName: "clothing" */ '../views/Clothing.vue'),
    beforeEnter: authGuard
  },
  {
    path: '/clothing/add',
    name: 'Add Clothing',
    component: () =>
      import(/* webpackChunkName: "addClothing" */ '../views/AddClothing.vue'),
    beforeEnter: authGuard
  },
  {
    path: '/accessories',
    name: 'Accessories',
    component: () =>
      import(/* webpackChunkName: "accessories" */ '../views/Accessories.vue'),
    beforeEnter: authGuard
  },
  {
    path: '/accessories/add',
    name: 'Add Accessory',
    component: () =>
      import(
        /* webpackChunkName: "addAccessory" */ '../views/AddAccessory.vue'
      ),
    beforeEnter: authGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
