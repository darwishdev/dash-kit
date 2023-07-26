import apiClient from './api/ApiMock'
import formKitConfig from './formkit.config'
import { DashKitConfig, LoginHandler, ErrorHandler } from '@/types/types'

import en from '@/locales/en.json'
import ar from '@/locales/ar.json'
const loginErrorHandler: ErrorHandler = {
    globalErrors: {
        "pass_loginApiCall": 'pass_loginApiCall',
    },
    fieldErrors: {
        'user_not_found': {
            userName: "user_not_found"
        },
        'user_name_invalid': {
            userName: "user_name_invalid"
        },
        'incorrect_password': {
            userPassword: "incorrect_password"
        }
    }
}

const loginHandler: LoginHandler = {
    submit: apiClient.loginWithPwErr,
    redirectRoute: "dashboard_view",
    errorHandler: loginErrorHandler
}
const config: DashKitConfig = {
    translations: {
        en,
        ar
    },
    formKitConfig,
    loginHandler
}
export default config