<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
      <v-container class="my-5">
        <Template1></Template1>
      </v-container>
  </div>
</template>
<script>
    import Template1 from '../components/templates/Template1.vue'
    export default {
        name: "projects",
        components:{ Template1 },
    }
</script>
