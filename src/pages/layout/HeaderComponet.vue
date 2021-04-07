<template>
  <div id="header">
    <v-app-bar app color="secondary" dark>
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

        <router-link to="/register" class="text-decoration-none">
          <v-btn color="categories" class="mr-2">Registrarse</v-btn>
        </router-link>
        <router-link to="/login" class="text-decoration-none">
          <v-btn color="textTitle">Inicio de sesion</v-btn>
        </router-link>

        <!-- <div class="shrink">
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
            <span class="mr-1 font-weight-bold display-name texto-primary"
              >Mike van Y</span
            >
            <v-icon color="primary">
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
        </div> -->
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    expand: false,
  }),
};
</script>

<style>
.margin_header {
  margin-top: 7em;
}
.cursor {
  cursor: pointer;
}
.texto-primary {
  color: #edeef7;
}
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: 0px 6px 4px rgba(184, 181, 255, 0.25) !important;
}

@media screen and (max-width: 411px) {
  .display-name {
    display: none;
    padding: 0 !important;
  }
}
</style>
