
import type { App } from "vue"
import * as components from "./components"
import * as formComponents from "./components/forms"
import FormFactory from "@/utils/form/FormFactory"
import i18n from '@/plugins/i18n'
import PrimeVue from 'primevue/config'
import { plugin, defaultConfig } from '@formkit/vue'
import getWrappedConfig, { getDefaultConfig } from '@/formkit.custom.config'
import ToastService from 'primevue/toastservice';
import { DashKitConfig } from "./types/types"
import type { DefaultConfigOptions } from '@formkit/vue'

export default {

    install: (app: App, config: DashKitConfig) => {
        const activateFileUpload = config && typeof config.uploadHandler != 'undefined'
        let formKitConfig: DefaultConfigOptions
        if (config && config.formKitConfig) {
            formKitConfig = getWrappedConfig(config.formKitConfig, { activateFileUpload })
        } else {
            formKitConfig = getWrappedConfig(getDefaultConfig(), { activateFileUpload })
        }
        app.use(PrimeVue)
            .use(i18n)
            .use(ToastService)
            .use(plugin, defaultConfig(formKitConfig))
        FormFactory.InitTranslation(i18n)


        if (config.loginApiCall) {
            app.provide('loginApiCall', config.loginApiCall)
        }
        app.provide('i18n', i18n)
        Object.keys(components).forEach((key: string) => {
            app.component(key, components[key as keyof typeof components])
        });
        Object.keys(formComponents).forEach((key: string) => {
            app.component(key, formComponents[key as keyof typeof formComponents])
        });
    }
}