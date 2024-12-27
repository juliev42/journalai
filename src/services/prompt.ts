// api/prompts.ts
import { Prompt } from '@/types/api';
import { usePromptsStore } from '@/stores/prompts';
import { apiUrl, defaultHeaders, doFetch } from './config';

const promptsUrl = `${apiUrl}/prompts`;

export default class PromptServices {

    /***************
     * Create
     ***************/

    static async create(payload: Omit<Prompt, 'id'>) {
        const data = await doFetch(promptsUrl, {
            method: 'POST',
            headers: defaultHeaders,
            body: JSON.stringify(payload),
        });
        storePromptData(data)
    }

    /***************
     * Read
     ***************/

    static async getAll(): Promise<void> {
        const data = await doFetch(promptsUrl, {
            method: 'GET',
            headers: defaultHeaders,
        });
        storePromptData(data)
    }

    static async getOneById(id: number): Promise<void> {
        const url = `${promptsUrl}/${id}`;
        const data = await doFetch(url, {
            method: 'GET',
            headers: defaultHeaders,
        });
        storePromptData(data);
    }

    /***************
     * Update
     ***************/

    static async update(id: number, updates: Partial<Prompt>) {
        const data = { prompt: { ...updates, id } }

        // const url = `${promptsUrl}/${id}`;
        // const data = await doFetch(url, {
        //     method: 'PUT',
        //     headers: defaultHeaders,
        //     body: JSON.stringify(updates),
        // });

        storePromptData(data);
    }

    /***************
     * Destroy
     ***************/

    static async destroy(id: number): Promise<void> {
        const store = usePromptsStore();
        const url = `${promptsUrl}/${id}`;
        await doFetch(url, {
            method: 'DELETE',
            headers: defaultHeaders,
        });
        store.deleteOneById(id);
    }

    /***************
     * Helpers
     ***************/

}

function storePromptData(data: object) {
    const promptsStore = usePromptsStore();

    if ('prompt' in data && data.prompt) {
        promptsStore.addOne(data.prompt as Prompt);
    }
    if ('prompts' in data && data.prompts) {
        promptsStore.addMany(data.prompts as Prompt[])
    }
}
