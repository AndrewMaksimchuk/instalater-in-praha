<!-- Please remove this file from your project -->
<template>
  <footer class="footer bg-gray-900 p-4" id="footer">
    <div class="container mx-auto h-full text-white flex flex-col gap-8">
      <div>
        <ul class="flex flex-col lg:flex-row gap-4">
          <MenuItem
            v-for="(item, index) in menu"
            :key="index"
            :index="index"
            :link="item"
          />
        </ul>
      </div>
      <div class="flex flex-wrap justify-between gap-8 pt-16">
        <section class="social flex flex-wrap gap-4">
          <a
            class="social__link flex items-center hover:underline"
            :href="linkInstagram"
            target="_blank"
          >
            <img
              class="social__icon w-11 h-auto"
              src="~/assets/images/icons/instagram.png"
              alt="Go to instagram page"
            />
            <span class="pl-1.5 text-3xl">Instagram</span>
          </a>
          <a
            class="social__link flex items-center hover:underline"
            :href="linkFacebook"
            target="_blank"
          >
            <img
              class="social__icon w-11 h-auto"
              src="~/assets/images/icons/facebook.svg"
              alt="Go to facebook page"
            />
            <span class="pl-1.5 text-3xl">Facebook</span>
          </a>
        </section>
        <nuxt-link class="flex gap-4 hover:underline" to="/">
          <span class="text-3xl">
            {{ name }}
          </span>
          <img
            class="w-11 h-auto object-contain"
            src="~/assets/images/icons/logo.white.png"
            alt="Company logo"
          />
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import data from "../data.json";
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      name: data.company_name,
      menu: data.menu_links,
      linkFacebook: data.contact_facebook,
      linkInstagram: data.contact_instagram,
    };
  },
});
</script>

<style scoped>
.footer {
  min-height: 44px;
}
</style>
