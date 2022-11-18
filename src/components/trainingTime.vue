<template>
  <b-container fluid="lg" class="container-experience-training my-5">
    <!-- formazione  -->
    <div v-motion-slide-visible-once-top :delay="800">
      <h2 class="text-center mb-5">esperienze</h2>

      <article>
        <section
          v-for="(training, i) in trainingArray"
          :key="i"
          :class="i === changeSlide ? slideActive : slide"
          class="flex-sm-row"
          :style="`background: ${training.background}; border-radius: 50px;`"
        >
          <span
            class="p-4 d-flex justify-content-center align-items-center"
            @click="
              changeSlide > 0
                ? changeSlide--
                : (changeSlide = trainingArray.length - 1)
            "
          >
            <b-icon
              style="cursor: pointer"
              class="text-light d-none d-sm-block"
              icon="chevron-left"
              scale="3"
            ></b-icon>

            <b-icon
              style="cursor: pointer"
              class="text-light d-block d-sm-none"
              icon="chevron-up"
              scale="3"
            ></b-icon>
          </span>

          <div
            style="text-shadow: 0px 0px 2px #000"
            class="p-4 text-light text-center d-flex flex-grow-1 flex-column justify-content-center align-items-center"
          >
            <h3>{{ training.qualifica }}</h3>
            <h4>{{ training.azienda }}</h4>
            <time>{{ training.tempo }}</time>
            <p v-html="training.descrizione"></p>
          </div>

          <span
            class="p-4 d-flex justify-content-center align-items-center"
            @click="
              changeSlide < trainingArray.length - 1
                ? changeSlide++
                : (changeSlide = 0)
            "
          >
            <b-icon
              style="cursor: pointer"
              class="text-light d-none d-sm-block"
              icon="chevron-right"
              scale="3"
            ></b-icon>

            <b-icon
              style="cursor: pointer"
              class="text-light d-block d-sm-none"
              icon="chevron-down"
              scale="3"
            ></b-icon>
          </span>
        </section>
      </article>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      changeSlide: 0,
      slide: "slide",
      slideActive: "slide slide-active",

      trainingArray: [
        {
          background: "linear-gradient(-229deg, #fbd52d, #ef3a7b)",
          qualifica: "FRONTEND WEB DEVELOPER",
          azienda: "BC Soft Srl",
          tempo: "06/2022 - 09/2022",
          descrizione:
            "Academy Front-End di 240 ore di teoria e pratica, dove ho imparato questi linguaggi di programmazione:<br />Html, Css, Boostrap, Javascript, typescript, MySQL, react, angular, node js",
        },
        {
          background: "linear-gradient(-229deg, #ef3a7b, #993ea8)",
          qualifica: "JR. FULL STACK WEBDEVELOPERTRAINING",
          azienda: "Boolean Careers",
          tempo: "12/2021 - 06/2022",
          descrizione:
            "Academy di 700 ore durante la quale ho realizzato progetti a difficoltà crescente sia per task logiche che grafiche.<br />I progetti realizzati sono stati svolti sia in autonomia che in team ed erano ispirati a noti siti web e web app come il sito playstation whatsapp spotify.<br />Il percorso si è concluso con la realizzazione di un sito web completo di backend e frontend di Deliveroo che prevedeva l'implementazione di funzionalità quali: pagamenti, filtraggio ristoranti, registrazione utente con validazioni, invio di email.<br />E dove ho imparato questi linguaggi di programmazione:<br />Html, Css, Boostrap, Javascript, Vue, Sass, MySQL, php, laravel.",
        },
        {
          background: "linear-gradient(-229deg, #993ea8, #004aad)",
          qualifica: "O.S.S.",
          azienda: "Salute & Misericordia",
          tempo: "06/2019 - 08/2019",
          descrizione:
            "Fornivo un supporto infermieristico nell'assistenza di base, e mi occupavo nell'igiene della persona mi occupavo del suo benessere psicofisico Per poi diventare un lavoratore autonomo da Settembre 2019 a Dicembre 2021",
        },
        {
          background: "linear-gradient(-229deg, #004aad, #ff5757)",
          qualifica: "CAREGIVER",
          azienda:
            "Sterlicchio Viaggi Di Michele Antonio Sterlicchio & C - Margherita di Savoia",
          tempo: "09/2018 - 05/2019",
          descrizione:
            'Accompagnatore per disabili preso il presidio di riabilitazione "A. Quarto di Palo e Mons. G.Di Donna"',
        },
      ],

      esperienza: [
        {
          background: "linear-gradient(-229deg, #fbd52d, #ef3a7b)",
          qualifica: "FRONTEND WEB DEVELOPER",
          azienda: "BC Soft Srl",
          tempo: "06/2022 - 09/2022",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixStyle";

.container-experience-training {
  width: 80%;

  .btn-color {
    color: white;
    background: $salmoneScuro;

    &:hover {
      background: $oro;
      color: white;
    }
  }

  .slide {
    display: none;
    animation: slide-move 0.7s linear both;

    @keyframes slide-move {
      0% {
        opacity: 0;
        transform: scale(1) rotateX(0);
      }
      50% {
        opacity: 0.5;
        transform: scale(1.2) rotateX(90deg);
      }
      100% {
        opacity: 1;
        transform: scale(1) rotateX(0deg);
      }
    }

    &.slide-active {
      display: flex;
      flex-direction: column;
      min-height: 400px;
      box-shadow: 10px 20px 40px $box-shadow;
    }
  }

  h2 {
    @include ParagraphTitle;
  }
}
</style>
