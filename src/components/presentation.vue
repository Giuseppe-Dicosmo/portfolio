<template>
  <b-container
    v-motion="'custom1'"
    :initial="{
      opacity: 0,
      x: 100,
    }"
    :visibleOnce="{
      opacity: 1,
      x: 0,
    }"
    :delay="500"
    fluid="lg"
    class="container-presentation d-flex justify-content-center align-items-center"
  >
    <b-row class="row-presentation">
      <b-col
        v-motion="'custom2'"
        :initial="{
          opacity: 0,
          x: 100,
        }"
        :visibleOnce="{
          opacity: 1,
          x: 0,
        }"
        :delay="800"
        cols="12"
        md="4"
        class="p-3 d-flex justify-content-center align-items-center"
      >
        <figure class="img-presentation p-0 m-0 col-12 overflow-hidden">
          <img src="@/assets/img/img-profail-2.png" alt="" />
        </figure>
      </b-col>

      <b-col
        v-motion="'custom3'"
        :initial="{
          opacity: 0,
          x: 100,
        }"
        :visibleOnce="{
          opacity: 1,
          x: 0,
        }"
        :delay="1100"
        cols="12"
        md="8"
        class="p-3 d-flex flex-column justify-content-center align-items-center align-items-md-start"
      >
        <h2 class="title-presentation">salve mi presento</h2>
        <p class="text-dark">
          Sono un ragazzo empatico e capace di ascoltare e comprendere
          rapidamente il problema da affrontare.<br />L'ambizione e la
          determinazione non mi mancano e mi aiutano certamente a perseguire gli
          obiettivi che mi prefiggo o che mi vengono dati.<br />La relazione con
          le altre persone è un ottimo carburante per me e spiega la mia
          propensione al lavoro in team.<br />Ho deciso di investire su di me
          come sviluppatore per trasformare in lavoro la mia passione per la
          tecnologia e per la logica unita al desiderio e al benessere che provo
          nell'aiutare il prossimo.
        </p>

        <b-container
          fluid
          class="d-flex justify-content-center justify-content-md-start p-0"
        >
          <b-button
            href="https://www.linkedin.com/in/giuseppe-dicosmo-20b4a223a/"
            target="_blank"
            class="btn-linkedin px-4 py-2 me-3"
            variant="primary"
          >
            <b-icon icon="linkedin" class="me-1"></b-icon> Linkedin
          </b-button>

          <b-button
            href="GiuseppeDicosmoCv.pdf"
            download
            class="btn-linkedin px-4 py-2"
            variant="primary"
          >
            <b-icon icon="download" class="me-1"></b-icon> Scarica CV
          </b-button>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { useMotions } from "@vueuse/motion";

// Get custom controls
const { custom1 } = useMotions();
const { custom2 } = useMotions();
const { custom3 } = useMotions();

export default {
  name: "generalPresentation",
  methods: {
    customEvent() {
      // Change the current variant of `custom` element
      custom1.variant.value = "custom";
      custom2.variant.value = "custom";
      custom3.variant.value = "custom";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixStyle";

.container-presentation {
  min-height: 500px;

  .row-presentation {
    width: 90%;
    border-radius: 50px;
    background: $oro;
    box-shadow: 10px 20px 40px $box-shadow;

    .img-presentation {
      border-radius: 50px;
      width: 100%;
      aspect-ratio: auto 1 / 1;
      background-color: $salmoneScuro;
    }
  }

  .title-presentation {
    @include ParagraphTitle;
  }
}
</style>
