<template>
  <aside>
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
  </aside>
</template>

<style scoped></style>
