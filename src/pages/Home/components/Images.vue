<template>
  <div class="primary" style="width:100%;">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <div class="grid mt-5">
          <v-card
            class="mx-auto text-center item mb-5"
            v-for="item in imagesGlobal"
            :key="item.id"
          >
            <img
              :src="`${urlImage}${item.url[0].url}`"
              width="230"
              class="img"
              height="auto"
              v-bind="attrs"
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

            <v-btn color="secondary" small class="my-2">
              Descargar
            </v-btn>
          </v-card>
        </div>
      </template>

      <modal />
    </v-dialog>
  </div>
</template>

<script>
import LayoutService from "@/pages/layout/services/layout.service.js";
import RUTA_API from "@/env.js";
import imagesLoaded from "imagesloaded";
import masonry from "masonry-layout";
import Modal from "./Modal.vue";
export default {
  props: {
    images: Array,
  },
  data() {
    return {
      dialog: false,
      imagesGlobal: [],
    };
  },
  components: {
    Modal,
  },
  computed: {
    urlImage() {
      return RUTA_API;
    },
  },
  methods: {
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
  },
  mounted() {
    this.getImages();
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
