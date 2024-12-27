<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TheNavbar"
})
</script>

<template lang="pug">
nav.bg-white.w-full.z-20.border-b.border-gray-200.p-4.flex
  .flex-1.min-w-0
    a.flex.items-center.space-x-3
      | AI Journal
  ul.flex-1.min-w-0.flex.flex-col.p-4.mt-4.font-medium.border.border-gray-100.rounded-lg.bg-gray-50(class="md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700")
    li(
v-for="name in ['Journal', 'Templates', 'Trends', 'Layout']"
:key="name")
      a.block.py-2.px-3.text-white.bg-blue-700.rounded(
class="md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
aria-current="page")
        | {{ name }}
  .flex-1.min-w-0.flex.justify-end
    | Settings

</template>

<style scoped>

</style>