import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import(/* webpackChunkName: 'HomePage'*/'../views/HomePage.vue'),
    

  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: 'Products'*/'../views/Products.vue'),
  },
  {
    path: '/cart/:id',
    name: 'ShoppingCart',
    component: () => import(/* webpackChunkName: 'ShoppingCart'*/'../views/ShoppingCart.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/orderPlaced',
    name: 'OrderPlaced',
    component: () => import(/* webpackChunkName: 'OrderPlaced'*/'../views/OrderPlaced.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register') ,
    meta : {
      requiresVisitor : true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login') ,
    meta : {
      requiresVisitor : true
    }
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: () => import('../views/admin/AddProduct') ,
    meta: {
      requiresAuthAdmin: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

          if (!localStorage.getItem("jwt")) {
            next({
              path: "/login",
              
            });
          }
        // } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        //   if (localStorage.getItem('jwt')) {
        //     next({
        //       path: '/',
        //     })
        //   } else {
        //     next()
        //   }
        // } 
      else {
        next()
      }
  }
      next()
});

export default router
