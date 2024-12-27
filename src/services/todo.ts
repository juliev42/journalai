// api/todos.ts
import { Todo } from '@/types/api';
import { useTodosStore } from '@/stores/todos';
import { apiUrl, defaultHeaders, doFetch } from './config';

const todosUrl = `${apiUrl}/todos`;

export default class TodoServices {
    /***************
     * Create
     ***************/

    static async create(payload: Omit<Todo, 'id'>) {
        const data = await doFetch(todosUrl, {
            method: 'POST',
            headers: defaultHeaders,
            body: JSON.stringify(payload),
        });
        storeTodoData(data)
    }

    /***************
     * Read
     ***************/

    static async getAll() {
        const data = await doFetch(todosUrl, {
            method: 'GET',
            headers: defaultHeaders,
        });
        storeTodoData(data)
    }

    static async getOneById(id: number) {
        const url = `${todosUrl}/${id}`;
        const data = await doFetch(url, {
            method: 'GET',
            headers: defaultHeaders,
        });
        storeTodoData(data)
    }

    /***************
     * Update
     ***************/

    static async update(id: number, updates: Partial<Todo>) {
        const data = { todo: { ...updates, id } }
        // const url = `${todosUrl}/${id}`;
        // const data = await doFetch(url, {
        //     method: 'PUT',
        //     headers: defaultHeaders,
        //     body: JSON.stringify(updates),
        // });

        storeTodoData(data)
    }

    /***************
     * Delete
     ***************/
    
    static async delete(id: number) {
        const store = useTodosStore();
        const url = `${todosUrl}/${id}`;
        await doFetch(url, {
            method: 'DELETE',
            headers: defaultHeaders,
        });
        store.deleteOneById(id);
    }
}

function storeTodoData(data: object) {
    const todosStore = useTodosStore();

    if ('todo' in data && data.todo) {
        todosStore.addOne(data.todo as Todo);
    }
    if ('todos' in data && data.todos) {
        todosStore.addMany(data.todos as Todo[])
    }
}
