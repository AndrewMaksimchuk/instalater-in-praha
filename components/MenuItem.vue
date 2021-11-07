<template>
  <li class="flex items-center text-2xl lg:text-base">
    <a class="hover:underline" :href="link" @click="press">
      {{ $t(`menu[${index}]`) }}
    </a>
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
