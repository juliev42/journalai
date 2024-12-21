import { defineStore } from 'pinia';
import { HabitTemplate } from '@/types/api.ts';

export const useHabitTemplatesStore = defineStore('habitTemplates', {
    state: () => ({
        habitTemplates: {} as { [id: number]: HabitTemplate }
    }),
    actions: {
        getAll() {
            return Object.values(this.habitTemplates);
        },
        getOneById(id: number) {
            return this.habitTemplates[id];
        },
        getByType(type: string) {
            return Object.values(this.habitTemplates).filter(template => template.type === type);
        },
        setAll(templates: HabitTemplate[]) {
            const newTemplates = {} as { [id: number]: HabitTemplate };
            for (const template of templates) {
                newTemplates[template.id] = template;
            }
            this.habitTemplates = newTemplates;
        },
        setOne(template: HabitTemplate) {
            this.habitTemplates[template.id] = template;
        }
    }
});