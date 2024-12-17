import App from '@/App.vue'
import router from '@/router.ts'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

import './assets/main.scss'

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
