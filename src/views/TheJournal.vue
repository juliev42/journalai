<script lang="ts">
import {defineComponent} from 'vue'
import TheSidebar from "@/components/TheSidebar.vue";
import JournalDaily from "@/components/JournalDaily.vue";

export default defineComponent({
  name: "TheJournal",
  components: {JournalDaily, TheSidebar}
})
</script>

<template lang="pug">
main.flex-1.items-stretch.min-h-0.flex
  TheSidebar
  JournalDaily
</template>

<style scoped>

</style>