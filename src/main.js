import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from './node_modules/bootstrap'

createApp(App).use(router).use(store).use(bootstrap).mount('#app')
