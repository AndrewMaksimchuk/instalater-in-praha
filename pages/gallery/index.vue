<template>
  <main>
    <h2
      class="text-center text-2xl py-6 font-bold text-gray-700"
      id="section-jobss"
    >
      {{ $t("gallery_header_text") }}
    </h2>
    <section class="h-auto flex flex-wrap justify-evenly gap-4">
      <GalleryCard
        v-for="(image, index) in images"
        :key="index"
        :imgSrc="image.name"
      />
    </section>
    <CallbackForm />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import {site_url} from '../../data.json'

export default Vue.extend({
  data() {
    return {
      images: [],
    };
  },
  async created() {
    const url = `http://${site_url}/api/images/gallery/`;
    const res = await this.$http.get(url);
    this.images = await res.json();
  },
});
</script>
