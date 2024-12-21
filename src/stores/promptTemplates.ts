import { defineStore } from 'pinia';
import { PromptTemplate } from '@/types/api.ts';

export const usePromptTemplatesStore = defineStore('promptTemplates', {
    state: () => ({
        promptTemplates: {} as { [id: number]: PromptTemplate }
    }),
    actions: {
        /******************************
         * CREATE
         ******************************/
        set(templates: PromptTemplate[]) {
            const newTemplates = {} as { [id: number]: PromptTemplate };
            for (const template of templates) {
                newTemplates[template.id] = template;
            }
            this.promptTemplates = newTemplates;
        },

        /******************************
         * READ
         ******************************/
        getAll() {
            return Object.values(this.promptTemplates);
        },
        findOneById(id: number) {
            return this.promptTemplates[id];
        },
        findManyByUserId(userId: number) {
            return Object.values(this.promptTemplates).filter(t => t.userId === userId);
        },

        /******************************
         * UPDATE
         ******************************/
        addOne(template: PromptTemplate) {
            this.promptTemplates[template.id] = template;
        },
        addMany(templates: PromptTemplate[]) {
            for (const template of templates) {
                this.promptTemplates[template.id] = template;
            }
        },

        /******************************
         * DELETE
         ******************************/
        deleteOneById(id: number) {
            delete this.promptTemplates[id];
        },
        deleteManyByUserId(userId: number) {
            const templates = this.findManyByUserId(userId);
            for (const template of templates) {
                delete this.promptTemplates[template.id];
            }
        },
        deleteAll() {
            this.promptTemplates = {};
        }
    }
});