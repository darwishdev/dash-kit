import apiClient from '@/api/ApiClient'
import type { ErrorHandler, FormSeciton, ToastHandler } from 'dash-kit/types'


const sections: FormSeciton[] = [
    {
        role_info: [
            {
                $formkit: 'text',
                outerClass: "col-8",
                name: 'ingredientName',
                label: 'ingredientNameLabel',
                placeholder: 'ingredientNamePlaceholder',
                validation: 'required|length:3',

            },
            {
                $formkit: 'fileUpload',
                outerClass: "col-4",
                name: 'ingredientImage',
                label: 'ingredient image',
            },
            {
                $formkit: 'text',
                outerClass: "col-8",
                name: 'wasteRatio',
                label: 'wasteRatioLabel',
                placeholder: 'wasteRatioPlaceholder',
                validation: '',
            },
            {
                $formkit: 'text',
                outerClass: "col-12",
                name: 'ingredientCost',
                label: 'ingredientCostLabel',
                placeholder: 'ingredientCostPlaceholder',
                validation: '',
            },
            {
                $formkit: 'text',
                outerClass: "col-12",
                name: 'ingredientUnit',
                label: 'ingredientUnitLabel',
                placeholder: 'ingredientUnitPlaceholder',
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