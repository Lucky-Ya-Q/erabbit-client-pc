<template>
  <app-topnav></app-topnav>
  <header>头部</header>
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <footer>底部</footer>
</template>

<script setup>
import AppTopnav from '@/components/app-topnav'
</script>

<style scoped lang="less">

</style>
