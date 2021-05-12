<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="10" offset-sm="1" class="primary">
        <v-row>
          <v-col cols="12" sm="3" class="center-perfil text-sm-right"
            ><img
              width="140"
              height="140"
              alt="Avatar"
              class="rounded-circle"
              :src="getImage"
          /></v-col>
          <v-col cols="12" sm="5" class="center-perfil">
            <h2 v-if="getName" class="textTitle--text font-weight-bold mb-2">
              {{ user.firstname }} {{ user.lastname }}
            </h2>
            <span class="text--text font-weight-bold"
              ><v-icon color="text">person</v-icon> @{{ user.username }}</span
            >

            <div class="mt-10">
              <span class="text--text"
                >Imagenes compartidas con la comunidad
                <v-icon color="textImages">linked_camera</v-icon></span
              >
            </div>
          </v-col>
          <v-col cols="12" sm="4">
            <div class="d-flex justify-center">
              <router-link to="/edit" class="text-decoration-none">
                <v-btn rounded color="secondary" class="categories--text mr-2"
                  >Editar perfil</v-btn
                >
              </router-link>

              <modal />
            </div>
          </v-col>
          <v-col cols="12" sm="12">
            <v-card> <Tabs :tags="tags" /> </v-card
          ></v-col>
        </v-row>
      </v-col>
    </v-row>
    <images :images="images" />
  </v-container>
</template>

<script>
import Modal from "@/pages/Profile/components/forms/Modal.vue";
import Tabs from "@/pages/Profile/components/profile/tabs.vue";
import Images from "@/pages/Home/components/Images.vue";
import ProfileService from "../../services/profile.service.js";
import RUTA_API from "@/env.js";

export default {
  data() {
    return {
      user: {},
      image: {},
      tags: [],
      images: [],
    };
  },
  components: {
    Modal,
    Tabs,
    Images,
  },
  created() {
    this.getUser();
    this.getTags();
    this.getImagesMe();
  },
  computed: {
    getName() {
      return this.user.firstname || this.user.lastname;
    },
    getImage() {
      return this.user.photos_user.image
        ? this.image
        : "https://ti-unterrichtsmaterialien.net/fileadmin/user_upload/ti-default.jpg";
    },
  },
  methods: {
    getUser() {
      const user = JSON.parse(localStorage.getItem("user"));
      this.user = user;

      if (this.user.photos_user.image) {
        this.image = `${RUTA_API}${this.user.photos_user.image.url}`;
        return;
      }
    },
    getTags() {
      let tags_array = [{ id: 1, name: "All" }];
      ProfileService.getTags(this.user.id, tags_array).then((res) => {
        this.tags = [...new Set(res)];
      });
    },
    getImagesMe() {
      ProfileService.getImagesMe().then((res) => (this.images = res));
    },
  },
};
</script>

<style src="@/pages/Profile/css/profile.css"></style>
