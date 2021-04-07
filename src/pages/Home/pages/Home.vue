<template>
  <v-app>
    <header-componet />
    <tab class="mt-14" />
    <images />
  </v-app>
</template>

<script>
import HeaderComponet from "@/pages/layout/HeaderComponet.vue";
import Tab from "@/pages/layout/Tab.vue";
import Images from "@/pages/Home/components/Images.vue";
export default {
  components: {
    HeaderComponet,
    Images,
    Tab,
  },
};
</script>
