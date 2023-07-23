<script setup lang="ts">
import apiClient from "../api/ApiClient";



const login = (_req: any) => {
    apiClient.permissionsList({}).then((res: any) => {
        console.log(res)
    })
}

</script>

<template>
    <h2 @click="login">
        {{ $t('dashboard') }}
    </h2>
</template>