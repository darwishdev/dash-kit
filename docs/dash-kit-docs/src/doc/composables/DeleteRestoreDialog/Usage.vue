<script setup lang="ts">
import type { DeleteRestoreHandler } from 'dash-kit/types'
import type { RoleDeleteRestoreRequest  } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';
import { useDialog } from 'primevue/usedialog';
import {useDeleteRestoreDialog} from 'dash-kit/composables';

const code : any = {
    basic : `
<script setup lang="ts">
import type { RolesListRequest , RolesListResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock'; // replace with your api client
import { useDataFetcherList } from 'dash-kit/composables';

const { responseData, loading, error, fetchData } = useDataFetcherList<RolesListRequest, RolesListResponse>(apiClient.rolesList, {} as RolesListRequest);

<\/script>

<template>
    <div class="my-5" v-if="loading">
        <h1>Loading Data...</h1>
    </div>
    <div v-else-if="error">
        <h1>Sorry, there is an error ocurred while fetching data</h1>
    </div>
    <div class="my-5" v-else>
        {{ responseData }}
    </div>
    <div class="text-center m-auto my-5">
        <button @click="fetchData" class="p-3 border-radius">Fetch again</button>
    </div>
<\/template>

`
}
const deleteRestoreHandler: DeleteRestoreHandler<RoleDeleteRestoreRequest> = {
    deleteRestore: apiClient.roleDeleteRestore,
    requestPropertyName: 'roleId',
}

const deleteRestoreDialogParm = {
                onConfirmed: () => {
                    console.log('role deleted successfully');
                },
                deleteRestoreHandler: deleteRestoreHandler,
                useDialog,
                recordId: 1,
}

const openDialog = () => {
    const deleteRestoreDialog = useDeleteRestoreDialog(deleteRestoreDialogParm);
    deleteRestoreDialog.openDialog()
}

</script>
<template>
    <DocSectionText v-bind="$attrs">
        <p>Try using dataFetcherList composable function to list roles data</p>
    </DocSectionText>
    <div class="text-center">
        <h1>Role #1</h1>
        <div class="text-center m-auto my-5">
            <button @click="openDialog" class="p-3 border-radius">Delete Role</button>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>
