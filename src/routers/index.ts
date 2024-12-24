import { createRouter, createWebHistory } from 'vue-router'
import TheJournal from '@/views/TheJournal.vue'

type Route = {
    params: {
        journalId: string
    }
}

const routes = [
    {
        path: '/journals/:journalId',
        name: 'journals',
        component: TheJournal,
        props: (route: Route) => ({ journalId: Number(route.params.journalId) }),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router