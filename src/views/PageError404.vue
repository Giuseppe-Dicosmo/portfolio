<template>
  <b-container
    fluid="lg"
    class="d-flex justify-content-center flex-column align-items-center"
  >
    <h1 class="fw-bold">Oops!</h1>
    <h2
      :class="$store.state.dark ? 'text-light' : 'text-dark'"
      class="text-uppercase"
    >
      404 - page not found
    </h2>
    <p
      :class="$store.state.dark ? 'text-light' : 'text-dark'"
      class="text-center"
    >
      La pagina che stai cercando potrebbe essere stata rimossa ha cambiato nome
      o è temporaneamente non disponibile si prega di tornare alla home
    </p>
    <router-link to="/"
      ><b-button class="px-4 button-error">Home</b-button></router-link
    >
    <router-view />
  </b-container>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/mixStyle";

.container-lg {
  min-height: calc(100vh - 76px);

  & > h1 {
    color: $salmoneScuro;
    font-size: 20vw;
  }
  & > h2 {
    color: $salmoneScuro;
    font-size: 2.5vw;
  }
  .button-error {
    border: none;
    background-color: $oro;
    font-weight: 1000;

    &:hover {
      background-color: $blu;
    }
  }
}
</style>
