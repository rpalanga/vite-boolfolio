<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  data(){
    return{
      componets:{

        AppHeader,

      },
    }
  }
}
</script>
<template>
  <AppHeader></AppHeader>
  <router-view></router-view>

  
</template>
<style>
</style>