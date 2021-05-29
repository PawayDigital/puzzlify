<template>
  <div class="primary" style="width:100%; height:auto;">
    <v-alert
      v-if="viewAlert"
      class="container mt-10"
      outlined
      color="textTitle"
    >
      <div class="title text-center d-flex align-center justify-center">
        No hay Images de esta categoria
      </div>
    </v-alert>

    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <div class="grid mt-5">
          <v-card
            class="mx-auto text-center item mb-5"
            v-for="item in imgs"
            :key="item.id"
          >
            <img
              :src="`${urlImage}${item.url[0].url}`"
              width="230"
              class="img"
              height="auto"
              v-bind="attrs"
              @click="oneImage(item.url[0].url)"
              v-on="on"
              :alt="item.url[0].name"
            />

            <v-btn class="cursor--none" :color="item.tags[0].color" text>
              {{ item.tags[0].name }}
            </v-btn>

            <v-card-title
              class="d-flex justify-center py-2 textImages--text font-weight-bold"
            >
              {{ item.title }}
            </v-card-title>

            <v-divider></v-divider>

            <v-btn
              @click="
                downloadImage(`${urlImage}${item.url[0].url}`, item.url[0].name)
              "
              color="secondary"
              small
              class="my-2"
            >
              Descargar
            </v-btn>
            <v-btn
              v-if="activeBtnDelete"
              @click="getDelete(item.id)"
              color="error"
              small
              class="ml-2 my-2"
            >
              eliminar
              <v-progress-circular
                indeterminate
                v-if="loaded"
                size="10"
                class="ml-2"
                color="white"
              ></v-progress-circular>
            </v-btn>
          </v-card>
        </div>
      </template>

      <modal :id="idImage" />
    </v-dialog>
  </div>
</template>

<script>
import LayoutService from "@/pages/layout/services/layout.service.js";
import ProfileService from "@/pages/Profile/services/profile.service.js";
import RUTA_API from "@/env.js";
import swal from "sweetalert2";
import Modal from "./Modal.vue";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      dialog: false,
      imagesGlobal: [],
      idImage: null,
      images: [],
      btnDelete: false,
      loaded: false,
      alerta: null,
    };
  },
  components: {
    Modal,
  },
  computed: {
    ...mapState(["imgs"]),
    urlImage() {
      return RUTA_API;
    },
    viewAlert() {
      return this.imgs.length === 0
        ? (this.alerta = true)
        : (this.alerta = false);
    },
    activeBtnDelete() {
      return this.$route.path === "/profile"
        ? (this.btnDelete = true)
        : (this.btnDelete = false);
    },
  },
  mounted() {
    this.getImages();
    this.getImagesMe();

    this.filterTags({ tag: "All", path: this.$route.path });
  },
  methods: {
    ...mapActions(["filterTags"]),
    oneImage(id) {
      this.idImage = id;
    },
    getImagesMe() {
      if (this.$route.path === "/profile" && localStorage.getItem("token")) {
        if (!localStorage.getItem("imagesUser")) {
          ProfileService.getImagesMe().then((res) => {
            this.images = res;
            localStorage.setItem("imagesUser", JSON.stringify(res));
          });
        }
      }
    },

    getImages() {
      if (this.$route.path === "/") {
        if (!localStorage.getItem("images")) {
          LayoutService.getImages().then((res) => {
            this.imagesGlobal = res;
            localStorage.setItem("images", JSON.stringify(res));
          });
        }
      }
    },

    getDelete(id) {
      swal
        .fire({
          title: "Seguro quieres eliminar la imagen?",
          text: "No puedes revertir la operacion!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#c4c4c4",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Eliminar!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.loaded = true;
            ProfileService.deleteImage(id).then((res) => {
              let images = JSON.parse(localStorage.getItem("images")),
                imagesUser = JSON.parse(localStorage.getItem("imagesUser"));

              let filtro1 = images.filter((img) => img.id !== id),
                filtro2 = imagesUser.filter((img) => img.id !== id);

              localStorage.setItem("images", JSON.stringify(filtro1));
              localStorage.setItem("imagesUser", JSON.stringify(filtro2));

              this.loaded = false;
              this.$router.push("/");
            });
          }
        });
    },

    async downloadImage(imageSrc, imageAlt) {
      const image = await fetch(imageSrc);
      const imageBlog = await image.blob();
      const imageURL = URL.createObjectURL(imageBlog);

      const link = document.createElement("a");
      link.href = imageURL;
      link.download = imageAlt;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<style>
.grid {
  width: 100%;
  margin: 0 auto;
}
.item {
  width: 230px;
}
.img {
  cursor: zoom-in;
  background: lightgray;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
.img:hover {
  filter: opacity(0.9);
}
</style>
