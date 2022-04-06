import { createApp } from 'vue'
import App from './App.vue'

import '@/assets/app.css'

const app = createApp(App)

import core from "@/core"
core(app)

app.mount('#app')
