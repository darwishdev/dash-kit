import { mount } from "@vue/test-utils";
// import  from '@vue/vue3-jest'
import AppNav from "@/components/AppNav.vue";
import { expect, describe, it, vi } from "vitest";
import DashKit from '@/DashKit'
import router from '@/router'

const factory = () => {
    return mount(AppNav, {
        global: {
            plugins: [DashKit, router],
        }
    })

}

describe('AppNav tests ', () => {
    it('toggle rtl class on toggleLocal', async () => {
        const wrapper = factory()
        expect(wrapper.vm.isRtl).toBe(false)
        expect(document.body.classList.contains('rtl')).toBe(false)
        const toggleLocalBtn = wrapper.find('#locale-toggler')
        await toggleLocalBtn.trigger('click')
        expect(document.body.classList.contains('rtl')).toBe(true)
        expect(wrapper.vm.isRtl).toBe(true)
    })
    it('profile menu showed', async () => {
        const wrapper = factory()
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
        const wrapper = factory()
        const toggleProfileBtn = wrapper.find('#profile-toggler')
        await toggleProfileBtn.trigger('click')
        const logoutBtn = document.getElementById("logout-btn")
        logoutBtn!.click()
        expect(spy).toHaveBeenCalledTimes(1)

    })


    it('shows sidebar', async () => {
        const wrapper = factory();
        expect(wrapper.vm.isSideBarVisible).toBe(false);
        // get the count of body children before clickng 
        // we know that primevue sidebar is appended to the body 
        // so we can check that the children is increased by one child whic is sidebar
        const bodyChildrenCountBeforeOpening = document.querySelector('body')?.children.length
        const sidebarButton = wrapper.find('.sidebar-toggler');
        await sidebarButton.trigger('click');
        const bodyChildrenCountAfterOpening = document.querySelector('body')?.children.length
        expect(bodyChildrenCountAfterOpening! - bodyChildrenCountBeforeOpening!).toBe(1)
    });
})