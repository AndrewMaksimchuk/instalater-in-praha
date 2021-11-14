<template>
  <section class="callback-form px-4 py-14" id="callback">
    <div class="mx-auto sm:max-w-lg">
      <h2
        v-if="isHeaderShow"
        class="text-center text-2xl pb-3 font-bold text-gray-700"
        tabindex="0"
      >
        {{ $t("callback_from_header_text") }}!
      </h2>
      <form class="p-4 px-6 flex flex-col gap-2 border rounded-md bg-white">
        <label class="input-label mt-10 text-gray-700" for="name"
          >{{ $t("callback_from_name") }}:</label
        >
        <input
          class="w-full p-2 rounded-md tracking-wide border-b-2 rounded-b-none"
          type="text"
          inputmode="text"
          id="name"
          :placeholder="$t('callback_from_name_placeholder')"
          required
        />

        <label class="input-label mt-10 text-gray-700" for="phone-number"
          >{{ $t("callback_from_phone_number") }}:</label
        >
        <input
          class="w-full p-2 rounded-md tracking-wide border-b-2 rounded-b-none"
          type="tel"
          inputmode="tel"
          pattern="\d{10,}"
          id="phone-number"
          :placeholder="$t('callback_from_phone_number_placeholder')"
          required
        />

        <button
          class="
            bg-blue-500
            text-white
            uppercase
            p-2
            mt-10
            tracking-wide
            border
            rounded-md
            hover:underline
          "
          type="submit"
        >
          {{ $t("callback_from_button") }}
        </button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    isHeaderShow: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      
    };
  },
  methods: {
    submit() {
      // this.$http.post();
    }
  }
});
</script>

<style scoped>
.input-label::before {
  content: "*";
  color: #ff0000;
  padding-right: 4px;
  font-size: 0.6rem;
}
</style>
