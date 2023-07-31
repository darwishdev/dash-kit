<template>
    <DocSectionText v-bind="$attrs">
        <ol class="p-pl-3">
            <li><strong>Authentication and Authorization Made Easy</strong>:<br /> Dash-kit takes care of the heavy lifting
                when
                it comes to
                authentication and authorization. By providing the right configurations, the package can cache user
                permissions and sidebar items to show users only the pages they are permitted to access. Upon receiving
                login responses with a list of permissions and sidebar items, Dash-kit will automatically cache this data
                and manage everything for you.</li>
            <li><strong>Effortless Form Generation</strong>:<br /> One of the standout features of Dash-kit is its seamless
                form generation
                capabilities. It offers high-level form components that handle form submissions, error handling, success
                notifications, redirection, and more. This headless approach means you won't need to write complex template
                code, allowing you to quickly generate forms with ease.</li>
            <li><strong>Toast Notifications and Dialogs</strong>:<br /> Dash-kit seamlessly handles toast notifications and
                dialogs, making it easy to provide users with important feedback and interaction prompts. With just a
                few configurations, you can display success messages, error alerts, and confirmation dialogs, enhancing
                the user experience.</li>
            <li><strong>Composables for Repetitive Tasks</strong>:<br /> Dash-kit provides a set of composables that
                simplify
                repetitive tasks and interactions with your API. These include composables to use dialogs for creating,
                updating, and deleting/restoring records, as well as data fetcher composables for listing and finding
                data.</li>
            <li><strong>Headless CRUD Component</strong>:<br /> Dash-kit offers a headless CRUD component that enables you
                to
                import, export, and list data from your API effortlessly. The CRUD component abstracts the complexities
                of data management, allowing you to focus on implementing specific functionalities.</li>
        </ol>

    </DocSectionText>
    <!-- <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz /> -->
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `// with npm
npm install primevue

// with yarn
yarn add primevue`
            }
        };
    }
};
</script>
