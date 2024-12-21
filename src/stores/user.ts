import { defineStore } from 'pinia';
import { User } from '@/types/api.ts';

export const useUserStore = defineStore('user', {
    state: () => ({
        currentUser: null as User | null,
        token: null as string | null, // For session/token-based authentication
    }),
    actions: {
        async login(username: string, password: string) {
            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password }),
                });
                const data = await response.json();
                if (response.ok) {
                    this.token = data.token;
                    this.currentUser = data.user;
                    // Save token to localStorage or cookies if needed
                    localStorage.setItem('authToken', data.token);
                } else {
                    throw new Error(data.message || 'Login failed');
                }
            } catch (error) {
                console.error('Login error:', error);
            }
        },
        logout() {
            this.token = null;
            this.currentUser = null;
            localStorage.removeItem('authToken');
        },
        async fetchCurrentUser() {
            if (!this.token) return;
            try {
                const response = await fetch('/api/me', {
                    headers: { Authorization: `Bearer ${this.token}` },
                });
                if (response.ok) {
                    this.currentUser = await response.json();
                } else {
                    this.logout(); // If the token is invalid or expired
                }
            } catch (error) {
                console.error('Failed to fetch current user:', error);
            }
        },
    },
});