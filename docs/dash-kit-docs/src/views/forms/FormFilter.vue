<template>
    <DocComponent title="Form Filter component" header="Filter Form"
        description="The FormFilter component is a powerful tool designed to generate a comprehensive filter form with an intuitive and user-friendly interface.
         This component features a wide range of events, including filtersCleared, which is triggered when the user clicks on the filters
          clear icon, and filtered, which is invoked every time a new filter key is employed.
        By utilizing the FormFilter component, designers and developers can create highly efficient and effective filter forms that 
        enable users to quickly and easily sort and filter data." :componentDocs="docs"
    :ptTabComponent="ptComponent" />
</template>

<script>
import Usage from '@/doc/forms/FormFilter/Usage.vue';

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
