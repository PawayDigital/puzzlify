<template>
  <div id="header">
    <v-app-bar app color="secondary">
      <v-container class="d-flex display-name">
        <div class="d-flex align-center">
          <router-link to="/">
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="@/assets/logo.svg"
              transition="scale-transition"
              width="198"
              height="35"
            />
          </router-link>
        </div>

        <v-spacer></v-spacer>

        <div v-if="user" class="shrink user">
          <div
            @click="expand = !expand"
            :class="[expand ? 'margin_header' : '']"
            class="cursor"
          >
            <v-avatar size="36px" class="mr-3">
              <img alt="Avatar" :src="userFoto" />
            </v-avatar>
            <span
              class="text-user mr-1 font-weight-bold display-name whitee--text"
              >{{ infoUser.firstname }}</span
            >
            <v-icon class="text-user" color="whitee">
              keyboard_arrow_down
            </v-icon>
          </div>
          <v-expand-transition>
            <v-card
              v-show="expand"
              height="100"
              width="100"
              class="mx-auto secondary mt-2"
            >
              <div class="text-center">
                <router-link to="/profile">
                  <v-btn class="my-2 text--secondary" color="primary"
                    >perfil</v-btn
                  >
                </router-link>
                <v-btn @click="signOff" color="error">Salir</v-btn>
              </div>
            </v-card>
          </v-expand-transition>
        </div>

        <div v-else class="btn-header">
          <router-link to="/register" class="text-decoration-none">
            <v-btn color="categories" class="btn mr-2">Registrarse</v-btn>
          </router-link>
          <router-link to="/login" class="text-decoration-none">
            <v-btn color="textTitle" class="btn">Inicio de sesion</v-btn>
          </router-link>
        </div>

        <v-app-bar-nav-icon
          color="whitee"
          @click="drawer = true"
        ></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" color="secondary" absolute temporary>
      <v-container v-if="user">
        <v-row
          style="height:100vh"
          class="flex flex-column justify-center align-center"
        >
          <router-link to="/profile" class="text-decoration-none mb-7">
            <v-btn color="primary" class="btn-responsive ">Perfil</v-btn>
          </router-link>

          <v-btn @click="signOff" color="primary" class="btn-responsive "
            >Salir</v-btn
          >
        </v-row>
      </v-container>
      <v-container v-else>
        <v-row
          style="height:100vh"
          class="flex flex-column justify-center align-center"
        >
          <router-link to="/register" class="text-decoration-none">
            <v-btn color="primary" class="btn-responsive mb-7"
              >Registrarse</v-btn
            >
          </router-link>
          <router-link to="/login" class="text-decoration-none">
            <v-btn color="primary" class="btn-responsive "
              >Inicio de sesion</v-btn
            >
          </router-link>
        </v-row>
      </v-container>
    </v-navigation-drawer>
  </div>
</template>

<script>
import RUTA_API from "@/env.js";
export default {
  data: () => ({
    expand: false,
    drawer: false,
    token: false,
    infoUser: {},
    image: "",
  }),
  created() {
    this.getUser();
  },
  computed: {
    user() {
      return localStorage.getItem("token")
        ? (this.token = true)
        : (this.token = false);
    },
    userFoto() {
      if (this.infoUser.photos_user.image) {
        return (this.image = `${RUTA_API}${this.infoUser.photos_user.image.url}`);
      }
    },
  },
  methods: {
    getUser() {
      this.infoUser = JSON.parse(localStorage.getItem("user"));
    },
    signOff() {
      this.$router.push("/");
      localStorage.clear();
    },
  },
};
</script>

<style src="@/pages/layout/css/layout.css"></style>
