import { defineStore } from 'pinia';
import { Prompt } from '@/types/api.ts';

export const usePromptsStore = defineStore('prompts', {
    state: () => ({
        prompts: {} as { [id: number]: Prompt }
    }),
    actions: {
        getAll() {
            return Object.values(this.prompts);
        },
        getOneById(id: number) {
            return this.prompts[id];
        },
        getByJournalId(journalId: number) {
            return Object.values(this.prompts).filter(prompt => prompt.journalId === journalId);
        },
        setAll(prompts: Prompt[]) {
            const newPrompts = {} as { [id: number]: Prompt };
            for (const prompt of prompts) {
                newPrompts[prompt.id] = prompt;
            }
            this.prompts = newPrompts;
        },
        setOne(prompt: Prompt) {
            this.prompts[prompt.id] = prompt;
        }
    }
});