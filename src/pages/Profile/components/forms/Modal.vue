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
                  item-text="name"
                  item-value="_id"
                  :rules="[(v) => !!v || 'la categoria es requerida']"
                  chips
                  label="Categoria-s"
                  multiple
                  solo
                  background-color="primary"
                  color="textImages"
                ></v-select>
                <v-alert v-if="alert" dense outlined type="error">
                  La imagen y la categoria o categorias son
                  <strong>requeridas</strong>
                </v-alert>
              </v-col>
              <v-col cols="12" md="12" class="d-flex justify-md-end">
                <v-btn color="error" @click="dialog = false" text class="mr-3"
                  >Cancelar</v-btn
                >
                <v-btn
                  type="submit"
                  :disabled="getDisabled || disabled || !valid"
                  color="textTitle"
                  class="btnPublicar"
                  >Publicar
                  <v-progress-circular
                    indeterminate
                    v-if="loaded"
                    size="20"
                    class="ml-2"
                    color="white"
                  ></v-progress-circular
                ></v-btn>
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
import LayoutService from "@/pages/layout/services/layout.service.js";
import ProfileService from "../../services/profile.service.js";
export default {
  data() {
    return {
      dialog: false,
      loaded: false,
      disabled: null,
      alert: false,
      image:
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1618259197/utils/sb1tme4xc3oz5pmcfvhy.svg",
      items: [],
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
  created() {
    this.getTags();
  },
  computed: {
    getDisabled() {
      if (this.url === null || this.categories.length === 0) {
        return (this.disabled = true);
      } else {
        return (this.disabled = false);
      }
    },
  },
  methods: {
    uploadImage() {
      document.getElementById("file").click();
    },
    previewFiles(e) {
      this.image = URL.createObjectURL(e.target.files[0]);
      this.url = e.target.files[0];
    },
    async getTags() {
      if (!localStorage.getItem("tabsHome")) {
        await LayoutService.getTags().then((res) => {
          this.items = res;
        });
      } else {
        this.items = JSON.parse(localStorage.getItem("tabsHome"));
        this.items = this.items.splice(1);
      }
    },
    upload() {
      if (this.url === null || this.categories.length === 0) {
        this.alert = true;
      } else {
        this.loaded = true;
        this.disabled = true;

        let tags = [],
          user = JSON.parse(localStorage.getItem("user")).id,
          formData = new FormData();

        this.categories.forEach((el) => {
          tags.push({ _id: el });
        });

        formData.append("files.url", this.url);
        formData.append(
          "data",
          JSON.stringify({
            title: this.name,
            tags,
            user,
          })
        );

        ProfileService.postImage(formData).then((res) => {
          this.loaded = false;
          this.disabled = false;
          if (res) {
            this.image =
              "https://res.cloudinary.com/dlgvxohur/image/upload/v1618259197/utils/sb1tme4xc3oz5pmcfvhy.svg";
            this.name = "";
            this.categories = 0;
            this.dialog = false;
            this.$router.push("/");
          }
        });
      }
    },
  },
};
</script>
