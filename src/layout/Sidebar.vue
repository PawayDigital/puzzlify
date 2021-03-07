<template>
  <nav :class="[mini ? 'width-nav' : 'width-nav-mini']">
    <v-card style="height: 90vh;" class="primary">
      <v-navigation-drawer
        class="primary"
        v-model="drawer"
        :mini-variant.sync="mini"
        style="width: 78%;"
        permanent
      >
        <v-list-item class="px-2">
          <v-list-item-title class="text-center" :class="[mini ? 'd-none' : '']"
            >Puzzlify</v-list-item-title
          >

          <v-btn icon @click.stop="mini = !mini">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn>
        </v-list-item>

        <v-list dense>
          <v-list-item
            class="my-5"
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon x-large>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mini: true,
      drawer: true,
      items: [
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
/* web */
.width-nav {
  width: 7%;
}
.width-nav-mini {
  width: 18%;
}
</style>
