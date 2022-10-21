<template>
  <b-container
    v-motion-slide-visible-once-right
    :delay="500"
    id="chi-sono"
    fluid="xl"
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
        :delay="1000"
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
        :delay="1500"
        cols="12"
        md="8"
        class="p-3 d-flex flex-column justify-content-center"
      >
        <h2 class="title-presentation">salve mi presento</h2>
        <p>
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
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { useMotions } from "@vueuse/motion";

// Get custom controls
const { custom2 } = useMotions();
const { custom3 } = useMotions();

export default {
  name: "generalPresentation",
  methods: {
    customEvent() {
      // Change the current variant of `custom` element
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
    min-height: 90%;
    border-radius: 50px;
    background: $oro;

    .img-presentation {
      border-radius: 50px;
      background-color: $salmoneScuro;
      aspect-ratio: auto 1 / 1;
    }
  }

  .title-presentation {
    text-transform: uppercase;
    font-weight: 1000;
    color: $blu;
  }
}
</style>
