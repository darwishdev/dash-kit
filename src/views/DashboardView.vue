<script setup lang="ts">
// import { useToast } from 'primevue/usetoast';
import useDeleteRestoreDialog from '@/composables/useDeleteRestoreDialog';
import type { deleteRestoreDialogParms } from '@/composables/useDeleteRestoreDialog';
import apiClient from '@/api/ApiMock';
import { RoleDeleteRestoreRequest } from '@/api/ApiTypes';
import { DeleteRestoreHandler } from '@/types/types'
// import { useDialog } from 'primevue/usedialog';
// const toast = useToast()
import { useDialog } from 'primevue/usedialog';

let deleteRestoreDialog = undefined as any

const deleteRestoreHandler: DeleteRestoreHandler<RoleDeleteRestoreRequest> = {
    deleteRestore: apiClient.roleDeleteRestore,
    requestPropertyName: 'roleId'
}
const deleteRestoreDialogParm: deleteRestoreDialogParms = {
    onConfirmed: () => {
        console.log("confirmed")
    },
    deleteRestoreHandler,
    useDialog,
    recordId: 2,
}
deleteRestoreDialog = useDeleteRestoreDialog(deleteRestoreDialogParm);
const showToast = () => {
    deleteRestoreDialog.openDialog()

}


</script>
<template>
    <h2 @click="showToast">
        {{ $t('dashboard') }}
    </h2>
</template>