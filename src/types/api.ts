export interface User{
    id: number,
    username: string
}

export enum Periodicity {
    daily = 'daily',
    weekly = 'weekly',
    monthly = 'monthly',
    yearly = 'yearly',
}

export interface Prompt{
    id: number,
    journalId: number,
    prompt: string,
    response: string
}

export interface PromptTemplate {
    id: number,
    userId: number,
    type: Periodicity,
    prompt: string
}

export interface Todo {
    id: number,
    journalId: number,
    title: string,
    complete: boolean
}

export interface HabitTemplate {
    id: number,
    userId: number,
    title: string,
    type: Periodicity,
}

export interface Habit {
    id: number,
    journalId: number,
    title: string,
    complete: boolean
}

export interface Journal {
    id: number,
    userId: number,
    parentJournalId?: number,
    type: Periodicity,
    date: Date,
    title: string,
    content: string
}
