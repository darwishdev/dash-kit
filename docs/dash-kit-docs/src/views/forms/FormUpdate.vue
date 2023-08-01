<template>
    <DocComponent title="Form Update component" header="Form Update"
        description=" This component is similar to the Form Create component, with one key distinction, the inclusion of the findHandler prop,
         which is responsible for retrieving user or form data from the server, making it easy to update data.
        With its robust set of features and capabilities, the Form Update component is a valuable resource for designers and developers
         seeking to optimize the functionality and usability of their forms. This component's comprehensive set of functionalities includes
          the ability to create custom forms, validate data inputs, and handle form submission events. Additionally, the findHandler prop
           enables developers to fetch data from the server and populate the form with the necessary data for updates." :componentDocs="docs"
         :ptTabComponent="ptComponent" />
</template>

<script>
import FindHandler from '@/doc/forms/FormUpdate/FindHandler.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'FindHandler',
                    label: 'Using FindHandler',
                    component: FindHandler
                },
            ],
            // ptComponent: PTComponent,
            // themingDoc: ThemingDoc
        };
    }
};
</script>
