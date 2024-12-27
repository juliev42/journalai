<script lang="ts" setup>
import AppAccordion from "@/components/AppAccordion.vue";
import {useJournalsStore} from "@/stores/journals.ts";

const id = 'the-sidebar';

defineProps({
  activeJournalId: {
    type: [Number, null],
    required: false,
    default: null
  },
})

const journalsStore = useJournalsStore()
const journals = journalsStore.findAll()

</script>

<template>
  <button
    class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    :data-drawer-target="id"
    :data-drawer-toggle="id"
    :aria-controls="id"
    type="button"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewbox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      />
    </svg>
  </button>
  <aside
    :id="id"
    class="z-40 w-64 transition-transform -translate-x-full items-stretch sm:translate-x-0"
    :aria-label="id"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul>
        <li
          v-for="(month, monthIndex) in ['Jan', 'Feb', 'March']"
          :key="month"
        >
          <AppAccordion :id="`accordion-month-${monthIndex}`">
            <template #header>{{ month }}</template>
            <template #body>
              <ul class="space-y-2 font-medium">
                <li
                  v-for="[weekStart, weekEnd] in [[1, 7], [8, 14]]"
                  :key="weekStart"
                >
                  <AppAccordion :id="`accordion-month-${monthIndex}-week-${weekStart}`">
                    <template #header>{{ `${monthIndex + 1}/${weekStart} - ${monthIndex + 1}/${weekEnd}` }}</template>
                    <template #body>
                      <ul class="py-2 space-y-2">
                        <li
                          v-for="day in (weekEnd - weekStart + 1)"
                          :key="day"
                        >
                          <a
                            class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            href="#"
                          >
                            Day {{ day + weekStart - 1 }}
                          </a>
                        </li>
                      </ul>
                    </template>
                  </AppAccordion>
                </li>
              </ul>
            </template>
          </AppAccordion>
        </li>
      </ul>
    </div>
  </aside>

</template>

<style scoped>

</style>