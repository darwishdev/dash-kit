<script  lang="ts">
import { FormOptions, SubmitHandler, FormSeciton, ToastHandler } from '@/types/types';
import { defineComponent } from 'vue'
import FormFactory from '@/utils/form/FormFactory'
import { useToast } from 'primevue/usetoast';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import {
    handleSuccessToast,
    handleError
} from '@/utils/helpers'

export default defineComponent({
    props: {
        sections: {
            type: Array as () => Array<FormSeciton>,
            required: true,
        },
        options: {
            type: Object as () => FormOptions,
            required: true,
        },
        submitHandler: {
            type: Object as () => SubmitHandler<any, any, any>,
            required: true,
        },
        toastHandler: {
            type: Object as () => ToastHandler,
            required: false,
        }
    },
    setup(props) {
        const log = console.log
        const formSchema = FormFactory.CreateForm(props.options, props.sections)
        const toast = useToast();
        const { t } = useI18n()
        const { push } = useRouter()
        const submitHandler = async (req: any, node: any) => {
            const handler = props.submitHandler
            if (handler.mapFunction) {
                req = handler.mapFunction(req)
            }

            await new Promise((resolve) => {
                handler.submit(req)
                    .then(async (res: any) => {
                        console.log(res)
                        node.reset()
                        if (handler.submitCallBack) await handler.submitCallBack(res)
                        handleSuccessToast(props.toastHandler, toast, t, props.options.title)
                        if (!req.stayOnSamePageAfterSuccess) {
                            if (handler.redirectRoute) push({ name: handler.redirectRoute })
                            resolve(null)
                            return
                        }
                        node.clearErrors()
                        node.input({ stayOnSamePageAfterSuccess: true });
                        resolve(null)
                    }).catch((error: any) => {
                        handleError(error, node, toast, handler.errorHandler, t)
                        resolve(null)
                    })
            })
        }
        return {
            formSchema,
            log,
            submitHandler
        }
    }
})

</script>

<template>
    <FormKit type="form" @submit-invalid="log" :actions="false" @submit="submitHandler">
        <FormKitSchema :schema="formSchema" />
    </FormKit>
</template>