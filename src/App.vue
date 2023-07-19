
<template>
  <div>
    <div class="flex">
      <router-link :to="{ name: 'dashboard_view' }">Dashboard</router-link>
    </div>
    <router-view />
  </div>
</template>
