import { defineStore } from 'pinia';
import { Journal } from '@/types/api.ts';

export const useJournalsStore = defineStore('journals', {
    state: () => ({
        journals: {} as { [id: number]: Journal }
    }),
    actions: {
        /******************************
         * CREATE
         ******************************/
        set(journals: Journal[]) {
            const newJournals = {} as { [id: number]: Journal };
            for (const journal of journals) {
                newJournals[journal.id] = journal;
            }
            this.journals = newJournals;
        },

        /******************************
         * READ
         ******************************/
        getAll() {
            return Object.values(this.journals);
        },
        findOneById(id: number) {
            return this.journals[id];
        },
        findManyByUserId(userId: number) {
            return Object.values(this.journals).filter(j => j.userId === userId);
        },
        findManyByParentJournalId(parentJournalId: number) {
            return Object.values(this.journals).filter(j => j.parentJournalId === parentJournalId);
        },

        /******************************
         * UPDATE
         ******************************/
        addOne(journal: Journal) {
            this.journals[journal.id] = journal;
        },
        addMany(journals: Journal[]) {
            for (const journal of journals) {
                this.journals[journal.id] = journal;
            }
        },

        /******************************
         * DELETE
         ******************************/
        deleteOneById(id: number) {
            delete this.journals[id];
        },
        deleteManyByUserId(userId: number) {
            const items = this.findManyByUserId(userId);
            for (const journal of items) {
                delete this.journals[journal.id];
            }
        },
        deleteAll() {
            this.journals = {};
        }
    }
});