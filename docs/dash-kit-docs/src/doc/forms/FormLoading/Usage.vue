<script setup lang="ts">
import type { FormOptions, SubmitHandler,FormSeciton } from 'dash-kit/types'
import type { RoleCreateRequest , RoleCreateResponse , RoleFindRequest , RoleFindResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';
import { useDataFetcherList } from "dash-kit/composables";
const { loading , fetchData } = useDataFetcherList<RoleFindRequest, RoleFindResponse>(apiClient.roleFind, {roleId : 1} as RoleFindRequest);


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


const submitHandler: SubmitHandler<RoleCreateRequest, RoleCreateRequest, RoleCreateResponse> = {
            submit: apiClient.roleCreate,
            errorHandler : {},
}
<\/script>

<template>
    <div v-if="loading">
        <form-loading />
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
        <p>Try using FormLoading component while fetching the form data</p>
    </DocSectionText>
    <div class="my-3">
        <div v-if="loading">
            <form-loading />
        </div>
        <div v-else>
            <form-create :sections="sections" :submitHandler="submitHandler" :options="options" />
        </div>
        <div class="m-auto mt-1 text-center">
            <button class="text-center p-2 border-radius m-auto" @click="fetchData">Load again</button>
        </div>
    </div>
    <DocSectionCode :code="code" />
    <h1>NOTE : </h1>
    <p class="text-justify">We have observed that the FormUpdate component already utilizes the FormLoading component in its implementation,
         as demonstrated by the examples provided in the <router-link to="/forms/form-update">FormUpdate component documentation</router-link>. Through our testing, we have
        found that the FormLoading component effectively enhances the user experience by providing a visual indication of the 
        form's loading state during updates and data fetching. As such, we highly recommend the use of this component in conjunction
         with both FormCreate and FormUpdate features to optimize the usability of the form and improve overall user satisfaction.
        </p>
</template> 