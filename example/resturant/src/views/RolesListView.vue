<script lang="ts">
import type { DeleteRestoreHandler, CrudOptions, ImportHandler } from "dash-kit/types";
import { useDataFetcherList } from "dash-kit/composables";
import { ExportCSV } from "dash-kit/helpers";
import { RoleDeleteRestoreRequest, RolesListRequest, RolesListResponse, RoleBulkCreateResponse } from "@models/v1/user/role_definitions_pb"
import apiClient from "@/api/ApiClient";
import DataView from 'primevue/dataview';
import { defineComponent, ref } from 'vue'
export default defineComponent({
    components: {
        DataView
    },
    setup() {
        const showDeletedData = ref(false)
        const { responseData, loading, error, fetchData } = useDataFetcherList<RolesListRequest, RolesListResponse>(apiClient.rolesList, {} as RolesListRequest);

        const crudOptions: CrudOptions = {
            title: 'roles_list',
            feature: 'role',
            showExportButton: true,
            showCreateButton: true,
            showDeletedFilter: true
        }

        const deleteRestoreHandler: DeleteRestoreHandler<RoleDeleteRestoreRequest> = {
            deleteRestore: apiClient.roleDeleteRestore,
            requestPropertyName: 'roleId',
        }

        const showDeletedHandler = (val: any) => {
            showDeletedData.value = val
        }

        const importHandler: ImportHandler<RoleBulkCreateRequest, RoleBulkCreateResponse> = {
            submit: apiClient.roleBulkCreate,
            importTemplateLink: "https://static.exploremelon.com/mln_rms/import-templates/Roles.xlsx",
        }


        const exportData = () => {
            const dataToExport = showDeletedData.value ? responseData.value?.deleteRoles as unknown[] : responseData.value?.roles as unknown[]
            ExportCSV(dataToExport)
        }

        return { deleteRestoreHandler, responseData, loading, error, fetchData, showDeletedData, crudOptions, showDeletedHandler, exportData, importHandler }
    }

})

</script>

<template>
    <app-crud :importHandler="importHandler" @imported="(_: any) => fetchData()" @showDeleted="showDeletedHandler"
        @export="exportData" :options="crudOptions">
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
            <data-view v-else-if="responseData?.roles" ref="dataview"
                :value="showDeletedData ? responseData!.deleteRoles : responseData!.roles" paginator layout="grid"
                dataKey="role_id" :rows="9">
                {{ responseData.roles }}

                <template #grid="slotProps">
                    <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                        <app-card @onDeleteRestore="(_: any) => fetchData()"
                            :class="{ 'app-card-restore': showDeletedData }" feature="role"
                            :deleteRestoreHandler="deleteRestoreHandler" :recordId="slotProps.data.roleId">
                            <template #start>
                                <div style="padding: 0.8rem;">
                                    <h4>{{ $t('permissions') }}</h4>
                                    <h3 class="font-bold">{{ slotProps.data.rolePermissions }}</h3>
                                    <h4>{{ $t('users') }}</h4>
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