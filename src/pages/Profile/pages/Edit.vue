<template>
  <v-app class="primary">
    <header-componet />
    <form-user />
  </v-app>
</template>

<script>
import HeaderComponet from "@/layout/HeaderComponet.vue";
import FormUser from "../components/FormUser.vue";

export default {
  components: { HeaderComponet, FormUser },
};
</script>
