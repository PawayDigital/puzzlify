<template>
  <v-main class="primary">
    <v-container class="d-flex align-center" style="height:100vh;">
      <v-row>
        <v-col cols="12" class="text-center order-md-1">
          <router-link to="/">
            <img src="@/assets/logo-dark.svg" alt="" srcset="" />
          </router-link>
        </v-col>

        <FormRegister />

        <v-col cols="12" md="6" class="order-md-2 hola">
          <img src="@/assets/welcome.svg" class="image" alt="" srcset="" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import FormRegister from "@/pages/Auth/components/FormRegister.vue";
export default {
  components: {
    FormRegister,
  },
};
</script>

<style src="@/pages/Auth/css/auth.css"></style>
