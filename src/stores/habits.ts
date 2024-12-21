import { defineStore } from 'pinia';
import { Habit } from '@/types/api.ts';

export const useHabitsStore = defineStore('habits', {
    state: () => ({
        habits: {} as { [id: number]: Habit }
    }),
    actions: {
        /******************************
         * CREATE
         ******************************/
        set(habits: Habit[]) {
            const newHabits = {} as { [id: number]: Habit };
            for (const habit of habits) {
                newHabits[habit.id] = habit;
            }
            this.habits = newHabits;
        },

        /******************************
         * READ
         ******************************/
        getAll() {
            return Object.values(this.habits);
        },
        findOneById(id: number) {
            return this.habits[id];
        },
        findManyByJournalId(journalId: number) {
            return Object.values(this.habits).filter(habit => habit.journalId === journalId);
        },

        /******************************
         * UPDATE
         ******************************/
        addOne(habit: Habit) {
            this.habits[habit.id] = habit;
        },
        addMany(habits: Habit[]) {
            for (const habit of habits) {
                this.habits[habit.id] = habit;
            }
        },

        /******************************
         * DELETE
         ******************************/
        deleteOneById(id: number) {
            delete this.habits[id];
        },
        deleteManyByJournalId(journalId: number) {
            const habits = this.findManyByJournalId(journalId);
            for (const habit of habits) {
                delete this.habits[habit.id];
            }
        },
        deleteAll() {
            this.habits = {};
        }
    }
});