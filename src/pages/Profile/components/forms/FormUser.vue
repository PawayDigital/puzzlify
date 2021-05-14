<template>
  <v-container class="mt-16">
    <v-form @submit.prevent="update" ref="form" v-model="valid" lazy-validation>
      <Inputs :info="info" :loaded="loaded" />
    </v-form>
  </v-container>
</template>

<script>
import Inputs from "./Inputs";
import RUTA_API from "@/env.js";
import swal from "sweetalert2";
import ProfileService from "../../services/profile.service.js";
export default {
  components: { Inputs },
  data() {
    return {
      valid: true,
      loaded: false,
      id_photo: null,
      info: {
        image: "",
        url: null,
        name: "",
        email: "",
        lastname: "",
        username: "",
        password: "",
      },
    };
  },
  created() {
    this.getUsuario();
  },
  methods: {
    getUsuario() {
      ProfileService.getUser().then((user) => {
        this.info = {
          image: user.photos_user.image
            ? `${RUTA_API}${user.photos_user.image.url}`
            : "https://ti-unterrichtsmaterialien.net/fileadmin/user_upload/ti-default.jpg",
          name: user.firstname ? user.firstname : "",
          lastname: user.lastname ? user.lastname : "",
          username: user.username,
          email: user.email,
        };
        this.id_photo = user.photos_user.id;
      });
    },
    update() {
      this.loaded = true;

      let formData = new FormData();

      formData.append("files.image", this.info.url);
      formData.append("data", JSON.stringify({}));

      if (this.$refs.form.validate()) {
        ProfileService.updateUser({
          username: this.info.username,
          email: this.info.email,
          password: this.info.password,
          firstname: this.info.name,
          lastname: this.info.lastname,
        }).then((res) => {
          if (this.info.url !== undefined) {
            ProfileService.updatePhoto(formData, this.id_photo).then((res) => {
              return (this.loaded = false);
            });
          }
          return (this.loaded = false);
        });
      } else {
        swal.fire(`Error`, "debes llenar los campos que se indicar", "error");
      }
    },
  },
};
</script>
