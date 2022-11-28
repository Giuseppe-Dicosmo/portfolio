<template>
  <b-container
    fluid="lg"
    class="d-flex justify-content-center align-items-center"
  >
    <form
      class="p-4 p-sm-5 col-12 col-sm-9 col-lg-7 text-light d-flex flex-column container-input"
      style="gap: 20px 0"
      ref="form"
      @submit.prevent="sendEmail"
    >
      <div class="focus-within d-flex flex-column">
        <label><b-icon icon="person-fill"></b-icon> Nome</label>
        <b-form-input
          type="text"
          v-model="name"
          name="rom_name"
          placeholder="Mario"
        />
      </div>
      <div class="focus-within d-flex flex-column">
        <label><b-icon icon="person-fill"></b-icon> Cognome</label>
        <b-form-input
          type="text"
          v-model="lastName"
          name="rom_lastName"
          placeholder="Rossi"
        />
      </div>
      <div class="focus-within d-flex flex-column text-light">
        <label><b-icon icon="envelope-fill"></b-icon> Email</label>
        <b-form-input
          type="email"
          v-model="email"
          name="email"
          placeholder="mariorossi@gmail.com"
        />
      </div>
      <div class="focus-within d-flex flex-column">
        <label><b-icon icon="chat-right-text-fill"></b-icon> Messaggio</label>
        <b-form-textarea
          name="message"
          v-model="message"
          rows="2"
          placeholder="Scrivimi di cosa vuoi parlare"
        ></b-form-textarea>
      </div>
      <div class="d-flex justify-content-center">
        <input
          type="submit"
          class="text-light send border-0 py-2 px-4 rounded"
          value="invia"
        />
      </div>
    </form>

    <b-modal
      v-model="modalShow"
      :body-bg-variant="$store.state.dark ? 'dark rounded' : 'light rounded'"
      hide-footer
      hide-header
      centered
      class="p-5"
    >
      <template #default>
        <b-container class="p-3">
          <div
            class="d-flex justify-content-center align-items-center"
            style="gap: 0 30px"
          >
            <h1 v-html="reply" class="d-inline text-success"></h1>
            <b-icon
              scale="3"
              variant="success"
              icon="check-circle-fill"
            ></b-icon>
          </div>
        </b-container>
      </template>
    </b-modal>
  </b-container>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "contactMe",
  data() {
    return {
      name: "",
      lastName: "",
      email: "",
      message: "",

      modalShow: false,
      reply: "",
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_j9raeac",
          "template_46xzqxy",
          this.$refs.form,
          "oBuCuyyrE4XLIg57P"
        )
        .then(
          (result) => {
            this.prova();

            this.reply = "Inviato con successo";
            this.modalShow = true;
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.error("FAILED...", error.text);
          }
        );
    },

    prova() {
      this.name = "";
      this.lastName = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixStyle";

.container-lg {
  min-height: calc(100vh - 76px);

  .container-input {
    border-radius: 50px;
    background: $oro;

    .focus-within {
      transition: $transition;

      &:focus-within {
        scale: 1.03;
      }

      label {
        @include ParagraphTitle;
      }

      .form-control {
        outline: none;
        box-shadow: none;
        border-color: transparent;

        &:focus {
          border: solid 2px $blu;
        }
      }
    }

    .send {
      background-color: $blu;
      text-transform: uppercase;
      font-weight: 1000;
      transition: $transition;

      &:hover {
        scale: 1.1;
      }
    }
  }
}
</style>
