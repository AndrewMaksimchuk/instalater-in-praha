<template>
  <article class="gallery-card w-full sm:w-72 rounded-md">
    <img
      class="rounded-md w-full h-full object-cover"
      :src="`images/${imgSrc}`"
      loading="lazy"
      alt="Images of work"
    />
  </article>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    imgSrc: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>
@media screen and (max-width: 375px) {
  .gallery-card:nth-child(n + 5) {
    display: none;
  }
}
@media screen and (min-width: 375px) {
  .gallery-card {
    display: block;
  }
}
</style>
