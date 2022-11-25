<template>
  <b-container fluid="lg">
    <form
      :class="$store.state.dark ? 'text-light' : 'text-dark'"
      ref="form"
      @submit.prevent="sendEmail"
    >
      <label>Name</label>
      <input type="text" v-model="name" name="from_name" />
      <label>Email</label>
      <input type="email" v-model="email" name="to_name" />
      <label>Message</label>
      <textarea name="message" v-model="message"></textarea>
      <input type="submit" value="Send" />
    </form>

    <h1 :class="$store.state.dark ? 'text-light' : 'text-dark'">{{ ris }}</h1>
  </b-container>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "contactMe",
  data() {
    return {
      name: "",
      email: "",
      message: "",

      ris: "",
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

            this.ris = "inviato";
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.error("FAILED...", error.text);
          }
        );
    },

    prova() {
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixStyle";

.container-lg {
  height: calc(100vh - 76px);
}
</style>
