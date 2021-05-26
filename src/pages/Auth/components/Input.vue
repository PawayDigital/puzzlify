<template>
  <div>
    <v-row>
      <v-col cols="12" sm="8" md="12" class="pb-0">
        <v-text-field
          v-model="user.email"
          :rules="emailRules"
          label="Correo"
          color="textTitle"
          type="email"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="8" md="12" class="pb-0">
        <v-text-field
          label="Usuario"
          v-if="user.username !== undefined"
          v-model="user.username"
          :counter="11"
          :rules="usernameRules"
          color="textTitle"
          type="text"
          required
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="8" md="12">
        <v-text-field
          v-model="user.password"
          :rules="passwordRules"
          label="Contraseña"
          color="textTitle"
          type="password"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="8" md="12">
        <v-checkbox
          v-if="user.username !== undefined"
          v-model="checkbox"
          :rules="[(v) => !!v || 'Debes aceptar para continuar']"
          label="Terminos y condiciones"
          color="textTitle"
          required
        ></v-checkbox>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="8" md="12">
        <v-btn type="submit" large block color="textTitle" :disabled="block">
          {{ btnName }}
          <v-progress-circular
            indeterminate
            v-if="loaded"
            size="25"
            class="ml-2"
            color="white"
          ></v-progress-circular>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox: false,
      emailRules: [
        (v) => !!v || "El correo es requerido",
        (v) => /.+@.+\..+/.test(v) || "No es un correo valido",
      ],
      usernameRules: [
        (v) => !!v || "El usuario es requerido",
        (v) =>
          (v && v.length <= 11) || "El usuario no debe pasar los 11 caracteres",
      ],
      passwordRules: [
        (v) => !!v || "La contraseña es requerida",
        (v) =>
          (v && v.length >= 8) || "La contraseña debe ser mayor a 8 caracteres",
      ],
    };
  },
  computed: {
    btnName() {
      return this.user.username !== undefined ? "Registrarse" : "Ingresar";
    },
  },
  props: {
    user: Object,
    loaded: Boolean,
    block: Boolean,
  },
};
</script>

<style></style>
