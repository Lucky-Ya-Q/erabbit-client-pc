<template>
  <app-topnav></app-topnav>
  <app-header></app-header>
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <footer>底部</footer>
</template>

<script setup>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
</script>

<style scoped lang="less">

</style>
