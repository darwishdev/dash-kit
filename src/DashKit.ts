
import type { App } from "vue"
import AppLogo from '@/components/AppLogo.vue'

export default {
    install: (app: App) => {
        app.component("AppLogo", AppLogo)
    }
}