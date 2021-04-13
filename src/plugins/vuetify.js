import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#EDEEF7",
        whitee: "#edeef7",
        secondary: "#B8B5FF",
        textTitle: "#7868E6",
        textImages: "#1D3E53",
        text: "#476D7C",
        bgTarget: "#F5F5F5",
        search: "#FDFDFD",
        upload: "#7AD6FE",
        categories: "#254B62",
        people: "#FDACAB",
        nature: "#88ECC9",

        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
  icons: {
    iconfont: "md",
  },
});
