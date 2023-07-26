import { createRouter, createWebHistory } from 'vue-router'
import { AppLayout } from 'dash-kit/base'
import { LoginView, ProfileView, UnauthorizedView } from 'dash-kit/views'
import DashboardView from '../views/DashboardView.vue'
import administration from '../views/AdministrationView.vue'
import RolesListView from '../views/RolesListView.vue'
import UsersListView from '../views/UsersListView.vue'
import { authMiddleware } from 'dash-kit/helpers'
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
                    meta: { breadCrumbs: [{ label: "roles" }] },
                    component: RolesListView
                },
                {
                    path: '/administration',
                    name: 'administration',
                    meta: { breadCrumbs: [{ label: "administration" }] },
                    component: administration
                },
                {
                    path: '/users',
                    name: 'users_list',
                    meta: { breadCrumbs: [{ label: "users" }] },
                    component: UsersListView
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/unauthorized',
            name: 'unauthorized',
            component: UnauthorizedView
        },
    ]
})


router.beforeEach((to, _, next) => {
    if (to.fullPath == '/') {
        next({ name: 'dashboard_view' })
    }
    next()
})
router.beforeEach(authMiddleware)

export default router
