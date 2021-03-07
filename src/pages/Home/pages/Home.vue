<template>
  <v-app>
    <header-componet />
    <div class="d-flex primary">
      <sidebar class="mt-16" />
      <div class="categories mt-16" style="width:100%;">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <div class="grid mt-5">
              <a class="item " v-for="item in items" :key="item.id" href="#">
                <img
                  :src="item.img"
                  width="230"
                  class="mb-2 img"
                  height=""
                  alt=""
                  srcset=""
                />
                <v-btn
                  class="d-block mb-3"
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                  >From the bottom</v-btn
                >
              </a>
            </div>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2">
              Privacy Policy
            </v-card-title>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </v-app>
</template>

<script>
import HeaderComponet from "@/layout/HeaderComponet.vue";
import Sidebar from "@/layout/Sidebar.vue";
import imagesLoaded from "imagesloaded";
import masonry from "masonry-layout";
export default {
  components: {
    HeaderComponet,
    Sidebar,
  },
  data() {
    return {
      dialog: false,
      items: [
        {
          id: 1,
          img:
            "https://images.unsplash.com/photo-1615125945921-7b4fbdeaf0bc?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 2,
          img:
            "https://images.unsplash.com/photo-1613645695025-20e3f38de4a6?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 3,
          img:
            "https://images.unsplash.com/photo-1615125945921-7b4fbdeaf0bc?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 4,
          img:
            "https://images.unsplash.com/photo-1611095789391-947c8f94179c?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 5,
          img:
            "https://images.unsplash.com/photo-1615092607420-e545863a67c4?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 6,
          img:
            "https://images.unsplash.com/photo-1615048234151-6bcbca4043c4?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 7,
          img:
            "https://images.unsplash.com/photo-1603993097397-89c963e325c7?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 8,
          img:
            "https://images.unsplash.com/photo-1615065592543-334b128affca?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 9,
          img:
            "https://images.unsplash.com/photo-1615073879604-ca54851f79a2?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 10,
          img:
            "https://images.unsplash.com/photo-1612831817984-97e394106fff?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
      ],
    };
  },
  mounted() {
    let elem = document.querySelector(".grid");
    imagesLoaded(elem, () => {
      new masonry(elem, {
        itemSelector: ".item",
        columnWidth: 230,
        gutter: 20,
        isFitWidth: true,
      });
    });
  },
};
</script>

<style>
.grid {
  width: 100%;
  margin: 0 auto;
}
.item a {
  border-radius: 20px;
}
.img {
  cursor: zoom-in;
  background: lightgray;
  border-radius: 20px;
}
.img:hover {
  filter: opacity(0.9);
}
</style>
