<script setup lang="ts">
import type { FormOptions, SubmitHandler,FormSeciton,FindHandler } from 'dash-kit/types'
import type { RoleCreateRequest , RoleCreateResponse , RoleFindRequest , RoleFindResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';
import { ToastHandler } from '../../../../../../dist/types/types';

const code : any = {
    basic : `
<script setup lang="ts">
import type { FormOptions, SubmitHandler,FormSeciton,ToastHandler,FindHandler } from 'dash-kit/types'
import type { RoleCreateRequest , RoleCreateResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock'; // replace with your api client

// replace with the formSchema you want so you can generate a form with your specifications 
const sections: FormSeciton[] = [ 
    {
        'role Info': [
            {
                $formkit: 'text',
                outerClass: "col-4",
                name: 'roleName',
                label: 'roleName Label',
                placeholder: 'enter your roleName',
                validation: 'required|length:3',

            },
            {
                $formkit: 'text',
                outerClass: "col-6",
                name: 'roleDescription',
                label: 'roleDescription Label',
                placeholder: 'enter your roleDescription',
                validation: '',
            },
        ],
    },
]

const findHandler : FindHandler<RoleFindRequest , RoleFindResponse , RoleFindResponse> = {
    findFunction : apiClient.roleFind, //replace with your api client
    requestPropertyName : 'roleId', //replace with your api function request property name 
    requestValue : 1   //replace with your api function request value
}

const options: FormOptions = { // replace options properties with your specific form properties 
    id: 'Role-create',
    title: "Role Create",
    withBackground: true
}
const toastHandler: ToastHandler = { // replace toastHandler message and title with your specific properties
    hideToast : false,
    message : 'role updated successfully',
    title : 'role saved'
}
const submitHandler: SubmitHandler<UserCreateRequest, UserCreateRequest, UserCreateResponse> = {
    submit: apiClient.userCreate, // replace with your specific submit api function
    errorHandler : {}
}
<\/script>

<template>
    <form-update :findHandler="findHandler" :sections="sections" :submitHandler="submitHandler" :ToastHandler="toastHandler" :options="options" />
<\/template>

`
}
const sections: FormSeciton[] = [
    {
        'role Info': [
            {
                $formkit: 'text',
                outerClass: "col-6",
                name: 'roleName',
                label: 'roleName Label',
                placeholder: 'enter your roleName',
                validation: 'required|length:3',

            },
            {
                $formkit: 'text',
                outerClass: "col-6",
                name: 'roleDescription',
                label: 'roleDescription Label',
                placeholder: 'enter your roleDescription',
                validation: '',
            },
        ],
    },
]

const findHandler : FindHandler<RoleFindRequest , RoleFindResponse , RoleFindResponse> = {
    findFunction : apiClient.roleFind,
    requestPropertyName : 'roleId',
    requestValue : 1  
}

const options: FormOptions = {
    id: 'Role-update_1',
    title: "Role Create",
    withBackground: true
}
const toastHandler: ToastHandler = {
    hideToast : false,
    message : 'role updated successfully',
    title : 'role saved'
}

const submitHandler: SubmitHandler<RoleCreateRequest, RoleCreateRequest, RoleCreateResponse> = {
            submit: apiClient.roleCreate,
            errorHandler : {},

}

</script>
<template>
    <DocSectionText v-bind="$attrs">
        <p>Try using FormUpdate component with passing the FindHandler prop so the fetched data will be populated in the form</p>
    </DocSectionText>
    <div>
        <form-update :findHandler="findHandler" :sections="sections" :submitHandler="submitHandler" :ToastHandler="toastHandler" :options="options" />
    </div>
    <DocSectionCode :code="code" />
    <h1>Note :</h1>
    <p>Note that the <span class="font-bold text-2xl text-primary">requestValue</span> key in the findHandler prop is optional , so if you didn't define this key 
    the findHandler will use the 'id' param from the route to be the requestValue</p>
</template>
