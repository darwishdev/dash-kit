<script setup lang="ts">
import type { LoginRequest, LoginResponse } from '@/api/ApiTypes';
import apiClient from '@/api/ApiMock';
import { errorHandler, redirectRoute, sections, toastHandler } from '@/forms/LoginForm'
import { FormOptions, SubmitHandler } from '@/types';
const options: FormOptions = {
    id: "login-form",
    title: "",
    withBackground: true
}
const submitHandler: SubmitHandler<LoginRequest, LoginRequest, LoginResponse> = {
    submit: apiClient.login,
    submitCallBack: (res: LoginResponse) => {
        localStorage.setItem('token', btoa(res.tokens.access_token))
        localStorage.setItem('permissions', btoa(JSON.stringify(res.userPermissions)))
        localStorage.setItem('sideBar', btoa(JSON.stringify(res.sideBar)))

    },
    errorHandler,
    redirectRoute,
}
</script>

<template>
    <h2>asdasd</h2>
    <form-create :sections="sections" :submitHandler="submitHandler" :toastHandler="toastHandler" :options="options" />
</template>