<script  lang="ts">
import { defineComponent, ref } from 'vue'
import Sidebar from 'primevue/sidebar';
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
import Toolbar from 'primevue/toolbar';
import Breadcrumb from 'primevue/breadcrumb';
import { useRouter } from 'vue-router'
import type { MenuItem } from 'primevue/menuitem'
import type { Ref } from 'vue'
import { useI18n } from 'vue-i18n';

// import i18n from '@/plugins/i18n'
export default defineComponent({
    components: {
        Sidebar,
        Menu,
        Toolbar,
        Avatar,
        Breadcrumb
    },
    beforeCreate() {
        if (localStorage.getItem('asideOpened') == 'true') {
            this.toggleDesktopMenu()
        }
        if (localStorage.getItem('isRtl') == 'true') {
            this.toggleRtl()
        }
    },
    setup() {
        const i18n = useI18n()
        const { currentRoute, push } = useRouter()
        // const { locale } = useI18n()
        const breadCrumbs: Ref<MenuItem[]> = currentRoute.value.meta.breadCrumbs as Ref<MenuItem[]>
        const isMenuOpened = ref(false)
        const isRtl = ref(false)
        const profileMenu = ref();
        const isSideBarVisible = ref(false)

        const breadCrumbHome = {
            icon: 'pi pi-home',
            to: '/',
        }
        const toggleDesktopMenu = () => {
            isMenuOpened.value = !isMenuOpened.value
            localStorage.setItem('asideOpened', isMenuOpened.value.toString())
        }

        const toggleRtl = () => {
            isRtl.value = !isRtl.value;
            localStorage.setItem('isRtl', isRtl.value.toString())
            document.body.classList.toggle('rtl')
            // console.log(i18n)
            // i18n.global.locale.value = isRtl.value ? 'ar' : 'en'
            i18n.locale.value = isRtl.value ? 'ar' : 'en'
            // console.log(i18n.global.locale.value)
        }

        const toggleProfileMenu = (event: Event) => {
            profileMenu.value.toggle(event)
        }

        const logout = () => {
            localStorage.removeItem('token')
            localStorage.removeItem('permissions')
            push('login')
        }
        return { breadCrumbs, breadCrumbHome, toggleDesktopMenu, logout, toggleRtl, toggleProfileMenu, currentRoute, isMenuOpened, isSideBarVisible, isRtl, profileMenu }
    },

})
</script>
<template>
    <div class="layout-wrapper" :class="{ 'layout-sidebar-active': isMenuOpened }">
        <aside class="desktop-menu">
            <div class="desktop-menu-header">
                <app-logo />
                <icon-btn :icon="isMenuOpened ? 'lock' : 'lock-open'" @click.prevent="toggleDesktopMenu" />
            </div>
            <app-menu />
        </aside>
        <Toolbar class="app-nav">
            <template #start>
                <icon-btn icon="bars" class="sidebar-toggler" @click.prevent="isSideBarVisible = !isSideBarVisible" />
                <app-logo />
                <Breadcrumb :home="breadCrumbHome" v-if="breadCrumbs" :model="breadCrumbs" />
            </template>

            <template #end>
                <icon-btn icon="globe" @click.prevent="toggleRtl" />
                <icon-btn icon="user" @click="toggleProfileMenu" />
                <Menu ref="profileMenu" id="overlay_menu" :popup="true">
                    <template #start>
                        <router-link :to="{ name: 'profile_view' }"
                            class="w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround">
                            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2"
                                shape="circle" />
                            <div class="flex flex-column align">
                                <span class="text-sm">{{ $t('profile') }}</span>
                            </div>
                        </router-link>
                    </template>
                    <template #end>
                        <button @click="logout"
                            class="w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround">
                            <i class="pi pi-sign-out" />
                            <span class="ml-2">{{ $t('logout') }}</span>
                        </button>
                    </template>
                </Menu>
            </template>
        </Toolbar>
        <div class="layout-main">
            <Breadcrumb :home="breadCrumbHome" v-if="breadCrumbs" :model="breadCrumbs" />
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

    </div>
</template>
