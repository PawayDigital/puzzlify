<template>
  <v-card>
    <v-tabs v-model="tab" background-color="primary" centered icons-and-text>
      <v-tabs-slider></v-tabs-slider>
      <v-tab
        @click="filterTags({ tag: item.name, path: '/' })"
        href="#"
        v-for="item in tabs"
        :key="item.id"
      >
        {{ item.name }}
        <v-icon>{{ item.icon }}</v-icon>
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
import LayoutService from "./services/layout.service.js";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      tab: null,
      tabs: [{ name: "All", icon: "image" }],
    };
  },
  created() {
    this.getTags();
  },
  methods: {
    ...mapActions(["filterTags"]),
    async getTags() {
      if (!localStorage.getItem("tabsHome")) {
        await LayoutService.getTags().then((res) => {
          for (const el of res) {
            this.tabs.push(el);
          }
        });
        localStorage.setItem("tabsHome", JSON.stringify(this.tabs));
      } else {
        this.tabs = JSON.parse(localStorage.getItem("tabsHome"));
      }
    },
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
