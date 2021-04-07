<template>
  <v-container class="mt-16">
    <v-form>
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
              type="text"
              color="textTitle"
              label="Nombres"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              type="text"
              color="textTitle"
              label="Apellidos"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              type="text"
              color="textTitle"
              label="@usuario"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="E-mail"
              color="textTitle"
              type="email"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
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
            <v-btn color="textTitle" class="btnPublicar">
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
  },
};
</script>
