<template>
  <div
    class="
      modal
      fixed
      top-0
      left-0
      w-screen
      h-screen
      bg-gray-900
      flex
      items-center
      justify-center
    "
    v-if="isShowModalWindow"
  >
    <button
      class="
        close-button
        absolute
        top-11
        right-11
        text-white
        uppercase
        tracking-wider
        border-white border
        rounded-lg
        p-2
      "
      type="button"
      @click="hideModalWindow"
    >
      {{ $t("modal_window_close_button") }}
    </button>
    <img
      class="w-4/5 h-4/6 object-cover xl:object-contain"
      :src="`/images/gallery/${imgInModal}`"
      alt=""
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapMutations } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters(["isShowModalWindow", "imgInModal"]),
  },
  methods: {
    ...mapMutations(["hideModalWindow"]),
  },
});
</script>

<style>
.model {
  z-index: 200;
}
</style>
