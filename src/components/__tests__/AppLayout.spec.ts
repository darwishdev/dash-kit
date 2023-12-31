// __tests__/LayoutWrapper.spec.ts
import { mount } from '@vue/test-utils';
import AppLayout from '@/components/AppLayout.vue';
import { expect, describe, it } from 'vitest';
import DashKit from '@/DashKit';
import router from '@/router';
import dashkitConfig from '@/dashkit.config'

const factory = () => {
    return mount(AppLayout, {
        global: {
            plugins: [[DashKit, dashkitConfig], router],
        },
    });
};

describe('AppLayout tests ', () => {
    it('toggles desktop menu', async () => {
        const wrapper = factory();
        expect(wrapper.vm.isMenuOpened).toBe(false);
        // Find the lock button and click it to toggle the desktop menu
        const lockButton = wrapper.find('.desktop-menu-header #sidebar-lock-icon');
        // check that active class is not set
        expect(wrapper.classes().includes('layout-sidebar-active')).toBe(false)
        await lockButton.trigger('click');
        // // After clicking, the  wrapper should have "layout-sidebar-active" class
        expect(wrapper.classes().includes('layout-sidebar-active')).toBe(true)
        // // After clicking, the menu should be opened
        expect(wrapper.vm.isMenuOpened).toBe(true);
        // // Click the lock button again to toggle the desktop menu back
        await lockButton.trigger('click');
        // // After clicking again, the menu should be closed
        expect(wrapper.vm.isMenuOpened).toBe(false);
    });

});
