<script setup lang="ts">
import type { FormOptions, FindHandler, SubmitHandler } from 'dash-kit/types'
import type { UserUpdateRequest, UserFindForUpdateRequest, UserFindForUpdateResponse, UserUpdateResponse } from '@models/v1/user/user_definitions_pb'
import apiClient from '@/api/ApiClient';
import UserForm from '@/forms/UserForm';

const { sections, toastHandler, errorHandler } = UserForm
const options: FormOptions = {
    id: 'user-update',
    title: "user_update",
    withBackground: true,
    withHeader : true,
    showHeaderSubmit : true
}
const mapFunction = (req: any) => {
    req.permissions = req.permissionsList.permissions
    return req
}
const findHandler: FindHandler<UserFindForUpdateRequest, UserFindForUpdateResponse, any> = {
    findFunction: apiClient.userFindForUpdate,
    requestPropertyName: 'userId',
    mapFunction
}
// const submitUpdate = (req : UserUpdateRequest): Promise<UserUpdateResponse> => {
//     return new Promise((resolve, reject) => {
//         console.log(req);
//         // apiClient.userUpdate(req)
        
//     });
// }
const submitHandler: SubmitHandler<UserUpdateRequest, UserUpdateRequest, UserUpdateResponse> = {
    submit: apiClient.userUpdate,
    errorHandler
}


</script>

<template>
    <form-update :sections="sections" :findHandler="findHandler" :submitHandler="submitHandler" :toastHandler="toastHandler"
        :options="options" />
</template>