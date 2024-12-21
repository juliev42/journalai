import { defineStore } from 'pinia'
import {Journal} from "@/types/api.ts";

export const useJournalsStore = defineStore('journals', {
    state: () => ({
        journals: {} as {[x: string]: Journal }
    }),
    actions: {
        getAll() {
            return this.journals
        },
        getOneByDate(date: Date) {
            return this.journals[date.toDateString()]
        },
        setAll(journals: Journal[]) {
            const newJournals = {} as {[x: string]: Journal }

            for (const journal of journals) {
                newJournals[journal.date.toDateString()] = journal
            }

            this.journals = newJournals
        },
        setOne(journal: Journal) {
            this.journals[journal.date.toDateString()] = journal
        }
    },
});
