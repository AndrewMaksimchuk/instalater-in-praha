<template>
  <section class="relative slider bg-gray-200 overflow-hidden">
    <Slide
      v-for="(item, index) in content"
      :key="index"
      :index="index"
      :imgSrc="item"
    />
    <h2 class="absolute bottom-48 w-full text-center font-bold">
      <span
        class="bg-blue-500 text-white rounded-md px-4 py-2 uppercase tracking-wider text-xl"
      >
        {{ $t("slider_header") }}
      </span>
    </h2>
  </section>
</template>

<script lang="ts">
import data from "../data.json";
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      content: data.slider_photos
    };
  }
});
</script>

<style scoped>
.slider {
  height: calc(100vh - 56px);
  z-index: -1;
}
</style>
