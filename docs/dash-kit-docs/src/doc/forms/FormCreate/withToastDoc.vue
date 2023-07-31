<script setup lang="ts">
import type { FormOptions, SubmitHandler,FormSeciton } from 'dash-kit/types'
import type { RoleCreateRequest , RoleCreateResponse } from '@models/v1/user/role_definitions_pb'
import apiClient from '@/api/ApiClient';
import { ToastHandler } from '../../../../../../dist/types/types';

const code : any = {
    basic : `
<script setup lang="ts">
import type { FormOptions, SubmitHandler,FormSeciton,ToastHandler } from 'dash-kit/types'
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
                $formkit: 'textarea',
                outerClass: "col-8",
                name: 'roleDescription',
                label: 'roleDescription Label',
                placeholder: 'enter your roleDescription',
                validation: '',
            },
        ],
    },
]

const options: FormOptions = { // replace options properties with your specific form properties 
    id: 'Role-create',
    title: "Role Create",
    withBackground: true
}
const toastHandler: ToastHandler = { // replace toastHandler message and title with your specific properties
    hideToast : false,
    message : 'role created successfully',
    title : 'role saved'
}
const submitHandler: SubmitHandler<UserCreateRequest, UserCreateRequest, UserCreateResponse> = {
    submit: apiClient.userCreate, // replace with your specific submit api function
    errorHandler : {}
}
<\/script>

<template>
    <form-create :sections="sections" :ToastHandler="toastHandler" :submitHandler="submitHandler" :options="options" />
<\/template>

`
}
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
                $formkit: 'textarea',
                outerClass: "col-8",
                name: 'roleDescription',
                label: 'roleDescription Label',
                placeholder: 'enter your roleDescription',
                validation: '',
            },
        ],
    },
]


const options: FormOptions = {
    id: 'Role-create_2',
    title: "Role Create",
    withBackground: true
}
const toastHandler: ToastHandler = {
    hideToast : false,
    message : 'role created successfully',
    title : 'role saved'
}

const submitHandler: SubmitHandler<RoleCreateRequest, RoleCreateRequest, RoleCreateResponse> = {
            submit: apiClient.roleCreate,
            errorHandler : {},

}

</script>
<template>
    <DocSectionText v-bind="$attrs">
        <p>Try using CreateForm component with passing ToastHandler configuration as a prop so it will be displayed after form submitting successfully</p>
    </DocSectionText>
    <div>
        <form-create :sections="sections" :submitHandler="submitHandler" :ToastHandler="toastHandler" :options="options" />
    </div>
    <DocSectionCode :code="code" />
</template>
