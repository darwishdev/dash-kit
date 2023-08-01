<template>
    <DocComponent title="DataFetcherList" header="DataFetcherList"
        description="The DataFetcherFind composable file contains the useDataFetcherFind function, which is a powerful tool designed to
         fetch data for a specific user. This function is particularly useful in update and view pages, where it enables developers to
          retrieve and display data from the server in a seamless and efficient manner. By utilizing the useDataFetcherFind function, 
          designers and developers can easily fetch and display data for a specific user in a streamlined and efficient manner. This 
          function's comprehensive set of features includes the ability to create custom forms, validate data inputs, and handle form
          submission events." :componentDocs="docs"
    :ptTabComponent="ptComponent" />
</template>

<script>
import Usage from '../../doc/composables/DataFetcherFind/Usage.vue';

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
        };
    }
};
</script>