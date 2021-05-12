<template>
  <v-tabs center-active background-color="secondary">
    <v-tab v-for="i of tags" :key="i.id" class="text-center">
      {{ i.name }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
    };
  },
  props: {
    tags: Array,
  },
};
</script>
