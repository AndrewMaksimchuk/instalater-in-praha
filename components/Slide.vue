<template>
  <figure class="slide w-full h-full relative">
    <img
      class="w-full h-full object-cover"
      :src="`slider/${imgSrc}`"
      :alt="text"
    />
    <figcaption class="absolute bottom-36 w-full text-center">
      <span
        class="bg-blue-500 text-white rounded-md px-4 py-2 uppercase tracking-wider text-lg"
      >
        {{ text }}
      </span>
    </figcaption>
  </figure>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    text: {
      type: String,
      default: null
    },
    imgSrc: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped></style>
