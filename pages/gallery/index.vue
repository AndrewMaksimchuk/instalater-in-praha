<template>
  <main>
    <h2 class="text-center text-2xl py-6" id="section-jobss">
      {{ headerText }}
    </h2>
    <section class="h-auto flex flex-wrap justify-evenly gap-4">
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
    </section>
    <CallbackForm />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      headerText: "Галерея выполненных работ"
    };
  }
});
</script>
