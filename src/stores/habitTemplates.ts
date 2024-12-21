import { defineStore } from 'pinia';
import { HabitTemplate } from '@/types/api.ts';

export const useHabitTemplatesStore = defineStore('habitTemplates', {
    state: () => ({
        habitTemplates: {} as { [id: number]: HabitTemplate }
    }),
    actions: {
        /******************************
         * CREATE
         ******************************/
        set(templates: HabitTemplate[]) {
            const newTemplates = {} as { [id: number]: HabitTemplate };
            for (const template of templates) {
                newTemplates[template.id] = template;
            }
            this.habitTemplates = newTemplates;
        },

        /******************************
         * READ
         ******************************/
        getAll() {
            return Object.values(this.habitTemplates);
        },
        findOneById(id: number) {
            return this.habitTemplates[id];
        },
        findManyByUserId(userId: number) {
            return Object.values(this.habitTemplates).filter(h => h.userId === userId);
        },

        /******************************
         * UPDATE
         ******************************/
        addOne(template: HabitTemplate) {
            this.habitTemplates[template.id] = template;
        },
        addMany(templates: HabitTemplate[]) {
            for (const template of templates) {
                this.habitTemplates[template.id] = template;
            }
        },

        /******************************
         * DELETE
         ******************************/
        deleteOneById(id: number) {
            delete this.habitTemplates[id];
        },
        deleteManyByUserId(userId: number) {
            const templates = this.findManyByUserId(userId);
            for (const template of templates) {
                delete this.habitTemplates[template.id];
            }
        },
        deleteAll() {
            this.habitTemplates = {};
        }
    }
});