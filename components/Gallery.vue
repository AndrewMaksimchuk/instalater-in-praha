<template>
  <section class="gallery px-4 pt-14">
    <h2
      class="text-center text-2xl pb-3 font-bold text-gray-700"
      id="section-jobss"
    >
      {{ headerText }}
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
      {{ toFullGallery }}
    </p>
    <p class="text-center text-gray-700">
      <a class="underline" href="/gallery">{{ linkToGallery }}</a>
    </p>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      indexTriger: 4,
      headerText: "Галерея выполненных работ",
      toFullGallery: "Хотите увидить больше?",
      linkToGallery: "Посмотрите все примеры здесь",
      jobPhotos: [
        "photo_2021-10-10_00-11-04.jpg",
        "photo_2021-09-26_15-31-26.jpg",
        "photo_2021-10-10_00-11-07.jpg",
        "photo_2021-09-26_15-31-27.jpg",
        "photo_2021-09-26_15-31-28.jpg",
        "photo_2021-09-26_15-31-29.jpg",
        "photo_2021-09-26_15-31-32.jpg",
        "photo_2021-09-26_15-31-31.jpg",
        "photo_2021-09-26_15-31-33.jpg"
      ]
    };
  }
});
</script>
