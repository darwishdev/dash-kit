<template>
    <Head>
        <Title>Configuration</Title>
        <Meta name="description" content="PrimeVue is a rich set of open source components for Vue." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Configuration</h1>
                <p>The Dash-kit package offers various configuration options to customize and enhance its functionalities.
                    Here is a
                    detailed guide on how to set up the configuration for Dash-kit
                </p>
            </div>
            <DocSections :docs="docs" import />
        </div>
        <DocSectionNav :docs="docs" import />
    </div>
</template>

<script>
import UploadHandlerDoc from '@/doc/configuration/UploadHandlerDoc.vue';
import TranslationsDoc from '@/doc/configuration/TranslationsDoc.vue';
import LoginHandlerDoc from '@/doc/configuration/LoginHandlerDoc.vue';
import FormkitConfigDoc from '@/doc/configuration/FormkitConfigDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'formkit-config',
                    label: 'Formkit Config',
                    component: FormkitConfigDoc
                },
                {
                    id: 'translations',
                    label: 'Translations',
                    component: TranslationsDoc
                },
                {
                    id: 'upload-handler',
                    label: 'Upload Handler',
                    component: UploadHandlerDoc
                },

                {
                    id: 'login-handler',
                    label: 'Login Handler ',
                    component: LoginHandlerDoc
                },
            ]
        };
    }
};
</script>
