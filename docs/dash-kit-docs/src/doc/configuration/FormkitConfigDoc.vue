<template>
    <DocSectionText v-bind="$attrs">
        <p>The formKitConfig is a crucial part of the Dash-kit configuration, as it handles the integration with Formkit.
            You
            can configure various options for Formkit and wrap it with plugins and custom inputs provided by Dash-kit.
            Here's
            how you can set up the formKitConfig:</p>
    </DocSectionText>
    <DocSectionCode :code="formkit" importCode />
</template>

<script>
export default {
    data() {
        return {

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
        };
    }
};
</script>
