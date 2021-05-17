<template>
  <v-card>
    <div class="text-center">
      <img
        :src="getImage"
        height="auto"
        alt=""
        style="width:98%;"
        class="pt-1"
      />
    </div>
  </v-card>
</template>

<script>
import RUTA_API from "@/env.js";
export default {
  data() {
    return {
      image: "",
    };
  },
  props: {
    id: String,
  },

  computed: {
    getImage() {
      return `${RUTA_API}${this.id}`;
    },
  },
};
</script>
