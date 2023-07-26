<script  lang="ts">
import { FormOptions, SubmitHandler, FormSeciton, ToastHandler, FindHandler } from '@/types/types';
import { defineComponent, PropType } from 'vue'
import FormFactory from '@/utils/form/FormFactory'
import { useToast } from 'primevue/usetoast';
import { useDataFetcherFind } from '@/composables/composables'
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import {
    handleSuccessToast,
    handleError
} from '@/utils/helpers'

export default defineComponent({
    props: {
        sections: {
            type: Array as PropType<Array<FormSeciton>>,
            required: true,
        },
        options: {
            type: Object as PropType<FormOptions>,
            required: true,
        },
        submitHandler: {
            type: Object as PropType<SubmitHandler<any, any, any>>,
            required: true,
        },
        toastHandler: {
            type: Object as PropType<ToastHandler>,
            required: false,
        },
        findHandler: {
            type: Object as PropType<FindHandler<any, any, any>>,
            required: true,
        }
    },
    setup(props) {
        const log = console.log
        const formSchema = FormFactory.CreateForm(props.options, props.sections)
        const toast = useToast();
        const { t } = useI18n()
        const { push } = useRouter()
        const { params } = useRoute()

        type ResponseType = ReturnType<typeof props.findHandler.findFunction>;
        type RequestType = Record<string, number>
        const req: RequestType = {}

        const requestValue = props.findHandler.requestValue ? props.findHandler.requestValue : parseInt(params.id as string)
        req[props.findHandler.requestPropertyName] = requestValue
        const { responseData, loading, error } = useDataFetcherFind<RequestType, ResponseType>(props.findHandler.findFunction, req);
        const submitHandler = async (req: any, node: any) => {
            const handler = props.submitHandler
            if (handler.mapFunction) {
                req = handler.mapFunction(req)
            }

            await new Promise((resolve) => {
                handler.submit(req)
                    .then(async (res: any) => {
                        node.reset()
                        if (handler.submitCallBack) await handler.submitCallBack(res)
                        handleSuccessToast(props.toastHandler, toast, t, props.options.title)
                        if (!req.isBulkCreate) {
                            if (handler.redirectRoute) push({ name: handler.redirectRoute })
                            resolve(null)
                            return
                        }
                        node.clearErrors()
                        node.input({ isBulkCreate: true });
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
            responseData,
            loading,
            error,
            submitHandler
        }
    }
})

</script>

<template>
    <form-loading v-if="loading" />
    <form-loading v-else-if="error" :error="error" />
    <FormKit v-else :value="responseData" type="form" @submit-invalid="log" :actions="false" @submit="submitHandler">
        <FormKitSchema :schema="formSchema" />
    </FormKit>
</template>