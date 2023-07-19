import { createApp } from 'vue'
import App from '@/App.vue'
import DashKit from '@/DashKit'
import '@/assets/scss/app.scss'

const app = createApp(App)
app.use(DashKit)
app.mount('#app')
