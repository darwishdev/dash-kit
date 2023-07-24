import i18n from "@/plugins/i18n"
import type { FormSeciton, ToastHandler } from '@/types/types'


const { t } = i18n.global

const sections: FormSeciton[] = [
    {
        login: [
            {
                $formkit: 'text',
                outerClass: "col-12",
                name: 'userName',
                label: t('userNameLabel'),
                placeholder: t('userNamePlaceholder'),
                validation: 'required|length:3',

            },
            {
                $formkit: 'password',
                outerClass: "col-12",
                name: 'userPassword',
                label: t('passwordLabel'),
                placeholder: t('passwordPlaceholder'),
                validation: 'required|length:6',

            },
        ],
    },
]

const toastHandler: ToastHandler = {
    hideToast: false
}


export default {
    sections,
    toastHandler
}