<script lang="ts">
import type { FormOptions, FindHandler, SubmitHandler } from 'dash-kit/types'
import type { RoleUpdateRequest, RoleFindRequest, RoleFindResponse, RoleUpdateResponse } from '@models/v1/user/role_definitions_pb'
import { defineComponent } from 'vue'
import apiClient from '@/api/ApiClient';
import RoleForm from '@/forms/RoleForm';
export default defineComponent({

    setup() {
        const { sections, toastHandler, errorHandler } = RoleForm
        const options: FormOptions = {
            id: 'role-update',
            title: "role_update"
        }
        const findHandler: FindHandler<RoleFindRequest, RoleFindResponse, any> = {
            findFunction: apiClient.roleFind,
            requestPropertyName: 'roleId',
        }
        const submitHandler: SubmitHandler<RoleUpdateRequest, RoleUpdateRequest, RoleUpdateResponse> = {
            submit: apiClient.roleUpdate,
            errorHandler
        }
        return { options, sections, toastHandler, findHandler, submitHandler }
    }
})

</script>

<template>
    <form-update :sections="sections" :findHandler="findHandler" :submitHandler="submitHandler" :toastHandler="toastHandler"
        :options="options" />
</template>