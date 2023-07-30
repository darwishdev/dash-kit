import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/components/AppLayout.vue'
import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'
import FormFilterView from '@/views/FormFilterView.vue'
import ProfileView from '@/views/ProfileView.vue'
import updateView from '@/views/updateView.vue'
import RolesListView from '@/views/RolesListView.vue'
import AppCrudView from '@/views/AppCrudView.vue'

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

                {
                    path: '/roles/update/:id',
                    name: 'role_update',
                    component: updateView
                },
                {
                    path: '/form_filter',
                    name: 'form_filter',
                    component: FormFilterView
                },
                {
                    path: '/app_crud',
                    name: 'app_crud',
                    component: AppCrudView
                },]
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/unauthorized',
            name: 'unauthorized',
            component: ProfileView
        },
    ]
})

export default router
