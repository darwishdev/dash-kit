<script  setup lang="ts">
import type { MenuItem } from 'primevue/menuitem';
import PanelMenu from 'primevue/panelmenu';
import { PropType } from 'vue';
const props = defineProps({
    model: {
        type: Object as PropType<MenuItem[]>,
        required: false,
        default: [
            { key: '0', label: 'dashboard', icon: 'pi pi-fw pi-chart-bar', to: { name: 'dashboard_view' } },

        ]
    }
})
const model = localStorage.getItem('sideBar') == null ? props.model : JSON.parse(atob(localStorage.getItem('sideBar') as string)).items
</script>

<template>
    <div class="app-menu">
        <PanelMenu :model="model" />
    </div>
</template>
