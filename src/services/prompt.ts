// api/prompts.ts
import { Prompt } from '@/types/api';
import { usePromptsStore } from '@/stores/prompts';
import { apiUrl, defaultHeaders, doFetch } from './config';

const promptsUrl = `${apiUrl}/prompts`;

/**
 * GET /prompts
 */
export async function fetchAllPrompts(): Promise<void> {
    const store = usePromptsStore();
    const data: Prompt[] = await doFetch<Prompt[]>(promptsUrl, {
        method: 'GET',
        headers: defaultHeaders,
    });
    store.set(data);
}

/**
 * GET /prompts/:id
 */
export async function fetchPrompt(id: number): Promise<void> {
    const store = usePromptsStore();
    const url = `${promptsUrl}/${id}`;
    const prompt: Prompt = await doFetch<Prompt>(url, {
        method: 'GET',
        headers: defaultHeaders,
    });
    store.addOne(prompt);
}

/**
 * POST /prompts
 */
export async function createPrompt(payload: Omit<Prompt, 'id'>): Promise<Prompt> {
    const store = usePromptsStore();
    const prompt: Prompt = await doFetch<Prompt>(promptsUrl, {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(payload),
    });
    store.addOne(prompt);
    return prompt;
}

/**
 * PUT /prompts/:id
 */
export async function updatePrompt(id: number, updates: Partial<Prompt>): Promise<Prompt> {
    const store = usePromptsStore();
    const url = `${promptsUrl}/${id}`;
    const updated: Prompt = await doFetch<Prompt>(url, {
        method: 'PUT',
        headers: defaultHeaders,
        body: JSON.stringify(updates),
    });
    store.addOne(updated);
    return updated;
}

/**
 * DELETE /prompts/:id
 */
export async function deletePrompt(id: number): Promise<void> {
    const store = usePromptsStore();
    const url = `${promptsUrl}/${id}`;
    await doFetch<void>(url, {
        method: 'DELETE',
        headers: defaultHeaders,
    });
    store.deleteOneById(id);
}