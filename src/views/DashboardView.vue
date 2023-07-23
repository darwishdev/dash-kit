<script setup lang="ts">
import { useToast } from 'primevue/usetoast';


const toast = useToast()

const showToast = () => {
    toast.add({ severity: 'error', summary: ('DashKit Error'), detail: 'please add loginApiCall to DashKit Plugin to be able to handle login', life: 3000 });

}


</script>
<template>
    <h2 @click="showToast">
        {{ $t('dashboard') }}
    </h2>
</template>