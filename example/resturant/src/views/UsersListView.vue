<script setup lang="ts">
import type { DeleteRestoreHandler, CrudOptions, FormFilterParams } from "dash-kit/types";
import { useDataFetcherList } from "dash-kit/composables";
import { ExportCSV } from "dash-kit/helpers";
import { UserDeleteRestoreRequest, UsersListRequest, UsersListResponse } from "@models/v1/user/user_definitions_pb"
import apiClient from "@/api/ApiClient";
import DataView from 'primevue/dataview';
import { ref } from 'vue'
import { FormKitSchemaNode } from '@formkit/core'

const showDeletedData = ref(false)
const { responseData, loading, error, fetchData } = useDataFetcherList<UsersListRequest, UsersListResponse>(apiClient.usersList, {} as UsersListRequest);
const crudOptions: CrudOptions = {
    title: 'users_list',
    feature: 'user',
    showExportButton: true,
    showCreateButton: true,
    showDeletedFilter: true
}

const filterModel = ref({})
const modelDisplay = ref({})



const filterFormInputs: FormKitSchemaNode[] = [
    {
        $formkit: 'text',
        outerClass: "col-4",
        name: 'userName',
        label: 'by username',
        placeholder: 'filter by username',

    },
    {
        $formkit: 'text',
        outerClass: "col-4",
        name: 'userPhone',
        label: 'by phone number',
        placeholder: 'filter by phone number',
    },
    {
        $formkit: 'text',
        outerClass: "col-4",
        name: 'userEmail',
        label: 'by email address',
        placeholder: 'filter by email address',
    },
]

const filterForm: FormFilterParams = {
    options: {
        showActiveFilters: true,
        showClearFilters: true
    },
    inputs: filterFormInputs,
    modelValue: filterModel,
    displayValue: modelDisplay
}

const deleteRestoreHandler: DeleteRestoreHandler<UserDeleteRestoreRequest> = {
    deleteRestore: apiClient.userDeleteRestore,
    requestPropertyName: 'userId',
}

const showDeletedHandler = (val: any) => {
    showDeletedData.value = val
}

const filtered = (filterObject : object) => {
    console.log(filterObject);   
}
const removeFilter = (filter : string) => {
    console.log(filter);   
}

const exportData = () => {
    const dataToExport = showDeletedData.value ? responseData.value?.deletedUsers as unknown[] : responseData.value?.users as unknown[]
    ExportCSV(dataToExport)
}
</script>

<template>
    <!-- {{ responseData }} -->
    <app-crud @imported="(_: any) => fetchData()" @showDeleted="showDeletedHandler"
        @export="exportData" :filterForm="filterForm" @filtered="filtered" @removeFilter="removeFilter" :options="crudOptions">
        <template #data>
            <div class="grid" v-if="loading">
                Loading
                <app-card-loading class="col " v-for="i in 3" :key="i" />
            </div>
            <div v-else-if="error">
                <div class="error text-center">
                    <logo-error class=" mt-4" />
                    <h2 class="text-3xl"> {{ $t("list_error") }}</h2>
                    <i class="pi pi-refresh text-3xl mt-4 cursor-pointer" @click="fetchData"></i>
                </div>
            </div>
            <data-view v-else-if="responseData?.users" ref="dataview"
                :value="showDeletedData ? responseData!.deletedUsers : responseData!.users" paginator layout="grid"
                dataKey="user_id" :rows="9">
                <template #grid="slotProps">
                    <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                        <app-card @onDeleteRestore="(_: any) => fetchData()"
                            :class="{ 'app-card-restore': showDeletedData }" feature="user"
                            :deleteRestoreHandler="deleteRestoreHandler" :recordId="slotProps.data.userId">
                            <template #end>
                                <div class="flex flex-column text-center py-3 ">
                                    <router-link :to="{ name: 'user_view', params: { id: slotProps.data.userId } }" :title="slotProps.data.userName">
                                        {{slotProps.data.userName}}
                                    </router-link>
                                    <h3 class="my-1">{{ slotProps.data.userEmail }}</h3>
                                    <h4 class="mt-4">{{ slotProps.data.userPhone }}</h4>
                                </div>
                                
                                
                            </template>
                        </app-card>
                    </div>
                </template>
            </data-view>
        </template>
    </app-crud>
</template>