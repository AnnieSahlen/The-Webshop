import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaFlag, RiZhihuFill } from 'oh-vue-icons/icons'

addIcons(FaFlag, RiZhihuFill)

createApp(App).use(router).use(store).mount('#app')

const app = createApp(App)
app.componenent('v-icon', OhVueIcon)
// Ovanstående två rader är för bootstrap. Se https://oh-vue-icons.js.org/docs. Kan jag lägga in dessa två rade i rad 12?
