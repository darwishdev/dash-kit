<script setup lang="ts">

import { ref } from 'vue'
import { FormKitSchemaNode } from '@formkit/core'

const filterModel = ref({ roleName: "asms" })
const modelDisplay = ref({})



const filterForm: FormKitSchemaNode[] = [
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
</script>

<template>
    <form-filter v-model="filterModel" v-model:modelDisplay="modelDisplay"
        :options="{ showActiveFilters: true, showClearFilters: true }" :inputs="filterForm" />
</template>