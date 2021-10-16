<template>
  <div class="relative">
    <CallbackForm
      class="absolute r-15 t-5 hidden xl:block"
      :isHeaderShow="false"
    />
    <Slider />
    <Jobs />
    <Gallery />
    <CallbackForm />
  </div>
</template>

<style scoped>
.r-15 {
  right: 10%;
}
.t-5 {
  top: 50px;
}
</style>
