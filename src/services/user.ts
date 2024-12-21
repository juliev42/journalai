// api/users.ts
import { User } from '@/types/api';
import { useUserStore } from '@/stores/user';
import { apiUrl, defaultHeaders, doFetch } from './config';

const usersUrl = `${apiUrl}/users`;

/**
 * GET /users/:id
 */
export async function fetchUser(id: number): Promise<void> {
    const store = useUserStore();
    const url = `${usersUrl}/${id}`;
    const user: User = await doFetch<User>(url, {
        method: 'GET',
        headers: defaultHeaders,
    });
    store.login(user, 'fakeToken');
}

/**
 * POST /users
 */
export async function createUser(payload: Omit<User, 'id'>): Promise<User> {
    const store = useUserStore();
    const user: User = await doFetch<User>(usersUrl, {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(payload),
    });
    store.login(user, 'fakeToken');
    return user;
}

/**
 * PUT /users/:id
 */
export async function updateUser(id: number, updates: Partial<User>): Promise<User> {
    const store = useUserStore();
    const url = `${usersUrl}/${id}`;
    const updated: User = await doFetch<User>(url, {
        method: 'PUT',
        headers: defaultHeaders,
        body: JSON.stringify(updates),
    });
    store.login(updated, 'fakeToken');
    return updated;
}

/**
 * DELETE /users/:id
 */
export async function deleteUser(id: number): Promise<void> {
    const store = useUserStore();
    const url = `${usersUrl}/${id}`;
    await doFetch<void>(url, {
        method: 'DELETE',
        headers: defaultHeaders,
    });
    store.logout();
}