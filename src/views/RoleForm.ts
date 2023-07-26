import type { ErrorHandler, FormSeciton, ToastHandler } from '@/types/types'


const sections: FormSeciton[] = [
    {
        role_info: [
            {
                $formkit: 'text',
                outerClass: "col-4",
                name: 'roleName',
                label: 'roleNameLabel',
                placeholder: 'roleNamePlaceholder',
                validation: 'required|length:3',

            },
            {
                $formkit: 'textarea',
                outerClass: "col-8",
                name: 'roleDescription',
                label: 'roleDescriptionLabel',
                placeholder: 'roleDescriptionPlaceholder',
                validation: '',
            },
        ],
    },
]

const toastHandler: ToastHandler = {
    hideToast: false
}

const errorHandler: ErrorHandler = {

}
export default {
    sections,
    toastHandler,
    errorHandler
}