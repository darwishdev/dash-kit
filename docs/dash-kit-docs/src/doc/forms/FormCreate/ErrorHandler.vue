<script setup lang="ts">
import type { FormOptions, SubmitHandler,FormSeciton } from 'dash-kit/types'
import type { RoleCreateRequest , RoleCreateResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';
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
    errorHandler : {
        globalErrors : {
            'internalServerError' : 'internal Server Error happened'
        },
        fieldErrors : {
            'already_exists unique_constraint_roles_role_name_key' : {
                roleName : 'this role name already exists'
            }
        }
    },
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
    id: 'Role-create_3',
    title: "Role Create",
    withBackground: true
}
const toastHandler: ToastHandler = {
    hideToast : false,
    message : 'role created successfully',
    title : 'role saved'
}

const submitHandler: SubmitHandler<RoleCreateRequest, RoleCreateRequest, RoleCreateResponse> = {
            submit: apiClient.roleCreateWithErr,
            errorHandler : {
                globalErrors : {
                    'internalServerError' : 'internal Server Error happened'
                },
                fieldErrors : {
                    'already_exists unique_constraint_roles_role_name_key' : {
                        roleName : 'this role name already exists'
                    }
                }
            },
}

</script>
<template>
    <DocSectionText v-bind="$attrs">
        <p>Try using CreateForm component with passing the ErrorHandler object property to map your server errors to the corresponding fields to be displayed correctly</p>
    </DocSectionText>
    <div>
        <form-create :sections="sections" :submitHandler="submitHandler" :ToastHandler="toastHandler" :options="options" />
    </div>
    <DocSectionCode :code="code" />
</template>
