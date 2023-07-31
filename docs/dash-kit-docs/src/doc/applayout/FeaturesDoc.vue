<template>
    <DocSectionText v-bind="$attrs">
        <p>The AppLayout component provides several key features to enhance the user experience:</p>
    </DocSectionText>
    <ul>
        <li>
            <strong>Sidebar</strong>:<br>The AppLayout component automatically adds a sidebar with dynamic items that come
            from the cached object after login. The sidebar menu items are generated based on user permissions, making it
            easy to show or hide specific menu options for different users.
        </li>
        <li>
            <strong>RTL and LTR Support</strong>:<br> The layout component also supports dynamic breadcrumbs, which can be
            added to the route meta. You can define breadcrumb items for each route, and they will be displayed
            automatically in the navigation bar.
        </li>
        <li>
            <strong>Customization</strong>:<br> If you prefer to create a custom layout, you can create a new component
            under the components or layouts folder and import necessary PrimeVue components and Dash-kit components. You can
            then define your custom layout and override functionalities as needed.
        </li>

    </ul>
</template>

<script>
import { AppLayout } from 'dash-kit/base'
export default {
    components: {
        AppLayout
    },
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
