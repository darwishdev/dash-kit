
import type { FormSeciton, ToastHandler } from '@/types/types'

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
                label: 'userNameLabel',
                placeholder: 'userNamePlaceholder',
                validation: 'required|length:3',

            },
            {
                $formkit: 'password',
                outerClass: "col-12",
                name: 'userPassword',
                label: 'passwordLabel',
                placeholder: 'passwordPlaceholder',
                validation: 'required|length:6',

            },
        ],
    },
]

const toastHandler: ToastHandler = {
    hideToast: false,
    message : 'hello',
    title : 'success'
}


export default {
    errorHandler,
    redirectRoute,
    sections,
    toastHandler
}