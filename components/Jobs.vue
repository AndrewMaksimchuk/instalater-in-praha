<template>
  <section
    class="list-of-jobs px-4 pt-14 overflow-hidden md:overflow-auto"
    id="job-list"
  >
    <h2 class="text-center text-2xl pb-3 font-bold text-gray-700">
      {{ $t("jobs_header_text") }}
    </h2>
    <ul class="job-list pl-4 pb-4 text-gray-700">
      <li class="jobs-item flex" v-for="(item, index) in jobsList" :key="item">
        <span class="job-text pl-1.5">
          {{ $t(`jobs_list[${index}]`) }}
        </span>
      </li>
    </ul>
    <p class="text-center pb-4 md:hidden">
      {{ $t("jobs_comment") }}
    </p>
    <JobsIcons />
  </section>
</template>

<script lang="ts">
import jobs_list from "../locales/ru";
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      jobsList: jobs_list.jobs_list,
    };
  },
});
</script>

<style scoped>
.job-list {
  height: 60vh;
  column-count: 1;
  overflow-y: hidden;
}
@media screen and (min-width: 768px) {
  .job-list {
    column-count: 2;
    height: auto;
    overflow-y: visible;
  }
}
@media screen and (min-width: 1024px) {
  .job-list {
    column-count: 3;
  }
}
.jobs-item::before {
  content: "\2714";
  color: #10b981;
}
.job-text::first-letter {
  text-transform: uppercase;
}
</style>
