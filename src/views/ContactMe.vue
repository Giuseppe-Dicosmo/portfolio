<template>
  <b-container
    fluid="lg"
    class="d-flex justify-content-center align-items-center"
  >
    <b-form
      class="p-4 p-sm-5 col-12 col-sm-9 col-lg-7 text-light d-flex flex-column container-input"
      style="gap: 20px 0"
      ref="form"
      @submit.prevent="onSubmit"
    >
      <div class="focus-within d-flex flex-column">
        <label><b-icon icon="person-fill"></b-icon> Nome</label>
        <b-form-input
          v-model="$v.form.name.$model"
          :state="validateState('name')"
          aria-describedby="input-name-error"
          name="rom_name"
          placeholder="Mario"
          trim
        />

        <b-form-invalid-feedback class="fw-bold" id="input-name-error">
          <!-- ternary operator -->
          {{
            $v.form.name.$model.length == 0
              ? "inserisci il tuo nome"
              : $v.form.name.$model.length < 2
              ? "questo campo deve avere almeno 2 caratteri"
              : $v.form.name.$model.length > 50
              ? "puoi inserire un massimo 50 caratteri"
              : null
          }}
        </b-form-invalid-feedback>
      </div>
      <div class="focus-within d-flex flex-column">
        <label><b-icon icon="person-fill"></b-icon> Cognome</label>
        <b-form-input
          v-model="$v.form.lastName.$model"
          :state="validateState('lastName')"
          aria-describedby="input-lastName-error"
          name="rom_lastName"
          placeholder="Rossi"
          trim
        />

        <b-form-invalid-feedback class="fw-bold" id="input-lastName-error">
          {{
            $v.form.lastName.$model.length == 0
              ? "inserisci il tuo cognome"
              : $v.form.lastName.$model.length < 2
              ? "questo campo deve avere almeno 2 caratteri"
              : $v.form.lastName.$model.length > 50
              ? "puoi inserire un massimo 50 caratteri"
              : null
          }}
        </b-form-invalid-feedback>
      </div>
      <div class="focus-within d-flex flex-column text-light">
        <label><b-icon icon="envelope-fill"></b-icon> Email</label>
        <b-form-input
          type="email"
          v-model="$v.form.email.$model"
          :state="validateState('email')"
          aria-describedby="input-email-error"
          name="email"
          placeholder="mariorossi@gmail.com"
          trim
        />

        <b-form-invalid-feedback class="fw-bold" id="input-email-error">
          inserisci la tua email
        </b-form-invalid-feedback>
      </div>
      <div class="focus-within d-flex flex-column">
        <label><b-icon icon="chat-right-text-fill"></b-icon> Messaggio</label>
        <b-form-textarea
          v-model="$v.form.message.$model"
          :state="validateState('message')"
          aria-describedby="input-message-error"
          rows="2"
          name="message"
          placeholder="Scrivimi di cosa vuoi parlare"
          trim
        ></b-form-textarea>

        <b-form-invalid-feedback class="fw-bold" id="input-message-error">
          È obbligatorio compilare questo campo
        </b-form-invalid-feedback>
      </div>
      <div class="d-flex justify-content-center">
        <input
          type="submit"
          class="text-light send border-0 py-2 px-4 rounded"
          value="invia"
        />
      </div>
    </b-form>

    <b-modal
      v-model="modalShow"
      :body-bg-variant="$store.state.dark ? 'dark rounded' : 'light rounded'"
      hide-footer
      hide-header
      centered
      class="p-5"
    >
      <template #default>
        <b-container class="p-3 d-flex flex-column align-items-center">
          <div
            class="d-flex justify-content-center align-items-center"
            style="gap: 0 30px"
          >
            <h4
              class="m-0 d-inline text-success text-uppercase"
              :class="errorEmailjs ? 'text-danger' : 'text-success'"
            >
              {{ reply }}
            </h4>
            <b-icon
              v-if="errorEmailjs"
              scale="2"
              variant="danger"
              icon="exclamation-triangle-fill"
            ></b-icon>
            <b-icon
              v-else
              scale="2"
              variant="success"
              icon="check-circle-fill"
            ></b-icon>
          </div>

          <b-button
            v-if="errorEmailjs"
            class="mt-4"
            variant="danger"
            href="mailto:giuseppedicosmo530@gmail.com"
          >
            Scrivimi una mail
          </b-button>
        </b-container>
      </template>
    </b-modal>
  </b-container>
</template>

<script>
import emailjs from "@emailjs/browser";
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";

export default {
  name: "contactMe",
  mixins: [validationMixin],
  data() {
    return {
      form: {
        name: "",
        lastName: "",
        email: "",
        message: "",
      },
      errorEmailjs: false,
      modalShow: false,
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(50),
      },
      lastName: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(50),
      },
      email: { required, email },
      message: { required },
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },

    onSubmit() {
      this.$v.form.$touch();
      if (!this.$v.form.$anyError) {
        this.sendEmail();
      }
    },

    resetForm() {
      this.form = {
        name: "",
        lastName: "",
        email: "",
        message: "",
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },

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
            this.modalShow = true;
            this.reply = "inviato con successo";
            this.resetForm();
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            this.errorEmailjs = true;
            this.modalShow = true;
            this.reply = "mi dispiace c'è qualcosa che è andato storto";
            console.error("FAILED...", error.text);
          }
        );
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
