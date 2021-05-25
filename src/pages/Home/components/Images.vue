<template>
  <div class="primary" style="width:100%; height:auto;">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <div class="grid mt-5">
          <v-card
            class="mx-auto text-center item mb-5"
            v-for="item in imagesHome"
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

            <v-btn :color="item.tags[0].color" text>
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
import imagesLoaded from "imagesloaded";
import masonry from "masonry-layout";
import swal from "sweetalert2";
import Modal from "./Modal.vue";
export default {
  data() {
    return {
      dialog: false,
      imagesGlobal: [],
      idImage: null,
      images: [],
      btnDelete: false,
      loaded: false,
    };
  },
  components: {
    Modal,
  },
  computed: {
    urlImage() {
      return RUTA_API;
    },
    imagesHome() {
      return this.$route.path === "/profile" ? this.images : this.imagesGlobal;
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
  },
  methods: {
    oneImage(id) {
      this.idImage = id;
    },
    getImagesMe() {
      ProfileService.getImagesMe().then((res) => {
        this.images = res;
        let elem = document.querySelector(".grid");
        imagesLoaded(elem, function() {
          new masonry(elem, {
            itemSelector: ".item",
            columnWidth: 230,
            gutter: 20,
            isFitWidth: true,
          });
        });
      });
    },

    getImages() {
      LayoutService.getImages().then((res) => {
        this.imagesGlobal = res;

        let elem = document.querySelector(".grid");
        imagesLoaded(elem, function() {
          new masonry(elem, {
            itemSelector: ".item",
            columnWidth: 230,
            gutter: 20,
            isFitWidth: true,
          });
        });
      });
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
              this.loaded = false;
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
