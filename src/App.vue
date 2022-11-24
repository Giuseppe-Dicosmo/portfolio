<template>
  <div id="app" :class="$store.state.dark == true ? 'bg-dark' : 'bg-light'">
    <b-navbar toggleable="md" class="navbar-router sticky-top">
      <b-container fluid="lg">
        <b-navbar-brand class="m-0" href="#">
          <figure class="m-0" style="width: 50px; aspect-ratio: 1 / 1">
            <img :src="require(`./assets/img/img-brand.png`)" alt="" />
          </figure>
        </b-navbar-brand>

        <b-navbar-toggle
          @click="$store.state.navbarIcon = !$store.state.navbarIcon"
          class="text-warning order-1"
          target="nav-collapse"
        >
          <span v-if="$store.state.navbarIcon">
            <b-icon scale="1.5" icon="list"></b-icon>
          </span>
          <span v-else>
            <b-icon icon="x-lg"></b-icon>
          </span>
        </b-navbar-toggle>

        <b-collapse
          class="d-xl-flex justify-content-end justify-content-center order-1 order-md-0"
          id="nav-collapse"
          is-nav
        >
          <!-- link navbar -->
          <b-navbar-nav
            v-b-scrollspy:nav-scroller
            class="container-link text-warning text-center overflow-hidden"
            @click="$store.state.navbarIcon = true"
          >
            <b-nav-item
              v-for="(link, i) in NavbarRouter"
              :key="i"
              :to="link.to"
              @click="scrollTop"
            >
              <span
                :class="
                  $store.state.dark ? 'color-nav-light' : 'color-nav-dark'
                "
                >{{ link.text }}</span
              >
            </b-nav-item>
            <b-nav-item
              v-for="(link, i) in NavbarLink"
              :key="i"
              :href="link.href"
            >
              <span
                v-if="$router.history.current['path'] === '/'"
                :class="
                  $store.state.dark ? 'color-nav-light' : 'color-nav-dark'
                "
              >
                {{ link.text }}
              </span>
            </b-nav-item>
          </b-navbar-nav>
          <!-------------------------------------------->
        </b-collapse>

        <!-- bottone dark/light mode  -->
        <b-navbar-nav title="dark/light mode">
          <b-nav-item @click="$store.state.dark = !$store.state.dark">
            <div
              class="ball btn rounded-circle"
              :class="$store.state.dark ? 'active' : ''"
            ></div>
          </b-nav-item>
        </b-navbar-nav>
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
      NavbarRouter: [
        {
          to: "/about",
          text: "",
        },
        {
          to: "/",
          text: "Home",
        },
      ],

      NavbarLink: [
        {
          href: "#chi-sono",
          text: "Chi sono?",
        },
        {
          href: "#esperienze",
          text: "Esperienze",
        },
        {
          href: "#progetti",
          text: "Progetti",
        },
      ],
    };
  },

  methods: {
    ...mapMutations(["darkMode", "scrollTop"]),
  },

  mounted() {
    window.addEventListener("DOMContentLoaded", this.darkMode);
    // window.addEventListener("DOMContentLoaded", this.scrollTop);
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
    width: 100%;
    height: 100%;
  }
}

#app {
  font-family: "League Spartan", sans-serif;

  // font-family: "Barlow Condensed", sans-serif;

  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;

  .navbar-router {
    backdrop-filter: blur(5px);

    .ball {
      border: none;
      background: linear-gradient(315deg, $salmoneScuro, $oro 80%);
      box-shadow: inset -3px -2px 5px -2px transparent,
        inset -10px -4px 0 0 transparent;
      width: 25px;
      aspect-ratio: 1 / 1;
      transform: scale(0.8);

      &.active {
        border: none;
        background: linear-gradient(315deg, transparent, transparent 80%);
        box-shadow: inset -3px -2px 5px -2px #8983f7,
          inset -10px -4px 0 0 #a3dafd;
      }
    }

    .container-link {
      list-style: none;
      display: flex;

      .nav-link {
        font-weight: bold;
        font-size: 20px;
        transition: $transition, color 0s;

        .color-nav-light {
          color: $oro;
          text-shadow: 3px 5px 3px rgba(255, 87, 87, 0.5);
        }

        .color-nav-dark {
          color: $salmoneScuro;
          text-shadow: 3px 5px 3px rgba(255, 204, 0, 0.5);
        }

        &:hover {
          scale: 1.1;
        }

        &:active {
          color: $oro;
        }
      }
    }
  }
}
</style>
