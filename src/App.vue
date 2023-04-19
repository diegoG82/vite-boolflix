<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/Appmain.vue';

export default {
  components: {
    AppHeader,
    AppMain
  },
};

// data() {
//     return {
//       store
//     }
//   },
</script>


<template>
  <AppHeader/>
  <AppMain/>

</template>


<style lang="scss">
@use "./style/general.scss" as *;
</style>