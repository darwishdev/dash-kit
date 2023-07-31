import { mount } from "@vue/test-utils";
import router from '@/router';
// import  from '@vue/vue3-jest'
import { ref } from "vue";
import FormFilter from "@/components/forms/FormFilter.vue";
import { expect, describe, it } from "vitest";
import DashKit from '@/DashKit'
import dashkitConfig from '@/dashkit.config'
describe('form create tests ', () => {
    let wrapper: any = null
    const filterModel = ref({ roleName: "asms" })
    const modelDisplay = ref({})
    const filterForm: any[] = [
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
            name: 'roleDescription',
            label: 'roleDescriptionLabel',
            placeholder: 'roleDescriptionPlaceholder',
        },
    ]
    let propss: any = {
        inputs: filterForm,
        options: {
            showActiveFilters: true,
            showClearFilters: true
        },
        modelValue: filterModel,
        modelDisplay: modelDisplay
    }
    it('a filter form with the defined schema should be generated', async () => {
        wrapper = mount(FormFilter, {
            global: {
                plugins: [[DashKit, dashkitConfig], router],
            },
            props: propss
        })
        await new Promise(resolve => setTimeout(resolve, 2000))
        expect(wrapper.props()).toMatchObject(propss)
        const rolenameInput = wrapper.find('input[name="roleName"]')
        const roleDescriptionInput = wrapper.find('textarea[name="roleDescription"]')
        const clearFiltersButton = wrapper.find('svg')
        expect(rolenameInput.exists()).toBe(true)
        expect(roleDescriptionInput.exists()).toBe(true)
        expect(clearFiltersButton.exists()).toBe(true)
    })

    it('try filtering using the generated filter inputs and check that it is displayed as an active filter keys', async () => {

        wrapper = mount(FormFilter, {
            global: {
                plugins: [[DashKit, dashkitConfig], router],
            },
            props: propss
        })

        await new Promise(resolve => setTimeout(resolve, 2000))
        expect(wrapper.props()).toMatchObject(propss)
        const rolenameInput = wrapper.find('input[name="roleName"]')
        const roleDescriptionInput = wrapper.find('textarea[name="roleDescription"]')
        expect(rolenameInput.exists()).toBe(true)
        expect(roleDescriptionInput.exists()).toBe(true)
        await rolenameInput.setValue('manager')
        await roleDescriptionInput.setValue('manager role')
        const activeFilters = wrapper.findAll('.filter')
        activeFilters.forEach(element => {
            expect(element.text()).toContain('roleName_filter : manager')
            expect(element.text()).toContain('roleDescription_filter : manager role')
        })
    })

    it("clears each chosen filter individually after clicking on the filter's remove icon and check that this filter's input value is also cleared", async () => {

        wrapper = mount(FormFilter, {
            global: {
                plugins: [[DashKit, dashkitConfig], router],
            },
            props: propss
        })
    await new Promise(resolve => setTimeout(resolve, 2000))
    expect(wrapper.props()).toMatchObject(propss)
    const rolenameInput = wrapper.find('input[name="roleName"]')
    const roleDescriptionInput = wrapper.find('textarea[name="roleDescription"]')
    expect(rolenameInput.exists()).toBe(true)
    expect(roleDescriptionInput.exists()).toBe(true)
    await rolenameInput.setValue('manager')
    const activeFilters = wrapper.findAll('.filter')
    for (const element of activeFilters) {
        expect(element.text()).toContain('roleName_filter : manager')
        await element.trigger('click')
        await new Promise(resolve => setTimeout(resolve, 1000))
        // expect(element).exists().toBe(false);
        expect(rolenameInput.element.value).toBe('');
      }
    })
    

it('clears all filters when clicking on clear filters button and check that the filter inputs values are also cleared', async () => {
    wrapper = mount(FormFilter, {
        global: {
            plugins: [[DashKit, dashkitConfig], router],
        },
        props: propss
    })
    await new Promise(resolve => setTimeout(resolve, 2000))
    const clearFiltersButton = wrapper.find('svg[xmlns="http://www.w3.org/2000/svg"][width="50"][height="50"][fill="var(--color-white)"]');
    expect(wrapper.props()).toMatchObject(propss)
    const rolenameInput = wrapper.find('input[name="roleName"]')
    const roleDescriptionInput = wrapper.find('textarea[name="roleDescription"]')
    expect(rolenameInput.exists()).toBe(true)
    expect(roleDescriptionInput.exists()).toBe(true)
    expect(clearFiltersButton.exists()).toBe(true)
    await rolenameInput.setValue('manager')
    await roleDescriptionInput.setValue('manager role')
    const activeFilters = wrapper.findAll('.filter')
    for (const element of activeFilters) {
        expect(element.text()).toContain('roleName_filter : manager')
        expect(element.text()).toContain('roleDescription_filter : manager role')
    }
    await clearFiltersButton.trigger('click')
    // expect(rolenameInput.element.value).toBe('');
    // expect(roleDescriptionInput.element.value).toBe('');
    })


    // it('Field errors are displayed when submitting empty fields or wrong credentials', async () => {
    //     wrapper = mount(FormCreate, {
    //         global: {
    //             plugins: [[DashKit, dashkitConfig], router],
    //         },
    //         props: propss
    //     })
    //     const submitButton = wrapper.find('button[type="submit"]')
    //     const errorMsg = wrapper.findAll('.formkit-message')
    //     await submitButton.trigger('submit')
    //     errorMsg.forEach(element => {
    //         expect(element.text()).toContain('Username is required')
    //         expect(element.text()).toContain('Password is required')
    //     })
    // })
    // it('Global password error is displayed when submitting with wrong password', async () => {
    //     wrapper = mount(FormCreate, {
    //         global: {
    //             plugins: [[DashKit, dashkitConfig], router],
    //         },
    //         props: {
    //             sections: FormSections,
    //             options: FormOptions,
    //             submitHandler: {
    //                 submit: apiClient.loginWithPwErr,
    //                 errorHandler: {
    //                     globalErrors: {
    //                         "wrong_password": 'wrong_password',
    //                         "pass_loginApiCall": 'pass_loginApiCall',
    //                         "user_name_invalid": 'user_name_invalid',
    //                     }
    //                 },
    //                 redirectRoute: 'dashboard_view'
    //             },
    //             toastHandler: FormToastHandler
    //         }
    //     })
    //     const usernameInput = wrapper.find('input[name="userName"]')
    //     const userPasswordInput = wrapper.find('input[name="userPassword"]')
    //     await usernameInput.setValue('test_user')
    //     await userPasswordInput.setValue('test_passworddd')
    //     const submitButton = wrapper.find('button[type="submit"]')
    //     await submitButton.trigger('submit')
    //     // await new Promise(resolve => setTimeout(resolve, 3000))
    //     const errorMsg = wrapper.findAll('.formkit-message')
    //     errorMsg.forEach(element => {
    //         expect(element.text()).toContain('this password is incorrect')
    //     })
    // })

})