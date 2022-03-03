<template>
  <q-layout view="hHh Lpr fFf">
    
    <HeaderPage/>
    <router-view/>
    <FooterPage/>

    
  </q-layout>
</template>

<script>

import Header from './layouts/Header.vue'
import Footer from './layouts/Footer.vue'

export default {
  name: 'LayoutDefault',

  components: {
    HeaderPage: Header,
    FooterPage: Footer
  },

  data () {
    return {
        
    }
  }
}
</script>

<style>

.routerLink {
  text-decoration: none;
}


</style>
