<template>
  <v-col cols="12" md="6" class="order-md-3 text-center mt-md-16">
    <span class="secondary--text"
      >¿Ya tienes una cuenta?<router-link
        to="/login"
        class="secondary--text ml-1"
        >Ingresa aquí</router-link
      >
    </span>
    <v-form
      @submit.prevent="register"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-row>
        <v-col cols="12" sm="8" md="6" class="pb-0">
          <v-text-field
            label="Nombres"
            v-model="name"
            :counter="12"
            :rules="nameRules"
            color="textTitle"
            type="text"
            required
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="8" md="6" class="pb-0">
          <v-text-field
            v-model="lastname"
            :counter="12"
            :rules="lastnameRules"
            label="Apellidos"
            color="textTitle"
            type="text"
            required
          >
          </v-text-field>
        </v-col>
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
        <v-col cols="12" sm="8" md="12" class="pb-0">
          <v-text-field
            label="Usuario"
            v-model="username"
            :counter="11"
            :rules="usernameRules"
            color="textTitle"
            type="text"
            required
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="8" md="12">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Contraseña"
            color="textTitle"
            type="password"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="8" md="12">
          <v-checkbox
            v-model="checkbox"
            :rules="[(v) => !!v || 'Debes aceptar para continuar']"
            label="Terminos y condiciones"
            color="textTitle"
            required
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8" md="12">
          <v-btn type="submit" large block color="textTitle">
            Registrarse
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
    name: "",
    email: "",
    lastname: "",
    username: "",
    password: "",
    checkbox: false,

    lastnameRules: [
      (v) => !!v || "El apellido es requerido",
      (v) =>
        (v && v.length <= 12) || "El apellido no debe pasar los 12 caracteres",
    ],
    usernameRules: [
      (v) => !!v || "El usuario es requerido",
      (v) =>
        (v && v.length <= 11) || "El usuario no debe pasar los 11 caracteres",
    ],
    passwordRules: [
      (v) => !!v || "La contraseña es requerida",
      (v) => (v && v.length <= 10) || "Name must be less than 6 characters",
    ],

    nameRules: [
      (v) => !!v || "El nombre es requerido",
      (v) =>
        (v && v.length <= 12) || "El nombre no debe pasar los 12 caracteres",
    ],
    emailRules: [
      (v) => !!v || "El correo es requerido",
      (v) => /.+@.+\..+/.test(v) || "No es un correo valido",
    ],
  }),
  methods: {
    register() {
      if (this.$refs.form.validate()) {
        console.log("hola register");
      } else {
        console.error("validar");
      }
    },
  },
};
</script>
