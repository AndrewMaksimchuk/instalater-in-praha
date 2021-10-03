<template>
  <section class="px-4 pt-14">
    <h2 class="text-2xl pb-3" id="section-jobss">{{ headerText }}:</h2>
    <ul class="pl-4">
      <li class="jobs-item flex" v-for="item in jobsList" :key="item">
        <span class="job-text pl-1.5">
          {{ item }}
        </span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      headerText: "Список услуг",
      jobsList: Array<string>(
        "монтаж/ремонт отопления",
        "монтаж/ремонт водопровода",
        "чистка канализации",
        "замена/установка сантехнических деталей",
        "замена/установка бойлера/радиаторов",
        "ванные комнаты под ключ"
      )
    };
  }
});
</script>

<style scoped>
.jobs-item::before {
  content: "\2714";
  color: #10b981;
}
.job-text::first-letter {
  text-transform: uppercase;
}
</style>
