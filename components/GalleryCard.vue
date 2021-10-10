<template>
  <article
    class="gallery-card w-5/12 sm:w-72 rounded-md cursor-pointer shadow-md"
    tabindex="0"
  >
    <img
      class="rounded-md w-full h-full object-cover"
      :src="`images/${imgSrc}`"
      loading="lazy"
      alt="Images of work"
      @click="showModalWindow(imgSrc)"
    />
  </article>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  props: {
    imgSrc: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapMutations(["showModalWindow"])
  }
});
</script>

<style scoped>
.gallery-card:hover {
  transform: scale(1.05);
  outline-width: 2px;
  outline-color: #000;
  outline-style: solid;
}
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
