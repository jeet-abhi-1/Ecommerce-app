import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import NikeList from '../components/NikeList'
import FullNikeList from '../views/FullNikeList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'NikeList',
    component: NikeList
  },
  {
    path: '/nike-products',
    name: 'NikeProducts',
    component: FullNikeList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
