<script lang="ts">
import { defineComponent } from 'vue'
import { initModals } from 'flowbite'

export default defineComponent({
  name: 'AppModal',
  props: {
    id: {
      type: String,
      required: false,
      default: 'default-modal'
    }
  },
  mounted() {
    initModals();
  }
})
</script>

<template lang="pug">
div
  div(
:data-modal-target="id"
:data-modal-toggle="id"
class="hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
type="button")
    slot(name="button")
  .hidden.overflow-y-auto.overflow-x-hidden.fixed.top-0.right-0.left-0.z-50.justify-center.items-center.w-full.max-h-full(
:id="id"
tabindex="-1"
aria-hidden="true"
class="md:inset-0 h-[calc(100%-1rem)]")
    .flex.relative.p-4.w-full.max-w-2xl.max-h-full
      // Modal content
      .flex.flex-col.relative.bg-white.rounded-lg.shadow.w-full(class="dark:bg-gray-700")
        // Modal header
        .flex.items-center.justify-between.p-4.border-b.rounded-t(class="md:p-5 dark:border-gray-600")
          h3.text-xl.font-semibold.text-gray-900(
v-if="$slots.header"
class="dark:text-white" )
            slot(name="header")
          button.text-gray-400.bg-transparent.rounded-lg.text-sm.w-8.h-8.ms-auto.inline-flex.justify-center.items-center(
type="button"
class="hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
:data-modal-hide="id")
            svg.w-4.h-4(
aria-hidden="true"
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewbox="0 0 14 14")
              path(
stroke="currentColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="2"
d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6")
            span.sr-only Close modal
        // Modal body
        .p-4.space-y-4.overflow-y-scroll(
v-if="$slots.body"
class="md:p-5")
          slot(name="body")
        // Modal footer
        .flex.items-center.p-4.border-t.border-gray-200.rounded-b(
v-if="$slots.footer"
class="md:p-5 dark:border-gray-600")
          slot(name="footer")
</template>

<style scoped>

</style>