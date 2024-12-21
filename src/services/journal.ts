// api/journals.ts
import { Journal } from '@/types/api';
import { useJournalsStore } from '@/stores/journals';
import { apiUrl, defaultHeaders, doFetch } from './config';

const journalsUrl = `${apiUrl}/journals`;

// **Create** or replace all journals in the store
export async function fetchAllJournals(): Promise<void> {
    const store = useJournalsStore();
    const data: Journal[] = await doFetch<Journal[]>(journalsUrl, {
        method: 'GET',
        headers: defaultHeaders,
    });
    store.set(data); // Pinia store action
}

export async function fetchOneJournal(id: number): Promise<void> {
    const store = useJournalsStore();
    const url = `${journalsUrl}/${id}`;
    const journal: Journal = await doFetch<Journal>(url, {
        method: 'GET',
        headers: defaultHeaders,
    });
    store.addOne(journal);
}

export async function createJournal(payload: Omit<Journal, 'id'>): Promise<Journal> {
    const store = useJournalsStore();
    const journal: Journal = await doFetch<Journal>(journalsUrl, {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(payload),
    });
    store.addOne(journal);
    return journal;
}

export async function updateJournal(id: number, updates: Partial<Journal>): Promise<Journal> {
    const store = useJournalsStore();
    const url = `${journalsUrl}/${id}`;
    const updated: Journal = await doFetch<Journal>(url, {
        method: 'PUT',
        headers: defaultHeaders,
        body: JSON.stringify(updates),
    });
    store.addOne(updated); // or store.updateOne if you prefer
    return updated;
}

export async function deleteJournal(id: number): Promise<void> {
    const store = useJournalsStore();
    const url = `${journalsUrl}/${id}`;
    await doFetch<void>(url, {
        method: 'DELETE',
        headers: defaultHeaders,
    });
    store.deleteOneById(id);
}