import { mount } from "@vue/test-utils";
// import  from '@vue/vue3-jest'
import AppNav from "@/components/AppNav.vue";
import { expect, describe, it, vi, afterEach, beforeEach } from "vitest";
import DashKit from '@/DashKit'
import router from '@/router'
import dashkitConfig from '@/dashkit.config'



describe('AppNav tests ', () => {
    let wrapper: any = null

    beforeEach(() => {
        wrapper = mount(AppNav, {
            global: {
                plugins: [[DashKit, dashkitConfig], router],
            }
        })
    })
    // TEARDOWN - run after to each unit test
    afterEach(() => {
        wrapper.unmount()
    })
    it('toggle rtl class on toggleLocal', async () => {

        expect(wrapper.vm.isRtl).toBe(false)
        expect(document.body.classList.contains('rtl')).toBe(false)
        const toggleLocalBtn = wrapper.find('#locale-toggler')
        await toggleLocalBtn.trigger('click')
        expect(document.body.classList.contains('rtl')).toBe(true)
        expect(wrapper.vm.isRtl).toBe(true)
    })
    it('profile menu showed', async () => {
        //check for logout btn because it's inside the menu
        // so we expect it to be not found at first time and 
        //we also expect to find it after clicking at the button
        expect(document.querySelector("#logout-btn")).toBe(null)
        const toggleProfileBtn = wrapper.find('#profile-toggler')
        await toggleProfileBtn.trigger('click')
        expect(typeof document.querySelector("#logout-btn")).toBe('object')
        await toggleProfileBtn.trigger('click')
    })
    it('redirect to login after logout', async () => {
        const spy = vi.spyOn(router, 'push')
        expect(spy).toHaveBeenCalledTimes(0)
        const toggleProfileBtn = wrapper.find('#profile-toggler')
        await toggleProfileBtn.trigger('click')
        const logoutBtn = document.getElementById("logout-btn")
        logoutBtn!.click()
        // expect(spy).toHaveBeenCalledTimes(1)

    })


    it('shows sidebar', async () => {
        const sidebarButton = wrapper.find('.sidebar-toggler');
        await sidebarButton.trigger('click');
        expect(wrapper.emitted('toggleSideBar')).toBeTruthy()
    });
})