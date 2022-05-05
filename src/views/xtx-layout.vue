<template>
  <app-topnav></app-topnav>
  <app-header></app-header>
  <main class="app-body">
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <app-footer></app-footer>
</template>

<script setup>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { useStore } from 'vuex'

const store = useStore()
store.dispatch('category/getList')
</script>

<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>
