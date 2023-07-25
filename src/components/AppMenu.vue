<script   lang="ts">
import type { MenuItem } from 'primevue/menuitem';
import PanelMenu from 'primevue/panelmenu';
import { defineComponent, PropType } from 'vue';
import { useI18n } from 'vue-i18n';
export default defineComponent({
    components: {
        PanelMenu
    },
    props: {
        model: {
            type: Object as PropType<MenuItem[]>,
            required: false,
            default: [
                { key: '0', label: 'dashboard', icon: 'pi pi-fw pi-chart-bar', to: { name: 'dashboard_view' } },

            ]
        }
    },
    setup(props) {
        let parsedPermissions = null
        const { t } = useI18n()
        if (localStorage.getItem('sideBar') != null) {
            const decoded = JSON.parse(atob(localStorage.getItem('sideBar') as string))
            parsedPermissions = decoded.map((item: any) => {
                if (item.items != '{}') {
                    item.items = JSON.parse(item.items)
                } else {
                    delete item.items
                }
                if (item.icon.Valid) {
                    item.icon = item.icon.String
                } else {
                    delete item.icon
                }

                return item
            })
        }
        const model = parsedPermissions == null ? props.model : parsedPermissions

        const translatedModel = model.map((m: MenuItem) => {
            m.label = t((m.label as string).toLowerCase())
            return m
        })
        console.log("sidebar rended")
        return { translatedModel }

    }
})

</script>

<template>
    <div class="app-menu">
        <PanelMenu :model="translatedModel" />
    </div>
</template>
