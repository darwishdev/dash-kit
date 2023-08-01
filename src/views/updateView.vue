<script lang="ts">
import { defineComponent } from 'vue';
import type { UserFindRequest ,UserFindResponse } from '@/api/ApiTypes';
import { FindHandler, FormOptions, SubmitHandler,FormSeciton,FormCreateParams,FormUpdateParams,DeleteRestoreHandler,CrudOptions } from '@/types/types';
import apiClient from "@/api/ApiMock"; 
import AppCard from "@/components/AppCard.vue"
import AppCrud from "@/components/AppCrud.vue"
import { UserCreateRequest, UserCreateResponse } from '../api/ApiTypes';
export default defineComponent({
    beforeCreate() {

    },
    setup() {

        let FormToastHandler: any = {
        hideToast: false
    }
    let FormFindHandler : FindHandler<UserFindRequest,UserFindResponse,UserFindResponse>  = {
        findFunction: apiClient.userFind,
        requestPropertyName: 'userId',
        requestValue : 1
    }
    let FormSubmitHandler: SubmitHandler<UserCreateRequest,UserCreateRequest,UserCreateResponse> = {
        submit: apiClient.userCreate,
        errorHandler: {
            fieldErrors: {
                'already_exists unique_constraint_users_user_name_key': {
                    userName: "role name already exists"
                }
            }
        },
        redirectRoute: 'dashboard_view'
    }
    let FormOptions: FormOptions = {
        id: "update-form",
        title: "",
        withBackground: false
    }
    let FormSections: Array<FormSeciton> = [
        {

            userUpdate: [
                {
                    $formkit: 'text',
                    outerClass: "col-12",
                    name: 'userName',
                    label: 'role name',
                    placeholder: 'userNamePlaceholder',
                    validation: 'required|length:3',

                },
                {
                    $formkit: 'textarea',
                    outerClass: "col-12",
                    name: 'userPhone',
                    label: 'user description',
                    placeholder: 'passwordPlaceholder',
                    validation: 'required|length:6',

                },
            ],

        },
    ]
    let CreateForm: FormCreateParams = {
        sections: FormSections,
        options: {
        id: "create-form",
        title: "",
        withBackground: false
    },
        submitHandler: {
        submit: apiClient.userCreate,
        errorHandler: {
            fieldErrors: {
                'already_exists unique_constraint_users_user_name_key': {
                    userName: "role name already exists"
                }
            }
        },
        redirectRoute: 'dashboard_view'
    },
        toastHandler: FormToastHandler
    }
    let UpdateForm: FormUpdateParams = {
        sections: FormSections,
        options: FormOptions,
        submitHandler: FormSubmitHandler,
        findHandler: FormFindHandler,
        toastHandler: FormToastHandler
    }
    let DeleteRestoreHandler: DeleteRestoreHandler<any> = {
        deleteRestore : apiClient.userDeleteRestore,
        requestPropertyName : 'userId'
    }
    let CrudOptions: CrudOptions ={
        title : 'Roles List',
        feature : 'Roles',
        showExportButton : true,
        showCreateButton : true ,
        showDeletedFilter : true
    }
        return { UpdateForm,DeleteRestoreHandler,CrudOptions,CreateForm }
    }
})
</script>

<template>
        <div class="login-content">
            <div class="login-form">
                <h1></h1>
                <div>
                    <h2></h2>
                </div>
                <app-card :recordId="1" :updateForm="UpdateForm" :deleteRestoreHandler="DeleteRestoreHandler">

                </app-card>
                <app-crud :createForm="CreateForm" :options="CrudOptions" class="roles">
                    <template #data>
                        <div>
                            <h1>hiii</h1>
                        </div>
                    </template>
                </app-crud>



                <!-- <app-card :updateForm="UpdateForm" :> -->
                    <!-- <AppCrud :options="CrudOptions">

                    </AppCrud> -->



                <!-- <app-logo disabled /> -->
                <!-- <form-update :sections="FormSections" :submitHandler="FormSubmitHandler" :toastHandler="FormToastHandler"
                    :options="FormOptions" :findHandler="FormFindHandler" /> -->
            </div>
        </div>
</template>