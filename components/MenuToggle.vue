<template>
  <div
    class="menu-toggle p-4 absolute left-0 top-14 w-full bg-gray-900 flex flex-col justify-between text-gray-50"
    :class="{ hidden: !isShow }"
  >
    <ul class="h-full flex flex-col gap-4 pt-8">
      <MenuItem
        v-for="{ text, link } in menu"
        :key="link"
        :text="text"
        :link="link"
        @changeViewMenuToggle="press"
      />
    </ul>
    <section class="flex flex-col gap-4 pb-14">
      <a class="social__link flex items-center" href="/">
        <img
          class="w-11 h-auto"
          src="~/assets/images/icons/instagram.png"
          alt="Go to instagram page"
        />
        <span class="pl-1.5 text-3xl">Instagram</span>
      </a>
      <a class="social__link flex items-center" href="/">
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
  },
  methods: {
    press(state: boolean) {
      console.log("OLOLOLOL");
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
