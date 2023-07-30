import { CrudOptions } from './../../types/types';
import { mount } from "@vue/test-utils";
import apiClient from "@/api/ApiMock";
import router from '@/router';
<<<<<<< Updated upstream
=======
import { ref } from 'vue';
>>>>>>> Stashed changes
// import VueRouter from 'vue-router'
import AppCrud from "@/components/AppCrud.vue";
import { expect, describe, it, vi, afterEach, beforeEach } from "vitest";
import DashKit from '@/DashKit'
import dashkitConfig from '@/dashkit.config'
describe('App crud tests ', () => {
    let wrapper: any = null
<<<<<<< Updated upstream

=======
    const errorHandler: any = {
    
    }
    const filterModel = ref({ roleName: "asms" })
    const modelDisplay = ref({})
>>>>>>> Stashed changes

    let FormToastHandler: any = {
        hideToast: false
    }
<<<<<<< Updated upstream
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
=======
    const createFormSubmitHandler: any = {
        submit: apiClient.userCreate,
        errorHandler,
    }
    const crudOptions: any = {
        title: 'roles_listt',
        feature: 'roles',
        showExportButton: true,
        showCreateButton: true,
        showDeletedFilter: true
    }
    const filterFormInputs:any = [
        {
            $formkit: 'text',
            outerClass: "col-6",
            name: 'roleName',
            label: 'roleNameLabel',
            placeholder: 'roleNamePlaceholder',
    
        },
        {
            $formkit: 'textarea',
            outerClass: "col-6",
            name: 'userName',
            label: 'roleDescriptionLabel',
            placeholder: 'roleDescriptionPlaceholder',
        },
    ]
    const sections: any[] = [
        {
            role_info: [
                {
                    $formkit: 'text',
                    outerClass: "col-4",
                    name: 'username',
                    label: 'roleNameLabel',
                    placeholder: 'roleNamePlaceholder',
                    validation: 'required|length:3',
    
                },
                {
                    $formkit: 'textarea',
                    outerClass: "col-8",
                    name: 'userPhone',
                    label: 'roleDescriptionLabel',
                    placeholder: 'roleDescriptionPlaceholder',
                    validation: '',
                },
            ],
        },
    ]
    const filterForm: any = {
        options: {
            showActiveFilters: true,
            showClearFilters: true
        },
        inputs: filterFormInputs,
        modelValue: filterModel,
        displayValue: modelDisplay
    }
    const upateOptions: any = {
        id: "role-update",
        title: "role_update",
    }
    const createForm: any = {
        sections: sections,
        options: upateOptions,
        submitHandler: createFormSubmitHandler,
        toastHandler: FormToastHandler,
    }
    let propss = {
        options : crudOptions ,
        createForm : createForm,
        filterForm : filterForm
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
                options : crudOptions ,
                createForm : createForm,
                filterForm : filterForm
            }
        })
        await new Promise(resolve => setTimeout(resolve, 1500))
        expect(wrapper.text()).toContain('roles list')
        expect(wrapper.text()).toContain('New')
        expect(wrapper.text()).toContain('export')
        const createButton = wrapper.find('button[aria-label="New"]') 
        const exportButton = wrapper.find('button[aria-label="export"]') 
        expect(createButton.exists()).toBe(true)
        expect(exportButton.exists()).toBe(true)
    })

    it('a create form should pop up after clicking on create icon in case of passing the createForm prop', async () => {
        wrapper = mount(AppCrud, {
            global: {
                plugins: [[DashKit, dashkitConfig], router],
            },
            props: {
                options : crudOptions,
                createForm : createForm,
                filterForm : filterForm
            }
        })
        await new Promise(resolve => setTimeout(resolve, 1500))
        const createButton = wrapper.find('button[aria-label="New"]') 
        expect(createButton.exists()).toBe(true)
        await createButton.trigger('click')
        await new Promise(resolve => setTimeout(resolve, 3000))
        // const username = wrapper.find('input[name="username"]') 
        // const userPhone = wrapper.find('input[name="userPhone"]') 
        const CreateFormDialog = wrapper.findAll('.p-dialog');
        CreateFormDialog.forEach(element => {
        expect(element.exists()).toBe(true)
        expect(element.contains('.formkit-form')).toBe(true)
        expect(element.contains('input[name="userName"]')).toBe(true)
        expect(element.contains('input[name="userPhone"]')).toBe(true)
        })        
    })

    it('no update form should pop up after clicking on edit icon if we did not pass the updateForm prop', async () => {
        router.push('/roles')
        wrapper = mount(AppCrud, {
            global: {
                plugins: [[DashKit, dashkitConfig], router],
            },
            props: {
                options : crudOptions,
                filterForm : filterForm
            }
        })
        router.push('/roles')
        await new Promise(resolve => setTimeout(resolve, 1500))
        const createButton = wrapper.find('button[aria-label="New"]') 
        expect(createButton.exists()).toBe(true)
        await createButton.trigger('click')
        await new Promise(resolve => setTimeout(resolve, 3000))
        const updateForm = wrapper.find('.formkit-form');
        const usernameInput = wrapper.find('input[name="userName"]');
        const userPhoneInput = wrapper.find('input[name="userPhone"]');
        expect(updateForm.exists()).not.toBe(true)
        expect(usernameInput.exists()).not.toBe(true)
        expect(userPhoneInput.exists()).not.toBe(true)
    })
>>>>>>> Stashed changes

})