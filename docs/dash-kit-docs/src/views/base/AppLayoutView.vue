<template>
    <DocComponent title="Vue Accordion Component" header="AppLayout"
        description="AppLayout groups a collection of contents in tabs." :componentDocs="docs"
        :apiDocs="['Accordion', 'AccordionTab']" :ptTabComponent="ptComponent" />
</template>

<script>
// import ThemingDoc from '@/doc/Accordion/theming/index.vue';
import AccessibilityDoc from '@/doc/applayout/AccessibilityDoc.vue';
import BasicDoc from '@/doc/applayout/BasicDoc.vue';
import ControlledDoc from '@/doc/applayout/ControlledDoc.vue';
import Disabled from '@/doc/applayout/DisabledDoc.vue';
import DynamicDoc from '@/doc/applayout/DynamicDoc.vue';
import ImportDoc from '@/doc/applayout/ImportDoc.vue';
import MultipleDoc from '@/doc/applayout/MultipleDoc.vue';
import TemplateDoc from '@/doc/applayout/TemplateDoc.vue';
import PTComponent from '@/doc/applayout/pt/index.vue';

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
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'dynamic',
                    label: 'Dynamic',
                    component: DynamicDoc
                },
                {
                    id: 'multiple',
                    label: 'Multiple',
                    component: MultipleDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: Disabled
                },
                {
                    id: 'controlled',
                    label: 'Controlled',
                    component: ControlledDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            ptComponent: PTComponent,
            // themingDoc: ThemingDoc
        };
    }
};
</script>
