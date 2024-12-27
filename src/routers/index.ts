import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import TheJournal from '@/views/TheJournal.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: {
            name: 'journals'
        }
    },
    {
        path: '/journals/:journalId?',
        name: 'journals',
        component: TheJournal,
        props: route => {
            return {journalId: route.params.journalId ? Number.parseInt(route.params.journalId as string) : null}
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router