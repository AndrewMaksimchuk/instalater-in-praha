<template>
  <figure class="slide w-full h-full absolute top-0 left-0">
    <img
      class="w-full h-full object-cover"
      :src="`images/gallery/${imgSrc}`"
      :alt="$t(`slider[${index}]`)"
    />
    <figcaption class="absolute bottom-36 w-full text-center">
      <strong
        class="
          bg-blue-500
          text-white
          rounded-md
          px-4
          py-2
          uppercase
          tracking-wider
          text-lg
        "
      >
        {{ $t(`slider[${index}]`) }}
      </strong>
    </figcaption>
  </figure>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    index: {
      type: Number,
      default: 0,
    },
    imgSrc: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
@keyframes autoplay-slide {
  0% {
    left: 100%;
  }
  4% {
    left: 0%;
  }
  33.33% {
    left: 0%;
  }
  37.33% {
    left: -100%;
  }
  100% {
    left: -100%;
  }
}
.slide {
  animation: 18s autoplay-slide infinite ease-in-out;
}
.slide:nth-child(1) {
  animation-delay: 0s;
}
.slide:nth-child(2) {
  animation-delay: 6s;
}
.slide:nth-child(3) {
  animation-delay: 12s;
}
</style>
