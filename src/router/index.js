import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/clothing',
    name: 'Clothing',
    component: () =>
      import(/* webpackChunkName: "clothing" */ '../views/Clothing.vue')
  },
  {
    path: '/clothing/add',
    name: 'Add Clothing',
    component: () =>
      import(/* webpackChunkName: "addClothing" */ '../views/AddClothing.vue')
  },
  {
    path: '/accessories',
    name: 'Accessories',
    component: () =>
      import(/* webpackChunkName: "accessories" */ '../views/Accessories.vue')
  },
  {
    path: '/accessories/add',
    name: 'Add Accessory',
    component: () =>
      import(/* webpackChunkName: "addAccessory" */ '../views/AddAccessory.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
