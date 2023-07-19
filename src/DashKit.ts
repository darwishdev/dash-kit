
import type { App } from "vue"
import * as components from "./components"

import PrimeVue from 'primevue/config'
export default {
    install: (app: App) => {
        app.use(PrimeVue)

        Object.keys(components).forEach((key: string) => {
            app.component(key, components[key as keyof typeof components])
        });
    }
}