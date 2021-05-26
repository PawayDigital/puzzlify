import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import store from "./store";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
