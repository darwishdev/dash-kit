<script setup lang="ts">
import type { FormOptions, SubmitHandler,FormSeciton } from 'dash-kit/types'
import type { RoleCreateRequest , RoleCreateResponse , RoleFindRequest , RoleFindResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';
import { useDataFetcherList } from "dash-kit/composables";
const { loading , fetchData , error } = useDataFetcherList<RoleFindRequest, RoleFindResponse>(apiClient.roleFindWithErr, {roleId : 1} as RoleFindRequest);


const code : any = {
    basic : `
<script setup lang="ts">
import type { FormOptions, SubmitHandler } from 'dash-kit/types'
import type { RoleCreateRequest , RoleCreateResponse , RoleFindRequest , RoleFindResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock'; // replace with your api client
import rolesForm from '@/src/forms/rolesForm' //replace with your own formSchema 
import { useDataFetcherFind } from "dash-kit/composables";
const {sections} = rolesForm

// customize the DataFetcher with your api function to fetch the form's data
const { loading } = useDataFetcherFind<RoleFindRequest, RoleFindResponse>(apiClient.roleFind, {roleId : 1} as RoleFindRequest);



const options: FormOptions = {
    id: 'Role-create',
    title: "Role Create",
    withBackground: true
}

const errorMsg = "Sorry , there is an error fining this role"

const submitHandler: SubmitHandler<RoleCreateRequest, RoleCreateRequest, RoleCreateResponse> = {
            submit: apiClient.roleCreate,
            errorHandler : {},
}
<\/script>

<template>
    <div v-if="loading">
        <form-loading />
    </div>
    <div v-else-if="error">
        <form-error :error="errorMsg" />
    </div>
    <div v-else>
        <form-create :sections="sections" :submitHandler="submitHandler" :options="options" />
    </div>
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
                $formkit: 'text',
                outerClass: "col-8",
                name: 'roleDescription',
                label: 'roleDescription Label',
                placeholder: 'enter your roleDescription',
                validation: '',
            },
        ],
    },
]

const errorMsg = "Sorry, there is an error ocurred while finding this role"

const options: FormOptions = {
    id: 'Role-create_1',
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
        <p>Try using FormError component while fetching the form data with an error returned from server</p>
    </DocSectionText>
    <div class="my-3">
        <div v-if="loading">
            <form-loading />
        </div>
        <div v-else-if="error">
            <form-error :error="errorMsg" />
        </div>
        <div v-else>
            <form-create :sections="sections" :submitHandler="submitHandler" :options="options" />
        </div>
        <div class="m-auto mt-3 text-center">
            <button class="text-center p-2 border-radius m-auto" @click="fetchData">Load again</button>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template> 