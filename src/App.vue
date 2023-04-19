<script>
import { store } from './store.js'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/Appmain.vue';

export default {

  data() {
    return {
      store,
    }
  },
  components: {
    AppHeader,
    AppMain
  },

  
}

</script>


<template>
  <AppHeader />
  <AppMain />
</template>


<style lang="scss">
@use "./style/general.scss" as *;
</style>