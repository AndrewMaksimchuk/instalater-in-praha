<template>
  <div
    class="menu-toggle p-4 absolute left-0 top-14 w-full bg-gray-900 flex flex-col justify-between text-gray-50"
    :class="{ hidden: !isShow }"
  >
    <ul class="h-full flex flex-col gap-4 pt-8">
      <MenuItem
        tabindex="0"
        v-for="(item, index) in menu"
        :key="index"
        :index="index"
        :link="item"
        @changeViewMenuToggle="press"
      />
    </ul>
    <section class="flex flex-col gap-4 pb-28">
      <LangSelected />
      <a
        class="social__link flex items-center"
        :href="linkInstagram"
        tabindex="0"
      >
        <img
          class="w-11 h-auto"
          src="~/assets/images/icons/instagram.png"
          alt="Go to instagram page"
        />
        <span class="pl-1.5 text-3xl">Instagram</span>
      </a>
      <a
        class="social__link flex items-center"
        :href="linkFacebook"
        tabindex="0"
      >
        <img
          class="w-11 h-auto"
          src="~/assets/images/icons/facebook.svg"
          alt="Go to facebook page"
        />
        <span class="pl-1.5 text-3xl">Facebook</span>
      </a>
    </section>
  </div>
</template>

<script lang="ts">
import data from "../data.json";
import Vue from "vue";
export default Vue.extend({
  props: {
    isShow: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      menu: data.menu_links,
      linkFacebook: data.contact_facebook,
      linkInstagram: data.contact_instagram
    };
  },
  methods: {
    press(state: boolean) {
      this.$emit("changeViewMenuToggle", state);
    }
  }
});
</script>

<style scoped>
.menu-toggle {
  height: 100vh;
}
</style>
