<template>
  <v-main class="primary">
    <v-container class="d-flex align-center" style="height:100vh;">
      <v-row>
        <v-col cols="12" class="text-center order-md-1">
          <router-link to="/">
            <img src="@/assets/logo-dark.svg" alt="" srcset="" />
          </router-link>
        </v-col>

        <v-col cols="12" md="6" class="order-md-3 text-center mt-md-16">
          <span class="secondary--text"
            >¿Aún no tienes cuenta?<router-link
              to="/register"
              class="secondary--text ml-1"
              >Registrate</router-link
            >
          </span>
          <v-form>
            <v-row>
              <v-col cols="12" sm="8" md="12" class="pb-0">
                <v-text-field
                  label="Correo"
                  type="email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="8" md="12">
                <v-text-field
                  label="Contraseña"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="8" md="12">
                <v-btn type="submit" large block color="textTitle">
                  Ingresar
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
        <v-col cols="12" md="6" class="order-md-2 hola">
          <img src="@/assets/welcome.svg" class="image" alt="" srcset="" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {};
</script>

<style>
.theme--light.v-input input,
.v-label.v-label--active {
  color: #7868e6 !important;
}
.theme--light.v-btn {
  color: #f5f5f5;
}
.image {
  width: 100%;
}

a.secondary--text:hover {
  color: #7868e6 !important;
}

@media screen and (max-width: 411px) {
  .hola {
    display: none;
  }
}
</style>
