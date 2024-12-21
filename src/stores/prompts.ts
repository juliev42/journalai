import { defineStore } from 'pinia';
import { Prompt } from '@/types/api.ts';

export const usePromptsStore = defineStore('prompts', {
    state: () => ({
        prompts: {} as { [id: number]: Prompt }
    }),
    actions: {
        /******************************
         * CREATE
         ******************************/
        set(prompts: Prompt[]) {
            const newPrompts = {} as { [id: number]: Prompt };
            for (const prompt of prompts) {
                newPrompts[prompt.id] = prompt;
            }
            this.prompts = newPrompts;
        },

        /******************************
         * READ
         ******************************/
        getAll() {
            return Object.values(this.prompts);
        },
        findOneById(id: number) {
            return this.prompts[id];
        },
        findManyByJournalId(journalId: number) {
            return Object.values(this.prompts).filter(p => p.journalId === journalId);
        },

        /******************************
         * UPDATE
         ******************************/
        addOne(prompt: Prompt) {
            this.prompts[prompt.id] = prompt;
        },
        addMany(prompts: Prompt[]) {
            for (const prompt of prompts) {
                this.prompts[prompt.id] = prompt;
            }
        },

        /******************************
         * DELETE
         ******************************/
        deleteOneById(id: number) {
            delete this.prompts[id];
        },
        deleteManyByJournalId(journalId: number) {
            const prompts = this.findManyByJournalId(journalId);
            for (const prompt of prompts) {
                delete this.prompts[prompt.id];
            }
        },
        deleteAll() {
            this.prompts = {};
        }
    }
});