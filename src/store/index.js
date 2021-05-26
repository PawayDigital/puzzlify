import Vue from "vue";
import Vuex from "vuex";
import imagesLoaded from "imagesloaded";
import masonry from "masonry-layout";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    imgs: [],
  },
  mutations: {
    filterTags(state, payload) {
      state.imgs = payload;
    },
  },
  actions: {
    filterTags({ commit }, payload) {
      let images;

      payload.path === "/profile"
        ? (images = JSON.parse(localStorage.getItem("imagesUser")))
        : (images = JSON.parse(localStorage.getItem("images")));

      let arr = [];

      if (images) {
        for (const img of images) {
          if (payload.tag === "All") {
            arr.push(img);
          } else {
            img.tags.filter((tag) =>
              tag.name === payload.tag ? arr.push(img) : ""
            );
          }
        }
      }

      let elem = document.querySelector(".grid");
      imagesLoaded(elem, function() {
        new masonry(elem, {
          itemSelector: ".item",
          columnWidth: 230,
          gutter: 20,
          isFitWidth: true,
        });
      });

      commit("filterTags", arr);
    },
  },
});

export default store;
