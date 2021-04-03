<template>
  <v-card class="primary">
    <v-card-title class="headline">
      Subir foto
    </v-card-title>

    <v-card-text>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              <img :src="image" id="image" width="200" alt="tu imagen" />
              <br />
              <v-btn @click="hola">Subir foto</v-btn>
              <input id="file" type="file" hidden @change="previewFiles" />
            </v-col>
            <v-col cols="12" md="12">
              <v-text-field
                :counter="10"
                label="Nombre de la foto"
                required
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
                class=""
              ></v-select>
            </v-col>
            <v-col cols="12" md="12" class="d-flex justify-md-end">
              <v-btn>Publicar</v-btn>
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
    image: "https://via.placeholder.com/150",
    items: ["foo", "bar", "fizz", "buzz"],
    value: [],
    url: null,
  }),
  methods: {
    hola() {
      document.getElementById("file").click();
    },
    previewFiles(e) {
      this.image = URL.createObjectURL(e.target.files[0]);
      this.url = e.target.files[0];
    },
  },
};
</script>
