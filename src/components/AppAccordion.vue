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
  h2.flex.justify-between.items-center.border-b.border-gray-200.gap-3.w-full.py-1
    slot(name="header")
    button.py-4.px-2.border-l.border-gray-200(type="button" class="rtl:text-right" :data-accordion-target="`#${id}`" aria-expanded="false" :aria-controls="id")
      svg.w-3.h-3.rotate-180.shrink-0(data-accordion-icon="" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 10 6")
        path(stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5")
  .hidden.pl-2.pt-2(:id="id" :aria-labelledby="id")
    .pl-2.pb-2.border-l-2.border-gray-200
      slot(name="body")
</template>

<style scoped>

</style>