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
        <!-- <div class="btn-header">
          <router-link to="/register" class="text-decoration-none">
            <v-btn color="categories" class="btn mr-2">Registrarse</v-btn>
          </router-link>
          <router-link to="/login" class="text-decoration-none">
            <v-btn color="textTitle" class="btn">Inicio de sesion</v-btn>
          </router-link>
        </div> -->

        <!-- <v-app-bar-nav-icon
          color="whitee"
          @click="drawer = true"
        ></v-app-bar-nav-icon> -->

        <div class="shrink">
          <div
            @click="expand = !expand"
            :class="[expand ? 'margin_header' : '']"
            class="cursor"
          >
            <v-avatar size="36px" class="mr-3">
              <img
                alt="Avatar"
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              />
            </v-avatar>
            <span
              class="text-user mr-1 font-weight-bold display-name whitee--text"
              >Mike van Y</span
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
                <router-link to="/about" class="text-decoration-none">
                  <v-btn color="error">Salir</v-btn>
                </router-link>
              </div>
            </v-card>
          </v-expand-transition>
        </div>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" color="secondary" absolute temporary>
      <v-container>
        <v-row style="height:100vh" align-content="center" justify="center">
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
export default {
  data: () => ({
    expand: false,
    drawer: false,
  }),
};
</script>

<style src="@/pages/layout/css/layout.css"></style>
