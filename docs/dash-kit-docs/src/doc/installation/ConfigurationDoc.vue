<template>
    <DocSectionText v-bind="$attrs">
        <p>Create a configuration file for the Dash-kit plugin (e.g., dashkit.config.ts). In this file, you can set up
            various options for Dash-kit, including custom configurations for Formkit and translations for multi-language
            support. Below are the steps for configuring Dash-kit:

            a. Create the configuration file dashkit.config.ts and import the necessary dependencies:</p>
    </DocSectionText>
    <li>
        a. Create the configuration file dashkit.config.ts and import the necessary dependencies
    </li>

    <DocSectionCode :code="dashkit" importCode />
    <li>
        b.Configure Formkit: Create a configuration file for Formkit (e.g., formkit.config.ts). In this file, you can set up
        plugins and icons for Formkit
    </li>

    <DocSectionCode :code="formkit" importCode />
    <li>
        c. Add custom configurations for Dash-kit:
    </li>

    <DocSectionCode :code="customConfig" />
</template>

<script>
export default {
    data() {
        return {
            dashkit: {
                basic: `// dashkit.config.ts
import formKitConfig from './formkit.config'
import type { DashKitConfig } from 'dash-kit/types'
import en from '@/locales/en.json'
import ar from '@/locales/ar.json'
`,

            },
            formkit: {
                basic: `// formkit.config.ts
import { genesisIcons } from "@formkit/icons"
import type { DefaultConfigOptions } from '@formkit/vue'
import { createProPlugin, inputs } from '@formkit/pro'
const pro = createProPlugin(import.meta.env.VITE_FORMKIT_TOKEN, inputs)

const formKitConfig: DefaultConfigOptions = {
    plugins: [pro],
    icons: { ...genesisIcons },
}
`,

            },
            customConfig: {
                basic: `// dashkit.config.ts
const config: DashKitConfig = {
    formKitConfig,
    translations: {
        en,
        ar
    },
}
export default config`,

            }
        };
    }
};
</script>
