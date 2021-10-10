<!-- Please remove this file from your project -->
<template>
  <footer class="footer bg-black p-4" id="footer">
    <div class="container mx-auto h-full text-white flex flex-col gap-8">
      <div>
        <ul class="flex flex-col lg:flex-row gap-4">
          <MenuItem
            v-for="{ text, link } in menu"
            :key="link"
            :text="text"
            :link="link"
          />
        </ul>
      </div>
      <div class="flex flex-wrap justify-between gap-8">
        <section class="social flex flex-wrap gap-4">
          <a class="social__link flex items-center hover:underline " href="/">
            <img
              class="social__icon w-11 h-auto"
              src="~/assets/images/icons/instagram.png"
              alt="Go to instagram page"
            />
            <span class="pl-1.5 text-3xl">Instagram</span>
          </a>
          <a class="social__link flex items-center hover:underline " href="/">
            <img
              class="social__icon w-11 h-auto"
              src="~/assets/images/icons/facebook.svg"
              alt="Go to facebook page"
            />
            <span class="pl-1.5 text-3xl">Facebook</span>
          </a>
        </section>
        <a class="flex gap-4 hover:underline" href="/">
          <span class="text-3xl">
            Installater in Praha
          </span>
          <img
            class="w-11 h-auto"
            src="~/assets/images/icons/logo.white.png"
            alt=""
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      menu: [
        {
          text: "Головна сторінка",
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

<style scoped>
.footer {
  min-height: 44px;
}
</style>
