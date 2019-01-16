<template>
  <v-app :class="{'pageNotFound':this.$route.matched[0].path=='*'}">
    <Navbar v-if="this.$route.matched[0].path!='*'" />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  export default {

    name: 'App',
    components:{ Navbar },
    data () {
      return {
        //
      }
    }
  }
</script>
<style>
  html{
    overflow-y: auto !important;
  }
  .pageNotFound{
    background: linear-gradient(105deg, rgba(16, 19, 233, 0.9), rgba(124, 80, 210, 0.9)) !important;
  }
</style>
