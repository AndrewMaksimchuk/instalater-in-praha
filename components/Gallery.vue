<template>
  <section class="px-4 pt-14">
    <h2 class="text-center text-2xl pb-3" id="section-jobss">
      {{ headerText }}
    </h2>
    <div class="mt-6 h-auto flex flex-wrap justify-evenly gap-4">
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
    </div>
    <p class="text-center pt-4">
      {{ toFullGallery }}
    </p>
    <p class="text-center">
      <a class="underline" href="/">{{ linkToGallery }}</a>
    </p>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      headerText: "Галерея выполненных работ",
      toFullGallery: "Хотите увидить больше?",
      linkToGallery: "Посмотреть все примеры здесь"
    };
  }
});
</script>
