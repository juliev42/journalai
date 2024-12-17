<script lang="ts">
import {defineComponent} from 'vue'
import TheSidebar from "@/components/TheSidebar.vue";

export default defineComponent({
  name: "TheHome",
  components: {TheSidebar}
})
</script>

<template lang="pug">
.flex-1.flex
  TheSidebar
  main.bg-gray-300.flex-1
    | Body
</template>

<style scoped>

</style>