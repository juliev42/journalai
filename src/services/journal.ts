// api/journals.ts
import {Habit, Journal, Periodicity, Todo} from '@/types/api';
import { useJournalsStore } from '@/stores/journals';
import { apiUrl, defaultHeaders, doFetch } from './config';
import {useHabitsStore} from "@/stores/habits.ts";
import {useTodosStore} from "@/stores/todos.ts";

const journalsUrl = `${apiUrl}/journals`;

export default class JournalServices {
    /***************
     * Create
     ***************/

    static async create(payload: Omit<Journal, 'id'>) {
        const data = await doFetch(journalsUrl, {
            method: 'POST',
            headers: defaultHeaders,
            body: JSON.stringify(payload),
        });
        storeJournalData(data)
    }

    /***************
     * Read
     ***************/

    static async getAll() {
        const data = await doFetch(journalsUrl, {
            method: 'GET',
            headers: defaultHeaders,
        });
        storeJournalData(data)
    }

    static async getOneByPeriodicityAndDate(type: Periodicity, date: Date) {
        const url = `${journalsUrl}/${type}/${date}`;
        const data = await doFetch(url, {
            method: 'GET',
            headers: defaultHeaders,
        });
        storeJournalData(data)
    }

    /***************
     * Update
     ***************/

    static async update(id: number, updates: Omit<Journal, "id">) {
        const data = { journal: { ...updates, id } }

        // const url = `${journalsUrl}/${id}`;
        // const data = await doFetch(url, {
        //     method: 'PUT',
        //     headers: defaultHeaders,
        //     body: JSON.stringify(updates),
        // });

        storeJournalData(data)
    }

    /***************
     * Delete
     ***************/

    static async delete(id: number): Promise<void> {
        const store = useJournalsStore();
        const url = `${journalsUrl}/${id}`;
        await doFetch(url, {
            method: 'DELETE',
            headers: defaultHeaders,
        });
        store.deleteOneById(id);
    }
}

function storeJournalData(data: object) {
    const journalsStore = useJournalsStore();
    const habitsStore = useHabitsStore();
    const todosStore = useTodosStore();

    if ('journal' in data && data.journal) {
        journalsStore.addOne(data.journal as Journal);
    }
    if ('journals' in data && data.journals) {
        journalsStore.addMany(data.journals as Journal[])
    }
    if ('habits' in data && data.habits) {
        habitsStore.addMany(data.habits as Habit[]);
    }
    if ('todos' in data && data.todos) {
        todosStore.addMany(data.todos as Todo[]);
    }
}
