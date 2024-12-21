import { defineStore } from 'pinia';
import { Todo } from '@/types/api.ts';

export const useTodosStore = defineStore('todos', {
    state: () => ({
        todos: {} as { [id: number]: Todo }
    }),
    actions: {
        getAll() {
            return Object.values(this.todos);
        },
        getOneById(id: number) {
            return this.todos[id];
        },
        getByJournalId(journalId: number) {
            return Object.values(this.todos).filter(todo => todo.journalId === journalId);
        },
        setAll(todos: Todo[]) {
            const newTodos = {} as { [id: number]: Todo };
            for (const todo of todos) {
                newTodos[todo.id] = todo;
            }
            this.todos = newTodos;
        },
        setOne(todo: Todo) {
            this.todos[todo.id] = todo;
        }
    }
});