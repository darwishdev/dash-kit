<script setup lang="ts">
import type { FormOptions, SubmitHandler,FormSeciton } from 'dash-kit/types'
import type { RoleCreateRequest , RoleCreateResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';

const code : any = {
    basic : `
<script setup lang="ts">
import type { FormOptions, SubmitHandler,FormSeciton } from 'dash-kit/types'
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
    {
        permissions: [
            {
                $cmp: 'FormKit',
                props: {
                    outerClass: "w-full",
                    type: 'permissions',
                    name: 'permissions',
                    permissions: apiClient.permissionsList
                }
            }
        ],
    },
]


const options: FormOptions = {
    id: 'Role-create',
    title: "Role Create",
    withBackground: true
}


const submitHandler: SubmitHandler<RoleCreateRequest, RoleCreateRequest, RoleCreateResponse> = {
            submit: apiClient.roleCreate,
            errorHandler : {},
}
<\/script>

<template>
    <form-create :sections="sections" :submitHandler="submitHandler" :options="options" />
<\/template>

`
}
const sectionsss: FormSeciton[] = [ 
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
    {
        permissions: [
            {
                $cmp: 'FormKit',
                props: {
                    outerClass: "w-full",
                    type: 'permissions',
                    name: 'permissions',
                    permissions: apiClient.permissionsList
                }
            }
        ],
    },
]



const options: FormOptions = {
    id: 'Role-create_4',
    title: "Role Create",
    withBackground: true
}

const submitHandler: SubmitHandler<RoleCreateRequest, RoleCreateRequest, RoleCreateResponse> = {
            submit: apiClient.roleCreate,
            errorHandler : {},

}

</script>
<template>
    <DocSectionText v-bind="$attrs">
        <p>Try using CreateForm component using permissions custom input</p>
    </DocSectionText>
    <div>
        <form-create :sections="sectionsss" :submitHandler="submitHandler" :options="options" />
    </div>
    <DocSectionCode :code="code" />
    <h1>Notes : </h1>
    <p class="text-justify my-1">It is important to note that the 'id' key within the options props represents the unique identifier of the form.
        As such, it is critical to assign a distinct 'id' value each time a form is created to prevent form caching.</p>

      <p class="text-justify mt-3"> By assigning a new 'id' value to each form, we can ensure that users do not encounter outdated or cached form data,
        which can lead to confusion and errors. Therefore, it is recommended to prioritize the assignment of unique 'id' values during the form creation process to promote optimal form functionality and usability.</p>
</template>