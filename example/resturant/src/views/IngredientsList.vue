<script setup lang="ts">
import apiClient from '@/api/ApiClient';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { IngredientsListRequest , IngredientsListResponse , IngredientDeleteRestoreRequest , IngredientCreateRequest , IngredientCreateResponse } from '@models/v1/menu/ingredient_definitions_pb'
import { ref } from 'vue'
import LogoError from '@/assets/logo-error.svg'
import { FilterMatchMode } from 'primevue/api';
import type {  CrudOptions, SubmitHandler,FormOptions ,FormCreateParams } from "dash-kit/types";
import { useDataFetcherList } from "dash-kit/composables";
import { ExportCSV } from "dash-kit/helpers";
import ingredientsForm from '@/forms/ingredientsForm';


const showDeletedData = ref(false)
let recordId = ref()

        const { sections, toastHandler, errorHandler } = ingredientsForm

        const options: FormOptions = {
            id: 'ingredient-create',
            allowBulkCreate: false,
            title: "ingredient_create"
        }


        const submitHandler: SubmitHandler<IngredientCreateRequest, IngredientCreateRequest, IngredientCreateResponse> = {
            submit: apiClient.ingredientCreate,
            errorHandler
        }

        const createForm : FormCreateParams = { 
            sections : sections,
            options : options,
            submitHandler : submitHandler,
            toastHandler : toastHandler
        }
const { responseData, loading, error, fetchData } = useDataFetcherList<IngredientsListRequest,IngredientsListResponse>(apiClient.ingredientsList , {} as IngredientsListRequest);

const crudOptions: CrudOptions = {
    title: 'users_list',
    feature: 'user',
    showExportButton: true,
    showCreateButton: true,
    showDeletedFilter: true
}


const showDeletedHandler = (val: any) => {
    showDeletedData.value = val
}

const filtered = (filterObject : object) => {
    console.log(filterObject);   
}
const removeFilter = (filter : string) => {
    console.log(filter);   
}

// const deleteRestoreHandler: DeleteRestoreHandler<IngredientDeleteRestoreRequest> = {
//     deleteRestore: apiClient.ingredientDeleteRestore,
//     requestPropertyName: 'ingredientId',
// }

const exportData = () => {
    const dataToExport = showDeletedData.value ? responseData.value?.deletedUsers as unknown[] : responseData.value?.users as unknown[]
    ExportCSV(dataToExport)
}

const filters = ref({
    ingredientName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    ingredientCost: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    ingredientCalories: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    wasteRatio: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
});


</script>

<template>
    <app-crud @imported="(_: any) => fetchData()" :createForm="createForm" @showDeleted="showDeletedHandler"
        @export="exportData" @filtered="filtered" @removeFilter="removeFilter" :options="crudOptions">
        <template #header-title>
            <h1>{{ $t('ingredients_list') }}</h1>
        </template>
    <template #data>
            <div class="grid" v-if="loading">
                <app-card-loading class="col " v-for="i in 3" :key="i" />
            </div>
            <div v-else-if="error">
                <div class="error text-center">
                    <logo-error class=" mt-4" />
                    <h2 class="text-3xl"> {{ $t("list_error") }}</h2>
                    <i class="pi pi-refresh text-3xl mt-4 cursor-pointer" @click="fetchData"></i>
                </div>
            </div>
            <div v-else-if="responseData" class="ingredientss">
            <DataTable v-model:filters="filters" :loading="loading" filterDisplay="row"  :value="showDeletedData ? responseData!.deleteIngredients : responseData!.ingredients" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem;"
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}">
                        <template #header>
                            <div class="flex">
                                <form-kit type="text" name="filterName" :classes="{ outer: 'm-0 mx-2 p-2', }" prefix-icon="search" v-model="filters['ingredientName'].value" placeholder="Search by name" />
                                <form-kit type="text" name="filterCost" :classes="{ outer: 'm-0 mx-2 p-2', }" prefix-icon="search" v-model="filters['ingredientCost'].value" placeholder="Search by cost" />
                                <form-kit type="text" name="filterCalories" :classes="{ outer: 'm-0 mx-2 p-2', }" prefix-icon="search" v-model="filters['ingredientCalories'].value" placeholder="Search by calories" />
                                <form-kit type="text" name="filterWaste" :classes="{ outer: 'm-0 mx-2 p-2', }" prefix-icon="search" v-model="filters['wasteRatio'].value" placeholder="Search by waste ratio" />
                            </div>
                        </template>
                            <Column field="ingredientName" header="Name">
                                <template #body="slotProps">
                                    <!-- {{ slotProps.data.ingredientName }} -->
                                    <router-link class="text-white" :to="{ name: 'ingredient_view', params: { id: slotProps.data.ingredientId } }">{{ slotProps.data.ingredientName }}</router-link>
                                </template>
                            </Column>
                            <Column field="ingredientCost" header="Cost">
                                <template #body="slotProps">
                                    <p> {{ slotProps.data.ingredientCost }} </p>
                                </template>
                            </Column>
                            <Column field="ingredientCalories" header="Calories">
                            </Column>
                            <template #empty> No ingredients found. </template>
                            <template #loading> Loading ingredients data. Please wait. </template>
                        <Column header="Image">
                            <template #body="slotProps">
                                {{ slotProps.data.ingredientImage }}
                                <img :src="`https://static.exploremelon.com/mln_rms/${slotProps.data.ingredientImage}`" :alt="slotProps.data.productImage" class="w-6rem shadow-2 border-round" />
                            </template>
                        </Column>
                        <!-- <Column field="categoryName" header="Category"></Column> -->
                        <Column field="wasteRatio" header="Waste Ratio"></Column>
                        <Column field="unitBuy" header="Unit Buy"></Column>
                        <Column field="unitSell" header="Unit Sell"></Column>
                        <Column field="unitRatio" header="Unit Ratio"></Column>
                        <Column field="ingredientProductsCount" header="Products Count"></Column>
                        <Column header="Delete / Edit">
                            <template #body="slotProps">
                                <div class="flex align-items-center">
                                    <icon-btn v-if="showDeletedData" class="list-icon" :id="`ingred_${slotProps.data.ingredientId}`" icon="refresh" @click="openDialog(); recordId = slotProps.data.ingredientId" />
                                    <icon-btn v-else class="list-icon" icon="trash" :id="`ingred_${slotProps.data.ingredientId}`" @click="openDialog(); recordId = slotProps.data.ingredientId" />
                                    <icon-btn class="list-icon" icon="pencil" ></icon-btn>                
                                </div>
                            </template>
                        </Column>
                        <template v-if="!showDeletedData" #footer> In total there are {{ responseData ? responseData.ingredients.length : 0 }} ingredients. </template>
                        <template v-else #footer> In total there are {{ responseData ? responseData.deleteIngredients.length : 0 }} ingredients. </template>
                    </DataTable>
                </div>
        </template>
    </app-crud>
    <!-- <data-create-form :sections="sections" :submitHandler="submitHandler" :options="options" /> -->
</template>
<style>
.p-dialog .p-dialog-header {
    padding: 1.3rem 1.9rem 0.5rem;
}
.p-datatable .p-datatable-tbody > tr > td {
    padding: 1.5rem 0.5rem;
}
.p-datatable .p-datatable-thead > tr > th {
}
</style>