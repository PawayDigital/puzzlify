<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" class="text-center">
        <img
          :src="info.image"
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
          accept="image/png, image/jpg, image/jpeg"
          required
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="info.name"
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
          v-model="info.lastname"
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
          v-model="info.username"
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
          v-model="info.email"
          :rules="emailRules"
          label="E-mail"
          color="textTitle"
          type="email"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="info.password"
          :rules="passwordRules"
          label="Contraseña"
          type="password"
          color="textTitle"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="12" class="d-flex justify-md-end">
        <v-btn
          type="submit"
          color="textTitle"
          class="btnPublicar"
          :disabled="loaded"
        >
          Actualizar informacion

          <v-progress-circular
            indeterminate
            size="25"
            v-if="loaded"
            class="ml-2"
            color="white"
          ></v-progress-circular>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    info: Object,
    loaded: Boolean,
  },
  data() {
    return {
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
        (v) =>
          (v && v.length >= 8) || "La contraseña debe ser mayor a 8 caracteres",
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
    previewFiles(e) {
      this.info.image = URL.createObjectURL(e.target.files[0]);
      this.info.url = e.target.files[0];
    },
    uploadImage() {
      document.getElementById("file").click();
    },
  },
};
</script>
