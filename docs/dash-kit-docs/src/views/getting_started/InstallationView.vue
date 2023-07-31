<template>
    <Head>
        <Title>Installation</Title>
        <Meta name="description" content="PrimeVue is a rich set of open source components for Vue." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">


                <!-- <h1>Introduction</h1> -->
                <p>To start using Dash-kit in your Vue.js project, you can easily install it via npm or yarn. The following
                    commands demonstrate how to install Dash-kit:</p>
            </div>
            <DocSections :docs="docs" import />
        </div>
        <DocSectionNav :docs="docs" import />
    </div>
</template>

<script>
import InstallationDoc from '@/doc/installation/InstallationDoc.vue';
import UsageDoc from '@/doc/installation/UsageDoc.vue';
import ConfigurationDoc from '@/doc/installation/ConfigurationDoc.vue';
import UsePluginDoc from '@/doc/installation/UsePluginDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'installation',
                    label: 'Installation',
                    component: InstallationDoc
                },
                {
                    id: 'usage',
                    label: 'Usage Guide',
                    component: UsageDoc
                },
                {
                    id: 'configuration',
                    label: 'Configuration',
                    component: ConfigurationDoc
                },
                {
                    id: 'useplugin',
                    label: 'Use Plugin',
                    component: UsePluginDoc
                },
            ]
        };
    }
};
</script>
