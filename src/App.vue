<template>
  <div id="app">
    <b-navbar toggleable="md" class="navbar-router sticky-top">
      <b-container fluid="lg">
        <b-navbar-brand href="#"></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse
          class="d-md-flex justify-content-end"
          id="nav-collapse"
          is-nav
          v-b-scrollspy:nav-scroller
        >
          <b-navbar-nav class="container-link">
            <b-nav-item
              v-for="(link, i) in datiNavbar"
              :key="i"
              :href="link.href"
              :to="link.to"
            >
              {{ link.text }}
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      datiNavbar: [
        {
          to: "/",
          text: "Home",
        },
        {
          to: "/about",
          text: "About",
        },
        {
          href: "/#tipo-1",
          text: "tipo 1",
        },
        {
          href: "/#tipo-2",
          text: "tipo 2",
        },
        {
          href: "/#tipo-3",
          text: "tipo 3",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./assets/scss/mixStyle";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  overflow-x: hidden;

  .navbar-router {
    background-color: $salmoneScuro;
    .container-link {
      list-style: none;
      display: flex;

      .nav-link {
        font-weight: bold;
        color: $oro;
        text-decoration: none;

        &:active {
          scale: 0.8;
        }
        // &.router-link-exact-active {
        //   color: seagreen ;
        // }
      }
    }
  }
}
</style>
