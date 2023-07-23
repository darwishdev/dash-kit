import type { ErrorHandler, ToastHandler } from "@/types"
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



export const handleError = (error: any, node: FormKitNode, toast: ToastServiceMethods, errorHandler: ErrorHandler, t: Function): void => {
    const messages = error.message.split
    const message: string = messages.length == 2 ? messages[1] : error.message
    if (message == 'internalServerError') {
        toast.add({ severity: 'error', summary: t('internalServerErrorTitle'), detail: t('internalServerErrorMessage'), life: 3000 });
    } else {
        node.setErrors(errorHandler.globalErrors, errorHandler.fielErrors)
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