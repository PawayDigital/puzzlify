<template>
  <v-tabs center-active background-color="secondary">
    <v-tab
      @click="filterTags({ tag: i.name, path: '/profile' })"
      v-for="i of tags"
      :key="i.id"
      class="text-center"
    >
      {{ i.name }}
    </v-tab>
  </v-tabs>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      tab: null,
    };
  },
  props: {
    tags: Array,
  },

  methods: {
    ...mapActions(["filterTags"]),
  },
};
</script>
