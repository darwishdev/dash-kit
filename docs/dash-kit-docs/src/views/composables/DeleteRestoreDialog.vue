<template>
    <DocComponent title="DeleteRestoreDialog" header="DeleteRestoreDialog"
        description="The deleteRestoreDialog composable file is a powerful tool designed to streamline the process of confirming deletion 
        processes in the application. This file is responsible for displaying a dynamic dialog that confirms the deletion of a selected row 
        by popping up a confirmation dialog and handling the delete-restore action itself by invoking the feature deleteRestore api function." :componentDocs="docs"
    :ptTabComponent="ptComponent" />
</template>

<script>
import Usage from '../../doc/composables/DeleteRestoreDialog/Usage.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'Usage',
                    label: 'Usage',
                    component: Usage
                },
            ],
        };
    }
};
</script>