<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn rounded color="textTitle" text v-bind="attrs" v-on="on">
        Subir foto
        <v-icon right>
          file_upload
        </v-icon>
      </v-btn>
    </template>
    <v-card class="primary">
      <v-card-title class="headline text--textTitle">
        Subir foto
      </v-card-title>

      <v-card-text>
        <v-form @submit.prevent="upload" v-model="valid" lazy-validation>
          <v-container>
            <v-row>
              <v-col cols="12" md="12" class="text-center">
                <img
                  :src="image"
                  id="image"
                  width="50%"
                  height="auto"
                  alt="upload"
                  class="text--secondary"
                />
                <br />
                <v-btn @click="uploadImage" block text color="textTitle"
                  >Subir foto</v-btn
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
              <v-col cols="12" md="12">
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  label="Nombre de la foto"
                  required
                  color="textTitle"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-select
                  v-model="categories"
                  :items="items"
                  :rules="[(v) => !!v || 'Item is required']"
                  chips
                  label="Categoria-s"
                  multiple
                  solo
                  background-color="primary"
                  color="textImages"
                ></v-select>
              </v-col>
              <v-col cols="12" md="12" class="d-flex justify-md-end">
                <v-btn color="error" @click="dialog = false" text class="mr-3"
                  >Cancelar</v-btn
                >
                <v-btn
                  type="submit"
                  :disabled="!valid"
                  color="textTitle"
                  class="btnPublicar"
                  >Publicar</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      image:
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1618259197/utils/sb1tme4xc3oz5pmcfvhy.svg",
      items: ["Technology", "Nature", "Sports", "Movies"],
      url: null,
      name: "",
      categories: [],

      valid: true,
      nameRules: [
        (v) => !!v || "el nombre es requerido",
        (v) =>
          (v && v.length <= 10) ||
          "El nombre de la foto no debe tener mas de 10 caracteres",
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
    upload() {
      console.log("ass");
    },
  },
};
</script>
