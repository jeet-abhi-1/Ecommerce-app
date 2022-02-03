<template>
  <q-layout view="lHh Lpr lFf">
    
    <app-header/>
    <router-view/>
  </q-layout>
</template>

<script>

import Header from './components/Header.vue'

export default {
  name: 'LayoutDefault',

  components: {
    appHeader: Header
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
</style>
