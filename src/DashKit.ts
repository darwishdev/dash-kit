
import type { App } from "vue"
import * as components from "./components"
import i18n from '@/plugins/i18n'
import PrimeVue from 'primevue/config'
export default {
    install: (app: App) => {
        app.use(PrimeVue)
            .use(i18n)


        app.provide('i18n', i18n)

        Object.keys(components).forEach((key: string) => {
            app.component(key, components[key as keyof typeof components])
        });
    }
}