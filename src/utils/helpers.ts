import type { ErrorHandler, ToastHandler } from "@/types/types"
import type { FormKitNode } from "@formkit/core"
import { ToastServiceMethods } from 'primevue/toastservice'
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router"
export const handleSuccessToast = (handler: ToastHandler | undefined, toast: ToastServiceMethods, t: Function, title: string): void => {
    const defaultTitle = `${title}_success_toast_title`
    const defaultMessage = `${title}_success_toast_message`
    if (handler) {
        if (!handler.hideToast) {
            toast.add({ severity: 'success', summary: t(`${handler.title ? handler.title : defaultTitle}`), detail: t(`${handler.message ? handler.message : defaultMessage}`), life: 3000 });
        }
    } else {
        toast.add({ severity: 'success', summary: t(defaultTitle), detail: t(defaultMessage), life: 3000 });
    }
}
export const objFirstKey = (obj: Object) => {
    return Object.keys(obj)[0]
}


export const handleError = (error: any, _node: FormKitNode, _toast: ToastServiceMethods, _errorHandler: ErrorHandler, _t: Function): void => {
    if (error == null) {
        return
    }
    const messages = error.message.split(' ')
    const message: string = messages.length == 2 ? messages[1] : error.message
    if (message == 'internalServerError') {
        _toast.add({ severity: 'error', summary: _t('internalServerErrorTitle'), detail: _t('internalServerErrorMessage'), life: 3000 });
    } else {
        if (!_errorHandler.globalErrors && !_errorHandler.fieldErrors) {
            _node.setErrors(['unknow_error'])
            return
        }
        if (_errorHandler.globalErrors && _errorHandler.globalErrors[message]) {
            _node.setErrors((_errorHandler.globalErrors![message]))
            return
        }
        if (_errorHandler.fieldErrors && _errorHandler.fieldErrors[message]) {
            const err = _errorHandler.fieldErrors[message]
            const key = objFirstKey(err)
            err[key] = _t(err[key])
            _node.setErrors([], err)
            return
        }

        _node.setErrors([_t('unknown_error')])

    }
}



export const parseDate = (date: string): string => {
    const dateValue = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'Africa/Cairo',
    };
    return dateValue.toLocaleString('en-US', options);
}

export const SnakeToCamel = (str: string): string => {
    return str.replace(/([-_]\w)/g, (match) => match[1].toUpperCase());
}

export const SnakeToPascal = (str: string): string => {
    const camelCaseStr = SnakeToCamel(str)
    return camelCaseStr.charAt(0).toUpperCase() + camelCaseStr.slice(1);
}
export const Can = (functionName: string): boolean => {
    const permissions = atob(localStorage.getItem('permissions') as string)
    return permissions.includes(functionName) || functionName == 'dashboardView'
}
export const authMiddleware = (to: RouteLocationNormalized, _: RouteLocationNormalized, next: NavigationGuardNext) => {
    if (to.name != 'login') {
        if (!localStorage.getItem('token')) {
            localStorage.removeItem('permissions')
            localStorage.removeItem('sideBar')
            next({ name: 'login' })
        }
    }
    if (!Can(SnakeToPascal(to.name as string)) && to.name != 'unauthorized' && to.name != 'login') {
        next({ name: 'unauthorized' })
    }
    next()
}