<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onBeforeMount } from 'vue'
const { push, currentRoute } = useRouter()
onBeforeMount(() => {
  if (currentRoute.value.fullPath == "/") {
    // push('/getting-started/introduction')
  }
})
</script>
<template>
  <router-view />
</template>
