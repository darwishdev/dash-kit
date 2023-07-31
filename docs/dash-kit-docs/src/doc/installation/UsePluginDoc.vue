<template>
    <DocSectionText v-bind="$attrs">
        <p>Now, you sssssss use the Dash-kit plugin inside your main.ts file. Import the Dash-kit package and pass the
            configuration object from the dashkit.config.ts file:</p>
    </DocSectionText>


    <DocSectionCode :code="code" importCode />
    <h1>Automatic Installations</h1>
    <p>After completing the steps above, Dash-kit will automatically install the required dependencies, including PrimeVue,
        Formkit, and Vue i18n, with the correct configurations. It will also add custom inputs to your Formkit
        configuration, such as file upload and permissions input.</p>
    <h1>Adding Routes</h1>
    <p>With Dash-kit installed and configured, you can start adding routes to your application and use the components from
        Dash-kit normally.</p>
    <h1>Global Components</h1>
    <p>Dash-kit provides some global components that you can use directly in your app. Additionally, some components may
        need to be imported before using them.</p>
    <h1> Multi-Language Support</h1>
    <p>By adding the translations to the locales directory (e.g., en.json and ar.json), Dash-kit will automatically support
        multi-language functionality.

        That's it! With these steps, you can effectively use Dash-kit to build powerful admin panels with seamless
        integration with your API and streamline various tasks like form generation, authentication, authorization, toast
        notifications, dialogs, and more. Enjoy the simplicity and efficiency of Dash-kit in your Vue.js projects!</p>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `// main.ts
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'dash-kit/style'
import '@/assets/scss/app.scss'
import DashKit from 'dash-kit'

import dashkitConfig from './dashkit.config'
const app = createApp(App)
app.use(router).use(DashKit, dashkitConfig)

app.mount('#app')`,

            },
        }
    }
};
</script>
