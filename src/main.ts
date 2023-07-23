import { createApp } from 'vue'
import App from '@/App.vue'
import DashKit from '@/DashKit'
import '@/assets/scss/app.scss'
import router from './router'

import formKitConfig from './formkit.config'

const app = createApp(App)
app.use(DashKit, { formKitConfig })
    .use(router)
app.mount('#app')
