<template>
  <v-tabs center-active background-color="secondary">
    <v-tab v-for="i of items" :key="i.id" class="text-center">
      {{ i.title }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        { id: 1, title: "All" },
        { id: 2, title: "Technology" },
        { id: 3, title: "Nature" },
        { id: 4, title: "Sports" },
        { id: 5, title: "Movies" },
        { id: 6, title: "Fashion" },
        { id: 7, title: "People" },
        { id: 8, title: "Music" },
      ],
    };
  },
};
</script>
