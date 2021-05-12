<template>
  <v-app class="primary">
    <header-componet />
    <user class="mt-16" />
  </v-app>
</template>

<script>
import HeaderComponet from "@/pages/layout/HeaderComponet.vue";
import User from "@/pages/Profile/components/profile/User.vue";

export default {
  components: { User, HeaderComponet },
};
</script>
