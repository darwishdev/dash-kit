<script setup lang="ts">
import type { FormOptions, SubmitHandler } from 'dash-kit/types'
import type { UserCreateRequest, UserCreateResponse } from '@models/v1/user/user_definitions_pb'
import apiClient from '@/api/ApiClient';
import UserForm from '@/forms/UserForm';

const { sections, toastHandler, errorHandler } = UserForm
        const options: FormOptions = {
            id: 'user-create',
            allowBulkCreate: true,
            title: "User Create",
            withBackground: true
        }


        const submitHandler: SubmitHandler<UserCreateRequest, UserCreateRequest, UserCreateResponse> = {
            submit: apiClient.userCreate,
            errorHandler
        }
</script>

<template>
    <form-create :sections="sections" :submitHandler="submitHandler" :toastHandler="toastHandler" :options="options" />
</template>


