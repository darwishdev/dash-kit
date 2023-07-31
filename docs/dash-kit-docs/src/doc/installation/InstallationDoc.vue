<template>
    <DocSectionText v-bind="$attrs">
        <p>To install Dash-kit in your Vue.js project using npm, run the following command in your terminal:</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
    <p>Once the installation is complete, you can import and use Dash-kit components in your project.</p>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `inpm install dash-kit`
            }
        };
    }
};
</script>
