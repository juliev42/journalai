import { defineStore } from 'pinia';
import { PromptTemplate } from '@/types/api.ts';

export const usePromptTemplatesStore = defineStore('promptTemplates', {
    state: () => ({
        promptTemplates: {} as { [id: number]: PromptTemplate }
    }),
    actions: {
        getAll() {
            return Object.values(this.promptTemplates);
        },
        getOneById(id: number) {
            return this.promptTemplates[id];
        },
        getByType(type: string) {
            return Object.values(this.promptTemplates).filter(template => template.type === type);
        },
        setAll(promptTemplates: PromptTemplate[]) {
            const newTemplates = {} as { [id: number]: PromptTemplate };
            for (const template of promptTemplates) {
                newTemplates[template.id] = template;
            }
            this.promptTemplates = newTemplates;
        },
        setOne(template: PromptTemplate) {
            this.promptTemplates[template.id] = template;
        }
    }
});