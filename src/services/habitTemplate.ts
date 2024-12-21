// api/habitTemplates.ts
import { HabitTemplate } from '@/types/api';
import { useHabitTemplatesStore } from '@/stores/habitTemplates';
import { apiUrl, defaultHeaders, doFetch } from './config';

const habitTemplatesUrl = `${apiUrl}/habit-templates`;

/**
 * GET /habit-templates
 */
export async function fetchAllHabitTemplates(): Promise<void> {
    const store = useHabitTemplatesStore();
    const data: HabitTemplate[] = await doFetch<HabitTemplate[]>(habitTemplatesUrl, {
        method: 'GET',
        headers: defaultHeaders,
    });
    store.set(data);
}

/**
 * GET /habit-templates/:id
 */
export async function fetchHabitTemplate(id: number): Promise<void> {
    const store = useHabitTemplatesStore();
    const url = `${habitTemplatesUrl}/${id}`;
    const template: HabitTemplate = await doFetch<HabitTemplate>(url, {
        method: 'GET',
        headers: defaultHeaders,
    });
    store.addOne(template);
}

/**
 * POST /habit-templates
 */
export async function createHabitTemplate(payload: Omit<HabitTemplate, 'id'>): Promise<HabitTemplate> {
    const store = useHabitTemplatesStore();
    const template: HabitTemplate = await doFetch<HabitTemplate>(habitTemplatesUrl, {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(payload),
    });
    store.addOne(template);
    return template;
}

/**
 * PUT /habit-templates/:id
 */
export async function updateHabitTemplate(id: number, updates: Partial<HabitTemplate>): Promise<HabitTemplate> {
    const store = useHabitTemplatesStore();
    const url = `${habitTemplatesUrl}/${id}`;
    const updated: HabitTemplate = await doFetch<HabitTemplate>(url, {
        method: 'PUT',
        headers: defaultHeaders,
        body: JSON.stringify(updates),
    });
    store.addOne(updated);
    return updated;
}

/**
 * DELETE /habit-templates/:id
 */
export async function deleteHabitTemplate(id: number): Promise<void> {
    const store = useHabitTemplatesStore();
    const url = `${habitTemplatesUrl}/${id}`;
    await doFetch<void>(url, {
        method: 'DELETE',
        headers: defaultHeaders,
    });
    store.deleteOneById(id);
}