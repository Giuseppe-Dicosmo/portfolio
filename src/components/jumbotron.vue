<template>
  <b-container fluid class="container-jumbotron position-relative">
    <b-row
      class="container-circle rounded-circle d-flex flex-column flex-wrap align-content-center justify-content-end"
    >
      <b-col
        cols="9"
        md="6"
        class="presentation-container d-flex justify-content-center text-center"
      >
        <!-- title and image -->
        <div class="d-flex flex-column align-items-center">
          <h1
            class="mb-5"
            :class="$store.state.dark ? 'text-light' : 'text-dark'"
          >
            Ciao sono Giuseppe Dicosmo <span>Jr. Full Stack Web Developer</span>
          </h1>

          <figure
            v-motion-pop
            :delay="800"
            class="img-profail-container col-10 col-md-8 col-lg-5 rounded-circle overflow-hidden"
          >
            <img src="@/assets/img/img-profail-1.png" alt="" />
          </figure>
        </div>

        <!-- animated circle -->
        <div
          :class="$store.state.dark == true ? 'bg-dark' : 'bg-light'"
          class="circle bg-light rounded-circle d-flex justify-content-center align-items-center"
          :style="`--n: ${iconsProgramming.length}; --t: ${time}s`"
        >
          <!-- icons -->
          <ul class="d-flex justify-content-center">
            <li
              class="item col-7 col-lg-7 d-flex justify-content-center"
              v-for="(element, i) in iconsProgramming"
              :key="i"
              :style="`animation-delay: calc(${element.position} * var(--t) / var(--n))`"
            >
              <figure class="col-2 col-lg-1">
                <img :src="element.img" alt="" />
              </figure>
            </li>
          </ul>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "jumboTron",
  data() {
    return {
      time: 30,
      iconsProgramming: [
        {
          img: require(`../assets/img/html.svg`),
          position: -0,
        },
        {
          img: require(`../assets/img/css.svg`),
          position: -1,
        },
        {
          img: require(`../assets/img/bootstrap.svg`),
          position: -2,
        },
        {
          img: require(`../assets/img/sass.svg`),
          position: -3,
        },
        {
          img: require(`../assets/img/javascript.svg`),
          position: -4,
        },
        {
          img: require(`../assets/img/typescript.svg`),
          position: -5,
        },
        {
          img: require(`../assets/img/node-js.svg`),
          position: -6,
        },
        {
          img: require(`../assets/img/vue.svg`),
          position: -7,
        },
        {
          img: require(`../assets/img/react.svg`),
          position: -8,
        },
        {
          img: require(`../assets/img/angular.svg`),
          position: -9,
        },
        {
          img: require(`../assets/img/mysql.svg`),
          position: -10,
        },
        {
          img: require(`../assets/img/php.svg`),
          position: -11,
        },
        {
          img: require(`../assets/img/laravel.svg`),
          position: -12,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixStyle";

.container-jumbotron {
  min-height: 43rem;
  scroll-snap-align: start;
  overflow: hidden;

  .container-circle {
    position: absolute;
    margin: 0;
    padding: 0;
    top: 3%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 170%;
    width: 130%;
    box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.2);
    overflow: hidden;

    .presentation-container {
      height: 52%;

      h1 {
        user-select: none;

        & span {
          display: block;
          @include colorTitle;
        }
      }

      .img-profail-container {
        aspect-ratio: auto 1 / 1;
        background-color: $oro;
      }

      .circle {
        z-index: -1;
        @include gradientCircle;
        width: 80%;
        aspect-ratio: auto 1 / 1;
        position: absolute;
        top: 78%;
        left: 10%;

        & .item {
          list-style-type: none;
          position: absolute;
          animation: spin var(--t) linear infinite;
          transform: rotate(0) translate(100%, 100%) rotate(0);
        }
      }

      @keyframes spin {
        100% {
          transform: rotate(1turn) translate(100%, 100%) rotate(-1turn);
        }
      }
    }
  }
}
</style>
