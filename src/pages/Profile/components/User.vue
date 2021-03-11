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
              <v-btn rounded color="secondary" class="categories--text mr-2"
                >Editar perfil</v-btn
              >
              <v-btn rounded color="textTitle" text>
                Subir foto
                <v-icon right>
                  file_upload
                </v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" sm="12">
            <v-card>
              <v-tabs center-active background-color="secondary">
                <v-tab v-for="i of items" :key="i.id" class="text-center">
                  {{ i.title }}
                </v-tab>
              </v-tabs>
            </v-card></v-col
          >
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        { id: 1, title: "All" },
        { id: 2, title: "Technology" },
        { id: 3, title: "Nature" },
        { id: 4, title: "Sports" },
        { id: 5, title: "Movies" },
        { id: 6, title: "Fashion" },
        { id: 7, title: "People" },
        { id: 8, title: "Music" },
      ],
    };
  },
};
</script>

<style>
.v-slide-group__content {
  justify-content: center;
}
@media screen and (max-width: 411px) {
  .center-perfil {
    text-align: center;
  }
}
</style>
