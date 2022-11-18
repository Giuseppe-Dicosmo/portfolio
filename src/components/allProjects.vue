<template>
  <b-container fluid="lg">
    <h2 class="text-center">progetti</h2>

    <div class="d-flex justify-content-center justify-content-sm-end">
      <b-button
        href="https://github.com/Giuseppe-Dicosmo"
        target="_blank"
        class="btn-github px-3 py-2"
      >
        <b-icon icon="github"></b-icon> GitHub
      </b-button>
    </div>

    <div>
      <input
        v-for="(element, i) in buttonProjects"
        :key="i"
        type="button"
        :value="element.text"
        :style="`background: ${element.backgroundColor}`"
        class="btn btn-projects px-4 py-2"
        @click="filterButton(element.text)"
      />
    </div>

    <b-container class="my-5">
      <b-row cols="1" cols-md="2" cols-lg="3" align-h="center">
        <b-col v-for="(element, i) in filterCard" :key="i" class="p-4">
          <b-card
            :title="element.title"
            img-src="https://picsum.photos/400/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            class="text-light"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-container fluid class="d-flex justify-content-center p-0">
              <b-button
                :href="element.linkGithub"
                target="_blank"
                variant="outline-warning"
                class="me-3"
              >
                <b-icon icon="code-slash"></b-icon> Code GitHub
              </b-button>

              <b-button
                :href="element.linkWeb"
                target="_blank"
                variant="outline-warning"
                :disabled="element.disabled"
              >
                <b-icon icon="globe"></b-icon> Web Demo
              </b-button>
            </b-container>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      languageSelection: "all",

      buttonProjects: [
        {
          text: "All",
        },
        {
          text: "Html Css",
          backgroundColor: "linear-gradient(90deg, #f16529, #214ce5)",
        },
        {
          text: "Bootstrap",
          backgroundColor: "#7952b3",
        },
        {
          text: "JavaScript",
          backgroundColor: "#f7d138",
        },
        {
          text: "Vue",
          backgroundColor: "#3fb27f",
        },
      ],

      cardProjects: [
        {
          img: require(`../assets/img/html.svg`),
          title: "Spotify",
          description: "",
          linkGithub: "https://github.com/Giuseppe-Dicosmo/html-css-spotifyweb",
          linkWeb: "",
          gender: "html css",
          disabled: "disabled",
        },
        {
          img: require(`../assets/img/html.svg`),
          title: "Playstation",
          description: "",
          linkGithub: "https://github.com/Giuseppe-Dicosmo/htmlcss-playstation",
          linkWeb: "",
          gender: "html css, bootstrap",
          disabled: "disabled",
        },
        {
          img: require(`../assets/img/html.svg`),
          title: "Sasso carta e forbici",
          description: "",
          linkGithub: "https://github.com/Giuseppe-Dicosmo/sasso-carta-forbice",
          linkWeb: "https://giuseppe-dicosmo.github.io/sasso-carta-forbice/",
          gender: "javascript",
        },
        {
          img: require(`../assets/img/html.svg`),
          title: "Campo minato",
          description: "",
          linkGithub: "",
          linkWeb: "",
          gender: "javascript",
        },
        {
          img: require(`../assets/img/html.svg`),
          title: "Whatsapp",
          description: "",
          linkGithub:
            "https://github.com/Giuseppe-Dicosmo/js-html-css-boolzap.git",
          linkWeb: "https://giuseppe-dicosmo.github.io/js-html-css-boolzap/",
          gender: "vue ",
        },
        {
          img: require(`../assets/img/html.svg`),
          title: "Boolflix",
          description: "",
          linkGithub: "https://github.com/Giuseppe-Dicosmo/vue-boolflix.git",
          linkWeb: "https://giuseppe-dicosmo.github.io/vue-boolflix/",
          gender: "vue",
        },
      ],
    };
  },
  methods: {
    filterButton(text) {
      this.languageSelection = text.toLowerCase();
    },
  },
  computed: {
    filterCard() {
      if (this.languageSelection === "all") {
        return this.cardProjects;
      }

      return this.cardProjects.filter((element) => {
        return element.gender.includes(this.languageSelection);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixStyle";

h2 {
  @include ParagraphTitle;
}

.btn-github {
  background-color: #161b22;
  color: white;
  border: none;
}

.btn-projects {
  border: none;
  color: white;
  font-weight: 1000;
}

.card {
  background: rgba(0, 74, 173, 1);
  // background: rgba(255, 204, 0, 0.5);
  // background-color: #10376b;
  transition: all 0.3s linear;

  &:hover {
    background: rgba(0, 74, 173, 1);
    // background: rgba(255, 204, 0, 1);
    scale: 1.1;
    box-shadow: 10px 20px 40px rgba(255, 204, 0, 0.5);
  }
}
</style>
