<template>
    <DocSectionText v-bind="$attrs">
        <p>To use the AppLayout component, you need to import it and set it as the parent component for your routes in the
            router configuration. Here's an example of how to set up the router with AppLayout:</p>
    </DocSectionText>

    <DocSectionCode :code="code" />
    <p>this is will be the router view looks like</p>
    <div class="card">
        <Image src="/examples/applayout.webp" alt="Image" class="full-img" preview />
    </div>
</template>

<script>
import Image from 'primevue/image';
export default {
    components: {
        Image
    },
    data() {
        return {
            code: {
                basic: `// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import { LoginView, UnauthorizedView } from 'dash-kit/views';
import ProfileView from '../views/ProfileView.vue';
import DashboardView from '../views/DashboardView.vue';
import { AppLayout } from 'dash-kit/base';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard_view',
                    component: DashboardView
                },
                {
                    path: '/profile',
                    name: 'profile_view',
                    meta: { breadCrumbs: [{ label: "profile" }] },
                    component: ProfileView
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
});

export default router;
`
            }
        };
    }
};
</script>
