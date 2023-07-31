<template>
    <DocSectionText v-bind="$attrs">
        <p>The Dash-kit package offers various configuration options to customize and enhance its functionalities. Here is a
            detailed guide on how to set up the configuration for Dash-kit:</p>
    </DocSectionText>
    <h1>
        1. Formkit Configuration
    </h1>
    <p>
        The formKitConfig is a crucial part of the Dash-kit configuration, as it handles the integration with Formkit. You
        can configure various options for Formkit and wrap it with plugins and custom inputs provided by Dash-kit. Here's
        how you can set up the formKitConfig:
    </p>

    <DocSectionCode :code="formkit" importCode />

    <h1>
        2. Translations Configuration
    </h1>
    <p>
        Dash-kit supports multi-language functionality by utilizing Vue i18n. To enable translations, create locale JSON
        files (e.g., en.json and ar.json) in the locales directory of your project. These files will contain the
        translations for different strings used in your application. Here's an example of the en.json and ar.json files:
    </p>

    <DocSectionCode :code="enCode" importCode />
    <DocSectionCode :code="arCode" importCode />

    <h1>
        3. Upload Handler Configuration
    </h1>
    <p>
        The uploadHandler allows you to utilize the custom FileUpload input provided by Dash-kit. It consists of three
        functions:
    </p>
    <h3>
        3.1 fileUpload
    </h3>
    <p>
        This function makes an API call to upload a new file to the server. It takes a request of type FileUploadRequest
        containing the fileName and fileData (the file as a Uint8Array). The response will be of type FileUploadResponse,
        which contains the fileName of the uploaded file on the server.
    </p>
    <h3>
        3.2 fileRemove
    </h3>
    <p>
        The fileRemove function is responsible for deleting a file from the server by its path. It takes a request of type
        FileRemoveRequest, and the response can be of any type (e.g., FileRemoveResponse). This function will be called when
        the user removes a file from the FileUpload input.
    </p>
    <h3>
        3.3 baseImageUrl
    </h3>
    <p>
        The baseImageUrl is the base URL used to load images dynamically from any server or CDN. It provides the root path
        for loading images when using the FileUpload input.
    </p>

    <p>
        Here's how you can set up the uploadHandler in the dashkit.config.ts file:
    </p>

    <DocSectionCode :code="enCode" importCode />
    <DocSectionCode :code="arCode" importCode />
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
            enCode: {
                basic: `// locales/en.json
{
    "dashboard": "Dashboard",
    "logout": "Logout",
    "submit": "Submit",
    // Add other translations here
}
`,

            },
            arCode: {
                basic: `// locales/ar.json
{
    "dashboard": "لوحة التحكم",
    "logout": "تسجيل خروج",
    "submit": "تأكيد",
    // Add other translations here
}
`,

            },
            uploadCode: {
                basic: `// dashkit.config.ts
import type { UploadHandler } from 'dash-kit/types';
import apiClient from './api/ApiClient'; // Replace with your API client

const uploadHandler: UploadHandler = {
    fileUpload: apiClient.fileUpload,
    fileRemove: apiClient.fileRemove,
    baseImageUrl: import.meta.env.VITE_IMG_URL, // Replace with the appropriate base image URL
};
`
            }
        };
    }
};
</script>
