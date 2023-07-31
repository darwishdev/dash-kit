import apiClient from './api/ApiClient'
import formKitConfig from './formkit.config'
import type { DashKitConfig, ErrorHandler, LoginHandler, UploadHandler } from 'dash-kit/types'
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
    submit: apiClient.userLogin,
    redirectRoute: "dashboard_view",
    errorHandler: loginErrorHandler
}

const uploadHandler: UploadHandler = {
    fileUpload: apiClient.fileUpload,
    fileRemove: apiClient.fileRemove,
    baseImageUrl: import.meta.env.VITE_IMG_URL
}
const config: DashKitConfig = {
    formKitConfig,
    loginHandler,
    uploadHandler,
    translations: {
        en,
        ar
    },
}
export default config