<template>
  <div
    class="modal fixed top-0 left-0 w-screen h-screen bg-gray-900 flex items-center justify-center"
    v-if="isShowModalWindow"
  >
    <button
      class="close-button absolute top-11 right-11 text-white uppercase tracking-wider"
      type="button"
      @click="hideModalWindow"
    >
      {{ buttonText }}
    </button>
    <img
      class="rounded-md w-4/5 h-4/6 object-cover"
      :src="`images/${imgInModal}`"
      alt=""
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapMutations } from "vuex";

export default Vue.extend({
  data() {
    return {
      buttonText: "Закрить"
    };
  },
  computed: {
    ...mapGetters(["isShowModalWindow", "imgInModal"])
  },
  methods: {
    ...mapMutations(["hideModalWindow"])
  }
});
</script>

<style>
.model {
  z-index: 200;
}
</style>
