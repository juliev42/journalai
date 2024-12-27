<script setup lang="ts">
import JournalPrompt from "@/components/JournalPrompt.vue";
import {computed} from "vue";
import {usePromptsStore} from "@/stores/prompts.ts";

const props = defineProps({
  journalId: {
    type: Number,
    required: true,
  },
})

const promptsStore = usePromptsStore()
const prompts = computed(() => promptsStore.findManyByJournalId(props.journalId))

</script>

<template>
  <div class="flex-1 flex flex-col min-w-0 p-4 overflow-scroll">
    <JournalPrompt
v-for="prompt in prompts"
:key="prompt.id"
:prompt="prompt"
/>
  </div>
</template>

<style scoped>

</style>