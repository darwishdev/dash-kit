<script setup lang="ts">
import apiClient from '@/api/ApiMock';
import DataView from 'primevue/dataview';
import { ref } from 'vue'
import { FormKitSchemaNode } from '@formkit/core'
import { ExportCSV } from '@/utils/helpers'
import type {
    RoleCreateRequest, RoleBulkCreateRequest, RoleBulkCreateResponse, RoleCreateResponse, RolesListRequest, RolesListResponse, RoleDeleteRestoreRequest, RoleUpdateRequest, RoleUpdateResponse, RoleFindRequest, RoleFindResponse
} from '@/api/ApiTypes';
// import LogoError from '@/assets/logo-error.svg'
import RoleForm from './RoleForm'
import type { DeleteRestoreHandler, ImportHandler, FormFilterParams, FormCreateParams, CrudOptions, SubmitHandler, FormUpdateParams, FormOptions, FindHandler } from '@/types/types'

import { useDataFetcherList } from '@/composables/composables'
const dataview = ref()
const { errorHandler, sections, toastHandler } = RoleForm
const updateFormSubmitHandler: SubmitHandler<RoleUpdateRequest, RoleUpdateRequest, RoleUpdateResponse> = {
    submit: apiClient.roleUpdate,
    errorHandler,
}
const showDeletedData = ref(false)

const createFormSubmitHandler: SubmitHandler<RoleCreateRequest, RoleCreateRequest, RoleCreateResponse> = {
    submit: apiClient.roleCreate,
    errorHandler,
}
const crudOptions: CrudOptions = {
    title: 'roles_list',
    feature: 'role',
    showExportButton: true,
    showCreateButton: true,
    showDeletedFilter: true
}

const filterModel = ref({ roleName: "asms" })
const modelDisplay = ref({})



const filterFormInputs: FormKitSchemaNode[] = [
    {
        $formkit: 'text',
        outerClass: "col-6",
        name: 'roleName',
        label: 'roleNameLabel',
        placeholder: 'roleNamePlaceholder',

    },
    {
        $formkit: 'textarea',
        outerClass: "col-6",
        name: 'roleDescription',
        label: 'roleDescriptionLabel',
        placeholder: 'roleDescriptionPlaceholder',
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
const deleteRestoreHandler: DeleteRestoreHandler<RoleDeleteRestoreRequest> = {
    deleteRestore: apiClient.roleDeleteRestore,
    indentifierPropertyName: 'roleId',

}
const updateFormFindHandler: FindHandler<RoleFindRequest, RoleFindResponse, any> = {
    findFunction: apiClient.roleFind,
    requestPropertyName: 'roleId',
    requestValue: 1,
}

const upateOptions: FormOptions = {
    id: "role-update",
    title: "role_update",
}
const updateForm: FormUpdateParams = {
    sections: sections,
    options: upateOptions,
    submitHandler: updateFormSubmitHandler,
    findHandler: updateFormFindHandler,
    toastHandler: toastHandler,
}

const createForm: FormCreateParams = {
    sections: sections,
    options: upateOptions,
    submitHandler: createFormSubmitHandler,
    toastHandler: toastHandler,
}
const { responseData, loading, error, fetchData } = useDataFetcherList<RolesListRequest, RolesListResponse>(apiClient.rolesList, {} as RolesListRequest);


function onDialogSubmitted(recordId: number) {
    console.log(recordId)
}

const showDeletedHandler = (val: any) => {
    showDeletedData.value = val
}

const exportData = () => {
    const data = showDeletedData.value ? responseData.value?.deleteRoles as unknown[] : responseData.value?.roles as unknown[]
    ExportCSV(data)
}
const importHandler: ImportHandler<RoleBulkCreateRequest, RoleBulkCreateResponse> = {
    submit: apiClient.roleBulkCreate,
    importTemplateLink: "https://static.exploremelon.com/mln_rms/import-templates/Roles.xlsx",
} 
</script>

<template>
    <app-crud :importHandler="importHandler" @showDeleted="showDeletedHandler" @export="exportData" :options="crudOptions"
        :createForm="createForm" :filterForm="filterForm">
        <template #data>
            <div class="grid" v-if="loading">
                <app-card-loading class="col " v-for="i in 3" :key="i" />
            </div>
            <div v-else-if="error">
                <div class="error text-center">
                    <logo-error class=" mt-4" />
                    <h2 class="text-3xl"> {{ $t("list_error") }}</h2>
                    <i class="pi pi-refresh text-3xl mt-4 cursor-pointer" @click="fetchData"></i>
                </div>
            </div>
            <data-view v-else-if="responseData?.roles" ref="dataview"
                :value="showDeletedData ? responseData!.deleteRoles : responseData!.roles" paginator layout="grid"
                dataKey="role_id" :rows="9">
                <template #grid="slotProps">
                    <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                        <app-card :class="{ 'app-card-restore': showDeletedData }" feature="role"
                            :deleteRestoreHandler="deleteRestoreHandler" :updateForm="updateForm"
                            :recordId="slotProps.data.roleId" @onDialogSubmitted="onDialogSubmitted">
                            <template #start>
                                <div style="padding: 0.8rem;">
                                    <h4>Permissions</h4>
                                    <h3 class="font-bold">{{ slotProps.data.rolePermissions }}</h3>
                                    <h4>Users</h4>
                                    <h3 class="font-bold">{{ slotProps.data.roleUsers }}</h3>
                                </div>
                            </template>
                            <template #end>
                                <router-link :to="{ name: 'role_update', params: { id: slotProps.data.roleId } }"
                                    :title="slotProps.data.roleName">{{
                                        slotProps.data.roleName
                                    }}</router-link>
                            </template>
                        </app-card>
                    </div>
                </template>
            </data-view>
        </template>
    </app-crud>
</template>