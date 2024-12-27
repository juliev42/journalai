<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import {initDropdowns} from "flowbite";

export type DropdownMenu = {
  title: string,
  href?: string,
  data?: string,
  attributes?: { [key: string]: string },
  fa_icon?: string,
  image?: string,
};

export default defineComponent({
  name: 'AppDropdown',
  props: {
    dropdownId: {
      type: String,
      required: false,
      default: 'dropdown'
    },
    dropdownMenus: {
      type: Array as PropType<DropdownMenu[]>,
      required: true,
    }
  },
  mounted() {
    initDropdowns()
  }
})
</script>

<template lang="pug">
.z-10.hidden.bg-white.divide-y.divide-gray-100.rounded-lg.shadow.flex(
:id="dropdownId"
class="dark:bg-gray-700")
  slot(
v-if="$slots.menu"
name="menu")
  ul.flex.flex-col.py-2.text-lg.text-gray-700(
v-else
class="dark:text-gray-200"
aria-labelledby="dropdownDefaultButton")
    li.flex(
v-for="menu in dropdownMenus"
:key="menu.title")
      a.flex-auto.block.px-4.py-2.whitespace-nowrap.cursor-pointer.flex.items-center(
        :href="menu.href"
        class="hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        :="menu.attributes"
      )
        FontAwesomeIcon(
v-if="menu.fa_icon"
:icon="menu.fa_icon" )
        .rounded-full.w-16.h-16.bg-cover.bg-center(
v-if="menu.image"
:style="{ backgroundImage: 'url(' + menu.image + ')' }")
        .pl-1 {{ menu.title }}
</template>

<style scoped lang="scss">

</style>