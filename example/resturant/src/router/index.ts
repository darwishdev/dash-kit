import { createRouter, createWebHistory } from 'vue-router'
import { AppLayout } from 'dash-kit/base'
import { LoginView, zUnauthorizedView } from 'dash-kit/views'
import DashboardView from '../views/DashboardView.vue'
import { ref } from 'vue';
import administration from '../views/AdministrationView.vue'
import UsersListView from '../views/UsersListView.vue'
import UserUpdateView from '../views/UserUpdateView.vue'
import UserCreateView from '../views/UserCreateView.vue'
import UserView from '../views/UserView.vue'
import ingredientsList from '../views/IngredientsList.vue'
import ingredientView from '../views/IngredientView.vue'
// import { authMiddleware } from 'dash-kit/helpers'
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
                //roles
                {
                    path: '/roles',
                    name: 'roles_list',
                    meta: { breadCrumbs: [{ label: "roles" }] },
                    component: () => import('../views/RolesListView.vue')
                },
                {
                    path: '/roles/create',
                    name: 'role_create',
                    meta: { breadCrumbs: ref([{ label: "roles", to: { name: 'roles_list' } }, { label: "create" }]) },
                    component: () => import('../views/RoleCreateView.vue')
                },
                {
                    path: '/roles/update/:id',
                    name: 'role_update',
                    meta: { breadCrumbs: ref([{ label: "roles", to: { name: 'roles_list' } }, { label: "update" }]) },
                    component: () => import('../views/RoleUpdateView.vue')
                },
                {
                    path: '/administration',
                    name: 'administration',
                    component: administration
                },
                {
                    path: '/users',
                    name: 'users_list',
                    meta: { breadCrumbs: [{ label: "users" }] },
                    component: UsersListView
                },
                {
                    path: '/users/:id',
                    name: 'user_view',
                    meta: { breadCrumbs: ref([{ label: "users", to: { name: 'users_list' } }, { label: "view" }]) },
                    component: UserView
                },
                {
                    path: '/users/create',
                    name: 'user_create',
                    meta: { breadCrumbs: ref([{ label: "users", to: { name: 'users_list' } }, { label: "create" }]) },
                    component: UserCreateView
                },
                {
                    path: '/users/update/:id',
                    name: 'user_update',
                    meta: { breadCrumbs: ref([{ label: "users", to: { name: 'users_list' } }, { label: "update" }]) },
                    component: UserUpdateView
                },
                {
                    path: '/ingredients',
                    name: 'ingredients_list',
                    meta: { breadCrumbs: [{ label: "ingredients" }] },
                    component: ingredientsList
                },
                {
                    path: '/ingredients/:id',
                    name: 'ingredient_view',
                    meta: { breadCrumbs: ref([{ label: "ingredients", to: { name: 'ingredients_list' } }, { label: "view" }]) },
                    component: ingredientView
                },
                // {
                //     path: '/ingredients/create',
                //     name: 'user_create',
                //     meta: { breadCrumbs: ref([{ label: "users", to: { name: 'users_list' } }, { label: "create" }]) },
                //     component: UserCreateView
                // },
                // {
                //     path: '/ingredients/update/:id',
                //     name: 'ingredient_update',
                //     meta: { breadCrumbs: ref([{ label: "ingredients", to: { name: 'ingredients_list' } }, { label: "update" }]) },
                //     component: ingredientUpdate
                // },
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
// router.beforeEach(authMiddleware)

export default router
