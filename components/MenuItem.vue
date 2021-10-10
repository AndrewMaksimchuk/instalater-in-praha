<template>
  <li class="flex items-center text-2xl lg:text-base">
    <a class="hover:underline" :href="link" @click="press">
      {{ text }}
    </a>
  </li>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  methods: {
    press() {
      console.log("OLOLOLOL");
      this.$emit("changeViewMenuToggle", false);
    }
  }
});
</script>
