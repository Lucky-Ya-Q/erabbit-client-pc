<template>
  <app-topnav></app-topnav>
  <app-header></app-header>
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <app-footer></app-footer>
</template>

<script setup lang="ts">
import AppTopnav from '@/components/app-topnav.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeader from '@/components/app-header.vue'
</script>

<style scoped lang="less"></style>
