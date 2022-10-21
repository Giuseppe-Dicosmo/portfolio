<template>
  <div
    id="app"
    :class="$store.state.dark == true ? 'bg-dark active' : 'bg-light'"
  >
    <b-navbar toggleable="sm" class="navbar-router sticky-top">
      <b-container fluid="lg">
        <!-- <b-navbar-brand href="#"></b-navbar-brand> -->

        <b-navbar-nav>
          <b-nav-item @click="darkMode">
            <div
              class="ball"
              :class="$store.state.dark == true ? 'active' : ''"
            ></div>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-toggle
          @click="$store.state.navbarIcon = !$store.state.navbarIcon"
          class="text-warning"
          target="nav-collapse"
        >
          <span v-if="$store.state.navbarIcon == true">
            <b-icon scale="1.5" icon="list"></b-icon>
          </span>
          <span v-else>
            <b-icon icon="x-lg"></b-icon>
          </span>
        </b-navbar-toggle>

        <b-collapse
          class="d-xl-flex justify-content-end"
          id="nav-collapse"
          is-nav
          v-b-scrollspy:nav-scroller
        >
          <!-------------------------------------------->
          <b-navbar-nav class="container-link text-warning">
            <b-nav-item
              v-for="(link, i) in datiNavbar"
              :key="i"
              :href="link.href"
              :to="link.to"
            >
              {{ link.text }}
            </b-nav-item>
          </b-navbar-nav>
          <!-------------------------------------------->
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

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
          href: "/#chi-sono",
          text: "Chi sono?",
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
  methods: {
    ...mapMutations(["darkMode"]),
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/mixStyle";

* {
  // webkit browsers scrollbar
  ::-webkit-scrollbar {
    width: 0.6em;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.25);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(0deg, #ff0080, #ff8c00);
    border-radius: 15px;
  }

  // firefox scrollbar
  scrollbar-color: #ff8c00 transparent;
  scrollbar-width: 0.6em;

  img {
    max-width: 100%;
    height: 100%;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .navbar-router {
    backdrop-filter: blur(5px);

    .ball {
      border-radius: 50%;
      background: linear-gradient(315deg, $salmoneScuro, $oro 80%);
      box-shadow: transparent;
      width: 25px;
      aspect-ratio: 1 / 1;
      transform: scale(0.8);
      transition: all 0.5s linear;

      &.active {
        background: transparent;
        box-shadow: inset -3px -2px 5px -2px #8983f7,
          inset -10px -4px 0 0 #a3dafd;
      }
    }

    .container-link {
      list-style: none;
      display: flex;

      .nav-link {
        font-weight: bold;
        color: $oro;

        // &:active {
        //   scale: 0.8;
        // }
        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
}
</style>
