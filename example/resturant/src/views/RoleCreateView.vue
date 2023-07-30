<script lang="ts">
import type { FormOptions, SubmitHandler } from 'dash-kit/types'
import type { RoleCreateRequest, RoleCreateResponse } from '@models/v1/user/role_definitions_pb'
import { defineComponent } from 'vue'
import apiClient from '@/api/ApiClient';
import RoleForm from '@/forms/RoleForm';
export default defineComponent({

    setup() {
        const { sections, toastHandler, errorHandler } = RoleForm
        const options: FormOptions = {
            id: 'role-create',
            allowBulkCreate: true,
            title: "role_create"
        }


        const submitHandler: SubmitHandler<RoleCreateRequest, RoleCreateRequest, RoleCreateResponse> = {
            submit: apiClient.roleCreate,
            errorHandler
        }
        return { options, sections, toastHandler, submitHandler }
    }

})

</script>

<template>
    <form-create :sections="sections" :submitHandler="submitHandler" :toastHandler="toastHandler" :options="options" />
</template>