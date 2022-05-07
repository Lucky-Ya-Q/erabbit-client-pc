import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/styles/index.less'

import xtxui from '@/components/library'

createApp(App).use(store).use(router).use(xtxui).mount('#app')
