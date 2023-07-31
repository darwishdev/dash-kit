<template>
    <DocSectionText v-bind="$attrs">
        <p>Dash-kit supports multi-language functionality by utilizing Vue i18n. To enable translations, create locale JSON
            files (e.g., en.json and ar.json) in the locales directory of your project. These files will contain the
            translations for different strings used in your application. Here's an example of the en.json and ar.json files:
        </p>
    </DocSectionText>
    <DocSectionCode :code="enCode" importCode />
    <DocSectionCode :code="arCode" importCode />
</template>

<script>
export default {
    data() {
        return {
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
        };
    }
};
</script>
