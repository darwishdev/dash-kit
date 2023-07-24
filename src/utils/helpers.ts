import type { ErrorHandler, ToastHandler } from "@/types/types"
import type { FormKitNode } from "@formkit/core"
import { ToastServiceMethods } from 'primevue/toastservice'
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



export const handleError = (error: any, _node: FormKitNode, _toast: ToastServiceMethods, _errorHandler: ErrorHandler, _t: Function): void => {
    if (error == null) {
        return
    }
    const messages = error.message.split
    const message: string = messages.length == 2 ? messages[1] : error.message
    if (message == 'internalServerError') {
        _toast.add({ severity: 'error', summary: _t('internalServerErrorTitle'), detail: _t('internalServerErrorMessage'), life: 3000 });
    } else {
        if (!_errorHandler.globalErrors && !_errorHandler.fielErrors) {
            _node.setErrors(['failed'])
            return
        }
        if (_errorHandler.globalErrors && _errorHandler.globalErrors[message]) {
            _node.setErrors(_t(_errorHandler.globalErrors![message]))
        }
    }
    // let parsedError: any = null
    // console.log(toast)

    // try {
    //     parsedError = JSON.parse(error.message)
    // } catch (err) {
    //     if (!errorHandler.globalErrors && !errorHandler.fielErrors) {
    //         parsedError = { globalErrors: "failed" }
    //         node.setErrors(t(parsedError.globalErrors!))
    //         return
    //     }
    //     if (errorHandler.globalErrors) {
    //         const globalErrors = errorHandler.globalErrors as Record<string, string | string[]>
    //         const messages = error.message.split(' ')
    //         const message: string = messages.length == 2 ? messages[1] : error.message
    //         console.log("message", globalErrors[message])

    //         if (globalErrors[message]) {
    //             parsedError = { globalErrors: globalErrors[message] }
    //         }
    //         node.setErrors(t(parsedError.globalErrors!))
    //         return

    //     }

    // }

    // const messages = error.message.split
    // const message: string = messages.length == 2 ? messages[1] : error.message
    // if (message == 'internalServerError') {
    //     toast.add({ severity: 'error', summary: t('internalServerErrorTitle'), detail: t('internalServerErrorMessage'), life: 3000 });
    // } else {
    //     node.setErrors(t(parsedError.globalErrors!), parsedError.fielErrors)
    // }
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