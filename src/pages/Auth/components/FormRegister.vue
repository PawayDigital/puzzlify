<template>
  <v-col cols="12" md="6" class="order-md-3 text-center mt-md-16">
    <span class="secondary--text"
      >¿Ya tienes una cuenta?<router-link
        to="/login"
        class="secondary--text ml-1"
        >Ingresa aquí</router-link
      >
    </span>
    <v-form>
      <v-row>
        <v-col cols="12" sm="8" md="6" class="pb-0">
          <v-text-field label="Nombres" color="textTitle" type="text" required>
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="8" md="6" class="pb-0">
          <v-text-field
            label="Apellidos"
            color="textTitle"
            type="text"
            required
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="8" md="12" class="pb-0">
          <v-text-field
            label="Correo"
            color="textTitle"
            type="email"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="8" md="12" class="pb-0">
          <v-text-field label="Usuario" color="textTitle" type="text" required>
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="8" md="12">
          <v-text-field
            label="Contraseña"
            color="textTitle"
            type="password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8" md="12">
          <v-btn type="submit" large block color="textTitle">
            Registrarse
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-col>
</template>

<script>
export default {};
</script>
