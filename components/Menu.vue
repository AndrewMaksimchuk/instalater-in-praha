<template>
  <div class="hidden lg:flex h-full items-center gap-4">
    <ul class="h-full flex gap-4">
      <MenuItem
        v-for="(item, index) in menu"
        :key="index"
        :index="index"
        :link="item"
      />
    </ul>
    <LangSelected />
    <nuxt-link to="/">
      <img
        class="w-11 h-auto ml-8"
        src="~/assets/images/icons/logo.white.png"
        alt="Company logo"
        aria-hidden="true"
    /></nuxt-link>
  </div>
</template>

<script lang="ts">
import data from "../data.json";

import Vue from "vue";
import LangSelected from "./LangSelected.vue";
export default Vue.extend({
  components: { LangSelected },
  data() {
    return {
      menu: data.menu_links,
    };
  },
});
</script>
