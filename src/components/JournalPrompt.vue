<script lang="ts" setup>
import JournalEntry from "@/components/JournalEntry.vue";
import {Prompt} from "@/types/api.ts";
import {PropType, ref} from "vue";
import PromptServices from "@/services/prompt.ts"

const props = defineProps({
  prompt: {
    type: {} as PropType<Prompt>,
    required: true,
  },
})

// Non-reactive local response
const localResponse = ref(props.prompt.response)

async function update(newResponse: string) {
  const newPrompt = { ...props.prompt, response: newResponse }
  await PromptServices.update(props.prompt.id, newPrompt)
}

</script>

<template>
  <div class="border-gray-100 border-2 p-2">
    <h4>
      {{ prompt.prompt }}
    </h4>
    <JournalEntry
v-model="localResponse"
@update:model-value="update"
/>
  </div>
</template>

<style scoped>

</style>