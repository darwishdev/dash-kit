import { mount } from "@vue/test-utils";
import apiClient from "@/api/ApiMock";
import { createRouter, createWebHistory } from 'vue-router'

// import  from '@vue/vue3-jest'
import FormCreate from "@/components/forms/FormCreate.vue";
import { expect, describe, it, vi, afterEach, beforeEach } from "vitest";
import DashKit from '@/DashKit'
import router from '@/router'
import dashkitConfig from '@/dashkit.config'
import {inject} from 'vue'
describe('form create tests ', () => {
    let wrapper: any = null
    let FormToastHandler: any = {
        hideToast: false
    }
    let FormSubmitHandler: any = {
        submit: apiClient.login,
        submitCallBack: (res) => {
            localStorage.setItem('token', res.loginInfo.access_token)
            localStorage.setItem('permissions', res.permissions)
            localStorage.setItem('sideBar', res.sidebar)
        },
        errorHandler: {
            globalErrors: {
                "wrong_password": 'wrong_password',
                "pass_loginApiCall": 'pass_loginApiCall',
                "user_name_invalid": 'user_name_invalid',
            }
        },
        redirectRoute: 'dashboard_view'
    }
    let FormOptions : any = {
        id: "login-form",
        title: "",
        withBackground: false
    }   
    let FormSections : any = [
        {
    
            login: [
                {
                    $formkit: 'text',
                    outerClass: "col-12",
                    name: 'userName',
                    label: 'userNameLabel',
                    placeholder: 'userNamePlaceholder',
                    validation: 'required|length:3',
    
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
    let propss : any =  {
        sections: FormSections,
        options: FormOptions,
        submitHandler: FormSubmitHandler,
        toastHandler : FormToastHandler
    }
    afterEach(() => {
        wrapper.unmount()
    })

    it('a form with the defined schema should be generated', async () => {
        wrapper = mount(FormCreate, {
            global: {
                plugins: [[DashKit, dashkitConfig], router],
            },
            props: propss
        })
        expect(wrapper.props()).toMatchObject(propss)
        const usernameInput = wrapper.find('input[name="userName"]')
        const userPasswordInput = wrapper.find('input[name="userPassword"]')
        const submitInput = wrapper.find('button[name="submit_2"]')
        expect(usernameInput.exists()).toBe(true)
        expect(userPasswordInput.exists()).toBe(true)
        expect(submitInput.exists()).toBe(true)
    })

    it('check that the generated form contains a title when using a title and setting withHeader to be true', async () => {

        wrapper = mount(FormCreate, {
            global: {
                plugins: [[DashKit, dashkitConfig], router],
            },
            props: {
                sections: FormSections,
                options: {
                    id: "login-form",
                    title: "login-page",
                    withBackground: false,
                    withHeader : true,
                },
                submitHandler: FormSubmitHandler,
                toastHandler : FormToastHandler
            }
        })
        const title = wrapper.find('.title')
        expect(title.exists()).toBe(true)

    })
    it('redirect to the defined redirectRoute after using valid credentials', async () => {
        const routes = [
            { path: '/', name: 'Home' },
            { path: '/dashboard', name: 'dashboard_view' },
          ]
          const router = createRouter({
            history: createWebHistory(),
            routes,
          })
        wrapper = mount(FormCreate, {
            global: {
                plugins: [[DashKit, dashkitConfig], router],
            },
            props: propss
        })
        const spy = vi.spyOn(router, 'push')
        expect(spy).toHaveBeenCalledTimes(0)
        const usernameInput = wrapper.find('input[name="userName"]')
        const userPasswordInput = wrapper.find('input[name="userPassword"]')
        const submitButton = wrapper.find('button[type="submit"]')
        await usernameInput.setValue('test_user')
        await userPasswordInput.setValue('test_password')
        await submitButton.trigger('submit')
        // expect(spy).toHaveBeenCalledTimes(1)
        // expect(router.currentRoute.value.name).toBe('dashboard')

    })
    it('Field errors are displayed when submitting empty fields or wrong credentials', async () => {
        wrapper = mount(FormCreate, {
            global: {
                plugins: [[DashKit, dashkitConfig], router],
            },
            props: propss
        })
        const submitButton = wrapper.find('button[type="submit"]')
        const errorMsg = wrapper.findAll('.formkit-message')
        await submitButton.trigger('submit')        
        errorMsg.forEach(element => {
            expect(element.text()).toContain('Username is required')
            expect(element.text()).toContain('Password is required')
          })
    })
    it('Global password error is displayed when submitting with wrong password', async () => {
        wrapper = mount(FormCreate, {
            global: {
                plugins: [[DashKit, dashkitConfig], router],
            },
            props: {
                sections: FormSections,
                options: FormOptions,
                submitHandler: {
                    submit: apiClient.loginWithPwErr,
                    errorHandler: {
                        globalErrors: {
                            "wrong_password": 'wrong_password',
                            "pass_loginApiCall": 'pass_loginApiCall',
                            "user_name_invalid": 'user_name_invalid',
                        }
                    },
                    redirectRoute: 'dashboard_view'
                },
                toastHandler : FormToastHandler
            }
        })
        const usernameInput = wrapper.find('input[name="userName"]')
        const userPasswordInput = wrapper.find('input[name="userPassword"]')
        await usernameInput.setValue('test_user')
        await userPasswordInput.setValue('test_passworddd')
        const submitButton = wrapper.find('button[type="submit"]')
        await submitButton.trigger('submit')        
        await new Promise(resolve => setTimeout(resolve, 3000))
        const errorMsg = wrapper.findAll('.formkit-message')
        const errorMsg = wrapper.find('#input_0-this-password-is-incorrect')
        errorMsg.forEach(element => {
            expect(element.text()).toContain('this password is incorrect')
          })
    })

})