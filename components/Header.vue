<template>
  <header class="header sticky sm:static top-0 bg-blue-500" v-if="isShowHeader">
    <div
      class="container mx-auto h-14 text-white flex flex-nowrap justify-between items-center px-4"
    >
      <a
        class="phone text-lg h-full flex items-center hover:underline"
        role="button"
        :href="`tel:${phoneNumber}`"
      >
        <img
          class="call-icon inline-block mr-1.5"
          src="~/assets/images/icons/call.svg"
          alt=""
        />
        {{ formatedPhoneNumber }}
      </a>
      <nav class="nav h-full flex align-center gap-1">
        <Menu />
        <MenuToggle
          :isShow="isShowMenuToggle"
          @changeViewMenuToggle="changeViewMenuToggle"
        />
        <ButtonMenu
          :buttonState="buttonState"
          @changeViewMenuToggle="changeViewMenuToggle"
        />
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  data() {
    return {
      phoneNumber: "+380934705418",
      isShowMenuToggle: false,
      buttonState: false
    };
  },
  computed: {
    ...mapGetters(["isShowHeader"]),
    formatedPhoneNumber(): string {
      // +38(093)-470-54-18
      return this.phoneNumber;
    }
  },
  methods: {
    changeViewMenuToggle(state: boolean) {
      this.isShowMenuToggle = state;
      this.buttonState = state;
    }
  }
});
</script>

<style scoped>
.header {
  z-index: 100;
}
.phone:hover .call-icon {
  transform: rotate(30deg);
}
.call-icon {
  --size: 24px;
  width: var(--size);
  height: var(--size);
}
</style>
