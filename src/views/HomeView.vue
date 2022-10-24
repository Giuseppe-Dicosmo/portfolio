<template>
  <div id="nav-scroller" class="home" style="overflow-x: hidden">
    <!-- <img alt="Vue logo" src="../assets/img/logo.png"> -->
    <jumbotron />
    <presentation id="chi-sono" />
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

<style lang="scss" scoped></style>
