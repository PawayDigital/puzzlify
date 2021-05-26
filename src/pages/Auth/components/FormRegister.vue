<template>
  <v-col cols="12" md="6" class="order-md-3 text-center mt-md-16">
    <span class="secondary--text"
      >¿Ya tienes una cuenta?<router-link
        to="/login"
        class="secondary--text ml-1"
        >Ingresa aquí</router-link
      >
    </span>
    <v-form
      @submit.prevent="register"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <Input :user="user" :loaded="loaded" :block="loaded" />
    </v-form>
  </v-col>
</template>

<script>
import AuthService from "@/pages/Auth/services/auth.service.js";
import swal from "sweetalert2";
import Input from "./Input.vue";

export default {
  components: { Input },
  data: () => ({
    valid: true,
    loaded: false,
    user: {
      email: "",
      username: "",
      password: "",
    },
  }),
  methods: {
    register() {
      if (this.$refs.form.validate()) {
        this.loaded = true;
        AuthService.register({
          username: this.user.username,
          email: this.user.email,
          password: this.user.password,
        }).then((res) => {
          this.loaded = false;
          this.user = {
            email: "",
            username: "",
            password: "",
          };
          this.upload(res.user.id);
          this.$router.push("/login");
        });
      } else {
        swal.fire("Error", "tienes que rellenar los campos", "error");
      }
    },
    upload(id) {
      let formData = new FormData();

      formData.append("files.image", "");
      formData.append("data", JSON.stringify({ user: id }));
      AuthService.registerUpload(formData).then((res) => {});
    },
  },
};
</script>
