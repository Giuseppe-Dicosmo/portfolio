<template>
  <div class="home position-relative">
    <!-- <img alt="Vue logo" src="../assets/img/logo.png"> -->
    <jumbotron />
  </div>
</template>

<script>
// @ is an alias to /src
import jumbotron from "@/components/jumbotron.vue";

export default {
  name: "HomeView",
  components: {
    jumbotron,
  },
};
</script>
