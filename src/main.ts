import App from '@/App.vue'
import router from '@/routers/index.ts'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

import './assets/main.scss'
import {mockPopulateStores} from "@/mockData.ts";

library.add(fas)

const pinia = createPinia();
pinia.use(({ store }) => {
    if (store.$id === 'settings') {
        store.loadSettings();
    }
});

createApp(App)
    .use(pinia)
    .use(router)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .mount('#app')

if (import.meta.env.DEV) {
    mockPopulateStores();
}
