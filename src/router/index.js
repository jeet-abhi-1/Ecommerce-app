import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import(/* webpackChunkName: 'HomePage'*/'../views/HomePage.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: 'Products'*/'../views/Products.vue')
  },
  {
    path: '/cart/:id',
    name: 'ShoppingCart',
    component: () => import(/* webpackChunkName: 'ShoppingCart'*/'../views/ShoppingCart.vue')
  },
  {
    path: '/orderPlaced',
    name: 'OrderPlaced',
    component: () => import(/* webpackChunkName: 'OrderPlaced'*/'../views/OrderPlaced.vue')
  },
  {
    path: '/auth',
    name: 'PageAuth',
    component: () => import('../views/PageAuth') 
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
