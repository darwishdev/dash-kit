<template>
    <DocComponent title="Form Create component" header="Form Create"
        description="The Form Create component is a crucial element of the Dash-Kit package, 
        as it facilitates the generation of comprehensive forms with all the necessary specifications,
         thereby streamlining the form creation process. The Form Create component is a powerful tool that significantly enhances the
          form creation process, providing developers with a highly functional and customizable solution
           for generating forms with ease." :componentDocs="docs"
         :ptTabComponent="ptComponent" />
</template>

<script>
import BasicDoc from '@/doc/forms/FormCreate/BasicDoc.vue';
import withToastDoc from '@/doc/forms/FormCreate/withToastDoc.vue';
import ErrorHandler from '@/doc/forms/FormCreate/ErrorHandler.vue';
import CustomInputs from '../../doc/forms/FormCreate/CustomInputs.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'toastHandler',
                    label: 'With ToastHandler',
                    component: withToastDoc
                },
                {
                    id: 'ErrorHandler',
                    label: 'ErrorHandler',
                    component: ErrorHandler
                },
                {
                    id: 'CustomInputs',
                    label: 'With Custom Inputs',
                    component: CustomInputs
                },
            ],
            // ptComponent: PTComponent,
            // themingDoc: ThemingDoc
        };
    }
};
</script>
