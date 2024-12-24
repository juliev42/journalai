import {HabitTemplate} from '@/types/api';
import {defaultHeaders, doFetch} from './config';
import {useHabitTemplatesStore} from "@/stores/habitTemplates.ts";
import {journalsUrl} from "@/services/journal.ts";

/***************
 * Create
 ***************/

export async function getAllHabitTemplates() {
    const data = await doFetch(habitTemplatesUrl(), {
        method: 'GET',
        headers: defaultHeaders,
    });
    storeHabitTemplateData(data)
}

export async function fetchHabitTemplateByJournalId(journalId: number) {
    const url = `${habitTemplatesUrl}/${journalId}`;
    const template: HabitTemplate = await doFetch(url, {
        method: 'GET',
        headers: defaultHeaders,
    });
    store.addOne(template);
}

/***************
 * Read
 ***************/

/***************
 * Update
 ***************/

/***************
 * Destroy
 ***************/

export async function destroyHabitTemplate(id: number) {
    const url = `${habitTemplatesUrl}/${id}`;
    await doFetch(url, {
        method: 'DELETE',
        headers: defaultHeaders,
    });
}

/***************
 * Helpers
 ***************/

/**
 * POST /habit-templates
 */
export async function createHabitTemplate(payload: Omit<HabitTemplate, 'id'>): Promise<HabitTemplate> {
    const store = useHabitTemplatesStore();
    const template: HabitTemplate = await doFetch(habitTemplatesUrl, {
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
    const updated: HabitTemplate = await doFetch(url, {
        method: 'PUT',
        headers: defaultHeaders,
        body: JSON.stringify(updates),
    });
    store.addOne(updated);
    return updated;
}

function habitTemplatesUrl(journalId: number, habitTemplateId: number|null) {
    return `${journalsUrl}/${journalId}/habit-templates/${habitTemplateId}`

}

function storeHabitTemplateData(data: object) {
    const store = useHabitTemplatesStore();

    if ('habitTemplate' in data && data.habitTemplate) {
        store.addOne(data.habitTemplate as HabitTemplate)
    }
    if ('habitTemplates' in data && data.habitTemplates) {
        store.addMany(data.habitTemplates as HabitTemplate[])
    }
}