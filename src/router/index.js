import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Home/pages/Home.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/pages/Profile/pages/Profile.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
