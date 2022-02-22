<template>
    <q-layout view="hHh lpR fFf">
      <q-header elevated>
          <q-bar >
            <q-icon class="cursor-pointer" name="menu" />
            <router-link class="routerLink text-white q-ml-md" to="/">
              <div>The Ninja Market</div>
            </router-link>
            <q-space />

              <router-link v-if="!authenticatedUser" to="/login" class="routerLink">
              <small><span class="q-mr-xs text-white">Login</span></small>
                <q-icon 
                style="color: #fff;"
                class="cursor-pointer" 
                name="account_circle" />
              </router-link>

              <div v-else class="text-subtitle1" @click.prevent="logOut">
                  <q-icon class="cursor-pointer" name="logout" />
              </div>
          </q-bar>
      </q-header>
      <q-page-container>
        <q-tabs
          switch-indicator
          class=" product-bar bg-indigo-1 text-black-5 shadow-2 q-py-md q-mb-lg">
            <q-route-tab 
              v-for="nav in navs" :key="nav.label"
              :to="nav.to"
              :name="nav.name" 
              :label="nav.label"
            />
        </q-tabs>
      </q-page-container>
  </q-layout>
</template>

<script>


export default {
    data() {
      return {
        loggedUser: '',
        navs: [
          {
            to: '/',
            name: 'nike',
            label: 'Nike'
          },
          {
            to: '/adidas',
            name: 'adidas',
            label: 'Adidas'
          },
          {
            to: '/puma',
            name: 'puma',
            label: 'Puma'
          }
        ],
        authenticatedUser: ''
        
      }
    },
    
    methods: {
        authenticated() {
            this.authenticatedUser = localStorage.getItem('jwt')
        },

        logOut() {
          localStorage.clear();
          this.authenticatedUser = ''
          this.$router.push("/login");
        },
    },
    created() {
        this.authenticated()
    }
}
</script>

<style lang="scss">

.q-layout {
    min-height: fit-content !important;
}
    
</style>