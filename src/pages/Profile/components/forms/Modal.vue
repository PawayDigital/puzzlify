<template>
  <v-card class="primary">
    <v-card-title class="headline text--textTitle">
      Subir foto
    </v-card-title>

    <v-card-text>
      <v-form>
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
                required
              />
            </v-col>
            <v-col cols="12" md="12">
              <v-text-field
                :counter="10"
                label="Nombre de la foto"
                required
                color="textTitle"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="12">
              <v-select
                v-model="value"
                :items="items"
                chips
                label="Categoria-s"
                multiple
                solo
                background-color="primary"
                color="textImages"
              ></v-select>
            </v-col>
            <v-col cols="12" md="12" class="d-flex justify-md-end">
              <v-btn color="error" text class="mr-3">Cancelar</v-btn>
              <v-btn color="textTitle" class="btnPublicar">Publicar</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>

    <v-divider></v-divider>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    image:
      "https://res.cloudinary.com/dlgvxohur/image/upload/v1617829433/utils/xrz3x7mvtcghtxkihqmg.svg",
    items: ["foo", "bar", "fizz", "buzz"],
    value: [],
    url: null,
  }),
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
