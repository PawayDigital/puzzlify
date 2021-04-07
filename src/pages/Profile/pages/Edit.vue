<template>
  <v-app class="primary">
    <header-componet />
    <form-user />
  </v-app>
</template>

<script>
import HeaderComponet from "@/pages/layout/HeaderComponet.vue";
import FormUser from "@/pages/Profile/components/forms/FormUser.vue";

export default {
  components: { HeaderComponet, FormUser },
};
</script>

<style src="@/pages/Profile/css/profile.css"></style>
