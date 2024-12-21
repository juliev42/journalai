// api/habits.ts
import { Habit } from '@/types/api';
import { useHabitsStore } from '@/stores/habits';
import { apiUrl, defaultHeaders, doFetch } from './config';

const habitsUrl = `${apiUrl}/habits`;

export async function fetchAllHabits(): Promise<void> {
    const store = useHabitsStore();
    const data: Habit[] = await doFetch<Habit[]>(habitsUrl, {
        method: 'GET',
        headers: defaultHeaders,
    });
    store.set(data);
}

export async function fetchHabit(id: number): Promise<void> {
    const store = useHabitsStore();
    const url = `${habitsUrl}/${id}`;
    const habit: Habit = await doFetch<Habit>(url, {
        method: 'GET',
        headers: defaultHeaders,
    });
    store.addOne(habit);
}

export async function createHabit(payload: Omit<Habit, 'id'>): Promise<Habit> {
    const store = useHabitsStore();
    const habit: Habit = await doFetch<Habit>(habitsUrl, {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(payload),
    });
    store.addOne(habit);
    return habit;
}

export async function updateHabit(id: number, updates: Partial<Habit>): Promise<Habit> {
    const store = useHabitsStore();
    const url = `${habitsUrl}/${id}`;
    const updated: Habit = await doFetch<Habit>(url, {
        method: 'PUT',
        headers: defaultHeaders,
        body: JSON.stringify(updates),
    });
    store.addOne(updated);
    return updated;
}

export async function deleteHabit(id: number): Promise<void> {
    const store = useHabitsStore();
    const url = `${habitsUrl}/${id}`;
    await doFetch<void>(url, {
        method: 'DELETE',
        headers: defaultHeaders,
    });
    store.deleteOneById(id);
}