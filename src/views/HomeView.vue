<template>
  <div id="nav-scroller" class="home" style="overflow-x: hidden">
    <main>
      <jumbotron />
      <presentation id="chi-sono" />
      <trainingTime id="esperienze" />
      <allProjects id="progetti" />
    </main>
    <footer></footer>
  </div>
</template>

<script>
// @ is an alias to /src
import jumbotron from "@/components/jumbotron.vue";
import presentation from "@/components/presentation.vue";
import trainingTime from "@/components/trainingTime.vue";
import allProjects from "@/components/allProjects.vue";

export default {
  name: "HomeView",
  components: {
    jumbotron,
    presentation,
    trainingTime,
    allProjects,
  },
};
</script>

<style lang="scss" scoped></style>
