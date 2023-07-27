import { CrudOptions } from './../../types/types';
import { mount } from "@vue/test-utils";
import apiClient from "@/api/ApiMock";
import router from '@/router';
// import VueRouter from 'vue-router'
import AppCrud from "@/components/AppCrud.vue";
import { expect, describe, it, vi, afterEach, beforeEach } from "vitest";
import DashKit from '@/DashKit'
import dashkitConfig from '@/dashkit.config'
describe('App crud tests ', () => {
    let wrapper: any = null


    let FormToastHandler: any = {
        hideToast: false
    }
    let FormSubmitHandler: any = {
        submit: apiClient.userCreate,

        errorHandler: {
            fieldErrors: {
                'already_exists unique_constraint_users_user_name_key': {
                    userName: "username already exists"
                },
                'already_exists unique_constraint_users_user_phone_key': {
                    userPhone: "userPhone already exists"
                }
            }
        },
        redirectRoute: 'dashboard_view'
    }
    let FormOptions: any = {
        id: "create-form",
        title: "",
        withBackground: false
    }
    let FormSections: any = [
        {

            userUpdate: [
                {
                    $formkit: 'text',
                    outerClass: "col-12",
                    name: 'userName',
                    label: 'userNameLabel',
                    placeholder: 'userNamePlaceholder',
                    validation: 'required|length:3',

                },
                {
                    $formkit: 'text',
                    outerClass: "col-12",
                    name: 'userPhone',
                    label: 'user phone',
                    placeholder: 'passwordPlaceholder',
                    validation: 'required|length:6',

                },
                {
                    $formkit: 'password',
                    outerClass: "col-12",
                    name: 'userPassword',
                    label: 'passwordLabel',
                    placeholder: 'passwordPlaceholder',
                    validation: 'required|length:6',

                },
            ],

        },
    ]
    let CreateForm: any = {
        sections: FormSections,
        options: FormOptions,
        submitHandler: FormSubmitHandler,
        toastHandler: FormToastHandler
    }
    let DeleteRestoreHandler: any = {
        deleteRestore : apiClient.userDeleteRestore,
        indentifierPropertyName : 'userId'
    }
    let CrudOptions: any ={
        title : 'Roles List',
        feature : 'Roles',
        showExportButton : true,
        showCreateButton : true ,
        showDeletedFilter : true
    }
    let propss = {
        options : CrudOptions ,
        createForm : CreateForm,
        deleteRestoreHandler : DeleteRestoreHandler
    }
    beforeEach(() => {
        router.push('/roles')
    })

    // afterEach(() => {
    //     wrapper.unmount()
    // })

    it('the component should mount correctly with the passed props and the crud options we have defined should be displayed correctly', async () => {
        wrapper = mount(AppCrud, {
            global: {
                plugins: [[DashKit, dashkitConfig], router],
            },
            props: {
                options : CrudOptions ,
                createForm : CreateForm,
                deleteRestoreHandler : DeleteRestoreHandler
            }
        })
        await new Promise(resolve => setTimeout(resolve, 1500))
        expect(wrapper.props()).toMatchObject(propss)
        // const editButton = wrapper.find('.pi-pencil') 
        // const deleteButton = wrapper.find('.pi-trash')
        // expect(editButton.exists()).toBe(true)
        // expect(deleteButton.exists()).toBe(true)
    })

//     it('an update form should pop up after clicking on edit icon in case of passing the updateForm prop', async () => {
//         wrapper = mount(AppCrud, {
//             global: {
//                 plugins: [[DashKit, dashkitConfig], router],
//             },
//             props: {
//                 recordId : RecordID,
//                 updateForm : UpdateForm,
//                 deleteRestoreHandler : DeleteRestoreHandler
//             }
//         })
//         await new Promise(resolve => setTimeout(resolve, 1500))
//         expect(wrapper.props()).toMatchObject(propss)
//         const editButton = wrapper.find('.pi-pencil')
//         expect(editButton.exists()).toBe(true)
//         await editButton.trigger('click')
//         await new Promise(resolve => setTimeout(resolve, 3000))

//         const UpdateFormDialog = wrapper.findAll('.p-dialog');
//         UpdateFormDialog.forEach(element => {
//         expect(element.exists()).toBe(true)
//         expect(element.contains('.formkit-form')).toBe(true)
//         expect(element.contains('input[name="userName"]')).toBe(true)
//         expect(element.contains('input[name="userPhone"]')).toBe(true)
//         })
//     })
//     it('check that the delete restore handler is working well', async () => {

//         wrapper = mount(AppCrud, {
//             global: {
//                 plugins: [[DashKit, dashkitConfig], router],
//             },
//             props: {
//                 recordId : RecordID,
//                 updateForm : UpdateForm,
//                 deleteRestoreHandler : DeleteRestoreHandler
//             }
//         })
//         // router.push('/roles')
//         await new Promise(resolve => setTimeout(resolve, 1500))
//         expect(wrapper.props()).toMatchObject(propss)
//         const deleteButton = wrapper.find('.pi-trash')
//         expect(deleteButton.exists()).toBe(true)
//         await deleteButton.trigger('click')
//         await new Promise(resolve => setTimeout(resolve, 3000))
//         const confirmButton = wrapper.findAll('.p-button');
//     })
//     it('no update form should pop up after clicking on edit icon if we did not pass the updateForm prop', async () => {
//         router.push('/roles')
//         wrapper = mount(AppCrud, {
//             global: {
//                 plugins: [[DashKit, dashkitConfig], router],
//             },
//             props: {
//                 recordId : RecordID,
//                 deleteRestoreHandler : DeleteRestoreHandler
//             }
//         })
//         router.push('/roles')
//         await new Promise(resolve => setTimeout(resolve, 1500))
//         const editButton = wrapper.find('.pi-pencil')
//         expect(editButton.exists()).toBe(true)
//         await editButton.trigger('click')
//         await new Promise(resolve => setTimeout(resolve, 3000))

//         const updateForm = wrapper.find('.formkit-form');
//         const usernameInput = wrapper.find('input[name="userName"]');
//         const userPhoneInput = wrapper.find('input[name="userPhone"]');
//         expect(updateForm.exists()).not.toBe(true)
//         expect(usernameInput.exists()).not.toBe(true)
//         expect(userPhoneInput.exists()).not.toBe(true)
//     })

})