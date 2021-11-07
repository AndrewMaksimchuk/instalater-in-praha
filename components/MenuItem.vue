<template>
  <li class="flex items-center text-2xl lg:text-base">
    <nuxt-link :to="localePath(link)" class="hover:underline" @click="press">{{
      $t(`menu[${index}]`)
    }}</nuxt-link>
  </li>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    index: {
      type: Number,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  methods: {
    press() {
      this.$emit("changeViewMenuToggle", false);
    },
  },
});
</script>
