<template>
  <section class="relative slider bg-gray-200">
    <Slide
      :text="'Опалення'"
      :imgSrc="'hero-slider-heizung-raustauschwochen_0.jpeg'"
    />
    <h2 class="absolute bottom-48 w-full text-center">
      <span class="bg-blue-500 text-white rounded-md px-4 py-2 uppercase">
        {{ header }}
      </span>
    </h2>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

interface slider {
  text: string;
  imgSrc: string;
}

export default Vue.extend({
  data() {
    return {
      header: "Сантехнічні роботи",
      text: Array<slider>(
        {
          text: "Вода",
          imgSrc: ""
        },
        {
          text: "Каналізація",
          imgSrc: ""
        },
        {
          text: "Опалення",
          imgSrc: "photo_2021-10-10_00-11-00.jpg"
        }
      )
    };
  }
});
</script>

<style scoped>
.slider {
  height: calc(100vh - 44px);
  z-index: -1;
}
</style>
