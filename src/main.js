import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes'
import store from '@/store'

import '@/assets/app.css'

const app = createApp(App)
app.use(router)
app.use(store)

import core from "@/core"
core(app)

app.mount('#app')
