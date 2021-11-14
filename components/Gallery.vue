<template>
  <section class="gallery px-4 pt-14">
    <h2
      class="text-center text-2xl pb-3 font-bold text-gray-700"
      id="section-jobss"
      tabindex="0"
    >
      {{ $t("gallery_header_text") }}
    </h2>
    <div class="mt-6 h-auto flex flex-wrap justify-evenly gap-4">
      <GalleryCard
        v-for="(item, index) in jobPhotos"
        :key="item"
        :index="index"
        :indexTriger="indexTriger"
        :imgSrc="item"
      />
    </div>
    <p class="text-center pt-4 text-gray-700">
      {{ $t("gallery_description") }}
    </p>
    <p class="text-center text-gray-700">
      <nuxt-link class="underline" to="/gallery">{{ $t("gallery_link_to_full") }}</nuxt-link>
    </p>
  </section>
</template>

<script lang="ts">
import data from "../data.json";
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      indexTriger: 4,
      jobPhotos: data.gallery_preview_photos,
    };
  },
});
</script>
