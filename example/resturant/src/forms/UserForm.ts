import apiClient from '@/api/ApiClient'
import type { ErrorHandler, FormSeciton, ToastHandler } from 'dash-kit/types'
import permissions from '@/api/permissions'

const roleOptions = () => {
    return new Promise<any[]>((resolve) => {
        apiClient.selectInputRolesList({}).then(res => resolve(res.options))
    })
}

const sections: FormSeciton[] = [
    {
        'User Details': [
            {
                $formkit: 'text',
                outerClass: "col-6",
                name: 'userName',
                label: 'Name',
                placeholder: 'Name',
                validation: 'required|length:3',
            },
            {
                $formkit: 'text',
                outerClass: "col-6",
                name: 'userPhone',
                label: 'Phone',
                placeholder: 'Phone',
                validation: 'required',
            },
            {
                $formkit: 'email',
                outerClass: "col-12",
                name: 'userEmail',
                label: 'Email',
                placeholder: 'Email',
                validation: 'required|email',
            },
        ],
    },
    {
        passwords: [
            {
                $formkit: 'password',
                outerClass: "col-6",
                name: 'userPassword',
                label: 'Password',
                placeholder: 'Password',
                validation: 'required|length:8|alphanumeric',
            },
            {
                $formkit: 'password',
                outerClass: "col-6",
                name: 'userPassword_confirm',
                label: 'Confirm Password',
                placeholder: 'Re-enter password',
                validation: 'required|confirm',
                // "validation-label": "Password confirmation"
            },
        ],
    },
    {
        security: [
            {
                $formkit: 'taglist',
                outerClass: "col-12",
                closeOnSelect: false,
                name: 'roles',
                label: 'roles',
                placeholder: 'Select User Roles',
                "empty-message" :"No roles found",
                options : roleOptions
                // validation: 'required',
            },
 {
                $cmp: 'FormKit',
                props: {
                    outerClass: "w-full",
                    type: 'permissions',
                    name: 'permissions',
                    permissions: apiClient.permissionsList
                }
            }
        ],
    },
]

const toastHandler: ToastHandler = {
    hideToast: false
}

const errorHandler: ErrorHandler = {
    fieldErrors : {
        'unique_constraint_users_user_name_key': {
            userName: 'unique_constraint_users_user_name_key'
        },
        'unique_constraint_users_user_phone_key': {
            userPhone: 'unique_constraint_users_user_phone_key'
        },
        'unique_constraint_users_user_email_key': {
            userEmail: 'unique_constraint_users_user_email_key'
        }
}
}
export default {
    sections,
    toastHandler,
    errorHandler
}