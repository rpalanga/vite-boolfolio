<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppJumbotron from "./components/AppJumbotron.vue";

export default {
  data() {
    return {

    }
  },

  components: {
    AppHeader,
    AppFooter,
    AppJumbotron,

  },

  mounted() {


  },

  methods: {

  },
}
</script>
<template>
  <AppHeader></AppHeader>
  <AppJumbotron></AppJumbotron>
  <router-view></router-view>
  <AppFooter></AppFooter>


</template>
<style></style>