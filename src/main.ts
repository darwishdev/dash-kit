import { createApp } from 'vue'
import App from '@/App.vue'
import DashKit from '@/DashKit'
import '@/assets/scss/app.scss'
import router from './router'


const app = createApp(App)
app.use(DashKit)
    .use(router)
app.mount('#app')
