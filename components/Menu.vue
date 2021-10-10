<template>
  <div class="hidden lg:flex h-full items-center">
    <ul class="h-full flex gap-4">
      <MenuItem
        v-for="{ text, link } in menu"
        :key="link"
        :text="text"
        :link="link"
      />
    </ul>
    <img
      class="w-11 h-11 h-auto ml-8"
      src="~/assets/images/icons/logo.white.png"
      alt="company logo"
      aria-hidden="true"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      menu: [
        {
          text: "На головну",
          link: "/"
        },
        {
          text: "Список послуг",
          link: "#job-list"
        },
        {
          text: "Галерея робіт",
          link: "gallery"
        },
        {
          text: "Зворотній звязок",
          link: "#callback"
        },
        {
          text: "Контакти",
          link: "#footer"
        }
      ]
    };
  }
});
</script>
