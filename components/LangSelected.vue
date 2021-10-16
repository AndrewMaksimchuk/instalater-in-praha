<template>
  <ul class="flex gap-4 pl-4 border-l border-white border-solid">
    <li v-for="locale in availableLocales" :key="locale.code">
      <nuxt-link class="hover:underline" :to="switchLocalePath(locale.code)">{{
        locale.name
      }}</nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  computed: {
    availableLocales() {
      // @ts-ignore
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }
  }
});
</script>
