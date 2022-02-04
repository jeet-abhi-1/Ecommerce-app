import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'NikeList',
    component: () => import('../components/NikeList.vue')
  },
  {
    path: '/nike-products',
    name: 'NikeProducts',
    component: () => import('../views/FullNikeList.vue')
  },
  {
    path: '/cart/:id',
    name: 'ShoppingCart',
    component: () => import('../views/ShoppingCart.vue')
  },
  {
    path: '/orderPlaced',
    name: 'OrderPlaced',
    component: () => import('../views/OrderPlaced.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
