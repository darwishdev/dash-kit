<script setup lang="ts">
import Logo from '@/assets/logo.svg'
import LogoIcon from '@/assets/logo-icon.svg'
const props = defineProps({
    disabled: {
        type: Boolean,
        required: false,
        default: false
    },
    iconOnly: {
        type: Boolean,
        required: false,
        default: false
    }
})
</script>
<template>
    <router-link to="/dashboard" class="flex align-items-center logo-container" v-if="!props.disabled">
        <logo />
    </router-link>
    <div v-else class="logo-container">
        <logo-icon v-if="iconOnly" />
        <logo v-else />
    </div>
</template>
