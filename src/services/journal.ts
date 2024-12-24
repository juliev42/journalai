// api/journals.ts
import {Habit, Journal, Periodicity, Todo} from '@/types/api';
import { useJournalsStore } from '@/stores/journals';
import { apiUrl, defaultHeaders, doFetch } from './config';
import {useHabitsStore} from "@/stores/habits.ts";
import {useTodosStore} from "@/stores/todos.ts";

export const journalsUrl = `${apiUrl}/journals`;

/***************
 * Create
 ***************/

export async function create(payload: Omit<Journal, 'id'>) {
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

export async function getAll() {
    const data = await doFetch(journalsUrl, {
        method: 'GET',
        headers: defaultHeaders,
    });
    storeJournalData(data)
}

export async function getOne(type: Periodicity, date: Date) {
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

export async function update(type: Periodicity, date: Date, updates: Partial<Journal>) {
    const url = `${journalsUrl}/${type}/${date}`;
    const data = await doFetch(url, {
        method: 'PUT',
        headers: defaultHeaders,
        body: JSON.stringify(updates),
    });
    storeJournalData(data)
}

/***************
 * Destroy
 ***************/

export async function destroy(id: number): Promise<void> {
    const store = useJournalsStore();
    const url = `${journalsUrl}/${id}`;
    await doFetch(url, {
        method: 'DELETE',
        headers: defaultHeaders,
    });
    store.deleteOneById(id);
}

/***************
 * Helpers
 ***************/

export function storeJournalData(data: object) {
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