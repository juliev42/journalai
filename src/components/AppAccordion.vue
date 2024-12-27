<script lang="ts" setup>
import {onMounted} from 'vue'
import {initAccordions} from "flowbite";


defineProps({
  id: {
    type: String,
    required: true
  },
})

onMounted(() => initAccordions())

</script>

<template>
  <div data-accordion="collapse">
    <h2 class="flex justify-between items-center border-b border-gray-200 gap-3 w-full py-1">
      <slot name="header" />
      <button
        class="py-4 px-2 border-l border-gray-200 rtl:text-right"
        type="button"
        :data-accordion-target="`#${id}`"
        aria-expanded="false"
        :aria-controls="id"
      >
        <svg
          class="w-3 h-3 rotate-180 shrink-0"
          data-accordion-icon=""
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewbox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div
      :id="id"
      class="hidden pl-2 pt-2"
      :aria-labelledby="id"
    >
      <div class="pl-2 pb-2 border-l-2 border-gray-200">
        <slot name="body" />
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>