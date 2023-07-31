<template>
    <Head>
        <Title>Getting Started - PrimeVue</Title>
        <Meta name="description" content="PrimeVue is a rich set of open source components for Vue." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Introduction</h1>
                <p>Dash-kit is a powerful and versatile npm package designed to streamline the development of admin panels
                    and make the process more efficient. With Dash-kit, you can easily create feature-rich admin interfaces
                    with seamless integration with your API, making it agnostic to the backend language. The package handles
                    API calls, authentication, authorization, toast notifications, dialogs, and more, allowing you to focus
                    on building the core functionalities of your application.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import FeaturesDoc from '@/doc/introduction/FeaturesDoc.vue';
import DependenciesDoc from '@/doc/introduction/DependenciesDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'features',
                    label: 'Key Features',
                    component: FeaturesDoc
                },
                {
                    id: 'dependencies',
                    label: 'Dependencies',
                    component: DependenciesDoc
                },
            ]
        };
    }
};
</script>
