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
    path: "*",
    name: "Error",
    component: () => import("@/pages/layout/error/Error.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/pages/Profile/pages/Profile.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/edit",
    name: "Edit",
    component: () => import("@/pages/Profile/pages/Edit.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/pages/Auth/pages/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/Auth/pages/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth)) {
    const token = localStorage.getItem("token");
    if (!token) {
      next("login");
    }
  }
  next();
});

export default router;
