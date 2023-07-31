<script  lang="ts">
import { defineComponent, ref, inject } from 'vue'
import { I18n } from 'vue-i18n/dist/vue-i18n.js'
export default defineComponent({
  beforeCreate() {
    if (localStorage.getItem('isRtl') == 'true') {
      this.toggleRtl()
    }
  },

  setup() {
    const isRtl = ref(false)
    const i18n = inject("i18n") as I18n
    const toggleRtl = () => {
      isRtl.value = !isRtl.value;
      localStorage.setItem('isRtl', isRtl.value.toString())
      document.body.classList.toggle('rtl')
      i18n.global.locale.value = isRtl.value ? 'ar' : 'en'
    }
    return { toggleRtl }
  }
})
</script>

<template>
  <div>
    <router-view />
  </div>
</template>
