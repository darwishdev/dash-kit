import { createApp } from 'vue'
import App from '@/App.vue'
import DashKit from '@/DashKit'
import '@/assets/scss/app.scss'
import router from './router'
import dashkitConfig from './dashkit.config'

const app = createApp(App)
app.use(DashKit, dashkitConfig)
    .use(router)
app.mount('#app')
