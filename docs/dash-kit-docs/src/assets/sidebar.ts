export default [
    {
        key: "1", label: "Getting Started", icon: "pi pi-fw pi-user", to: null,
        items: [
            { key: "1.0", label: "Introduction", icon: "pi pi-fw pi-info-circle", to: "/getting-started/introduction" },
            { key: "1.1", label: "Installation", icon: "pi pi-fw pi-download", to: "/getting-started/installation" },
            { key: "1.2", label: "Configuration", icon: "pi pi-fw pi-cog", to: "/getting-started/configuration" },
        ]
    },
    {
        key: "2", label: "Components", icon: "pi pi-fw pi-th-large", to: null,
        items: [
            {
                key: "2.0", label: "Forms", icon: "pi pi-fw pi-file", to: null,
                items: [
                    { key: "2.0.0", label: "Input Permissions", icon: "pi pi-fw pi-users", to: "/input-permissions" },
                    { key: "2.0.1", label: "Input File", icon: "pi pi-fw pi-file", to: "/input-file" },
                    { key: "2.0.2", label: "Form Create", icon: "pi pi-fw pi-plus", to: "/form-create" },
                    { key: "2.0.3", label: "Form Update", icon: "pi pi-fw pi-pencil", to: "/form-update" },
                    { key: "2.0.4", label: "Form Filter", icon: "pi pi-fw pi-filter", to: "/form-filter" },
                    { key: "2.0.5", label: "Form Loading", icon: "pi pi-fw pi-spinner", to: "/form-loading" },
                    { key: "2.0.6", label: "Form Error", icon: "pi pi-fw pi-times-circle", to: "/form-error" },
                ]
            },
            {
                key: "2.1", label: "Base", icon: "pi pi-fw pi-clone", to: null,
                items: [
                    { key: "2.1.0", label: "App Layout", icon: "pi pi-fw pi-th-large", to: "/base/app-layout" },
                    { key: "2.1.1", label: "App Nav", icon: "pi pi-fw pi-bars", to: "/app-nav" },
                    { key: "2.1.2", label: "App Menu", icon: "pi pi-fw pi-bars", to: "/app-menu" },
                    { key: "2.1.3", label: "App Card", icon: "pi pi-fw pi-id-card", to: "/app-card" },
                    { key: "2.1.4", label: "App CRUD", icon: "pi pi-fw pi-table", to: "/app-crud" },
                    { key: "2.1.5", label: "Icon Btn", icon: "pi pi-fw pi-image", to: "/icon-btn" },
                ]
            },
        ]
    },
    {
        key: "3", label: "Composables", icon: "pi pi-fw pi-cog", to: null,
        items: [
            { key: "3.0", label: "DataFetcherList", icon: "pi pi-fw pi-list", to: "/data-fetcher-list" },
            { key: "3.1", label: "DataFetcherFind", icon: "pi pi-fw pi-search", to: "/data-fetcher-find" },
            { key: "3.2", label: "DeleteRestoreDialog", icon: "pi pi-fw pi-trash", to: "/delete-restore-dialog" },
            { key: "3.3", label: "DialogUpdate", icon: "pi pi-fw pi-pencil", to: "/dialog-update" },
            { key: "3.4", label: "DialogCreate", icon: "pi pi-fw pi-plus", to: "/dialog-create" },
        ]
    },
    {
        key: "4", label: "Helpers", icon: "pi pi-fw pi-question-circle", to: null,
        items: [
            { key: "4.0", label: "FormFactory", icon: "pi pi-fw pi-cogs", to: "/form-factory" },
            { key: "4.1", label: "Filter", icon: "pi pi-fw pi-filter", to: "/filter" },
            { key: "4.2", label: "handleSuccessToast", icon: "pi pi-fw pi-check-circle", to: "/handle-success-toast" },
            { key: "4.3", label: "getRouteVariation", icon: "pi pi-fw pi-route", to: "/get-route-variation" },
            { key: "4.4", label: "parseDate", icon: "pi pi-fw pi-calendar", to: "/parse-date" },
            { key: "4.5", label: "Can", icon: "pi pi-fw pi-key", to: "/can" },
            { key: "4.6", label: "authMiddleware", icon: "pi pi-fw pi-user-check", to: "/auth-middleware" },
            { key: "4.7", label: "ExportCSV", icon: "pi pi-fw pi-upload", to: "/export-csv" },
            { key: "4.8", label: "ParseFile", icon: "pi pi-fw pi-download", to: "/parse-file" },
        ]
    },
    { key: "5", label: "Contribution", icon: "pi pi-fw pi-external-link", to: "/contribution" },
]
