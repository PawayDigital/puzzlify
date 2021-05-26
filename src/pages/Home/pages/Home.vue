<template>
  <v-app class="primary">
    <header-componet :userInfo="user" :userFoto="userFoto" />
    <tab class="mt-14" />
    <images />
  </v-app>
</template>

<script>
import HeaderComponet from "@/pages/layout/HeaderComponet.vue";
import Tab from "@/pages/layout/Tab.vue";
import Images from "@/pages/Home/components/Images.vue";
import ProfileService from "@/pages/Profile/services/profile.service.js";
import RUTA_API from "@/env.js";
export default {
  components: {
    HeaderComponet,
    Images,
    Tab,
  },
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
