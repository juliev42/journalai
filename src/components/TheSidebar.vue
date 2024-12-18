<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TheSidebar"
})
</script>

<template lang="pug">
button.inline-flex.items-center.p-2.mt-2.ms-3.text-sm.text-gray-500.rounded-lg(data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600")
  span.sr-only Open sidebar
  svg.w-6.h-6(aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg")
    path(clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z")
aside.z-40.w-64.transition-transform.-translate-x-full.items-stretch(class="sm:translate-x-0" aria-label="Sidebar")
  .h-full.px-3.py-4.overflow-y-auto.bg-gray-50(class="dark:bg-gray-800")
    ul
      li
        | Some Month
        ul.space-y-2.font-medium
          li(v-for="title in ['Week of 10/x - 10/y', 'Week of 10/x-7 - 10/y-7']" :key="title")
            button.flex.items-center.w-full.p-2.text-base.text-gray-900.transition.duration-75.rounded-lg.group(type="button" class="hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example")
              span.flex-1.ms-3.text-left.whitespace-nowrap(class="rtl:text-right")
                | {{ title }}
              svg.w-3.h-3(aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 10 6")
                path(stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4")
            ul#dropdown-example.hidden.py-2.space-y-2
              li
                a.flex.items-center.w-full.p-2.text-gray-900.transition.duration-75.rounded-lg.pl-11.group(href="#" class="hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700") Products
              li
                a.flex.items-center.w-full.p-2.text-gray-900.transition.duration-75.rounded-lg.pl-11.group(href="#" class="hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700") Billing
              li
                a.flex.items-center.w-full.p-2.text-gray-900.transition.duration-75.rounded-lg.pl-11.group(href="#" class="hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700") Invoice
          li
            button.bg-blue-200
              | Start next week. Weekly todos become frozen in prev weeks

</template>

<style scoped>

</style>