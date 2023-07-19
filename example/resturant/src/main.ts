import { createApp } from 'vue'
import App from './App.vue'
import DashKit from 'dash-kit'
import 'dash-kit/style'

const app = createApp(App)
app.use(DashKit)
app.mount('#app')
