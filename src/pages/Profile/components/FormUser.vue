<template>
  <v-container class="mt-16">
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="6" class="text-center">
            <img
              src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              alt=""
              class="rounded-circle"
              width="200"
              height="200"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field type="text" label="Nombres" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field type="text" label="Apellidos" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field type="text" label="@usuario" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="E-mail" type="email" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Contraseña"
              type="password"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <v-textarea
              solo
              name="input-7-4"
              background-color="primary"
              label="Descripcion"
            ></v-textarea>
          </v-col>
          <v-col cols="12" md="12" class="d-flex justify-md-end">
            <v-btn color="textTitle">
              guardar cambios
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
export default {};
</script>
<style>
.theme--light.v-input input,
.v-label.v-label--active,
textarea {
  color: #7868e6 !important;
}
.theme--light.v-btn {
  color: #f5f5f5;
}
</style>
