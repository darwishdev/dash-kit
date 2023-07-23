import i18n from "@/plugins/i18n"
import type { FormSeciton, ToastHandler, ErrorHandler } from '@/types'


const { t } = i18n.global
export const errorHandler: ErrorHandler = {
    globalErrors: "wrong_password",
}
export const redirectRoute: string = 'dashboard_view'
export const sections: FormSeciton[] = [
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
                name: 'password',
                label: t('passwordLabel'),
                placeholder: t('passwordPlaceholder'),
                validation: 'required|length:6',

            },
        ],

    },
]

export const toastHandler: ToastHandler = {
    hideToast: false
}
