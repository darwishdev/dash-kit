<script setup lang="ts">
import type { RoleFindRequest , RoleFindResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';
import { useDataFetcherFind } from 'dash-kit/composables';

const code : any = {
    basic : `
<script setup lang="ts">
import type { RoleFindRequest , RoleFindResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock'; // replace with your api client
import { useDataFetcherFind } from 'dash-kit/composables';

const { responseData, loading, error, fetchData } = useDataFetcherFind<RoleFindRequest, RoleFindResponse>(apiClient.roleFind, {roleId : 1} as RoleFindRequest);

<\/script>

<template>
    <div class="my-5" v-if="loading">
        <h1>Loading Data...</h1>
    </div>
    <div v-else-if="error">
        <h1>Sorry, there is an error ocurred while fetching data</h1>
    </div>
    <div class="my-5" v-else>
        {{ responseData }}
    </div>
    <div class="text-center m-auto my-5">
        <button @click="fetchData" class="p-3 border-radius">Fetch again</button>
    </div>
<\/template>

`
}

const { responseData, loading, error, fetchData } = useDataFetcherFind<RoleFindRequest, RoleFindResponse>(apiClient.roleFind, {roleId : 1} as RoleFindRequest);


</script>
<template>
    <DocSectionText v-bind="$attrs">
        <p>Try using dataFetcherDind composable function to find a specific role data</p>
    </DocSectionText>
    <div class="my-5" v-if="loading">
        <h1>Loading Data...</h1>
    </div>
    <div v-else-if="error">
        <h1>Sorry, there is an error ocurred while fetching data</h1>
    </div>
    <div class="my-5" v-else>
        {{ responseData }}
    </div>
    <div class="text-center m-auto my-5">
        <button @click="fetchData" class="p-3 border-radius">Fetch again</button>
    </div>
    <DocSectionCode :code="code" />
</template>
