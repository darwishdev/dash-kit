import { createApp } from 'vue'
import App from './App.vue'
import DashKit from 'dash-kit'

const app = createApp(App)
app.use(DashKit)
app.mount('#app')
