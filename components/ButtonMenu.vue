<template>
  <button
    class="button-menu lg:hidden w-11 h-full cursor-pointer"
    :class="{ change: buttonState }"
    @click="press"
  >
    <div class="button-menu__line w-full bg-gray-100"></div>
    <div class="button-menu__line w-full bg-gray-100"></div>
    <div class="button-menu__line w-full bg-gray-100"></div>
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    buttonState: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    press() {
      this.$emit("changeViewMenuToggle", !this.buttonState);
    }
  }
});
</script>

<style scoped>
.button-menu__line {
  height: 5px;
  margin: 6px 0;
  transition: 0.4s;
}
.change .button-menu__line:nth-child(1) {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .button-menu__line:nth-child(2) {
  opacity: 0;
}

.change .button-menu__line:nth-child(3) {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
</style>
