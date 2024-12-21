// api/promptTemplates.ts
import { PromptTemplate } from '@/types/api';
import { usePromptTemplatesStore } from '@/stores/promptTemplates';
import { apiUrl, defaultHeaders, doFetch } from './config';

const promptTemplatesUrl = `${apiUrl}/prompt-templates`;

/**
 * GET /prompt-templates
 */
export async function fetchAllPromptTemplates(): Promise<void> {
    const store = usePromptTemplatesStore();
    const data: PromptTemplate[] = await doFetch<PromptTemplate[]>(promptTemplatesUrl, {
        method: 'GET',
        headers: defaultHeaders,
    });
    store.set(data);
}

/**
 * GET /prompt-templates/:id
 */
export async function fetchPromptTemplate(id: number): Promise<void> {
    const store = usePromptTemplatesStore();
    const url = `${promptTemplatesUrl}/${id}`;
    const template: PromptTemplate = await doFetch<PromptTemplate>(url, {
        method: 'GET',
        headers: defaultHeaders,
    });
    store.addOne(template);
}

/**
 * POST /prompt-templates
 */
export async function createPromptTemplate(payload: Omit<PromptTemplate, 'id'>): Promise<PromptTemplate> {
    const store = usePromptTemplatesStore();
    const template: PromptTemplate = await doFetch<PromptTemplate>(promptTemplatesUrl, {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(payload),
    });
    store.addOne(template);
    return template;
}

/**
 * PUT /prompt-templates/:id
 */
export async function updatePromptTemplate(id: number, updates: Partial<PromptTemplate>): Promise<PromptTemplate> {
    const store = usePromptTemplatesStore();
    const url = `${promptTemplatesUrl}/${id}`;
    const updated: PromptTemplate = await doFetch<PromptTemplate>(url, {
        method: 'PUT',
        headers: defaultHeaders,
        body: JSON.stringify(updates),
    });
    store.addOne(updated);
    return updated;
}

/**
 * DELETE /prompt-templates/:id
 */
export async function deletePromptTemplate(id: number): Promise<void> {
    const store = usePromptTemplatesStore();
    const url = `${promptTemplatesUrl}/${id}`;
    await doFetch<void>(url, {
        method: 'DELETE',
        headers: defaultHeaders,
    });
    store.deleteOneById(id);
}