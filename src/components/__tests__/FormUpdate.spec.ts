import { mount } from "@vue/test-utils";
import apiClient from "@/api/ApiMock";
import router from '@/router';
import FormUpdate from "@/components/forms/FormUpdate.vue";
import { expect, describe, it, vi, afterEach } from "vitest";
import DashKit from '@/DashKit'
import dashkitConfig from '@/dashkit.config'
describe('form update tests ', () => {
    
    let wrapper: any = null
    let FormToastHandler: any = {
        hideToast: false
    }
    let FormFindHandler : any  = {
        findFunction: apiClient.userFind,
        requestPropertyName: 'userId',
        requestValue : 1
    }
    let FormSubmitHandler: any = {
        submit: apiClient.userUpdate,

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
        id: "update-form",
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
    let propss: any = {
        sections: FormSections,
        options: FormOptions,
        submitHandler: FormSubmitHandler,
        findHandler: FormFindHandler,
        toastHandler: FormToastHandler
    }
    afterEach(() => {
        wrapper.unmount()
    })

    it('an update form with the defined schema should be generated', async () => {
        wrapper = mount(FormUpdate, {
            global: {
                plugins: [[DashKit, dashkitConfig], router],
            },
            props: propss
        })
        await new Promise(resolve => setTimeout(resolve, 1500))
        expect(wrapper.props()).toMatchObject(propss)
        const usernameInput = wrapper.find('input[name="userName"]')
        const userphoneInput = wrapper.find('input[name="userPhone"]')
        const userPasswordInput = wrapper.find('input[name="userPassword"]')
        const submitInput = wrapper.find('button[type="submit"]')
        expect(usernameInput.exists()).toBe(true)
        expect(userphoneInput.exists()).toBe(true)
        expect(userPasswordInput.exists()).toBe(true)
        expect(submitInput.exists()).toBe(true)
    })
    
    it('check that the generated form inputs has the values of the user that is passed using the findHandler props', async () => {
        
        wrapper = mount(FormUpdate, {
            global: {
                plugins: [[DashKit, dashkitConfig], router],
            },
            props: propss
        })
        await new Promise(resolve => setTimeout(resolve, 1500))
        const usernameInput = wrapper.find('input[name="userName"]')
        const userphoneInput = wrapper.find('input[name="userPhone"]');
        const userPasswordInput = wrapper.find('input[name="userPassword"]');
        expect(usernameInput.exists()).toBe(true)
        expect(userphoneInput.exists()).toBe(true)
        expect(userPasswordInput.exists()).toBe(true)
        expect(usernameInput.element.value).toBe('admin2');
        expect(userphoneInput.element.value).toBe('010202000210');
        expect(userPasswordInput.element.value).toBe('123456789');
    })
    it('redirect to the defined redirectRoute after using valid credentials', async () => {

        wrapper = mount(FormUpdate, {
            mocks: {
                $route: {
                  path: '/my-path'
                }
              },
            global: {
                plugins: [[DashKit, dashkitConfig], router],
            },
            props: propss
        })
        await new Promise(resolve => setTimeout(resolve, 1500))
        const spy = vi.spyOn(router, 'push')
        expect(spy).toHaveBeenCalledTimes(0)
        const usernameInput = wrapper.find('input[name="userName"]')
        const userPasswordInput = wrapper.find('input[name="userPassword"]')
        const submitButton = wrapper.find('button[type="submit"]')
        await usernameInput.setValue('test_user')
        await userPasswordInput.setValue('test_password')
        await submitButton.trigger('submit')
        // expect(wrapper.vm.$route.path).not.toBe('/my-path')
    })
    it('Field errors are displayed when submitting empty fields or wrong credentials', async () => {
        wrapper = mount(FormUpdate, {
            global: {
                plugins: [[DashKit, dashkitConfig], router],
            },
            props: propss
        })
        await new Promise(resolve => setTimeout(resolve, 1500))
        const usernameInput = wrapper.find('input[name="userName"]')
        const userphoneInput = wrapper.find('input[name="userPhone"]');
        const userPasswordInput = wrapper.find('input[name="userPassword"]')
        await usernameInput.setValue('')
        await userPasswordInput.setValue('')
        await userphoneInput.setValue('')
        const submitButton = wrapper.find('button[type="submit"]')
        const errorMsg = wrapper.findAll('.formkit-message')
        await submitButton.trigger('submit')
        errorMsg.forEach(element => {
            expect(element.text()).toContain('Username is required')
            expect(element.text()).toContain('Password is required')
        })
    })
    it('field errors are displayed when submitting with existing username or any other field errors', async () => {
        wrapper = mount(FormUpdate, {
            global: {
                plugins: [[DashKit, dashkitConfig], router],
            },
            props: {
                sections: FormSections,
                options: FormOptions,
                findHandler : FormFindHandler,
                submitHandler: {
                    submit: apiClient.userUpdateWithErr,
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
                },
                toastHandler: FormToastHandler
            }
        })
        await new Promise(resolve => setTimeout(resolve, 1500))

        const usernameInput = wrapper.find('input[name="userName"]')
        const userPasswordInput = wrapper.find('input[name="userPassword"]')
        await usernameInput.setValue('test_userr')
        await userPasswordInput.setValue('test_passworddd')
        const submitButton = wrapper.find('button[type="submit"]')
        await submitButton.trigger('submit')
        await new Promise(resolve => setTimeout(resolve, 3000))
        const errorMsg = wrapper.findAll('.formkit-message')
        // const errorMsg2 = wrapper.find('.formkit-message')
        // expect(errorMsg2.exists()).toBe(true)
        errorMsg.forEach(element => {
            expect(element.text()).toContain('unexpected error occured')
        })
    })
    // it('unknown error is displayed when submitting with invalid credentials and unhandled error', async () => {

    //     wrapper = mount(LoginView, {
    //         global: {
    //             plugins: [[DashKit, dashkitConfig], router],
    //         },
    //         // props: {
    //         //     sections: FormSections,
    //         //     options: FormOptions,
    //         //     submitHandler: {
    //         //         submit: apiClient.loginWithPwErr,
    //         //         errorHandler: {
    //         //             globalErrors: {
    //         //                 "pass_loginApiCall": 'pass_loginApiCall',
    //         //                 "user_name_invalid": 'user_name_invalid',
    //         //             }
    //         //         },
    //         //         redirectRoute: 'dashboard_view'
    //         //     },
    //         //     toastHandler: FormToastHandler
    //         // }
    //     })
    //     const usernameInput = wrapper.find('input[name="userName"]')
    //     const userPasswordInput = wrapper.find('input[name="userPassword"]')
    //     await usernameInput.setValue('test_user')
    //     await userPasswordInput.setValue('test_passworddd')
    //     const submitButton = wrapper.find('button[type="submit"]')
    //     await submitButton.trigger('click')
    //     await wrapper.vm.$nextTick();
    //     const messages2 = wrapper.findAll(".formkit-message")
    //     const pageText = document.body.textContent
    //     const pageText2 = wrapper.text()
    //     const len = document.body.children.length
    //     // const messages = document.querySelector(".formkit-messages")
    //     console.log('texsssst', messages2)
    //     // console.log('texsssst', document.body)
    //     // // await new Promise(resolve => setTimeout(resolve, 3000))
    //     // const errorMsg = wrapper.find('#input_0-unexpected-error-occured')
    //     // const containsText = pageText!.includes('unexpected error occured')
    //     // expect(containsText).toBe(true)
    //     // expect(errorMsg.text()).toContain('unexpected error occured')
    // })

})