<template>
  <v-col cols="12" md="6" class="order-md-3 text-center mt-md-16">
    <span class="secondary--text"
      >¿Aún no tienes cuenta?<router-link
        to="/register"
        class="secondary--text ml-1"
        >Registrate</router-link
      >
    </span>
    <v-form @submit.prevent="login" ref="form" v-model="valid" lazy-validation>
      <Input :user="user" />
      <v-progress-circular
        indeterminate
        v-if="loaded"
        size="25"
        class="mt-2"
        color="textTitle"
      ></v-progress-circular>
    </v-form>
  </v-col>
</template>

<script>
import AuthService from "@/pages/Auth/services/auth.service.js";
import Input from "./Input.vue";
import swal from "sweetalert2";
export default {
  components: { Input },
  data: () => ({
    valid: true,
    loaded: false,
    user: {
      email: "",
      password: "",
    },
  }),
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.loaded = true;
        AuthService.login({
          identifier: this.user.email,
          password: this.user.password,
        }).then((res) => {
          this.loaded = false;
          localStorage.setItem("token", res.jwt);
          localStorage.setItem("user", JSON.stringify(res.user));
          this.user = {
            email: "",
            password: "",
          };
          this.$router.push("/profile");
        });
      } else {
        swal.fire("Error", "tienes que rellenar los campos", "error");
      }
    },
  },
};
</script>
