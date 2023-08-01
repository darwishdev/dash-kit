<template>
    <DocComponent title="Form Create component" header="Form Loading"
        description="The form-loading component is a highly useful feature designed to enhance user experience during form updates.
         This component displays a loading form that takes on the shape and structure of the actual form,
         giving users a clear visual representation of what to expect once the loading state is completed. This component is 
         particularly helpful when fetching user data, as it ensures that users are aware of the form's structure and layout
          before it loads fully." :componentDocs="docs"
    :ptTabComponent="ptComponent" />
</template>

<script>
import Usage from '@/doc/forms/FormLoading/Usage.vue';

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
