<script setup lang="ts">

import {useJournalsStore} from "@/stores/journals.ts";
import {Journal, Periodicity} from "@/types/api.ts";
import Helpers from "@/helpers.ts";
import AppAccordion from "@/components/AppAccordion.vue";

const props = defineProps({
  journalId: {
    type: Number,
    required: true
  },
  activeJournalId: {
    type: [Number, null],
    required: false,
    default: null
  },
})

const journalsStore = useJournalsStore()
const currentJournal = journalsStore.findOneById(props.journalId) as Journal
const childrenJournals = journalsStore.findManyByParentId(props.journalId).sort((a, b) => a.date > b.date ? -1 : 1)

function journalToString(journal: Journal) {
  if (journal.type === Periodicity.daily) {
    return `Day ${ currentJournal.date.getDay() + 1 }`
  } else if (journal.type === Periodicity.weekly) {
    return `Week of: ${ Math.max(Helpers.getSunday(journal.date).getDay(), 1) } - ${ Helpers.getSunday(journal.date).getDay() + 6 }`
  } else if (journal.type === Periodicity.monthly) {
    return journal.date.toLocaleString('default', { month: 'long' });
  } else {
    return journal.date.getFullYear()
  }
}

</script>

<template>
  <li>
    <RouterLink
      v-if="currentJournal.type === Periodicity.daily"
      :to="`/journals/${currentJournal.id}`"
      class="w-full hover:bg-gray-200 transition flex-1"
    >
      {{ journalToString(currentJournal) }}
    </RouterLink>
    <AppAccordion
      v-else
      :id="`accordion-journal-${currentJournal.id}`"
    >
      <template #header>
        <RouterLink
          :to="`/journals/${currentJournal.id}`"
          class="w-full hover:bg-gray-200 transition"
        >
          {{ journalToString(currentJournal) }}
        </RouterLink>
      </template>
      <template #body>
        <ul>
          <SidebarJournalSelector
              v-for="journal of childrenJournals"
              :key="journal.id"
              :journal-id="journal.id"
              :active-journal-id="activeJournalId"
          />
        </ul>
      </template>
    </AppAccordion>
  </li>
</template>

<style scoped>

</style>