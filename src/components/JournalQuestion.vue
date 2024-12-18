<script lang="ts">
import {defineComponent} from 'vue'
import JournalEntry from "@/components/JournalEntry.vue";

export default defineComponent({
  name: "JournalQuestion",
  components: {JournalEntry}
})
</script>

<template lang="pug">
div.border-gray-100.border-2.p-2
  | Here's a question?
  JournalEntry
</template>

<style scoped>

</style>