import { createApp } from 'vue'
import App from './App.vue'
import DashKit from 'dash-kit'
import router from './router'
import 'dash-kit/style'
import dashkitConfig from './dashkit.config'

const app = createApp(App)
app.use(DashKit, dashkitConfig).use(router)
app.mount('#app')
