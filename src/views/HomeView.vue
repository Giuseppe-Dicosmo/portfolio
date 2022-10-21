<template>
  <div class="home" style="overflow: hidden">
    <!-- <img alt="Vue logo" src="../assets/img/logo.png"> -->
    <jumbotron />
    <presentation />
  </div>
</template>

<script>
// @ is an alias to /src
import jumbotron from "@/components/jumbotron.vue";
import presentation from "@/components/presentation.vue";

export default {
  name: "HomeView",
  components: {
    jumbotron,
    presentation,
  },
};
</script>
