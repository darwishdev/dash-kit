import i18n from "@/plugins/i18n"
import type { FormSeciton, ToastHandler, ErrorHandler } from '@/types/types'


const { t } = i18n.global
const errorHandler: ErrorHandler = {
    globalErrors: {
        "wrong_password": 'wrong_password',
        "pass_loginApiCall": 'pass_loginApiCall',
        "user_name_invalid": 'user_name_invalid',
    }
}
const redirectRoute: string = 'dashboard_view'
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
    errorHandler,
    redirectRoute,
    sections,
    toastHandler
}