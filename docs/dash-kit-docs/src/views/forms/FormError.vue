<template>
    <DocComponent title="Form Error component" header="Form Error"
        description="The FormError component is a valuable feature that serves a similar purpose to the FormLoading component. 
        However, while the FormLoading feature is utilized during the loading state of a form, the FormError component is designed
         to handle errors that may occur during data retrieval from a database or as a result of internal server errors.." :componentDocs="docs"
    :ptTabComponent="ptComponent" />
</template>

<script>
import Usage from '@/doc/forms/FormError/Usage.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'Usage',
                    label: 'Usage',
                    component: Usage
                },
            ],
            // ptComponent: PTComponent,
            // themingDoc: ThemingDoc
        };
    }
};
</script>