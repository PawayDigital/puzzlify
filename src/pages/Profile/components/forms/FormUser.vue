<template>
  <v-container class="mt-16">
    <v-form @submit.prevent="update" ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-row>
          <v-col cols="12" md="6" class="text-center">
            <img
              :src="image"
              alt=""
              class="rounded-circle"
              width="200"
              height="200"
            />
            <v-btn @click="uploadImage" block text color="textTitle"
              >Actualizar foto</v-btn
            >
            <input
              id="file"
              type="file"
              hidden
              @change="previewFiles"
              required
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="name"
              :counter="12"
              :rules="nameRules"
              type="text"
              color="textTitle"
              label="Nombres"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="lastname"
              :counter="12"
              :rules="lastnameRules"
              type="text"
              color="textTitle"
              label="Apellidos"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="username"
              :counter="11"
              :rules="usernameRules"
              type="text"
              color="textTitle"
              label="@usuario"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              color="textTitle"
              type="email"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Contraseña"
              type="password"
              color="textTitle"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <v-textarea
              solo
              name="input-7-4"
              background-color="primary"
              color="textTitle"
              label="Descripcion"
            ></v-textarea>
          </v-col>
          <v-col cols="12" md="12" class="d-flex justify-md-end">
            <v-btn type="submit" color="textTitle" class="btnPublicar">
              Actualizar informacion
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      image: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
      url: null,
      valid: true,
      name: "",
      email: "",
      lastname: "",
      username: "",
      password: "",

      lastnameRules: [
        (v) => !!v || "El apellido es requerido",
        (v) =>
          (v && v.length <= 12) ||
          "El apellido no debe pasar los 12 caracteres",
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
    };
  },
  methods: {
    uploadImage() {
      document.getElementById("file").click();
    },
    previewFiles(e) {
      this.image = URL.createObjectURL(e.target.files[0]);
      this.url = e.target.files[0];
    },
    update() {
      if (this.$refs.form.validate()) {
        console.log("hola update");
      } else {
        console.error("validar");
      }
    },
  },
};
</script>
