<template>
  <header class="sticky sm:static top-0 bg-blue-500">
    <div
      class="container mx-auto h-11 text-white flex flex-nowrap justify-between items-center px-4"
    >
      <a
        class="phone text-lg h-full flex items-center hover:underline"
        :href="`tel:${phoneNumber}`"
      >
        <img
          class="call-icon inline-block mr-1.5"
          src="~/assets/images/icons/call.svg"
          alt=""
        />
        {{ formatedPhoneNumber }}
      </a>
      <nav class="nav"></nav>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      phoneNumber: "+380934705418"
    };
  },
  computed: {
    formatedPhoneNumber(): string {
      // +38(093)-470-54-18
      return this.phoneNumber;
    }
  }
});
</script>

<style scoped>
.phone:hover .call-icon {
  transform: rotate(30deg);
}
.call-icon {
  --size: 24px;
  width: var(--size);
  height: var(--size);
}
.nav {
  --size: 44px;
  width: var(--size);
  height: var(--size);
}
</style>
