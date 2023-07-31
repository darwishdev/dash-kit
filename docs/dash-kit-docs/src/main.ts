import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'dash-kit/style'
import '@/assets/scss/app.scss'
import DashKit from 'dash-kit'
import * as components from "./components"

import dashkitConfig from './dashkit.config'
const app = createApp(App)
app.use(router).use(DashKit, dashkitConfig)


Object.keys(components).forEach((key: string) => {
    app.component(key, components[key as keyof typeof components])
});
app.mount('#app')
