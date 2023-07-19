import { mount } from "@vue/test-utils";
import AppLogo from "./AppLogo.vue";
import { expect, test } from "vitest";
test('displays message', () => {
    const wrapper = mount(AppLogo)

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('logo')
})