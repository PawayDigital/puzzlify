<template>
  <v-app class="primary">
    <header-componet />
    <user class="mt-16" />
    <images />
  </v-app>
</template>

<script>
import HeaderComponet from "@/pages/layout/HeaderComponet.vue";
import User from "@/pages/Profile/components/profile/User.vue";
import Images from "@/pages/Home/components/Images.vue";
export default {
  components: { User, HeaderComponet, Images },
};
</script>
