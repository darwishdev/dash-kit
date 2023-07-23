<script  lang="ts">
import { defineComponent, ref } from 'vue'
// import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n';

// import i18n from '@/plugins/i18n'
export default defineComponent({
  beforeCreate() {
    if (localStorage.getItem('isRtl') == 'true') {
      this.toggleRtl()
    }
  },
  setup() {
    const isRtl = ref(false)
    const i18n = useI18n()
    // const { currentRoute, push } = useRouter()
    const toggleRtl = () => {
      isRtl.value = !isRtl.value;
      localStorage.setItem('isRtl', isRtl.value.toString())
      document.body.classList.toggle('rtl')
      i18n.locale.value = isRtl.value ? 'ar' : 'en'
    }

    return { toggleRtl }
  }
})
</script>

<template>
  <div>
    <router-view :key="$route.fullPath" />
  </div>
</template>
