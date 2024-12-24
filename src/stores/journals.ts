import { defineStore } from 'pinia';
import {Journal, Periodicity} from '@/types/api.ts';

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
        findAll(): Journal[] {
            return Object.values(this.journals);
        },
        findOneById(id: number): Journal | undefined {
            return this.journals[id];
        },
        findManyByUserId(userId: number): Journal[] {
            return Object.values(this.journals).filter(j => j.userId === userId);
        },
        findLatestByDate(): Journal | undefined {
            const allJournals = Object.values(this.journals);
            if (!allJournals.length) return undefined;

            const periodicityRank: Record<Periodicity, number> = {
                [Periodicity.daily]: 0,
                [Periodicity.weekly]: 1,
                [Periodicity.monthly]: 2,
                [Periodicity.yearly]: 3,
            };

            return allJournals.reduce((latest, current) => {
                // Compare date first
                if (current.date > latest.date) {
                    return current;
                }

                // If dates are exactly the same, compare periodicity rank
                if (current.date.getTime() === latest.date.getTime()) {
                    if (periodicityRank[current.type] < periodicityRank[latest.type]) {
                        return current;
                    }
                }

                // Otherwise keep the latest
                return latest;
            })
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