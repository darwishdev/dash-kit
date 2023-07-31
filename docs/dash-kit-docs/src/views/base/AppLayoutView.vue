<template>
    <DocComponent title="Vue Accordion Component" header="AppLayout"
        description="AppLayout groups a collection of contents in tabs." :componentDocs="docs"
        :apiDocs="['Accordion', 'AccordionTab', 'FormCreate']" :ptTabComponent="ptComponent" />
</template>

<script>
import ImportDoc from '@/doc/applayout/ImportDoc.vue';
import FeaturesDoc from '@/doc/applayout/FeaturesDoc.vue';
import CustomizationDoc from '@/doc/applayout/CustomizationDoc.vue';
export default {
    data() {
        return {
            docs: [
                {
                    id: 'import',
                    label: 'Import',
                    component: ImportDoc
                },
                {
                    id: 'features',
                    label: 'Features',
                    component: FeaturesDoc
                },
                {
                    id: 'customization',
                    label: 'Customization',
                    component: CustomizationDoc
                },
            ],
        };
    }
};
</script>
