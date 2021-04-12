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
              src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
          /></v-col>
          <v-col cols="12" sm="5" class="center-perfil">
            <h2 class="textTitle--text font-weight-bold mb-2">
              Cristina Justin
            </h2>
            <span class="text--text font-weight-bold"
              ><v-icon color="text">person</v-icon> @g1alexander</span
            >
            <p class="text--text mt-1">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Donec velit neque, auctor... More
            </p>

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
            <v-card> <Tabs /> </v-card
          ></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Modal from "@/pages/Profile/components/forms/Modal.vue";
import Tabs from "@/pages/Profile/components/profile/tabs.vue";
export default {
  components: {
    Modal,
    Tabs,
  },
};
</script>

<style src="@/pages/Profile/css/profile.css"></style>
