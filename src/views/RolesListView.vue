<script setup lang="ts">
import apiClient from '@/api/ApiMock';
import { ref } from 'vue'
import { FormKitSchemaNode } from '@formkit/core'
import type {
    RolesListRequest, RolesListResponse, RoleDeleteRestoreRequest, RoleUpdateRequest, RoleUpdateResponse, RoleFindRequest, RoleFindResponse
} from '@/api/ApiTypes';
// import LogoError from '@/assets/logo-error.svg'
import RoleForm from './RoleForm'
import type { DeleteRestoreHandler, SubmitHandler, FormUpdateParams, FormOptions, FindHandler } from '@/types/types'

import { useDataFetcherList } from '@/composables/composables'
const { errorHandler, sections, toastHandler } = RoleForm
const updateFormSubmitHandler: SubmitHandler<RoleUpdateRequest, RoleUpdateRequest, RoleUpdateResponse> = {
    submit: apiClient.roleUpdate,
    errorHandler,
}

const filterModel = ref({ roleName: "asms" })
const modelDisplay = ref({})



const filterForm: FormKitSchemaNode[] = [
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
const deleteRestoreHandler: DeleteRestoreHandler<RoleDeleteRestoreRequest> = {
    deleteRestore: apiClient.roleDeleteRestore,
    requestPropertyName: 'roleId',

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
const { responseData, loading, error } = useDataFetcherList<RolesListRequest, RolesListResponse>(apiClient.rolesList, {} as RolesListRequest);


function onDialogSubmitted(recordId: number) {
    console.log(recordId)
}
</script>

<template>
    <form-filter v-model="filterModel" v-model:modelDisplay="modelDisplay"
        :options="{ showActiveFilters: true, showClearFilters: true }" :inputs="filterForm" />

    {{ modelDisplay }}
    {{ filterModel }}
    <div class="grid" v-if="loading">
        <!-- <app-card-loading class="col " v-for="i in 3" :key="i" /> -->
        loading
    </div>
    <div v-else-if="error">
        <!-- <div class="error text-center">
            <logo-error class=" mt-4" />
            <h2 class="text-3xl"> {{ $t("list_error") }}</h2>
            <i class="pi pi-refresh text-3xl mt-4 cursor-pointer" @click="fetchData"></i>
        </div> -->
        error
    </div>
    <div v-else>

        <app-card v-for="role in responseData!.roles" :key="role.roleId" :deleteRestoreHandler="deleteRestoreHandler"
            :updateForm="updateForm" :recordId="role.roleId" @onDialogSubmitted="onDialogSubmitted">
            <template #start>
                <div style="padding: 0.8rem;">
                    <h4>Permissions</h4>
                    <h3 class="font-bold">{{ role.rolePermissions }}</h3>
                    <h4>Users</h4>
                    <h3 class="font-bold">{{ role.roleUsers }}</h3>
                </div>
            </template>
            <template #end>
                <router-link :to="{ name: 'role_update', params: { id: role.roleId } }" :title="role.roleName">{{
                    role.roleName
                }}</router-link>
            </template>
        </app-card>
    </div>
</template>