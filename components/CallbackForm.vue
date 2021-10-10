<template>
  <section class="callback-form px-4 py-14" id="callback">
    <div class="mx-auto sm:max-w-sm">
      <h2 class="text-center text-2xl pb-3" id="section-jobss">
        {{ headerText }}!
      </h2>
      <form class="p-4 px-6 flex flex-col gap-2 border rounded-md bg-white">
        <label class="mt-10" for="name">{{ name }}:</label>
        <input
          class="border-b-2 p-2"
          type="text"
          id="name"
          :placeholder="namePlaceholder"
          required
        />

        <label class="mt-10" for="phone-number">{{ phoneNumber }}:</label>
        <input
          class="border-b-2 p-2"
          type="text"
          inputmode="numeric"
          pattern="[0-9]*"
          id="phone-number"
          :placeholder="phoneNumberPlaceholder"
          required
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
      name: "Укажите ваше имья",
      phoneNumber: "Укажите ваш номер телефона",
      button: "Отправить",
      namePlaceholder: "Andrew Maksimchuk",
      phoneNumberPlaceholder: "+380934705418"
    };
  }
});
</script>
