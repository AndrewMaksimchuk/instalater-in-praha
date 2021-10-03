<template>
  <section class="px-4 py-14">
    <div class="mx-auto sm:max-w-sm">
      <h2 class="text-center text-2xl pb-3" id="section-jobss">
        {{ headerText }}!
      </h2>
      <form class="p-4 flex flex-col gap-4 border rounded-md bg-white">
        <label class="" for="name">{{ name }}:</label>
        <input
          class="border-b-2 p-2"
          type="text"
          id="name"
          :placeholder="namePlaceholder"
        />

        <label class="" for="phone-number">{{ phoneNumber }}:</label>
        <input
          class="border-b-2 p-2"
          type="text"
          id="phone-number"
          :placeholder="phoneNumberPlaceholder"
        />

        <button
          class="bg-blue-500 text-white uppercase p-2 mt-10 tracking-wide border rounded-md hover:underline"
          type="submit"
        >
          {{ button }}
        </button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      headerText: "Мы вам перезвоним",
      name: "Ваше имья",
      phoneNumber: "Ваш номер телефона",
      button: "Отправить",
      namePlaceholder: "Andrew Maksimchuk",
      phoneNumberPlaceholder: "+380934705418"
    };
  }
});
</script>
