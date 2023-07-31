import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import IntroductionView from '@/views/getting_started/IntroductionView.vue'
import InstallationView from '@/views/getting_started/InstallationView.vue'
import ConfigurationView from '@/views/getting_started/ConfigurationView.vue'
import AppLayoutView from '@/views/base/AppLayoutView.vue'
import formCreate from '@/views/forms/formCreate.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/getting-started/introduction',
                    component: IntroductionView
                },
                {
                    path: '/getting-started/installation',
                    component: InstallationView
                },
                {
                    path: '/getting-started/configuration',
                    component: ConfigurationView
                },
                {
                    path: '/base/app-layout',
                    component: AppLayoutView
                },
                {
                    path: '/forms/formCreate',
                    component: formCreate
                },
            ]
        }
    ]
})

router.push('/getting-started/introduction')
export default router
