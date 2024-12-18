<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AppAccordion",
  props: {
    id: {
      type: String,
      required: true
    }
  }
})
</script>

<template lang="pug">
div(data-accordion="collapse")
  h2
    button.flex.items-center.justify-between.w-full.p-5.font-medium.text-gray-500.border.border-b-0.border-gray-200.rounded-t-xl.gap-3(type="button" class="rtl:text-right focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" :data-accordion-target="`#${id}`" aria-expanded="false" :aria-controls="id")
      slot(name="header")
      svg.w-3.h-3.rotate-180.shrink-0(data-accordion-icon="" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 10 6")
        path(stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5")
  .hidden(:id="id" :aria-labelledby="id")
    slot(name="body")
</template>

<style scoped>

</style>