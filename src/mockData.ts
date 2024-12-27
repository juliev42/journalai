import { User, Journal, Prompt, PromptTemplate, Todo, Habit, HabitTemplate, Periodicity } from '@/types/api';
import {useUserStore} from "@/stores/user.ts";
import {useJournalsStore} from "@/stores/journals.ts";
import {usePromptsStore} from "@/stores/prompts.ts";
import {usePromptTemplatesStore} from "@/stores/promptTemplates.ts";
import {useTodosStore} from "@/stores/todos.ts";
import {useHabitsStore} from "@/stores/habits.ts";
import {useHabitTemplatesStore} from "@/stores/habitTemplates.ts";

// Users
const mockUsers: User[] = [
    { id: 1, username: 'alice' },
    { id: 2, username: 'bob' },
];

// Journals
const dailyJournal: Journal = {
    id: 1,
    userId: 1,
    type: Periodicity.daily,
    parentJournalId: 2,
    date: new Date(2024, 1, 2),
    title: 'Daily Journal',
    content: 'Today I started something new.'
}
const weeklyJournal: Journal = {
    id: 2,
    userId: 1,
    parentJournalId: 3,
    type: Periodicity.weekly,
    date: getSunday(dailyJournal.date),
    title: 'Weekly Journal',
    content: 'The week went well.'
}
const monthlyJournal: Journal = {
    id: 3,
    userId: 1,
    parentJournalId: 4,
    type: Periodicity.monthly,
    date: new Date(dailyJournal.date.getFullYear(), dailyJournal.date.getMonth()),
    title: 'Monthly Journal',
    content: 'The monthly journal went well.'
}
const yearlyJournal: Journal = {
    id: 4,
    userId: 1,
    type: Periodicity.yearly,
    date: new Date(dailyJournal.date.getFullYear()),
    title: 'Yearly Journal',
    content: 'The yearly journal went well.'
}

const mockJournals: Journal[] = [
    dailyJournal,
    weeklyJournal,
    monthlyJournal,
    yearlyJournal
];

// Prompts
const mockPrompts: Prompt[] = [
    { id: 1, journalId: 1, prompt: 'What did you learn today?', response: 'I learned about Vue 3.' },
    { id: 2, journalId: 1, prompt: 'How do you feel?', response: 'Great!' },
    { id: 3, journalId: 2, prompt: 'What did you learn today?', response: 'I learned about Vue 3.' },
    { id: 4, journalId: 2, prompt: 'How do you feel?', response: 'Great!' },
];

// PromptTemplates
const mockPromptTemplates: PromptTemplate[] = [
    { id: 1, userId: 1, type: Periodicity.daily, prompt: 'What are your goals for today?' },
    { id: 2, userId: 1, type: Periodicity.weekly, prompt: 'What are your goals for this week?' },
];

// Todos
const mockTodos: Todo[] = [
    { id: 1, journalId: 1, title: 'Buy groceries', complete: false },
    { id: 2, journalId: 1, title: 'Buy groceries 2', complete: false },
    { id: 3, journalId: 2, title: 'Write a blog post', complete: true },
    { id: 4, journalId: 2, title: 'Write a blog post 2', complete: true },
];

// Habits
const mockHabits: Habit[] = [
    { id: 1, journalId: 1, title: 'Meditate', complete: false },
    { id: 2, journalId: 2, title: 'Exercise', complete: true },
];

// HabitTemplates
const mockHabitTemplates: HabitTemplate[] = [
    { id: 1, userId: 1, title: 'Drink water', type: Periodicity.daily },
    { id: 2, userId: 2, title: 'Read a book', type: Periodicity.monthly },
];

export function mockPopulateStores() {
    const usersStore = useUserStore();
    const journalsStore = useJournalsStore();
    const promptsStore = usePromptsStore();
    const promptTemplatesStore = usePromptTemplatesStore();
    const todosStore = useTodosStore();
    const habitsStore = useHabitsStore();
    const habitTemplatesStore = useHabitTemplatesStore();

    usersStore.login(mockUsers[0], 'fakeToken');
    journalsStore.set(mockJournals);
    promptsStore.set(mockPrompts);
    promptTemplatesStore.set(mockPromptTemplates);
    todosStore.set(mockTodos);
    habitsStore.set(mockHabits);
    habitTemplatesStore.set(mockHabitTemplates);
}

function getSunday(d: Date) {
    const day = d.getDay(), diff = d.getDate() - day
    return new Date(d.setDate(diff));
}
