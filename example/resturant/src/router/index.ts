import { createRouter, createWebHistory } from 'vue-router'
import { AppLayout } from 'dash-kit/base'
import { LoginView, ProfileView } from 'dash-kit/views'
import DashboardView from '../views/DashboardView.vue'
import RolesListView from '../views/RolesListView.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/dashboard',
                    meta: { permissions: ['dashboardView'] },
                    name: 'dashboard_view',
                    component: DashboardView
                },
                {
                    path: '/profile',
                    name: 'profile_view',
                    meta: { breadCrumbs: [{ label: "profile" }] },
                    component: ProfileView
                },
                {
                    path: '/roles',
                    name: 'roles_list',
                    component: RolesListView
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        // {
        //     path: '/unauthorized',
        //     name: 'unauthorized',
        //     component: ProfileView
        // },
    ]
})

export default router
