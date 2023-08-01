<script setup lang="ts">
// import type { FormOptions, SubmitHandler } from 'dash-kit/types'
// import type { RoleCreateRequest , RoleCreateResponse} from '@/api/ApiTypes'
// import apiClient from '@/api/ApiMock';
import { ref } from 'vue';

const code : any = {
    basic : `
<script setup lang="ts">

const filterModel = ref({ roleName: "asms" })
const modelDisplay = ref({})

const filterForm: any[] = [
    {
        $formkit: 'text',
        outerClass: "col-6",
        name: 'roleName',
        label: 'roleNameLabel',
        placeholder: 'roleNamePlaceholder',

    },
    {
        $formkit: 'textarea',
        outerClass: "col-6",
        name: 'roleDescription',
        label: 'roleDescriptionLabel',
        placeholder: 'roleDescriptionPlaceholder',
    },
]
const filtered = (filterObject: any) => {
    console.log(filterObject);
}
const filterRemoved = (filter: string) => {
    console.log('filter ->', filter);
}

<\/script>

<template>
    <div>
        <form-filter v-model="filterModel" v-model:modelDisplay="modelDisplay" @filter="filtered" @removeFilter="filterRemoved"
        :options="{ showActiveFilters: true, showClearFilters: true }" :inputs="filterForm"  />
        <p class="my-2">filterModel : {{ filterModel }}</p>
        <p class="my-2">modelDisplay : {{ modelDisplay }}</p>
    </div>
<\/template>

`
}

const filterModel = ref({})
const modelDisplay = ref({})

const filterForm: any[] = [
    {
        $formkit: 'text',
        outerClass: "col-6",
        name: 'roleName',
        label: 'by rolename',
        placeholder: 'search by rolename',

    },
    {
        $formkit: 'text',
        outerClass: "col-6",
        name: 'roleDescription',
        label: 'by role description',
        placeholder: 'search by role description',
    },
]
const filtered = (filterObject: any) => {
    console.log(filterObject);
}
const filterRemoved = (filter: string) => {
    console.log('filter ->', filter);
}
</script>
<template>
    <DocSectionText v-bind="$attrs">
        <p>Try using FormFilter component</p>
    </DocSectionText>
    <div class="my-3">
        <div>
            <form-filter v-model="filterModel" v-model:modelDisplay="modelDisplay" @filter="filtered" @removeFilter="filterRemoved"
            :options="{ showActiveFilters: true, showClearFilters: true }" :inputs="filterForm"  />
        </div>
        <p class="my-2">filterModel : {{ filterModel }}</p>
        <p class="my-2">modelDisplay : {{ modelDisplay }}</p>
    </div>
    <DocSectionCode :code="code" />
</template> 