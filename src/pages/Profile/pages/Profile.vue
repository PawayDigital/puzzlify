<template>
  <v-app class="primary">
    <header-componet :userInfo="user" :userFoto="userFoto" />
    <user class="mt-16" :user="user" :userFoto="userFoto" />
  </v-app>
</template>

<script>
import HeaderComponet from "@/pages/layout/HeaderComponet.vue";
import User from "@/pages/Profile/components/profile/User.vue";
import ProfileService from "../services/profile.service.js";
import RUTA_API from "@/env.js";

export default {
  components: { User, HeaderComponet },
  data() {
    return {
      user: {},
      image: "",
      imageUrl: null,
    };
  },
  created() {
    this.getUser();
  },
  computed: {
    userFoto() {
      if (!this.imageUrl) {
        return (this.image =
          "https://ti-unterrichtsmaterialien.net/fileadmin/user_upload/ti-default.jpg");
      } else {
        return (this.image = `${RUTA_API}${this.user.photos_user.image.url}`);
      }
    },
  },
  methods: {
    async getUser() {
      if (localStorage.getItem("token")) {
        await ProfileService.getUser().then((user) => {
          this.user = user;
          this.user.photos_user.image === undefined
            ? (this.imageUrl = false)
            : (this.imageUrl = true);
        });
      }
    },
  },
};
</script>
