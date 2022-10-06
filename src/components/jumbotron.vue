<template>
  <b-container fluid class="container-jumbotron">
    <div
      class="container-circle rounded-circle d-flex flex-column flex-wrap align-content-center justify-content-end"
    >
      <div class="ss">
        <h1>ciao sono Giseppe Dicosmo</h1>
      </div>
      <div class="ss">
        <h1>ciao sono Giseppe Dicosmo</h1>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "jumboTron",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.container-jumbotron {
  // background-color: aquamarine;
  min-height: 43em;

  .container-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -75%);
    height: 200%;
    width: 135%;
    // border: 1px solid red;
    background-color: #e4e4e4;
    box-shadow: 0px 5px 70px 0px rgba(0, 0, 0, 0.2);
    overflow: hidden;

    .ss {
      background-color: red;
      height: 200px;
    }
  }
}
</style>
