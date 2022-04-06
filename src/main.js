import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes'

import '@/assets/app.css'

const app = createApp(App)
app.use(router)

import core from "@/core"
core(app)

app.mount('#app')
