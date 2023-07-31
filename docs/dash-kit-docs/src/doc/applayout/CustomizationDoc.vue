<template>
    <DocSectionText v-bind="$attrs">
        <p>If you prefer to create a custom layout, you can follow this example:</p>
    </DocSectionText>
    <h1>
        Creating a Custom Layout
    </h1>
    <p>
        To integrate the AppLayout component into your Vue application, follow these steps:
    </p>
    <ul>
        <li>
            <strong>Importing Dependencies</strong>:<br>Start by importing the necessary components and utilities required
            for the layout. The vue-router, vue-i18n, and other components are typically used in the layout.
        </li>
        <li>
            <strong>Defining Custom Layout Component</strong>:<br>
            Create a new Vue component that will serve as your custom layout. Within this component, you can use PrimeVue
            components, Dash-kit helpers, and other custom elements to design your admin panel's layout.
        </li>
        <li>
            <strong>Customizing the Sidebar</strong>:<br>
            The AppLayout component automatically adds a sidebar that displays dynamic items based on the provided app-menu
            component. Customize the sidebar by passing the necessary sidebar items for your application.
        </li>
        <li>
            <strong>Adding Navigation Bar</strong>:<br>
            Use the app-nav component provided by Dash-kit to create a navigation bar for your application. This component
            supports both RTL and LTR languages automatically.
        </li>
        <li>
            <strong>Defining Main Content Area</strong>:<br>The main content area is where your application's pages will be
            rendered. Use the RouterView component from vue-router to display the appropriate component based on the current
            route
        </li>
        <li>
            <strong>Toast and Dialog Support</strong>:<br>If you choose to implement the AppLayout by yourself, you can add
            support for Dash-kit's Toast and DynamicDialog components to show toast messages and create dynamic dialogs in
            your application.
        </li>

    </ul>

    <p>
        this is how you can implement the app layout component by yourself and keep all the functionality as well as
        changing the sidebar items
        if you want to keep the dunamic sidebar items you can just remove model prop inside app menu
    </p>
    <DocSectionCode :code="scriptCode" />
    <DocSectionCode :code="code" />
    <p>
        please note that the app-menu , app-logo , icon-btn are global components so you can directly use them without any
        imports
    </p>
</template>

<script>
export default {

    data() {

        return {
            scriptCode: {
                basic: `<script  lang="ts">
import { defineComponent, ref } from 'vue'
import Sidebar from 'primevue/sidebar';
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
import Toolbar from 'primevue/toolbar';
import Breadcrumb from 'primevue/breadcrumb';
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Toast from 'primevue/toast';
import DynamicDialog from 'primevue/dynamicdialog';
// import {} from "@/components"
import { AppNav } from 'dash-kit/base'
import SideBarItems from '../assets/sidebar'
// import i18n from '@/plugins/i18n'
export default defineComponent({
    components: {
        Sidebar,
        DynamicDialog,
        Menu,
        Toolbar,
        AppNav,
        Avatar,
        Breadcrumb,
        Toast
    },
    beforeCreate() {
        if (localStorage.getItem('asideOpened') == 'true') {
            this.toggleDesktopMenu()
        }
    },
    setup() {
        const { currentRoute } = useRouter()
        const isMenuOpened = ref(false)
        const i18n = useI18n()
        const isSideBarVisible = ref(false)

        const toggleDesktopMenu = () => {
            isMenuOpened.value = !isMenuOpened.value
            localStorage.setItem('asideOpened', isMenuOpened.value.toString())
        }
        const toggleMobileMenu = () => {
            isSideBarVisible.value = !isSideBarVisible.value
            localStorage.setItem('asideOpened', isMenuOpened.value.toString())
        }
        return { toggleDesktopMenu, toggleMobileMenu, SideBarItems, currentRoute, isMenuOpened, isSideBarVisible, isRtl: i18n.locale.value == 'ar' }
    },
})
</` + `script>`

            },
            code: {
                basic: `
// layouts/AppLayout.vue

<template>
    <div class="layout-wrapper" :class="{ 'layout-sidebar-active': isMenuOpened }">
        <aside class="desktop-menu">
            <div class="desktop-menu-header">
                <app-logo logo="@/assets/vue.svg" />
                <icon-btn id="sidebar-lock-icon" :icon="isMenuOpened ? 'lock' : 'lock-open'"
                    @click.prevent="toggleDesktopMenu" />
            </div>
            <KeepAlive>
                <app-menu :model="SideBarItems" />
            </KeepAlive>
        </aside>
        <app-nav @toggleSideBar="toggleMobileMenu">
            <template #end>

            </template>
        </app-nav>
        <div class="layout-main">
            <!-- <Breadcrumb :home="breadCrumbHome" v-if="breadCrumbs" :model="breadCrumbs" /> -->
            <main class="page-content" :class="currentRoute.name">
                <RouterView />
            </main>
        </div>
        <Sidebar class="p-sidebar-sm" v-model:visible="isSideBarVisible" :position="isRtl ? 'right' : 'left'">
            <template #header>
                <app-logo />
            </template>
            <app-menu />
        </Sidebar>
        <toast>
            <template #message="slotProps">
                <div class="flex toast-inner flex-column align-items-center" style="flex: 1">
                    <div class="text-center">
                        <h1 class="font-bold text-4xl ">{{ slotProps.message.summary }}</h1>
                        <p class="my-1">{{ slotProps.message.detail }}</p>
                    </div>

                </div>
            </template>
        </toast>
        <dynamic-dialog />
    </div>
</template>
`
            }
        };
    }
};
</script>
