import { defineStore } from 'pinia';
import { User } from '@/types/api.ts';

export const useUserStore = defineStore('user', {
    state: () => ({
        currentUser: null as User | null,
        token: null as string | null, // For session/token-based authentication
    }),
    actions: {
        login(user: User, token: string) {
            this.currentUser = user;
            this.token = token;
        },
        logout() {
            this.token = null;
            this.currentUser = null;
        },
    },
});