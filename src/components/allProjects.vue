<template>
  <b-container fluid="lg" v-motion-fade-visible-once :delay="500">
    <h2 class="text-center">progetti</h2>

    <b-input-group-append
      class="d-flex justify-content-center justify-content-around my-3"
    >
      <b-button
        href="https://github.com/Giuseppe-Dicosmo"
        target="_blank"
        class="btn-github px-4 py-2"
      >
        <b-icon icon="github"></b-icon> GitHub
      </b-button>
    </b-input-group-append>

    <b-input-group-append class="d-flex justify-content-center flex-wrap">
      <b-button
        v-for="(element, i) in buttonProjects"
        :key="i"
        :style="`background: ${element.backgroundColor}`"
        class="btn btn-projects px-4 py-2 m-2 text-white"
        @click="filterButton(element.text)"
      >
        {{ element.text }}
      </b-button>
    </b-input-group-append>

    <b-container fluid class="my-2">
      <b-row
        cols="1"
        cols-lg="2"
        cols-xl="3"
        align-h="center"
        class="d-flex justify-content-center"
      >
        <b-col v-for="(element, i) in filterCard" :key="i" class="p-4">
          <b-card tag="article" class="text-light text-center">
            <figure
              class="rounded overflow-hidden"
              style="max-width: 100%; height: 200px"
            >
              <img
                :src="
                  element.img
                    ? element.img
                    : require(`../assets/img/img-code.png`)
                "
                alt=""
              />
            </figure>

            <b-container fluid class="p-0">
              <h4>{{ element.title }}</h4>
            </b-container>

            <b-container fluid class="mb-4 p-0">
              <b-button v-b-modal="`modal-${i}`" variant="outline-warning">
                Informazioni sul progetto
              </b-button>

              <b-modal
                :id="`modal-${i}`"
                :header-bg-variant="
                  $store.state.dark
                    ? 'dark border-0 rounded-top'
                    : 'light border-0 rounded-top'
                "
                :header-text-variant="$store.state.dark ? 'light' : 'dark'"
                :body-bg-variant="
                  $store.state.dark
                    ? 'dark rounded-bottom'
                    : 'light rounded-bottom'
                "
                :body-text-variant="$store.state.dark ? 'light' : 'dark'"
                hide-footer
                centered
              >
                <template #modal-header="{ close }">
                  <h3 class="m-0">{{ element.title }}</h3>

                  <b-button size="sm" variant="danger" @click="close()">
                    <b-icon scale="0.7" icon="x-lg"></b-icon>
                  </b-button>
                </template>

                <template #default>
                  <p v-html="element.description"></p>
                  <h4>Cosa ho utilizzato:</h4>

                  <b-input-group-append
                    style="gap: 10px"
                    class="d-flex justify-content-center justify-content-sm-start flex-wrap"
                  >
                    <b-button
                      class="text-light"
                      v-for="(el, i) in element.languages"
                      :key="i"
                      variant="warning"
                    >
                      {{ el }}
                    </b-button>
                  </b-input-group-append>
                </template>
              </b-modal>
            </b-container>

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
  name: "allProjects",
  data() {
    return {
      languageSelection: "all",
      pippo: false,

      buttonProjects: [
        {
          text: "All",
          backgroundColor: "linear-gradient(150deg, #004aad, #ff5757, #ffcc00)",
        },
        {
          text: "Html Css",
          backgroundColor: "linear-gradient(90deg, #f16529, #214ce5)",
        },
        {
          text: "Sass",
          backgroundColor: "#cf649a",
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
          text: "Typescript",
          backgroundColor: "#0074c3",
        },
        {
          text: "Vue",
          backgroundColor: "#3fb27f",
        },
        {
          text: "React",
          backgroundColor: "#5ccfee",
        },
        {
          text: "Php",
          backgroundColor: "#7175aa",
        },
        {
          text: "Laravel",
          backgroundColor: "#f22a1d",
        },
      ],

      cardProjects: [
        {
          img: require(`../assets/img/img-deliverboo.jpg`),
          title: "Deliverboo",
          description:
            "Una riproduzione simile a Glovo, il ristoratore può accedere alla sua area riservata dove può aggiungere i suoi nouvi piatti, controllare gli ordini ricevuti dai clienti.<br />Invece lato cliente può scegliere un ristorante qualsiasi quali pietanze comprare per poi procedere l'acquisto",
          linkGithub: "https://github.com/Difelice-e/deliverboo-team5.git",
          linkWeb: "",
          gender: "php, laravel, sass, bootstrap",
          languages: [
            "Html Css",
            "Sass",
            "Bootstrap",
            "Javascript",
            "Vue",
            "Vue Router",
            "Vuex",
            "phpMyAdmin",
            "php",
            "Laravel",
          ],
          disabled: "disabled",
        },
        {
          img: require(`../assets/img/img-react-shop-card.jpg`),
          title: "Card Shop",
          description:
            'Questo sito mostra delle card con vari articoli ho può filtrare il singolo articolo in base al suo ID grazie a delle chiamate API del sito "DummyJSON"',
          linkGithub: "https://github.com/Giuseppe-Dicosmo/esercizio-react.git",
          linkWeb: "",
          gender: "react, bootstrap",
          languages: ["Html Css", "Bootstrap", "Javascript", "React"],
          disabled: "disabled",
        },
        {
          img: require(`../assets/img/img-boolflix.jpeg`),
          title: "Boolflix",
          description:
            'Una riproduzione simile a Netflix, dove grazie alle chiamate API del sito "The Movie Database" e della barra di ricerca possiamo filtrare tutti i Film e serie TV con quel determinato nome, inoltre ci verra mostrato di che nazionalità è il film la sua trama e il suo voto.',
          linkGithub: "https://github.com/Giuseppe-Dicosmo/vue-boolflix.git",
          linkWeb: "https://giuseppe-dicosmo.github.io/vue-boolflix/",
          gender: "vue, sass",
          languages: ["Html Css", "Sass", "Javascript", "Vue"],
        },
        {
          img: require(`../assets/img/img-whatsapp.jpeg`),
          title: "Whatsapp",
          description:
            "Whatsapp web, Una web app di messaggistica dove scegliendo il contatto desiderato potremmo inviare un messaggio è un bot ci rispondera dopo un paio di secondi e nella chat verrà salvato l'ultimo messaggio, possiamo filtrare anche i nostri contatti scrivendo il loro nome",
          linkGithub:
            "https://github.com/Giuseppe-Dicosmo/js-html-css-boolzap.git",
          linkWeb: "https://giuseppe-dicosmo.github.io/js-html-css-boolzap/",
          gender: "vue",
          languages: ["Html Css", "Javascript", "Vue"],
        },
        {
          img: "",
          title: "Conto Bancario",
          description:
            "Questo progetto conto bancario, creato con classi di tipo oggetto dove ho creando degli utenti fittizi utilizzando il costruttore inserendo il loro codice bancario correttamente possiamo vedere tutti i loro movimenti, acquisti, bonifici e stipendio",
          linkGithub: "https://github.com/Giuseppe-Dicosmo/conto-bancario.git",
          linkWeb: "",
          gender: "typescript",
          languages: ["Typescript"],
          disabled: "disabled",
        },
        {
          img: require(`../assets/img/img-morra-cinese.jpeg`),
          title: "Sasso carta e forbici",
          description:
            "Sasso carta e forbice, spopolato nel 1920 in america ed europa.<br />Ora convertita in chiave moderna si può giocare con un bot che randomicamente buttera un sasso una carta o una forbice, il primo che arrivera a 10 punti vincera e verra resettata la partita.",
          linkGithub: "https://github.com/Giuseppe-Dicosmo/sasso-carta-forbice",
          linkWeb: "https://giuseppe-dicosmo.github.io/sasso-carta-forbice/",
          gender: "javascript",
          languages: ["Html Css", "Javascript"],
        },
        {
          img: require(`../assets/img/img-campo-minato.jpg`),
          title: "Campo minato",
          description:
            "Campo minato un videogioco rompicapo, diffuso negli anni 90 da Microsoft è creato con vari livelli di difficoltà.",
          linkGithub:
            "https://github.com/Giuseppe-Dicosmo/js-campominato-grid.git",
          linkWeb: "https://giuseppe-dicosmo.github.io/js-campominato-grid/",
          gender: "javascript",
          languages: ["Html Css", "Javascript"],
        },
        {
          img: require(`../assets/img/img-playstation.jpeg`),
          title: "Playstation",
          description:
            "Una riproduzione della schermata home del sito web Playstation con l'aggiunta di boostrap e responsive.",
          linkGithub: "https://github.com/Giuseppe-Dicosmo/htmlcss-playstation",
          linkWeb: "https://giuseppe-dicosmo.github.io/htmlcss-playstation/",
          gender: "html css, bootstrap",
          languages: ["Html Css", "Bootstrap"],
        },
        {
          img: require(`../assets/img/img-spotify.jpeg`),
          title: "Spotify",
          description:
            "Una riproduzione della schermata home dell'app Spotify e responsive.",
          linkGithub: "https://github.com/Giuseppe-Dicosmo/html-css-spotifyweb",
          linkWeb: "https://giuseppe-dicosmo.github.io/html-css-spotifyweb/",
          gender: "html css",
          languages: ["Html Css"],
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
  transition: $transition;

  &:hover {
    opacity: 1;
    scale: 1.1;
  }
}

.btn-projects {
  border: none;
  font-weight: 1000;
  transition: $transition;

  &:hover {
    scale: 1.1;
  }
}

.card {
  background: rgba($color: $blu, $alpha: 1);
  transition: $transition;

  &:hover {
    background: rgba($color: $blu, $alpha: 0.9);
    scale: 1.1;
    box-shadow: 10px 10px 15px $box-shadow;
  }
}
</style>
