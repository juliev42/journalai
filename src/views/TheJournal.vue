<script lang="ts" setup>
import TheSidebar from "@/components/TheSidebar.vue";
import JournalEntry from "@/components/JournalEntry.vue";
import JournalTodoList from "@/components/JournalTodoList.vue";
import JournalHabitList from "@/components/JournalHabitList.vue";
import {useJournalsStore} from "@/stores/journals.ts";
import {computed, ref} from "vue";
import JournalPrompts from "@/components/JournalPrompts.vue";
import JournalServices from "@/services/journal.ts";

const props = defineProps({
  journalId: {
    type: [Number, null],
    required: false,
    default: null
  },
})

const journalsStore = useJournalsStore()

const journal = computed(() => {
    if (props.journalId === null) {
      return journalsStore.findLatestByDate()
    } else {
      return journalsStore.findOneById(props.journalId)
    }
})

// Non-reactive local response
const localContent = ref(journal.value?.content)

async function update(newContent: string) {
  if (journal.value) {
    const newJournal = { ...journal.value, content: newContent }
    await JournalServices.update(journal.value.id, newJournal)
  }
}

</script>

<template>
  <main class="flex-1 items-stretch min-h-0 flex">
    <TheSidebar />
    <template v-if="journal === undefined">Create is here. Choose existing on right {{ JSON.stringify(journalId) }}</template>
    <template v-else>
      <div class="flex flex-col bg-gray-300 flex-1 p-4 min-h-0">
        <!-- Main Journal-->
        <div class="flex-1 min-h-0 flex bg-violet-200 rounded">
          <!-- Left Page-->
          <div class="flex-1 flex flex-col min-w-0 p-4 border-r-2 border-gray-400">
            {{ journal.title }}
            <JournalEntry v-model="localContent" @update:model-value="update" />
          </div>
          <!-- Right Page-->
          <JournalPrompts :journal-id="journal.id" />
        </div>
        <!-- Todos-->
        <div class="grid grid-cols-3">
          <div>
            Daily
            <JournalTodoList />
            <button class="bg-blue-200">Import from yesterday (1-time)</button>
          </div>
          <div>
            Weekly
            <JournalTodoList />
          </div>
          <div>
            Monthly
            <JournalTodoList />
          </div>
        </div>
        <JournalHabitList />
      </div>
    </template>
  </main>
</template>

<style scoped>

</style>