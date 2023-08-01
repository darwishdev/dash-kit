<template>
    <DocComponent title="DataFetcherList" header="DataFetcherList"
        description="the DataFetcherList composable file is a valuable tool for developers seeking to streamline the process of listing
         data from a feature endpoint API. This file represents a valuable resource for designers and developers seeking to optimize
          the functionality and usability of their applications. This file includes the useDataFetcherList function, which is particularly
           useful in listing features. The useDataFetcherList function takes two parameters, including the fetchFunction, 
           which is the API function responsible for fetching the data, and the req argument, which represents the request used in the 
           fetch function. This argument is particularly useful in useDataFetcherFind, where userId can be used as reqProp to fetch data 
           for a specific user." :componentDocs="docs"
    :ptTabComponent="ptComponent" />
</template>

<script>
import Usage from '../../doc/composables/DataFetcherList/Usage.vue';

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