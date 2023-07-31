<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import apiClient from '@/api/ApiClient';
import { useRouter } from 'vue-router';
import { IngredientFindRequest , IngredientFindResponse , IngredientDeleteRestoreRequest} from '@models/v1/menu/ingredient_definitions_pb'
import LogoError from '@/assets/logo-error.svg'
import { useDataFetcherList } from "dash-kit/composables";
import Button from 'primevue/button';
import { ref } from 'vue';
import { FilterMatchMode } from 'primevue/api';

const { push,currentRoute } = useRouter();
const IngredientId = parseInt(currentRoute.value.params.id as string)
const { responseData, loading, error,fetchData } = useDataFetcherList<IngredientFindRequest,IngredientFindResponse>(apiClient.ingredientFind, {ingredientId : IngredientId} as IngredientFindRequest);
function onDialogSubmitted(recordId: number) {
    const request: IngredientDeleteRestoreRequest = new IngredientDeleteRestoreRequest({
        ingredientId : recordId
    })
    apiClient.ingredientDeleteRestore(request).then(() => {
        push('/ingredients')
    })
}
const filters = ref({
    productName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
});
const ModifiersFilters = ref({
    modifierOptionName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
});
</script>
<template>
    <div v-if="loading">
        <h1>Loading</h1>
    </div>
    <div v-else-if="error">
        <div class="error text-center">
            <logo-error class=" mt-4" />
            <h2 class="text-3xl"> {{ $t("list_error") }}</h2>
            <i class="pi pi-refresh text-3xl mt-4 cursor-pointer" @click="fetchData"></i>
        </div>
    </div>
    <div v-else>
        <app-card :class="{ 'app-card-restore': false }" :updateForm="'PopUp'" :recordId="IngredientId"
        @onDialogSubmitted="onDialogSubmitted">
        <template #start>
        </template>
        <template #end>
            <div class="flex align-items-center py-2 my-3 w-full">
                <img class="col-2 p-2" style="width: 16%;" :alt="responseData?.ingredientName + 'image'" :src="`https://static.exploremelon.com/mln_rms${responseData!.ingredientImage}`">
                <div class="col-9 flex flex-column py-3 ml-5">
                    <h1 class="font-bold">{{ responseData?.ingredientName }}</h1>
                    <div class="flex bg-card p-5 border-round">
                        <div class="mx-4 text-sm" >
                            <h2 class="font-bold">{{ responseData?.wasteRatio }}<span class="text-sm"> %</span></h2>
                            <h4>Waste Ratio</h4>
                        </div>
                        <div class="mx-4 text-sm" >
                            <h2 class="font-bold">{{ responseData?.ingredientCalories }}<span class="text-sm"> KCAL</span></h2>
                            <h4>Calories</h4>
                        </div>
                        <div class="mx-4 text-sm" >
                            <h2 class="font-bold">{{ responseData?.ingredientCost }}.00 <span class="text-sm">EGP</span></h2>
                            <h4>Cost</h4>
                        </div>
                        <div class="mx-4 text-sm" >
                            <h2 class="font-bold">{{ responseData?.categoryName }}</h2>
                            <h4>Category</h4>
                        </div>
                        <div class="mx-4 text-sm" >
                            <h2 class="font-bold">{{ responseData?.unitBuy }}</h2>
                            <h4>Buying unit</h4>
                        </div>
                        <div class="mx-4 text-sm" >
                            <h2 class="font-bold">{{ responseData?.unitSell }}</h2>
                            <h4>Selling unit</h4>
                        </div>
                        <div class="mx-4 text-sm" >
                            <h2 class="font-bold">{{ responseData?.unitRatio }}</h2>
                            <h4>Unit ratio</h4>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        </app-card>
        <div class="ingredientss">
            <DataTable :value="responseData!.products" v-model:filters="filters" :loading="loading" filterDisplay="row" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem;"
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}">
                    <template #header>
                        <div class="flex flex-wrap align-items-center justify-content-between gap-2 p-2">
                            <span class="text-xl text-900 font-bold">Ingredient products</span>
                            <div class="flex align-items-center"> 
                                <Button label="New" severity="success" class="mx-3 px-3" icon="pi pi-plus" />
                                <Button label="Delete" severity="primary" icon="pi pi-trash" />
                                <form-kit type="text" :classes="{ outer: 'm-0 mx-2 p-2', }" prefix-icon="search" v-model="filters['productName'].value" placeholder="Search by name" />
                            </div>
                        </div>
                    </template>
                    <template #empty> No ingredients found. </template>
                    <template #loading> Loading ingredients data. Please wait. </template>
                    <div v-if="responseData!.products.length < 1">
                        <Column class="text-primary text-center text-3xl m-auto" :header="`There are no ${responseData?.ingredientName} products yet !`"></Column>
                    </div>
                    <div v-else>
                        <Column field="productName" header="Name"></Column>
                        <Column header="Image">
                            <template #body="slotProps">
                                <img :src="`https://static.exploremelon.com/mln_rms/${slotProps.data.productImage}`" :alt="slotProps.data.productImage" class="w-6rem shadow-2 border-round" />
                            </template>
                        </Column>
                        <Column field="removable" header="Removable">
                            <template #body="slotProps">
                                <h2 class="text-green-500 mx-5" v-if="slotProps.data.removable">YES</h2>
                                <h2 class="text-red-600 mx-5" v-else>NO</h2>
                            </template>
                        </Column>
                        <Column field="increaseLimit" header="Increase Limit">
                            <template #body="slotProps">
                                <p class="mx-5">{{ slotProps.data.increaseLimit }}</p>
                            </template>
                        </Column>
                    </div>
                        <template #footer> In total there are {{ responseData ? responseData.products.length : 0 }} products. </template>
                    </DataTable>
            <DataTable :value="responseData!.modifierOptions" v-model:filters="ModifiersFilters" :loading="loading" filterDisplay="row" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem;"
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}">
                    <template #header>
                        <div class="flex flex-wrap align-items-center justify-content-between gap-2 p-2">
                            <span class="text-xl text-900 font-bold">Ingredient Modifiers</span>
                            <div class="flex align-items-center"> 
                                <Button label="New" severity="success" class="mx-3 px-3" icon="pi pi-plus" />
                                <Button label="Delete" severity="primary" icon="pi pi-trash" />
                                <form-kit type="text" :classes="{ outer: 'm-0 mx-2 p-2', }" prefix-icon="search" v-model="ModifiersFilters['modifierOptionName'].value" placeholder="Search by name" />
                            </div>
                        </div>
                    </template>
                    <div v-if="responseData!.modifierOptions.length < 1">
                        <Column class="text-primary text-center text-3xl m-auto " :header="`There are no ${responseData?.ingredientName} modifier options yet !`"></Column>
                    </div>
                    <div v-else>
                    <Column field="modifierOptionName" header="Name"></Column>
                    <Column header="Image">
                        <template #body="slotProps">
                            <img :src="`https://static.exploremelon.com/mln_rms/${slotProps.data.modifierOptionImage}`" :alt="slotProps.data.modifierOptionName" class="w-6rem shadow-2 border-round" />
                        </template>
                    </Column>
                    </div>
                        <template #footer>In total there are {{ responseData ? responseData.modifierOptions.length : 0 }} modifiers.</template>
                    </DataTable>
                </div>
    </div>
</template>
<style>
.p-datatable{
    background-color: var(--color-card); 
    padding: 1.5rem; 
    border-radius:8px; 
    margin-top: 5vh;
}
.p-column-header-content{
    padding: 0.8rem !important; 
}
</style>