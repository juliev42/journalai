// api/todos.ts
import { Todo } from '@/types/api';
import { useTodosStore } from '@/stores/todos';
import { apiUrl, defaultHeaders, doFetch } from './config';

const todosUrl = `${apiUrl}/todos`;

/**
 * GET /todos
 */
export async function fetchAllTodos(): Promise<void> {
    const store = useTodosStore();
    const data: Todo[] = await doFetch<Todo[]>(todosUrl, {
        method: 'GET',
        headers: defaultHeaders,
    });
    store.set(data);
}

/**
 * GET /todos/:id
 */
export async function fetchTodo(id: number): Promise<void> {
    const store = useTodosStore();
    const url = `${todosUrl}/${id}`;
    const todo: Todo = await doFetch<Todo>(url, {
        method: 'GET',
        headers: defaultHeaders,
    });
    store.addOne(todo);
}

/**
 * POST /todos
 */
export async function createTodo(payload: Omit<Todo, 'id'>): Promise<Todo> {
    const store = useTodosStore();
    const todo: Todo = await doFetch<Todo>(todosUrl, {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(payload),
    });
    store.addOne(todo);
    return todo;
}

/**
 * PUT /todos/:id
 */
export async function updateTodo(id: number, updates: Partial<Todo>): Promise<Todo> {
    const store = useTodosStore();
    const url = `${todosUrl}/${id}`;
    const updated: Todo = await doFetch<Todo>(url, {
        method: 'PUT',
        headers: defaultHeaders,
        body: JSON.stringify(updates),
    });
    store.addOne(updated);
    return updated;
}

/**
 * DELETE /todos/:id
 */
export async function deleteTodo(id: number): Promise<void> {
    const store = useTodosStore();
    const url = `${todosUrl}/${id}`;
    await doFetch<void>(url, {
        method: 'DELETE',
        headers: defaultHeaders,
    });
    store.deleteOneById(id);
}