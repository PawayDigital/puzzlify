<template>
  <v-card>
    <v-tabs v-model="tab" background-color="primary" centered icons-and-text>
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#" v-for="item in items" :key="item.id">
        {{ item.title }}
        <v-icon>{{ item.icon }}</v-icon>
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        { title: "All", icon: "image" },
        { title: "Technology", icon: "computer" },
        { title: "Nature", icon: "eco" },
        { title: "Sports", icon: "emoji_events" },
        { title: "Movies", icon: "theaters" },
        { title: "Fashion", icon: "shopping_basket" },
        { title: "People", icon: "supervised_user_circle" },
        { title: "Music", icon: "speaker" },
      ],
    };
  },
};
</script>
<style>
.v-tabs-bar.accent .v-tab,
.v-tabs-bar.accent .v-tabs-slider,
.v-tabs-bar.error .v-tab,
.v-tabs-bar.error .v-tabs-slider,
.v-tabs-bar.info .v-tab,
.v-tabs-bar.info .v-tabs-slider,
.v-tabs-bar.primary .v-tab,
.v-tabs-bar.primary .v-tabs-slider,
.v-tabs-bar.secondary .v-tab,
.v-tabs-bar.secondary .v-tabs-slider,
.v-tabs-bar.success .v-tab,
.v-tabs-bar.success .v-tabs-slider,
.v-tabs-bar.warning .v-tab,
.v-tabs-bar.warning .v-tabs-slider,
.v-tab--active .v-icon {
  color: #254b62;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: 11px 4px 10px rgba(184, 181, 255, 0.25);
}
</style>
