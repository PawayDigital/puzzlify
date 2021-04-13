<template>
  <v-col cols="12" md="6" class="order-md-3 text-center mt-md-16">
    <span class="secondary--text"
      >¿Aún no tienes cuenta?<router-link
        to="/register"
        class="secondary--text ml-1"
        >Registrate</router-link
      >
    </span>
    <v-form @submit.prevent="login" ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="12" sm="8" md="12" class="pb-0">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Correo"
            color="textTitle"
            type="email"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="8" md="12">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Contraseña"
            type="password"
            color="textTitle"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8" md="12">
          <v-btn type="submit" large block color="textTitle">
            Ingresar
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    email: "",
    password: "",

    passwordRules: [
      (v) => !!v || "La contraseña es requerida",
      (v) =>
        (v && v.length >= 8) || "La contraseña debe ser mayor a 8 caracteres",
    ],
    emailRules: [
      (v) => !!v || "El correo es requerido",
      (v) => /.+@.+\..+/.test(v) || "No es un correo valido",
    ],
  }),
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        console.log("hola login");
      } else {
        console.error("validar");
      }
    },
  },
};
</script>
