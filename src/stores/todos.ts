import { defineStore } from 'pinia';
import {Todo} from '@/types/api.ts';

export const useTodosStore = defineStore('todos', {
    state: () => ({
        todos: {} as { [id: number]: Todo }
    }),
    actions: {
        /******************************
         * CREATE
         ******************************/
        set(todos: Todo[]) {
            const newTodos = {} as { [id: number]: Todo };
            for (const todo of todos) {
                newTodos[todo.id] = todo;
            }
            this.todos = newTodos;
        },

        /******************************
         * READ
         ******************************/
        getAll() {
            return Object.values(this.todos);
        },
        findOneById(id: number) {
            return this.todos[id];
        },
        findManyByJournalId(journalId: number) {
            return Object.values(this.todos).filter(todo => todo.journalId === journalId);
        },

        /******************************
         * UPDATE
         ******************************/
        addOne(todo: Todo) {
            this.todos[todo.id] = todo;
        },
        addMany(todos: Todo[]) {
            for (const todo of todos) {
                this.todos[todo.id] = todo;
            }
        },

        /******************************
         * DELETE
         ******************************/
        deleteOneById(id: number) {
            delete this.todos[id];
        },
        deleteManyByJournalId(journalId: number) {
            const todos = this.findManyByJournalId(journalId);
            for (const todo of todos) {
                delete this.todos[todo.id];
            }
        },
        deleteAll() {
            this.todos = {};
        }
    }
});