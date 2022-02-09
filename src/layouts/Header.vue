<template>
    <q-layout view="hHh lpR fFf">
      <q-header elevated>
          <q-bar >
            <q-icon class="cursor-pointer" name="menu" />
            <div >The Ninja Market</div>
          
            <q-space />

            <small><span class="q-mr-xs"> Log In here</span></small>
            <router-link to="/login"> 
                <q-icon 
                  style="color: #fff;"
                  class="cursor-pointer" 
                  name="account_circle" />
            </router-link>
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
        ]
      }
    },
    components: {
        
    }
}
</script>

<style lang="scss">

.q-layout {
    min-height: fit-content !important;
}
    
</style>