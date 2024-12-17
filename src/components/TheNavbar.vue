<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TheNavbar"
})
</script>

<template lang="pug">
nav.bg-white.w-full.z-20.border-b.border-gray-200(class="dark:bg-gray-900 dark:border-gray-600")
  .max-w-screen-xl.flex.flex-wrap.items-center.justify-between.mx-auto.p-4
    a.flex.items-center.space-x-3(href="https://flowbite.com/" class="rtl:space-x-reverse")
      | AI Journal
    .flex.space-x-3(class="md:order-2 md:space-x-0 rtl:space-x-reverse")
      button.text-white.bg-blue-700.font-medium.rounded-lg.text-sm.px-4.py-2.text-center(type="button" class="hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800") Get started
      button.inline-flex.items-center.p-2.w-10.h-10.justify-center.text-sm.text-gray-500.rounded-lg(data-collapse-toggle="navbar-sticky" type="button" class="md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false")
        span.sr-only Open main menu
        svg.w-5.h-5(aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 17 14")
          path(stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15")
    #navbar-sticky.items-center.justify-between.hidden.w-full(class="md:flex md:w-auto md:order-1")
      ul.flex.flex-col.p-4.mt-4.font-medium.border.border-gray-100.rounded-lg.bg-gray-50(class="md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700")
        li
          a.block.py-2.px-3.text-white.bg-blue-700.rounded( class="md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page") Home
        li
          a.block.py-2.px-3.text-gray-900.rounded( class="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700") About
        li
          a.block.py-2.px-3.text-gray-900.rounded( class="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700") Services
        li
          a.block.py-2.px-3.text-gray-900.rounded( class="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700") Contact
</template>

<style scoped>

</style>