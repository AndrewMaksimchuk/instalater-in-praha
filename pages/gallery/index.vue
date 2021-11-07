<template>
  <main>
    <h2
      class="text-center text-2xl py-6 font-bold text-gray-700"
      id="section-jobss"
    >
      {{ $t("gallery_header_text") }}
    </h2>
    <section class="h-auto flex flex-wrap justify-evenly gap-4">
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
      images: [],
    };
  },
  async created() {
    // TODO: make request to get all list of all images
    // const res = await this.$http.get("https://unpkg.com/nuxt/package.json");
    // this.images = await res.json();
  },
});
</script>
