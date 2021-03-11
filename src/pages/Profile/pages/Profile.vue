<template>
  <v-app class="primary">
    <header-componet />
    <user class="mt-16" />
    <images />
  </v-app>
</template>

<script>
import HeaderComponet from "@/layout/HeaderComponet.vue";
import User from "../components/User.vue";
import Images from "../../Home/components/Images.vue";
export default {
  components: { User, HeaderComponet, Images },
};
</script>
