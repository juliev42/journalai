<script lang="ts">
import {defineComponent} from 'vue'
import TheSidebar from "@/components/TheSidebar.vue";
import JournalEntry from "@/components/JournalEntry.vue";
import JournalQuestion from "@/components/JournalQuestion.vue";
import JournalTodoList from "@/components/JournalTodoList.vue";
import JournalHabitList from "@/components/JournalHabitList.vue";

export default defineComponent({
  name: "TheJournal",
  components: {JournalHabitList, JournalTodoList, JournalQuestion, JournalEntry, TheSidebar}
})
</script>

<template lang="pug">
main.flex-1.items-stretch.min-h-0.flex
  TheSidebar
  .flex.flex-col.bg-gray-300.flex-1.p-4.min-h-0
    // Main Journal
    .flex-1.min-h-0.flex.bg-violet-200.rounded
      // Left Page
      .flex-1.flex.flex-col.min-w-0.p-4.border-r-2.border-gray-400
        | Free Form Log
        JournalEntry
      // Right Page
      .flex-1.flex.flex-col.min-w-0.p-4.overflow-scroll
        JournalQuestion(v-for="x in 10" :key="x")
    // Todos
    .grid.grid-cols-3
      div
        | Daily
        JournalTodoList
        button.bg-blue-200
          | Import from yesterday (1-time)
      div
        | Weekly
        JournalTodoList
      div
        | Monthly
        JournalTodoList
    JournalHabitList
</template>

<style scoped>

</style>