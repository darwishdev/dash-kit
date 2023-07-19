<script setup lang="ts">
import PanelMenu from 'primevue/panelmenu';

const defaultItems = {
    items: [
        { key: '0', label: 'Dashboard', icon: 'pi pi-fw pi-chart-bar', to: { name: 'dashboard_view' } },

    ]
}
const { items } = localStorage.getItem('sideBar') == null ? defaultItems : JSON.parse(atob(localStorage.getItem('sideBar') as string))

</script>

<template>
    <div class="app-menu">
        <PanelMenu :model="items" />
        <!-- {{ menuItems }} -->
        <!-- {{ atob(menuItems) }} -->
    </div>
</template>
